"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Heart, Minus, Plus, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import { allFoods } from "@/data/foods"
import { formatCurrency } from "@/lib/utils"
import type { Food } from "@/types"

export default function FoodDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { addToCart } = useCart()

  const [food, setFood] = useState<Food | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [relatedFoods, setRelatedFoods] = useState<Food[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundFood = allFoods.find((f) => f.id === params.id)

      if (foundFood) {
        setFood(foundFood)

        // Find related foods (same category)
        const related = allFoods
          .filter((f) => f.category === foundFood.category && f.id !== foundFood.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4)

        setRelatedFoods(related)
      } else {
        // Food not found, redirect to menu
        router.push("/menu")
      }
    }

    setIsLoading(false)
  }, [params.id, router])

  const handleAddToCart = () => {
    if (food) {
      for (let i = 0; i < quantity; i++) {
        addToCart(food)
      }

      toast({
        title: "Added to cart",
        description: `${quantity} x ${food.name} has been added to your cart.`,
      })
    }
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!food) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Food not found</h1>
        <Button asChild>
          <Link href="/menu">Back to Menu</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/menu" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Menu
        </Link>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={food.image || `https://source.unsplash.com/random/?${food.category},${food.name}`}
            alt={food.name}
            className="w-full h-auto rounded-lg object-cover aspect-square"
          />

          <div className="absolute top-4 right-4 flex space-x-2">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-2">
            <Link
              href={`/restaurants/${food.restaurantId}`}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {food.restaurant}
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">{food.name}</h1>

          <div className="flex items-center mb-4">
            <div className="flex items-center mr-4">
              <Star className="h-5 w-5 fill-primary text-primary mr-1" />
              <span className="font-medium">{food.rating}</span>
              <span className="text-muted-foreground ml-1">(120+ reviews)</span>
            </div>
            <span className="text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">{food.category}</span>
          </div>

          <p className="text-muted-foreground mb-6">{food.description}</p>

          <div className="mb-6">
            {food.discount > 0 ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-primary mr-2">
                  {formatCurrency(food.price * (1 - food.discount / 100))}
                </span>
                <span className="text-xl text-muted-foreground line-through">{formatCurrency(food.price)}</span>
                <span className="ml-2 text-sm px-2 py-1 bg-primary/10 text-primary rounded-full">
                  {food.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-primary">{formatCurrency(food.price)}</span>
            )}
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <span className="font-medium mr-4">Quantity</span>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button size="lg" variant="secondary" className="flex-1" asChild>
              <Link href="/cart">Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList className="mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="description">
            <p className="text-muted-foreground">{food.longDescription || food.description}</p>
          </TabsContent>
          <TabsContent value="ingredients">
            <ul className="list-disc pl-4 text-muted-foreground">
              {food.ingredients?.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="reviews">
            <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
          </TabsContent>
        </Tabs>
      </div>

      {relatedFoods.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Foods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedFoods.map((relatedFood) => (
              <div key={relatedFood.id} className="border rounded-lg overflow-hidden">
                <Link href={`/menu/${relatedFood.id}`}>
                  <img
                    src={relatedFood.image || `https://source.unsplash.com/random/?${relatedFood.category},food`}
                    alt={relatedFood.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{relatedFood.name}</h3>
                    <p className="text-muted-foreground text-sm">{relatedFood.restaurant}</p>
                    <p className="text-primary font-medium">{formatCurrency(relatedFood.price)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

