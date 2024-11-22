
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import Login from "@/components/shared/login";
import { ProductMarquee } from "@/components/shared/recomended-product";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full mt-20 ">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col w-auto h-full ">
          <Hero/>
        </div>
        <div className="flex flex-col w-auto h-full ">
        <h1 className="text-3xl fo to-inherit">
          Welcome to the
        </h1>
        <h1 className="text-5xl fo to-inherit">
          E-commerce Store
        </h1>
        <p>
          Discover our wide selection of products at the best price!
          <br/>
          Shop now and enjoy the best deals!
        </p>
        <div className="lg:flex hidden flex-col w-full items-center mt-10">
         <div className="w-96  border-white/5 border shadow-sm rounded-xl h-[500px] ">
          <h1 className="text-center text-xl"></h1>
          <Login/>
         </div>
        </div>
        </div>
      </div>
       <ProductMarquee/>
       <Footer/>
    </div>
  );
}
