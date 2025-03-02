"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart()
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
    return total + itemPrice * item.quantity
  }, 0)

  const deliveryFee = subtotal > 0 ? 4.99 : 0
  const discount = couponApplied ? subtotal * 0.1 : 0
  const total = subtotal + deliveryFee - discount

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === "food10") {
      setCouponApplied(true)
    }
  }

  if (cartItems.length === 0) {
    return (
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Button size="lg" asChild>
            <Link href="/menu">Browse Menu</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/menu" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg border shadow-sm">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Cart Items ({cartItems.length})</h2>
                <Button variant="ghost" size="sm" onClick={clearCart} className="text-muted-foreground">
                  Clear Cart
                </Button>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image || `https://source.unsplash.com/random/?${item.category},food`}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.restaurant}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 text-right">
                          {item.discount > 0 ? (
                            <>
                              <span className="font-bold">
                                {formatCurrency(item.price * (1 - item.discount / 100) * item.quantity)}
                              </span>
                              <span className="text-sm text-muted-foreground line-through ml-2">
                                {formatCurrency(item.price * item.quantity)}
                              </span>
                            </>
                          ) : (
                            <span className="font-bold">{formatCurrency(item.price * item.quantity)}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>{formatCurrency(deliveryFee)}</span>
              </div>

              {couponApplied && (
                <div className="flex justify-between text-primary">
                  <span>Discount (10%)</span>
                  <span>-{formatCurrency(discount)}</span>
                </div>
              )}

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <div className="pt-4">
                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    disabled={couponApplied}
                  />
                  <Button variant="outline" onClick={handleApplyCoupon} disabled={couponApplied || !couponCode}>
                    Apply
                  </Button>
                </div>

                {couponApplied && <p className="text-sm text-primary mb-4">Coupon "FOOD10" applied successfully!</p>}

                <Button className="w-full" size="lg" asChild>
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

