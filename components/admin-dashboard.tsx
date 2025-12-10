"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { destroySession } from "@/lib/admin-auth"
import { MenuManager } from "./menu-manager"
import { GalleryManager } from "./gallery-manager"
import { LogOut, Menu, ImageIcon } from "lucide-react"

export function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    await destroySession()
    router.push("/")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif font-bold">Yönetim Paneli</h1>
              <p className="text-sm text-muted-foreground">Elfida Ev Yemekleri</p>
            </div>
            <Button variant="outline" onClick={handleLogout} disabled={loading}>
              <LogOut className="mr-2 h-4 w-4" />
              Çıkış Yap
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="menu" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="menu" className="flex items-center gap-2">
              <Menu className="h-4 w-4" />
              Menü Yönetimi
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4" />
              Galeri Yönetimi
            </TabsTrigger>
          </TabsList>

          <TabsContent value="menu">
            <Card>
              <CardHeader>
                <CardTitle>Bugünün Menüsü</CardTitle>
                <CardDescription>Günlük menüyü buradan düzenleyebilirsiniz</CardDescription>
              </CardHeader>
              <CardContent>
                <MenuManager />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Galeri Fotoğrafları</CardTitle>
                <CardDescription>Galeri fotoğraflarını buradan yönetebilirsiniz</CardDescription>
              </CardHeader>
              <CardContent>
                <GalleryManager />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
