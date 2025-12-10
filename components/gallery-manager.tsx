"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getGallery, addGalleryImage, deleteGalleryImage } from "@/lib/admin-data"
import { Plus, Trash2, ImageIcon, Upload, Video } from "lucide-react"

type GalleryImage = {
  src: string
  alt: string
  type?: "image" | "video"
}

export function GalleryManager() {
  const [gallery, setGallery] = useState<GalleryImage[]>([])
  const [newImage, setNewImage] = useState({ src: "", alt: "", type: "image" as "image" | "video" })
  const [loading, setLoading] = useState(true)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)

  useEffect(() => {
    loadGallery()
  }, [])

  async function loadGallery() {
    const data = await getGallery()
    setGallery(data)
    setLoading(false)
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      const result = reader.result as string
      setUploadedFile(result)
      setNewImage({ ...newImage, src: result, type: file.type.startsWith("video") ? "video" : "image" })
    }
    reader.readAsDataURL(file)
  }

  async function handleAddImage() {
    if (!newImage.src || !newImage.alt) {
      alert("Lütfen tüm alanları doldurun")
      return
    }

    await addGalleryImage(newImage)
    setNewImage({ src: "", alt: "", type: "image" })
    setUploadedFile(null)
    await loadGallery()
  }

  async function handleDeleteImage(index: number) {
    if (confirm("Bu öğeyi silmek istediğinizden emin misiniz?")) {
      await deleteGalleryImage(index)
      await loadGallery()
    }
  }

  if (loading) {
    return <div className="text-center py-8">Yükleniyor...</div>
  }

  return (
    <div className="space-y-6">
      <div className="border rounded-lg p-4 space-y-4">
        <h3 className="font-semibold">Yeni Fotoğraf/Video Ekle</h3>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="fileUpload">Bilgisayardan Dosya Seç</Label>
            <div className="flex items-center gap-2">
              <Input
                id="fileUpload"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileUpload}
                className="cursor-pointer"
              />
              <Button variant="outline" size="icon" asChild>
                <label htmlFor="fileUpload" className="cursor-pointer">
                  <Upload className="h-4 w-4" />
                </label>
              </Button>
            </div>
            {uploadedFile && <p className="text-xs text-muted-foreground">✓ Dosya yüklendi</p>}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">veya</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL Gir</Label>
            <Input
              id="imageUrl"
              value={newImage.src}
              onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
              placeholder="/path/to/image.jpg veya https://..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageAlt">Açıklama</Label>
            <Input
              id="imageAlt"
              value={newImage.alt}
              onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
              placeholder="Fotoğraf/video açıklaması"
            />
          </div>
          <Button onClick={handleAddImage} className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Ekle
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <div key={index} className="relative group border rounded-lg overflow-hidden">
            <div className="aspect-[4/3] bg-muted relative">
              {image.type === "video" ? (
                <>
                  <video src={image.src} className="w-full h-full object-cover" controls />
                  <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded flex items-center gap-1">
                    <Video className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400">Video</span>
                  </div>
                </>
              ) : (
                <img
                  src={image.src || "/placeholder.svg?height=300&width=400&query=yemek+fotografi"}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-3 bg-card">
              <p className="text-sm font-medium truncate">{image.alt}</p>
              <p className="text-xs text-muted-foreground truncate">
                {image.src.startsWith("data:") ? "📁 Yüklenen dosya" : image.src}
              </p>
            </div>
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => handleDeleteImage(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>

      {gallery.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <ImageIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Henüz fotoğraf veya video eklenmemiş</p>
        </div>
      )}
    </div>
  )
}
