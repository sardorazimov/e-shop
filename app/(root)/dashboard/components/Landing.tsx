

const Landing = () => {
  return (
    <section className="lg:mt-10 sm:mt-20 ">
     <div className="flex w-full h-96 mt-10">
     <div className="max-w-[1200px] w-full sm:border-none h-full lg:border border-white/10 rounded-3xl">
      <div className="grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-1">
        <div className="">
          <div className="flex w-full flex-col h-full">
           <h1 className="animate-bg-gradient bg-clip-text text-center mt-3 bg-gradient-to-br from-neutral-500 to-zinc-300 text-transparent text-5xl">
            New Samsung Galaxy S24
           </h1>
           <p className="lg:flex hidden animate-bg-gradient text-clip mt-3 mx-3 bg-clip-text bg-gradient-to-br text-transparent text-xl font-medium from-fuchsia-600 to-zinc-700 via-blue-700">
            The Samsung Galaxy S24 is a powerful, 
            all-in-one smartphone that delivers a stunning display, 
            powerful processor, and an unmatched battery life. Experience the future 
            of smartphones with the Samsung Galaxy S24.
           </p>
            <div className="mt-32 mx-3 lg:flex hidden">
             <a href="#" className="bg-gradient-to-r animate-bg-gradient text-white px-5 py-3 rounded-md hover:bg-gradient-to-r from-green-800 via-fuchsia-800 to-blue-800 hover:text-white">
             Shop Now
             </a>
            </div>
         </div> 
        </div>
        <div className="">
          <div className="mt-1 mx-auto w-auto h-auto">
            <img src="/images/samsung.png" alt="" className="" />
          </div>
        </div>
      </div>
     </div>
    </div> 
    </section>
  )
}

export default Landing