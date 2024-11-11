"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}`
);

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();
  const [activePlan, setActivePlan] = useState<string | null>(null);

  const tiers = [
    {
      name: "Free",
      price: "$0",
      priceId: null,
      description:
        "Perfect for getting started with AI-powered content creation",
      credits: 10000,
      features: [
        "10,000 credits per month",
        "Basic text generation",
        "Standard response time",
        "Email support",
        "Access to public templates",
      ],
    },
    {
      name: "Basic",
      price: "$9.99",
      priceId: "price_1QHrQkSJZSxA0Ob4iVIeygYb",
      description: "Ideal for professionals and small teams",
      credits: 450000,
      features: [
        "450,000 credits per month",
        "Advanced text generation",
        "Faster response time",
        "Priority email support",
        "Access to premium templates",
        "Custom AI fine-tuning",
      ],
    },
    {
      name: "Pro",
      price: "$24.99",
      priceId: "price_1QHrYmSJZSxA0Ob429x5PoWo",
      description: "For businesses with advanced needs",
      credits: 1000000,
      features: [
        "1,000,000+ credits per month",
        "State-of-the-art text generation",
        "Fastest response time",
        "24/7 priority support",
        "Access to all templates",
        "Advanced AI fine-tuning",
        "Dedicated account manager",
        "Custom integrations",
      ],
    },
  ];

  const handleSubscribe = async (
    priceId: string | null,
    tierName: string,
    credits: number
  ) => {
    try {
      if (!priceId) {
        // Handle free tier signup
        const response = await fetch("/api/add-credits", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ credits }),
        });
        if (response.ok) {
          router.push("/dashboard");
          setActivePlan(tierName);
        } else {
          throw new Error("Failed to add credits");
        }
        return;
      }
      setLoading(tierName);
      console.log(loading);
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId, credits }),
      });

      console.log("Checkout session response:", response);

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const session = await response.json();

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      // Here you might want to show an error message to the user
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="py-4 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-lg font-semibold leading-7 text-purple-600">
            Pricing
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Unlock the power of AI-driven content creation with LucideCraft AI.
          Select a plan that fits your needs and start crafting compelling
          content today.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between ${
                activePlan === tier.name ? "border-2 border-blue-500" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    /month
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">
                    {tier.credits.toLocaleString()}
                  </span>{" "}
                  credits per month
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-purple-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full py-4 font-semibold text-lg border-2 border-black"
                  variant={tier.name === "Free" ? "outline" : "default"}
                  onClick={() =>
                    handleSubscribe(tier.priceId, tier.name, tier.credits)
                  }
                  disabled={loading === tier.name}
                >
                  {loading === tier.name
                    ? "Processing..."
                    : activePlan === tier.name
                    ? "Subscribed"
                    : tier.name === "Free"
                    ? "Active"
                    : "Subscribe"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
