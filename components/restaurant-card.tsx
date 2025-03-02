import Link from "next/link"
import { Clock, MapPin, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Restaurant } from "@/types"

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      href={`/restaurants/${restaurant.id}`}
      className="block bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative">
        <img
          src={restaurant.image || `https://source.unsplash.com/random/?restaurant,${restaurant.cuisines[0]}`}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.featured && <Badge className="absolute top-2 left-2 bg-primary">Featured</Badge>}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{restaurant.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary mr-1" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{restaurant.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {restaurant.cuisines.map((cuisine, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {cuisine}
            </Badge>
          ))}
        </div>

        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
          <span className="text-muted-foreground">{restaurant.deliveryTime} min</span>

          {restaurant.freeDelivery && (
            <Badge variant="outline" className="ml-auto text-xs">
              Free Delivery
            </Badge>
          )}
        </div>
      </div>
    </Link>
  )
}

