import React from 'react'
import Link from 'next/link'

const Footer = () => {
  
  return (
    <div>
       <footer className="bg-white/10 py-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <p>ShopNow is your one-stop destination for all your shopping needs. We offer high-quality products at competitive prices.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">Home</Link></li>
              <li><Link href="#" className="hover:underline">Products</Link></li>
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>123 Shop Street, City, Country</p>
            <p>Email: info@shopnow.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {} ShopNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer