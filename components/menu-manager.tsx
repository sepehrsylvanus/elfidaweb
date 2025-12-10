"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getMenu, updateMenu } from "@/lib/admin-data"
import { Plus, Trash2, Save } from "lucide-react"

type Dish = {
  name: string
  description: string
  price: string
  badge?: string
}

type MenuCategory = {
  category: string
  dishes: Dish[]
}

export function MenuManager() {
  const [menu, setMenu] = useState<MenuCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadMenu()
  }, [])

  async function loadMenu() {
    const data = await getMenu()
    setMenu(data)
    setLoading(false)
  }

  async function handleSave() {
    setSaving(true)
    await updateMenu(menu)
    setSaving(false)
    alert("Menü başarıyla kaydedildi!")
  }

  function addCategory() {
    setMenu([...menu, { category: "Yeni Kategori", dishes: [] }])
  }

  function removeCategory(index: number) {
    setMenu(menu.filter((_, i) => i !== index))
  }

  function updateCategory(index: number, category: string) {
    const newMenu = [...menu]
    newMenu[index].category = category
    setMenu(newMenu)
  }

  function addDish(categoryIndex: number) {
    const newMenu = [...menu]
    newMenu[categoryIndex].dishes.push({
      name: "",
      description: "",
      price: "",
    })
    setMenu(newMenu)
  }

  function removeDish(categoryIndex: number, dishIndex: number) {
    const newMenu = [...menu]
    newMenu[categoryIndex].dishes = newMenu[categoryIndex].dishes.filter((_, i) => i !== dishIndex)
    setMenu(newMenu)
  }

  function updateDish(categoryIndex: number, dishIndex: number, field: keyof Dish, value: string) {
    const newMenu = [...menu]
    newMenu[categoryIndex].dishes[dishIndex][field] = value as never
    setMenu(newMenu)
  }

  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>
  }

  return (
    <div className="space-y-6">
      {menu.map((category, categoryIndex) => (
        <div key={categoryIndex} className="border rounded-lg p-4 space-y-4">
          <div className="flex items-center gap-2">
            <Input
              value={category.category}
              onChange={(e) => updateCategory(categoryIndex, e.target.value)}
              className="font-semibold"
              placeholder="Kategori adı"
            />
            <Button variant="destructive" size="icon" onClick={() => removeCategory(categoryIndex)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {category.dishes.map((dish, dishIndex) => (
              <div key={dishIndex} className="bg-secondary/30 rounded p-3 space-y-2">
                <div className="flex gap-2">
                  <div className="flex-1 space-y-2">
                    <Input
                      value={dish.name}
                      onChange={(e) => updateDish(categoryIndex, dishIndex, "name", e.target.value)}
                      placeholder="Yemek adı"
                    />
                    <Textarea
                      value={dish.description}
                      onChange={(e) => updateDish(categoryIndex, dishIndex, "description", e.target.value)}
                      placeholder="Açıklama"
                      rows={2}
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        value={dish.price}
                        onChange={(e) => updateDish(categoryIndex, dishIndex, "price", e.target.value)}
                        placeholder="Fiyat (₺)"
                      />
                      <Input
                        value={dish.badge || ""}
                        onChange={(e) => updateDish(categoryIndex, dishIndex, "badge", e.target.value)}
                        placeholder="Etiket (opsiyonel)"
                      />
                    </div>
                  </div>
                  <Button variant="destructive" size="icon" onClick={() => removeDish(categoryIndex, dishIndex)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" onClick={() => addDish(categoryIndex)} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Yemek Ekle
          </Button>
        </div>
      ))}

      <div className="flex gap-2">
        <Button variant="outline" onClick={addCategory} className="flex-1 bg-transparent">
          <Plus className="mr-2 h-4 w-4" />
          Kategori Ekle
        </Button>
        <Button onClick={handleSave} disabled={saving} className="flex-1">
          <Save className="mr-2 h-4 w-4" />
          {saving ? "Kaydediliyor..." : "Kaydet"}
        </Button>
      </div>
    </div>
  )
}
