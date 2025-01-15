"use client";

import { useQuery } from "@tanstack/react-query";
import TransactionTable from "./TransactionTable";
import axios from "axios";

const Transaction = () => {
  const {
    data: transactionData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["transactionData"],
    queryFn: async () => {
      const res = await axios.get("/data/transaction.json");
      if (!res.data) throw new Error("Network response was not ok");
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl text-zinc-900 mb-5">Transaction</h2>
      <TransactionTable transactionData={transactionData} refetch={refetch} />
    </div>
  );
};

export default Transaction;
