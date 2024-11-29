'use client'
import { Button } from '@/components/ui/button'
import { products } from '@/constant'
import { useScrolled } from '@/hooks/scroll'
import { cn } from '@/lib/utils'
import { Laptop, ShirtIcon, Smartphone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const MobileDashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredProducts = selectedCategory
      ? products.filter(product => product.category === selectedCategory)
      : products
      const router = useRouter()
      const scrolled = useScrolled()
  return (
    <div className='flex mt-20'>
             <header className={cn('fixed w-full sm:flex lg:hidden overflow-x-auto items-center -mt-10 z-10  border-b',
                scrolled && 'bg-black border-b border-white/10'
             )}>
        <nav className="w-full mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Button
                variant={selectedCategory === "phone" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("phone")}
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Phones
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "laptop" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("laptop")}
              >
                <Laptop className="mr-2 h-4 w-4" />
                Laptops
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "tshirt" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("tshirt")}
              >
                <ShirtIcon className="mr-2 h-4 w-4" />
                T-Shirts
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "tshirt" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("tshirt")}
              >
                <ShirtIcon className="mr-2 h-4 w-4" />
                T-Shirts
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "tshirt" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("tshirt")}
              >
                <ShirtIcon className="mr-2 h-4 w-4" />
                T-Shirts
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "tshirt" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("tshirt")}
              >
                <ShirtIcon className="mr-2 h-4 w-4" />
                T-Shirts
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "tshirt" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("tshirt")}
              >
                <ShirtIcon className="mr-2 h-4 w-4" />
                T-Shirts
              </Button>
            </li>
            <li>
              <Button
                variant={selectedCategory === "tshirt" ? "default" : "ghost"}
                onClick={() => setSelectedCategory("tshirt")}
              >
                <ShirtIcon className="mr-2 h-4 w-4" />
                T-Shirts
              </Button>
            </li>
          </ul>
        </nav>
      </header> 
    </div>
  )
}

export default MobileDashboard