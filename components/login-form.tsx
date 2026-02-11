"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { verifyPassword, createSession } from "@/lib/admin-auth";
import { Lock } from "lucide-react";
interface LoginFormProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export function LoginForm({
  password,
  setPassword,
  onSubmit,
  loading,
  setLoading,
}: LoginFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lock className="h-5 w-5" />
          Giriş Yap
        </CardTitle>
        <CardDescription>
          Yönetim paneline erişmek için şifrenizi girin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-2"
        >
          <Label htmlFor="password">Şifre</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifrenizi girin"
            required
            autoFocus
            className="mb-2"
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
