import Transaction from "@/components/dashboard/Transaction/Transaction";

export default function DashboardHome() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        <Transaction />
      </main>
    </div>
  );
}
