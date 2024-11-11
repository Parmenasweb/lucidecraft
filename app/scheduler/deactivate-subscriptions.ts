import cron from "node-cron";
import { db } from "@/utils/db"; // Adjust the import based on your project structure
import { UserSubscription } from "@/utils/schema"; // Adjust the import based on your project structure
import { sql } from "drizzle-orm";

// Schedule a job to run every day at midnight
cron.schedule("0 0 * * *", async () => {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try {
    await db
      .update(UserSubscription)
      .set({ active: false })
      .where(sql`${UserSubscription.joinDate} < ${oneMonthAgo.toISOString()}`);

    console.log("Deactivated subscriptions older than one month.");
  } catch (error) {
    console.error("Error deactivating subscriptions:", error);
  }
});
