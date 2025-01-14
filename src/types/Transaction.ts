export type Transaction = {
  id: string;
  userId: string;
  amount: number;
  status: "Pending" | "Approved" | "Rejected";
  createdAt: string;
};
