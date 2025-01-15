export type TransactionData = {
  id: string;
  name: string;
  email: string;
  amount: number;
  date: string;
  status: "pending" | "approved" | "rejected";
  image: string;
  currency: string;
};
