import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/admin-auth"
import { LoginForm } from "@/components/login-form"

export const metadata = {
  title: "Yönetim Girişi",
  robots: "noindex, nofollow",
}

export default async function AdminLoginPage() {
  const authenticated = await isAuthenticated()

  if (authenticated) {
    redirect("/yonetim-1923/panel")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">Yönetim Paneli</h1>
          <p className="text-sm text-muted-foreground">Elfida Ev Yemekleri</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
