"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle2, ChevronDown, ChevronUp, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"

export default function OrderSuccessPage() {
  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    orderDate: "",
    estimatedDelivery: "",
    items: [] as any[],
    subtotal: 0,
    deliveryFee: 4.99,
    total: 0,
    address: {
      name: "John Doe",
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345",
      phone: "(123) 456-7890",
    },
  })

  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Generate random order details
    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`
    const now = new Date()
    const orderDate = now.toLocaleString()

    // Estimated delivery in 30-45 minutes
    const estimatedDelivery = new Date(
      now.getTime() + (30 + Math.floor(Math.random() * 15)) * 60000,
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

    // Generate random items with images
    const items = [
      {
        id: 1,
        name: "Margherita Pizza",
        quantity: 1,
        price: 12.99,
        image: "https://source.unsplash.com/random/?pizza,margherita",
      },
      {
        id: 2,
        name: "Chicken Wings",
        quantity: 2,
        price: 8.99,
        image: "https://source.unsplash.com/random/?chicken,wings",
      },
      {
        id: 3,
        name: "Caesar Salad",
        quantity: 1,
        price: 7.49,
        image: "https://source.unsplash.com/random/?caesar,salad",
      },
    ]

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const total = subtotal + 4.99 // delivery fee

    setOrderDetails({
      orderId,
      orderDate,
      estimatedDelivery,
      items,
      subtotal,
      deliveryFee: 4.99,
      total,
      address: {
        name: "John Doe",
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
        phone: "(123) 456-7890",
      },
    })
  }, [])

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-lg border shadow-sm p-6 text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-4">Your order has been received and is being prepared.</p>
          <div className="text-lg font-medium">
            Order ID: <span className="font-bold">{orderDetails.orderId}</span>
          </div>
        </div>

        <div className="bg-card rounded-lg border shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Delivery Details</h2>
            <div className="text-primary font-medium">Estimated Delivery: {orderDetails.estimatedDelivery}</div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                <div>
                  <div className="font-medium">{orderDetails.address.name}</div>
                  <div className="text-muted-foreground">
                    {orderDetails.address.street}
                    <br />
                    {orderDetails.address.city}, {orderDetails.address.zipCode}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-muted-foreground mr-2" />
                <div className="font-medium">{orderDetails.address.phone}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
          <div
            className="p-6 flex justify-between items-center cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            <h2 className="text-xl font-semibold">Order Summary</h2>
            <Button variant="ghost" size="sm">
              {showDetails ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </Button>
          </div>

          {showDetails && (
            <>
              <Separator />
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div>
                        <span className="text-muted-foreground mr-2">{item.quantity}x</span>
                        <span>{item.name}</span>
                      </div>
                      <span>{formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatCurrency(orderDetails.subtotal)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>{formatCurrency(orderDetails.deliveryFee)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatCurrency(orderDetails.total)}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/menu">Order More Food</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

