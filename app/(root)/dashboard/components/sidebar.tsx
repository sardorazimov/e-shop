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
    { route: '/dashboard/all', icon: Home, label: 'Dashboard' },
    { route: '/dashboard/phone', icon: UsersIcon, label: 'Phone' },
    { route: '/dashboard/home', icon: FolderIcon, label: 'Home' },
    { route: '/dashboard/mobilya', icon: CalendarIcon, label: 'Mobilya' },
    { route: '/dashboard/home', icon: FolderIcon, label: 'Home' },
    { route: '/dashboard/mobilya', icon: CalendarIcon, label: 'Mobilya' },
    { route: '/dashboard/home', icon: FolderIcon, label: 'Home' },
    { route: '/dashboard/mobilya', icon: CalendarIcon, label: 'Mobilya' },
    { route: '/dashboard/home', icon: FolderIcon, label: 'Home' },
    { route: '/dashboard/mobilya', icon: CalendarIcon, label: 'Mobilya' },
  ];
const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()
  return (
    <aside className="fixed left-0 top-0 flex h-screen  flex-col  justify-between mt-20 border-r shadow-sm dark:border-white/10  max-sm:hidden lg:w-[264px] ">
    <div className="flex flex-1 flex-col gap-1 text-neutral-600 dark:text-stone-200">
       {navigation.map((item)  => {
         const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
         return(
            <Link
            href={item.route}
            key={item.label}
            className={cn(
              'flex gap-4 items-center p-2 rounded-lg justify-start  cursor-pointer hover:bg-slate-200 dark:hover:bg-white/5 hover:rounded-lg',
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