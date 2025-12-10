import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Users, Utensils } from "lucide-react"

export const metadata = {
  title: "Hakkımızda - Elfida Ev Yemekleri",
  description: "Elfida Ev Yemekleri hakkında bilgi edinin.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Ev Sıcaklığı",
      description: "Her yemek evde hazırlanmış gibi özenle ve sevgiyle pişirilir.",
    },
    {
      icon: Utensils,
      title: "Taze Malzeme",
      description: "Her gün sabah taze malzemeler tedarik edilerek yemeklerimiz hazırlanır.",
    },
    {
      icon: Users,
      title: "Aile İşletmesi",
      description: "Küçük, aile sıcaklığında bir işletme olarak size hizmet veriyoruz.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hakkımızda</h1>
              <p className="text-lg text-muted-foreground">Elfida Ev Yemekleri ailesini tanıyın</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Story Section */}
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Elfida Ev Yemekleri, Çekmeköy'de aile sıcaklığında ev yemekleri sunan küçük bir işletmedir. Her gün
                  sabah taze malzemelerle hazırladığımız yemeklerimizi, evinizde pişmiş gibi doğal ve samimi bir ortamda
                  sizlere sunuyoruz.
                </p>
                <p className="text-lg">
                  Amacımız; çalışanlar, öğrenciler ve evinde yemek pişirmeye vakti olmayan herkes için sağlıklı,
                  doyurucu ve uygun fiyatlı ev yemekleri hazırlamak. Büyük bir restoran olmak yerine, size evinizdeki
                  yemek masanızın sıcaklığını hissettirmek istiyoruz.
                </p>
                <p className="text-lg">
                  Her gün değişen menümüzle Türk mutfağının en sevilen lezzetlerini modern dokunuşlarla harmanlıyor,
                  anne yemekleri geleneğini yaşatıyoruz. Yemeklerimiz günlük taze olarak hazırlanır ve hiçbir koruyucu
                  madde kullanılmaz.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="rounded-xl overflow-hidden">
              <img src="/turkish-restaurant-kitchen-homemade-food-preparati.jpg" alt="Mutfağımız" className="w-full h-[400px] object-cover" />
            </div>

            {/* Values Section */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-center mb-8">Değerlerimiz</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
