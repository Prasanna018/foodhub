"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/components/ui/use-toast"
import type { Food } from "@/types"

interface FoodCardProps {
  food: Food
}

export default function FoodCard({ food }: FoodCardProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToCart = () => {
    addToCart(food)
    toast({
      title: "Added to cart",
      description: `${food.name} has been added to your cart.`,
    })
  }

  return (
    <div
      className="group bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link href={`/menu/${food.id}`}>
          <img
            src={food.image || "/placeholder.svg"}
            alt={food.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {food.discount > 0 && <Badge className="absolute top-2 left-2 bg-primary">{food.discount}% OFF</Badge>}

        <Button
          size="icon"
          className={`absolute bottom-2 right-2 rounded-full transition-opacity duration-200 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleAddToCart}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <Link href={`/restaurants/${food.restaurantId}`}>
            <span className="text-xs text-muted-foreground hover:text-primary">{food.restaurant}</span>
          </Link>
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-primary text-primary mr-1" />
            <span className="text-xs font-medium">{food.rating}</span>
          </div>
        </div>

        <Link href={`/menu/${food.id}`}>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{food.name}</h3>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {food.discount > 0 ? (
              <>
                <span className="font-bold text-primary">${(food.price * (1 - food.discount / 100)).toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through ml-2">${food.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-primary">${food.price.toFixed(2)}</span>
            )}
          </div>

          <Badge variant="outline" className="text-xs">
            {food.category}
          </Badge>
        </div>
      </div>
    </div>
  )
}

