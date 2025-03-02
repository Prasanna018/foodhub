export interface Food {
  id: string
  name: string
  description: string
  price: number
  discount: number
  image?: string
  category: string
  rating: number
  restaurant: string
  restaurantId: string
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  image?: string
}

export interface Restaurant {
  id: string
  name: string
  image?: string
  rating: number
  cuisines: string[]
  location: string
  deliveryTime: number
  freeDelivery: boolean
  featured?: boolean
}

