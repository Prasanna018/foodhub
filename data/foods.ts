import type { Food } from "@/types"

// Generate 100 food items
export const allFoods: Food[] = Array.from({ length: 100 }, (_, index) => {
  const id = `food-${index + 1}`
  const categories = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Salad",
    "Dessert",
    "Sandwich",
    "Curry",
    "Noodles",
    "Breakfast",
  ]
  const categoryIndex = index % categories.length
  const category = categories[categoryIndex]

  const restaurants = [
    { id: "rest-1", name: "Pizza Palace" },
    { id: "rest-2", name: "Burger Barn" },
    { id: "rest-3", name: "Sushi Supreme" },
    { id: "rest-4", name: "Pasta Paradise" },
    { id: "rest-5", name: "Green Leaf" },
    { id: "rest-6", name: "Sweet Treats" },
    { id: "rest-7", name: "Sandwich Spot" },
    { id: "rest-8", name: "Curry Corner" },
    { id: "rest-9", name: "Noodle House" },
    { id: "rest-10", name: "Morning Delight" },
  ]

  const restaurantIndex = index % restaurants.length
  const restaurant = restaurants[restaurantIndex]

  // Food names based on category
  const foodNames = {
    Pizza: [
      "Margherita Pizza",
      "Pepperoni Pizza",
      "Vegetarian Pizza",
      "Hawaiian Pizza",
      "BBQ Chicken Pizza",
      "Mushroom Pizza",
      "Four Cheese Pizza",
      "Supreme Pizza",
      "Buffalo Pizza",
      "Meat Lovers Pizza",
    ],
    Burger: [
      "Classic Burger",
      "Cheeseburger",
      "Bacon Burger",
      "Mushroom Swiss Burger",
      "Veggie Burger",
      "BBQ Burger",
      "Spicy Jalapeño Burger",
      "Double Burger",
      "Avocado Burger",
      "Blue Cheese Burger",
    ],
    Sushi: [
      "California Roll",
      "Spicy Tuna Roll",
      "Dragon Roll",
      "Rainbow Roll",
      "Salmon Nigiri",
      "Tuna Nigiri",
      "Shrimp Tempura Roll",
      "Philadelphia Roll",
      "Vegetable Roll",
      "Eel Avocado Roll",
    ],
    Pasta: [
      "Spaghetti Bolognese",
      "Fettuccine Alfredo",
      "Penne Arrabbiata",
      "Lasagna",
      "Carbonara",
      "Pesto Pasta",
      "Seafood Pasta",
      "Mushroom Risotto",
      "Ravioli",
      "Gnocchi",
    ],
    Salad: [
      "Caesar Salad",
      "Greek Salad",
      "Cobb Salad",
      "Caprese Salad",
      "Chicken Salad",
      "Tuna Salad",
      "Waldorf Salad",
      "Quinoa Salad",
      "Pasta Salad",
      "Fruit Salad",
    ],
    Dessert: [
      "Chocolate Cake",
      "Cheesecake",
      "Apple Pie",
      "Ice Cream Sundae",
      "Tiramisu",
      "Brownie",
      "Crème Brûlée",
      "Chocolate Chip Cookies",
      "Carrot Cake",
      "Panna Cotta",
    ],
    Sandwich: [
      "Club Sandwich",
      "BLT Sandwich",
      "Grilled Cheese",
      "Tuna Melt",
      "Chicken Sandwich",
      "Veggie Sandwich",
      "Reuben Sandwich",
      "Turkey Sandwich",
      "Egg Salad Sandwich",
      "Philly Cheesesteak",
    ],
    Curry: [
      "Chicken Curry",
      "Beef Curry",
      "Vegetable Curry",
      "Lamb Curry",
      "Coconut Curry",
      "Green Curry",
      "Red Curry",
      "Yellow Curry",
      "Paneer Curry",
      "Shrimp Curry",
    ],
    Noodles: [
      "Pad Thai",
      "Ramen",
      "Udon",
      "Lo Mein",
      "Chow Mein",
      "Pho",
      "Singapore Noodles",
      "Yakisoba",
      "Drunken Noodles",
      "Soba Noodles",
    ],
    Breakfast: [
      "Pancakes",
      "Waffles",
      "French Toast",
      "Eggs Benedict",
      "Breakfast Burrito",
      "Avocado Toast",
      "Omelette",
      "Breakfast Sandwich",
      "Acai Bowl",
      "Oatmeal",
    ],
  }

  const nameIndex = Math.floor(index / 10) % 10
  const name = foodNames[category][nameIndex]

  // Descriptions based on category
  const descriptions = {
    Pizza: "Delicious pizza with a perfect crust, topped with the finest ingredients and melted cheese.",
    Burger: "Juicy burger patty with fresh vegetables and special sauce, served in a toasted bun.",
    Sushi: "Fresh and flavorful sushi made with premium ingredients and expert technique.",
    Pasta: "Al dente pasta served with a rich and flavorful sauce, garnished to perfection.",
    Salad: "Fresh and crisp vegetables tossed in a delicious dressing for a healthy meal.",
    Dessert: "Sweet and indulgent dessert that will satisfy your cravings.",
    Sandwich: "Perfectly stacked sandwich with fresh ingredients between slices of bread.",
    Curry: "Aromatic curry with a perfect blend of spices and tender ingredients.",
    Noodles: "Flavorful noodles tossed with vegetables, protein, and savory sauce.",
    Breakfast: "Delicious breakfast item to start your day right.",
  }

  // Price ranges based on category
  const priceRanges = {
    Pizza: { min: 9.99, max: 16.99 },
    Burger: { min: 7.99, max: 14.99 },
    Sushi: { min: 10.99, max: 18.99 },
    Pasta: { min: 8.99, max: 15.99 },
    Salad: { min: 6.99, max: 12.99 },
    Dessert: { min: 4.99, max: 8.99 },
    Sandwich: { min: 6.99, max: 11.99 },
    Curry: { min: 9.99, max: 16.99 },
    Noodles: { min: 8.99, max: 14.99 },
    Breakfast: { min: 5.99, max: 11.99 },
  }

  const priceRange = priceRanges[category]
  const price = +(priceRange.min + Math.random() * (priceRange.max - priceRange.min)).toFixed(2)

  // Random discount (0, 10, 15, or 20)
  const discountOptions = [0, 0, 0, 0, 0, 10, 15, 20]
  const discount = discountOptions[Math.floor(Math.random() * discountOptions.length)]

  // Rating between 3.5 and 5.0
  const rating = +(3.5 + Math.random() * 1.5).toFixed(1)

  // Featured status (10% chance)
  const featured = Math.random() < 0.1

  // Specific image URLs for each food item
  const imageUrls = {
    Pizza: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1428&q=80",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1014&q=80",
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    Burger: [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1299&q=80",
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1368&q=80",
    ],
    Sushi: [
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    ],
    Pasta: [
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    ],
    Salad: [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1378&q=80",
      "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
    ],
    Dessert: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    ],
    Sandwich: [
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1481070414801-51fd732d7184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
      "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    Curry: [
      "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    ],
    Noodles: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1618889482923-38250401a84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
    Breakfast: [
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1620921575116-fb8902eea97a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    ],
  }

  const image = imageUrls[category][nameIndex % 5]

  return {
    id,
    name,
    description: descriptions[category],
    price,
    discount,
    category,
    rating,
    restaurant: restaurant.name,
    restaurantId: restaurant.id,
    featured,
    image,
  }
})

// Featured foods (8 items with high ratings)
export const featuredFoods = allFoods
  .filter((food) => food.rating >= 4.5)
  .sort(() => 0.5 - Math.random())
  .slice(0, 8)

