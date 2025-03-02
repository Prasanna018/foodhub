import type { Restaurant } from "@/types"

export const restaurants: Restaurant[] = [
  {
    id: "rest-1",
    name: "Pizza Palace",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    rating: 4.7,
    cuisines: ["Italian", "Pizza", "Pasta"],
    location: "123 Main St",
    deliveryTime: 30,
    freeDelivery: true,
    featured: true,
  },
  {
    id: "rest-2",
    name: "Burger Barn",
    image:
      "https://images.unsplash.com/photo-1561758033-7e924f619b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    rating: 4.5,
    cuisines: ["American", "Burgers", "Fast Food"],
    location: "456 Oak Ave",
    deliveryTime: 25,
    freeDelivery: true,
    featured: true,
  },
  {
    id: "rest-3",
    name: "Sushi Supreme",
    image:
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    cuisines: ["Japanese", "Sushi", "Asian"],
    location: "789 Maple Rd",
    deliveryTime: 35,
    freeDelivery: false,
    featured: true,
  },
  {
    id: "rest-4",
    name: "Pasta Paradise",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.6,
    cuisines: ["Italian", "Pasta", "Mediterranean"],
    location: "101 Pine St",
    deliveryTime: 30,
    freeDelivery: true,
  },
  {
    id: "rest-5",
    name: "Green Leaf",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.4,
    cuisines: ["Salads", "Healthy", "Vegan"],
    location: "202 Cedar Blvd",
    deliveryTime: 20,
    freeDelivery: true,
  },
  {
    id: "rest-6",
    name: "Sweet Treats",
    image:
      "https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=729&q=80",
    rating: 4.9,
    cuisines: ["Desserts", "Bakery", "Ice Cream"],
    location: "303 Elm St",
    deliveryTime: 25,
    freeDelivery: false,
    featured: true,
  },
  {
    id: "rest-7",
    name: "Sandwich Spot",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.3,
    cuisines: ["Sandwiches", "Deli", "American"],
    location: "404 Birch Ave",
    deliveryTime: 20,
    freeDelivery: true,
  },
  {
    id: "rest-8",
    name: "Curry Corner",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    cuisines: ["Indian", "Curry", "Asian"],
    location: "505 Walnut Rd",
    deliveryTime: 35,
    freeDelivery: false,
  },
  {
    id: "rest-9",
    name: "Noodle House",
    image:
      "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
    rating: 4.5,
    cuisines: ["Asian", "Noodles", "Chinese"],
    location: "606 Cherry St",
    deliveryTime: 30,
    freeDelivery: true,
  },
  {
    id: "rest-10",
    name: "Morning Delight",
    image:
      "https://images.unsplash.com/photo-1550016242-f6b9e9e0362f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.6,
    cuisines: ["Breakfast", "Brunch", "American"],
    location: "707 Spruce Ave",
    deliveryTime: 25,
    freeDelivery: true,
    featured: true,
  },
]

