'use client'
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter()
  return (
    <div>
      <div className="relative">
        <Image src={"/images/images-1.avif"} alt="" width={750} height={738} />
        <div className="absolute bottom-10 left-7">
          <h1 className="text-4xl font-bold text-green-800 dark:text-white">
            Discover Our Exclusive Collection
          </h1>
          <p className="text-lg text-clip bg-transparent  text-white bg-gradient-to-r from-purple-700 to-blue-700 via-fuchsia-700  dark:text-white">
            Experience the ultimate luxury at unparalleled prices
          </p>
          <Button onClick={() => router.push('/dashboard')}
           className="dark:bg-white mt-1 bg-rose-600  dark:text-black px-12 py-4 rounded-lg hover:bg-gray-500">
            Discover Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
