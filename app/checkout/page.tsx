"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "@/context/cart-context"
import { formatCurrency } from "@/lib/utils"

export default function CheckoutPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { cartItems, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price
    return total + itemPrice * item.quantity
  }, 0)

  const deliveryFee = subtotal > 0 ? 4.99 : 0
  const total = subtotal + deliveryFee

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      clearCart()
      toast({
        title: "Order placed successfully!",
        description: "Your order has been confirmed and is being prepared.",
      })
      router.push("/checkout/success")
      setIsSubmitting(false)
    }, 1500)
  }

  if (cartItems.length === 0) {
    router.push("/menu")
    return null
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/cart" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Link>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="bg-card rounded-lg border shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Delivery Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" required />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="instructions">Delivery Instructions (Optional)</Label>
                    <Textarea id="instructions" placeholder="E.g., Ring the doorbell, leave at the door, etc." />
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg border shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2 mb-4">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" required />
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="mt-8 lg:hidden">
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : `Place Order • ${formatCurrency(total)}`}
              </Button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="flex items-start">
                    <span className="text-muted-foreground mr-2">{item.quantity}x</span>
                    <span>{item.name}</span>
                  </div>
                  <span>
                    {formatCurrency(
                      (item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price) * item.quantity,
                    )}
                  </span>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>{formatCurrency(deliveryFee)}</span>
              </div>

              <Separator />

              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>

              <div className="pt-4 hidden lg:block">
                <Button type="submit" className="w-full" size="lg" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Place Order"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

