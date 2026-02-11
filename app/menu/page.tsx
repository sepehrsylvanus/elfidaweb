import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Phone, MessageCircle } from "lucide-react";
import { getMenu } from "@/lib/admin-data";

export const metadata = {
  title: "Bugünün Menüsü - Elfida Ev Yemekleri",
  description: "Her gün güncellenen ev yemekleri menümüz.",
};

export default async function TodaysMenuPage() {
  const today = new Date().toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const menu = await getMenu();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Bugünün Menüsü
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Her gün güncellenen ev yemekleri menümüz.
              </p>
              <div className="inline-block px-4 py-2 bg-card rounded-lg border text-sm font-medium">
                {today}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {menu.map((section, sectionIndex) => (
              <Card key={sectionIndex}>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.dishes.map((dish, dishIndex) => (
                      <div
                        key={dishIndex}
                        className="flex justify-between items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              {dish.name}
                            </h3>
                            {dish.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {dish.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {dish.description}
                          </p>
                        </div>
                        <div className="text-xl font-bold text-primary whitespace-nowrap">
                          {dish.price} ₺
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Menümüz günlük olarak değişmektedir. Detaylı bilgi ve sipariş
                  için lütfen bizimle iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild size="lg">
                    <Link href="tel:05xxxxxxxxx">
                      <Phone className="mr-2 h-4 w-4" />
                      Telefonla Sipariş Ver
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="https://wa.me/905xxxxxxxxx" target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp'tan Yazın
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
