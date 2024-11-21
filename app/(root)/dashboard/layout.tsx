import Sidebar from "./components/sidebar"



const DahboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
      <Sidebar/>
      <section className="lg:pl-72 mb-6 mt-20  flex">
         {children}
      </section>
    </main>
  )
}

export default DahboardLayout