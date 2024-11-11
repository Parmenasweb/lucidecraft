import { NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";
import { users, UserSubscription } from "@/utils/schema";
import Stripe from "stripe";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16", // Updated to the latest stable version as of 2024
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");
  const credits = searchParams.get("credits");

  if (!sessionId || !credits) {
    return NextResponse.json(
      { error: "Missing session_id or credits" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json(
        { error: "Payment not successful" },
        { status: 400 }
      );
    }

    const user = await currentUser();
    if (!user?.id) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const parsedCredits = parseInt(credits, 10);
    if (isNaN(parsedCredits)) {
      return NextResponse.json(
        { error: "Invalid credits value" },
        { status: 400 }
      );
    }

    await db.insert(UserSubscription).values({
      email: user?.emailAddresses[0]?.emailAddress, // Assuming you have the user's email
      userName: user?.fullName, // Assuming you have the user's name
      active: true, // Set to true as the subscription is active after payment
      paymentId: session.id, // Store the Stripe session ID as paymentId
      joinDate: new Date().toISOString(), // Store the current date as joinDate
    });

    const result = await db
      .update(users)
      .set({ credits: sql`${users.credits} + ${parsedCredits}` })
      .where(eq(users.clerkId, user.id))
      .returning({ updatedCredits: users.credits });

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Failed to add credits" },
        { status: 500 }
      );
    }

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/dashboard`);
  } catch (error) {
    console.error("Error processing payment:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { credits } = await request.json();

    const user = await currentUser();
    if (!user?.id) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    if (typeof credits !== "number" || isNaN(credits)) {
      return NextResponse.json(
        { error: "Invalid credits value" },
        { status: 400 }
      );
    }

    const result = await db
      .update(users)
      .set({ credits: sql`${users.credits} + ${credits}` })
      .where(eq(users.clerkId, user.id))
      .returning({ updatedCredits: users.credits });

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Failed to add credits" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      updatedCredits: result[0].updatedCredits,
    });
  } catch (error) {
    console.error("Error adding credits:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
