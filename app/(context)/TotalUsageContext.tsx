import { createContext } from "react";

export const TotalUsageContext = createContext<{
  totalUsage: number;
  setTotalUsage: (value: number) => void;
}>({ totalUsage: 0, setTotalUsage: () => {} });
