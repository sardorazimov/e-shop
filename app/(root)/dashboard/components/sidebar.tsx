"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils";
import { CalendarIcon, FolderIcon, Home, UsersIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"


type NavigationItem = {
    label: string;
    icon: React.ComponentType;
    route: string;
  };
  
  const navigation: NavigationItem[] = [
    { route: '/all', icon: Home, label: 'Dashboard' },
    { route: '/phone', icon: UsersIcon, label: 'Phone' },
    { route: '/home', icon: FolderIcon, label: 'Home' },
    { route: '/M=mobilya', icon: CalendarIcon, label: 'Mobilya' },
    { route: '/home', icon: FolderIcon, label: 'Home' },
    { route: '/M=mobilya', icon: CalendarIcon, label: 'Mobilya' },
    { route: '/home', icon: FolderIcon, label: 'Home' },
    { route: '/M=mobilya', icon: CalendarIcon, label: 'Mobilya' },
    { route: '/home', icon: FolderIcon, label: 'Home' },
    { route: '/M=mobilya', icon: CalendarIcon, label: 'Mobilya' },
  ];
const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()
  return (
    <aside className="fixed left-0 top-0 flex h-screen  flex-col  justify-between mt-20 border-r border-white/10 text-white max-sm:hidden lg:w-[264px] ">
    <div className="flex flex-1 flex-col gap-1  ">
       {navigation.map((item)  => {
         const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
         return(
            <Link
            href={item.route}
            key={item.label}
            className={cn(
              'flex gap-4 items-center p-2 rounded-lg justify-start  cursor-pointer hover:bg-white/5 hover:rounded-lg',
              {
                'bg-white/10': isActive,
              }
            )}
          >
         
            <p className="text-lg font-semibold max-lg:hidden">
              {item.label}
            </p>
          </Link> 
         )
       })}
    </div>
    </aside>
  )
}

export default Sidebar