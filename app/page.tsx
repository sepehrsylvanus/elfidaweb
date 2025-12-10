import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Phone, ChevronRight } from "lucide-react"

export default function HomePage() {
  const todaysMenu = [
    {
      name: "Kuru Fasulye",
      description: "Yanında pilav ile",
      price: "85",
    },
    {
      name: "Izgara Köfte",
      description: "Mevsim salata ile",
      price: "95",
    },
    {
      name: "Tavuk Sote",
      description: "Taze sebzelerle",
      price: "90",
    },
    {
      name: "Mercimek Çorbası",
      description: "Günlük taze",
      price: "30",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url(/placeholder.svg?height=800&width=1600&query=turkish+homemade+food+warm+kitchen)] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance">
              Her gün taze ev yemekleri, Çekmeköy'de
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ev konforunda, günlük hazırlanan lezzetler.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="/bugunun-menusu">
                  Bugünün Menüsünü Gör
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="tel:05xxxxxxxxx">
                  <Phone className="mr-2 h-5 w-5" />
                  Telefonla Sipariş Ver
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Menu Preview */}
      <section className="container mx-auto px-4 py-16">
        <Card className="border-2 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-serif mb-2">Bugünün Menüsü</CardTitle>
            <CardDescription className="text-base">Her gün değişen taze yemeklerimiz.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {todaysMenu.map((dish, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground">{dish.description}</p>
                  </div>
                  <div className="text-lg font-bold text-primary whitespace-nowrap ml-4">{dish.price} ₺</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="default">
                <Link href="/bugunun-menusu">Tüm Menüyü Gör</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="tel:05xxxxxxxxx">
                  <Phone className="mr-2 h-4 w-4" />
                  Telefonla Sipariş Ver
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* About Section Preview */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Hakkımızda</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Elfida Ev Yemekleri olarak her gün taze malzemelerle, evinizdeymiş gibi hissedeceğiniz lezzetler
              hazırlıyoruz. Amacımız; sağlıklı, doyurucu ve sıcak bir ev yemeği deneyimi sunmak.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/hakkimizda">
                Daha Fazla Bilgi
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Bugün ne yemek istersiniz?</h2>
            <p className="text-lg mb-6 opacity-90">Sipariş vermek veya bilgi almak için bize ulaşın.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/bugunun-menusu">Menüyü İncele</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/iletisim">İletişime Geçin</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  )
}
