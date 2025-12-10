import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/admin-auth"
import { AdminDashboard } from "@/components/admin-dashboard"

export const metadata = {
  title: "Yönetim Paneli",
  robots: "noindex, nofollow",
}

export default async function AdminPanelPage() {
  const authenticated = await isAuthenticated()

  if (!authenticated) {
    redirect("/yonetim-1923")
  }

  return <AdminDashboard />
}
