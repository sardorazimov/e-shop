
"use client"

import { useState } from "react"
import Image from "next/image"
import { Laptop, Smartphone, ShirtIcon, Plus } from 'lucide-react'

import { products } from "@/constant/index"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredProducts = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products
      const router = useRouter()
  return (
    <>
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow w-full mx-auto px-6 py-8 mt-10 ">
        <h1 className="text-2xl font-bold mb-6">
          {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}s` : "All Products"}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="flex flex-col ">
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </CardContent>
              <CardFooter className="lg:flex justify-between items-center">
                <span className="text-lg sm:hidden lg:flex  font-semibold">${product.price.toFixed(2)}</span>
                <Button 
                 onClick={() => router.push('/dashboard/products')}
                 className="lg:flex hidden">Add to Cart</Button>
                <Button   
                 onClick={() => router.push('/dashboard/products')}
                className="sm:flex lg:hidden"><Plus/> </Button>
                
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
    </>
  )
}

export default Dashboard