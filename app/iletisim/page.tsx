"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission would be handled here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">İletişim ve Sipariş</h1>
              <p className="text-lg text-muted-foreground">Sipariş vermek veya bilgi almak için bize ulaşın</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Telefon ve WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Telefon</p>
                    <a href="tel:05xxxxxxxxx" className="text-lg font-semibold hover:text-primary transition-colors">
                      0 (xxx) xxx xx xx
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">WhatsApp</p>
                    <a
                      href="https://wa.me/905xxxxxxxxx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      0 (xxx) xxx xx xx
                    </a>
                  </div>
                  <Button asChild className="w-full" size="lg">
                    <a href="https://wa.me/905xxxxxxxxx" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp'tan Sipariş Ver
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Adres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Çekmeköy, İstanbul</p>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48377.434634!2d29.2!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAyOcKwMTInMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Çalışma Saatlerimiz
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pazartesi – Cuma</span>
                      <span className="font-medium">11:00 – 21:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cumartesi</span>
                      <span className="font-medium">12:00 – 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pazar</span>
                      <span className="font-medium text-destructive">Kapalı</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Mesaj Gönderin</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Ad Soyad
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Adınız ve soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0 (xxx) xxx xx xx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Mesajınız
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
