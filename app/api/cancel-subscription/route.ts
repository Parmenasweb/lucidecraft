import { NextResponse } from "next/server";
import { db } from "@/utils/db"; // Adjust the import based on your project structure
import { UserSubscription } from "@/utils/schema"; // Adjust the import based on your project structure
import { eq } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export async function POST() {
  const user = await currentUser();
  if (!user?.id) {
    return NextResponse.json({ error: "Missing user ID" }, { status: 401 });
  }

  try {
    // Update the subscription to set active to false
    await db
      .update(UserSubscription)
      .set({ active: false })
      .where(
        eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress)
      );

    return NextResponse.json({
      message: "Subscription cancelled successfully",
    });
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    return NextResponse.json(
      { error: "Failed to cancel subscription" },
      { status: 500 }
    );
  }
}
