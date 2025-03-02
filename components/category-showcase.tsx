import Link from "next/link"
import { categories } from "@/data/categories"

export default function CategoryShowcase() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Food Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/menu?category=${category.slug}`}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="aspect-square">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-semibold group-hover:scale-110 transition-transform duration-300">
                  {category.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

