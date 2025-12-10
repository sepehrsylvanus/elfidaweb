import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Elfida Ev Yemekleri</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Her gün taze ev yemekleri, Çekmeköy, İstanbul.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0 (xxx) xxx xx xx</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Çekmeköy, İstanbul</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Bağlantılar</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/bugunun-menusu" className="text-muted-foreground hover:text-primary transition-colors">
                Bugünün Menüsü
              </Link>
              <Link href="/hakkimizda" className="text-muted-foreground hover:text-primary transition-colors">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
                İletişim
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Elfida Ev Yemekleri. Tüm hakları saklıdır.</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram'da bizi takip edin</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
