import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import RestaurantCard from "@/components/restaurant-card"
import { restaurants } from "@/data/restaurants"

export default function RestaurantShowcase() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Popular Restaurants</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/restaurants" className="flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.slice(0, 6).map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  )
}

