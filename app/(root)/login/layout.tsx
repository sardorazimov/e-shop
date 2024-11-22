



const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
        <section className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          {children}
        </section>
    </main>
  )
}

export default AuthLayout