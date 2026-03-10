import StatCard from "@/components/admin/stat-card";

export default function DashboardPage() {

  return (

    <div className="grid grid-cols-3 gap-6">

      <StatCard
        title="Total Orders"
        value="0"
      />

      <StatCard
        title="Total Customers"
        value="0"
      />

      <StatCard
        title="Total Products"
        value="0"
      />

    </div>

  );
}