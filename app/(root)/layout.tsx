import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"


const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
        <Header/>
        {children}
    
    </main>
  )
}

export default RootLayout