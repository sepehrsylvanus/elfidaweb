import { AdminDashboard } from "@/components/admin-dashboard";
import { isAuthenticated } from "@/lib/admin-auth";
import { redirect } from "next/navigation";

export default async function AdminPanelPage() {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    redirect("/yonetim-1923");
  }

  return <AdminDashboard />;
}
