"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductImage {
  src: string
  alt: string
  color: string
}

const productImages: ProductImage[] = [
  {
    src: "/images/images-1.avif",
    alt: "Black t-shirt with circular design",
    color: "Black"
  },
  {
    src: "/images/images-1.avif",
    alt: "White t-shirt with circular design",
    color: "White"
  },
  {
    src: "/images/images-1.avif",
    alt: "Blue t-shirt with circular design",
    color: "Blue"
  }
]

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"]

export default function ProductDetail() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [selectedColor, setSelectedColor] = React.useState("Black")
  const [selectedSize, setSelectedSize] = React.useState("M")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  return (
    <div className="min-h-screen dark:bg-transparent  dark:text-white">
      <div className="w-full mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Product Image Gallery */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={productImages[currentImageIndex].src}
                alt={productImages[currentImageIndex].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-1/2 flex w-full justify-between px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/20 backdrop-blur-sm"
                  onClick={previousImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-background/20 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </div>
            </div>
            <div className="mt-4 flex gap-4 overflow-auto pb-2">
              {productImages.map((image, index) => (
                <Card
                  key={index}
                  className={`relative aspect-square w-20  cursor-pointer overflow-hidden ${
                    currentImageIndex === index ? "ring-2 ring-blue-600" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <CardContent className="p-0">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold">Acme Circles T-Shirt</h1>
              <div className="mt-2 inline-flex items-center rounded-full bg-blue-600 text-slate-300 px-4 py-1 text-sm font-semibold">
                $20.00 USD
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="mb-2 text-lg font-semibold">COLOR</h2>
                <div className="flex gap-2">
                  {["Black", "White", "Blue"].map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      className="min-w-20"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-2 text-lg font-semibold">SIZE</h2>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className="min-w-12"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground">60% combed ringspun cotton/40% polyester jersey tee.</p>

            <Button className="mt-auto" size="lg">
              <Plus className="mr-2 h-4 w-4" /> Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

