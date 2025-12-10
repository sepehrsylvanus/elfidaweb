import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Geçmiş Menüler - Elfida Ev Yemekleri",
  description: "Geçmiş günlerde sunduğumuz menülere göz atın.",
}

export default function PastMenusPage() {
  const pastMenus = [
    {
      date: "15 Aralık 2025 Pazartesi",
      dishes: ["Etli Nohut", "Patlıcan Musakka", "İzmir Köfte", "Yeşil Mercimek Çorbası"],
    },
    {
      date: "14 Aralık 2025 Pazar",
      dishes: ["İç Pilav", "Hünkar Beğendi", "Fırın Tavuk", "Domates Çorbası"],
    },
    {
      date: "13 Aralık 2025 Cumartesi",
      dishes: ["Karnıyarık", "Etli Bamya", "Izgara Balık", "Mercimek Çorbası"],
    },
    {
      date: "12 Aralık 2025 Cuma",
      dishes: ["Mantı", "Kuzu Güveç", "Sebzeli Tavuk", "Ezogelin Çorbası"],
    },
    {
      date: "11 Aralık 2025 Perşembe",
      dishes: ["Türlü", "Kuru Fasulye", "Köfte", "Tarhana Çorbası"],
    },
    {
      date: "10 Aralık 2025 Çarşamba",
      dishes: ["Zeytinyağlı Yaprak Sarma", "Tavuk Sote", "İmam Bayıldı", "Mercimek Çorbası"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Geçmiş Menüler</h1>
              <p className="text-lg text-muted-foreground">
                Geçmiş günlerde sunduğumuz menülere göz atarak mutfağımızın tarzını keşfedebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {pastMenus.map((menu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-primary">{menu.date}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {menu.dishes.map((dish, dishIndex) => (
                      <li key={dishIndex} className="flex items-center gap-2 text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
