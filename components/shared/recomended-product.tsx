import Image from 'next/image'

const products = [
  { id: 1, name: 'Acme Baby Cap', price: 10.0, image: '/images/images-1.avif' },
  { id: 2, name: 'Acme Cap', price: 20.0, image: '/images/images-1.avif' },
  { id: 3, name: 'Acme T-Shirt', price: 25.0, image: '/images/images-1.avif' },
  { id: 4, name: 'Acme Prism T-Shirt', price: 30.0, image: '/images/images-1.avif' },
  { id: 5, name: 'Acme Hoodie', price: 40.0, image: '/images/images-1.avif' },
]

export function ProductMarquee() {
  return (
    <section className="bg-black py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="flex overflow-x-auto space-x-4">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-48 bg-white/10 p-4 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-white font-semibold">{product.name}</h3>
              <p className="text-blue-500 font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

