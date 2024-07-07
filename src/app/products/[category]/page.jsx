'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

function Products({ params }) {
  let { category } = params

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

  let newProducts = []

  products.forEach((product) => {
    if (product.category == category) {
      newProducts.push(product)
    }
  })

  return (
    <section className="my-16">
      <div className="main-container">
        <h1 className="text-5xl font-bold text-center mb-14">Products of <span className="text-orange-500">{category}</span> category</h1>

        {isPending && <span className="loading loading-spinner loading-lg"></span>}

        <div className="grid grid-cols-3 gap-6">
          {newProducts.map((prod) => {
            return (
              <Link key={prod.id} href={`/productDesc${prod.id}`}>
                <div className="card bg-base-100 w-[360px] h-[536px] shadow-xl">
                  <figure className="border-2 bg-orange-400 object-cover" style={{ borderBottomRightRadius: `80px`, borderTopLeftRadius: `80px` }}>
                    <img
                      src={prod.thumbnail}
                      alt="prod"
                      className="border-2  w-full h-[355px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title mb-5">
                      {prod.title}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="h-10 overflow-hidden mb-5">{prod.description}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-neutral">{prod.category}</div>
                      <div className="badge badge-primary font-bold">{prod.price}$</div>
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

export default Products