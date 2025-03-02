import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-orange-100 to-amber-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20"></div>
        <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-transparent to-white opacity-30"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Delicious Food <span className="text-primary">Delivered</span> To Your Door
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Order from your favorite restaurants and enjoy a wide variety of cuisines delivered right to your
              doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/menu">Order Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/restaurants">View Restaurants</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Delicious food spread"
              className="rounded-2xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

