import Hero from "@/components/hero"
import FeaturedFoods from "@/components/featured-foods"
import CategoryShowcase from "@/components/category-showcase"
import RestaurantShowcase from "@/components/restaurant-showcase"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <CategoryShowcase />
        <FeaturedFoods />
        <RestaurantShowcase />
      </div>
    </main>
  )
}

