import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FoodCard from "@/components/food-card"
import { featuredFoods } from "@/data/foods"

export default function FeaturedFoods() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Foods</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/menu" className="flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  )
}

