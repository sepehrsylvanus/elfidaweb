"use client";
import { LoginForm } from "@/components/login-form";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleAdminLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/admin-auth", { password });
      if (res.data.success) {
        router.push("/yonetim-1923/panel");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Giriş başarısız");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold mb-2">Yönetim Paneli</h1>
          <p className="text-sm text-muted-foreground">Elfida Ev Yemekleri</p>
        </div>
        <LoginForm
          password={password}
          setPassword={setPassword}
          onSubmit={handleAdminLogin}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
}
