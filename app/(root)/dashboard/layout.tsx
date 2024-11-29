import Landing from "./components/Landing"
import MobileDashboard from "./components/MobileDashboard"
import Sidebar from "./components/sidebar"



const DahboardLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
      <Sidebar/>
      <MobileDashboard/>
      <div className="lg:pl-72 ">
          <Landing/>
      </div>
      <section className="lg:pl-72 mb-6   flex">
         {children}
      </section>
      
    </main>
  )
}

export default DahboardLayout