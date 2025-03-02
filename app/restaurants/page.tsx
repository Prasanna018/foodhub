import { restaurants } from "@/data/restaurants"
import RestaurantCard from "@/components/restaurant-card"

export default function RestaurantsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />

        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Our Restaurants</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </main>
  )
}

