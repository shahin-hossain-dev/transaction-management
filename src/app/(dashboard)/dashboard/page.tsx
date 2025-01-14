import Transaction from "@/components/dashboard/Transaction/Transaction";


export default function DashboardHome() {
    return (
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main className="container mx-auto">
        <h2>Hello transactions Dashboard </h2>
        <Transaction/>
        </main>
      </div>
    );
  }
  