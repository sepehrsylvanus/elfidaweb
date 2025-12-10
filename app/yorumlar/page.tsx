import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Star } from "lucide-react"

export const metadata = {
  title: "Müşteri Yorumları - Elfida Ev Yemekleri",
  description: "Misafirlerimizden gelen yorumlar.",
}

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Ayşe",
      location: "Çekmeköy",
      rating: 5,
      comment: "Yemekler gerçekten ev yemeği gibi, porsiyonlar çok doyurucu. Her gün sipariş veriyoruz.",
    },
    {
      name: "Mehmet",
      location: "Sancaktepe",
      rating: 5,
      comment: "Anne yemekleri tadında, tertemiz ve hijyenik. Fiyatları da çok uygun.",
    },
    {
      name: "Zeynep",
      location: "Çekmeköy",
      rating: 5,
      comment: "Öğle yemeği için ideal. Taze malzemelerle hazırlandığı çok belli. Herkese tavsiye ederim.",
    },
    {
      name: "Ali",
      location: "Ümraniye",
      rating: 5,
      comment: "İş yerine yakın olması büyük avantaj. Yemekleri lezzetli ve doyurucu.",
    },
    {
      name: "Fatma",
      location: "Çekmeköy",
      rating: 5,
      comment: "Ev yemeğine hasret kalanlar için mükemmel bir adres. Özellikle kuru fasulyeleri harika!",
    },
    {
      name: "Hasan",
      location: "Sultanbeyli",
      rating: 5,
      comment: "Menü her gün değişiyor, böylece monotonluk olmuyor. Tatlıları da çok güzel.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Müşteri Yorumları</h1>
              <p className="text-lg text-muted-foreground">Misafirlerimizden gelen bazı yorumlar</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">"{review.comment}"</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{review.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-muted/50 border-dashed">
              <CardContent className="pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Daha fazla yorum için Google Haritalar sayfamızı ziyaret edebilirsiniz.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
