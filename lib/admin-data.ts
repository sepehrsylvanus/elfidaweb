"use server"

// Simple in-memory storage (replace with database later)
let menuData = [
  {
    category: "Ana Yemekler",
    dishes: [
      {
        name: "Kuru Fasulye",
        description: "Tereyağında kavrulmuş soğanlı, taze domates soslu, yanında pilav ile",
        price: "85",
        badge: "Favori",
      },
      {
        name: "Izgara Köfte",
        description: "El yapımı köfteler, mevsim salata ile",
        price: "95",
      },
    ],
  },
]

let galleryData = [
  {
    src: "/turkish-kuru-fasulye-beans-rice.jpg",
    alt: "Kuru Fasulye",
    type: "image" as "image" | "video",
  },
  {
    src: "/turkish-kofte-meatballs-salad.jpg",
    alt: "Izgara Köfte",
    type: "image" as "image" | "video",
  },
  {
    src: "/corba-mercimek.jpg",
    alt: "Ev Yapımı Mercimek Çorbası",
    type: "image" as "image" | "video",
  },
]

export async function getMenu() {
  return menuData
}

export async function updateMenu(newMenu: typeof menuData) {
  menuData = newMenu
  return { success: true }
}

export async function getGallery() {
  return galleryData
}

export async function updateGallery(newGallery: typeof galleryData) {
  galleryData = newGallery
  return { success: true }
}

export async function addGalleryImage(image: { src: string; alt: string; type?: "image" | "video" }) {
  galleryData.push({ ...image, type: image.type || "image" })
  return { success: true }
}

export async function deleteGalleryImage(index: number) {
  galleryData.splice(index, 1)
  return { success: true }
}
