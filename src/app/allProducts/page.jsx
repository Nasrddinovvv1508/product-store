"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

function AllProducts() {
  const [products, setProducts] = useState([])
  const [isPending, setIsPending] = useState(false)

  useEffect(() => {
    setIsPending(true)
    const getData = async () => {
      let request = await fetch(`https://dummyjson.com/products`)
      let data = await request.json()

      setProducts(data.products)
      setIsPending(false)
    }

    getData()
  }, [])

  return (
    <section>
      <div className='main-container'>
        <h1 className="text-6xl text-center my-12 font-bold">All Products</h1>

        {isPending && <span className="loading loading-spinner loading-lg"></span>}
        
        <div className="grid grid-cols-3 gap-5 mb-10">
          {products.map((product) => {
            return (
              <Link key={product.id} href={`/productDesc/${product.id}`}>
                <div className="card bg-base-100 w-[360px] h-[536px] shadow-xl">
                  <figure className="border-2 bg-orange-400 object-cover" style={{ borderBottomRightRadius: `80px`, borderTopLeftRadius: `80px` }}>
                    <img
                      src={product.images[0]}
                      alt="prod"
                      className="border-2  w-full h-[355px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-5">
                      {product.title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="h-10 overflow-hidden mb-5">{product.description}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-neutral">{product.category}</div>
                      <div className="badge badge-primary font-bold">{product.price}$</div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AllProducts