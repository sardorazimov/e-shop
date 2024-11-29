"use client"

import { useScrolled } from "@/hooks/scroll"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "../ui/button"
import { Menu, ShoppingCart } from "lucide-react"
import { ModeToggle } from "@/provider/toggle"
import Login from "./login"
import { useRouter } from "next/navigation"

const Header = () => {
    const scrolled = useScrolled()
    const router = useRouter()
  return (
     <header className={cn('w-full z-50 top-0 left-0 h-14 fixed',
        scrolled &&  'bg-black  border-b border-white/5'
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
        <div className="space-x-2 lg:flex gap-2  hidden items-center h-full">
          <ShoppingCart className="h-4 w-4" />
          <ModeToggle />
        </div>
        <div className="sm:flex lg:hidden gap-1 flex h-full items-center">
          <ModeToggle/> 
           <Button onClick={() => router.push('/login')}
            className="">Login</Button>
        </div>
      </div>
     </header>
  )
}

export default Header