"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FoodCard from "@/components/food-card"
import Pagination from "@/components/pagination"
import { allFoods } from "@/data/foods"
import { categories } from "@/data/categories"
import { restaurants } from "@/data/restaurants"
import type { Food } from "@/types"

const ITEMS_PER_PAGE = 12

export default function MenuPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [foods, setFoods] = useState<Food[]>([])
  const [filteredFoods, setFilteredFoods] = useState<Food[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "")
  const [selectedRestaurant, setSelectedRestaurant] = useState("")
  const [sortBy, setSortBy] = useState("recommended")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    setFoods(allFoods)
    setFilteredFoods(allFoods)
    setTotalPages(Math.ceil(allFoods.length / ITEMS_PER_PAGE))
  }, [])

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  useEffect(() => {
    let result = [...foods]

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (food) =>
          food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          food.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter((food) => food.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Apply restaurant filter
    if (selectedRestaurant) {
      result = result.filter((food) => food.restaurantId === selectedRestaurant)
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "recommended":
      default:
        // Keep original order which is assumed to be recommended
        break
    }

    setFilteredFoods(result)
    setTotalPages(Math.ceil(result.length / ITEMS_PER_PAGE))
    setCurrentPage(1) // Reset to first page when filters change
  }, [foods, searchQuery, selectedCategory, selectedRestaurant, sortBy])

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return filteredFoods.slice(startIndex, endIndex)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("")
    setSelectedRestaurant("")
    setSortBy("recommended")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] -z-10" />

        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Our Menu</h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold"></h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-64">
              <Input
                type="search"
                placeholder="Search foods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>

            <Button
              variant="outline"
              className="sm:w-auto flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="bg-muted/50 rounded-lg p-4 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.slug}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Restaurant</label>
                <Select value={selectedRestaurant} onValueChange={setSelectedRestaurant}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Restaurants" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Restaurants</SelectItem>
                    {restaurants.map((restaurant) => (
                      <SelectItem key={restaurant.id} value={restaurant.id}>
                        {restaurant.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Recommended" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" onClick={handleClearFilters} className="w-full">
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        )}

        {filteredFoods.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No foods found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            <Button variant="outline" onClick={handleClearFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {getCurrentPageItems().map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>

            <div className="mt-12">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
          </>
        )}
      </div>
    </main>
  )
}

