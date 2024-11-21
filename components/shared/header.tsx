"use client"

import { useScrolled } from "@/hooks/scroll"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { ModeToggle } from "@/provider/toggle"

const Header = () => {
    const scrolled = useScrolled()
  return (
     <header className={cn('w-full z-50 top-0 left-0 h-14 fixed',
        scrolled &&  'dark:bg-gray-950 dark:text-white  '
     )}>
         <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          ShopNow
        </Link>
        <nav>
          <ul className="lg:flex hidden space-x-4">
            <li><Link href="#" className="hover:text-primary">Home</Link></li>
            <li><Link href="#" className="hover:text-primary">Products</Link></li>
            <li><Link href="#" className="hover:text-primary">About</Link></li>
            <li><Link href="#" className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <div className="space-x-2 flex gap-2 items-center h-full">
          <ShoppingCart className="h-4 w-4" />
          <ModeToggle/>
        </div>
        
      </div>
     </header>
  )
}

export default Header