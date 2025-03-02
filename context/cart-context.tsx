"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Food } from "@/types"

interface CartItem extends Food {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (food: Food) => void
  updateQuantity: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("foodhub-cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("foodhub-cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (food: Food) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === food.id)

      if (existingItem) {
        // If item already exists, increase quantity
        return prevItems.map((item) => (item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        // Otherwise, add new item with quantity 1
        return [...prevItems, { ...food, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

