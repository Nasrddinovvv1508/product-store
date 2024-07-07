"use client"

import { MainButton } from "@/components"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [isPending, setIsPending] = useState(false)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = async () => {
      setIsPending(true)
      let request = await fetch(`https://dummyjson.com/products`)
      let data = await request.json()
      setIsPending(false)

      let newProdArr = []

      data.products.forEach(product => {
        if (!newProdArr.includes(product.category)) {
          newProdArr.push(product.category)
        }
      })

      setProducts(data.products)
      setCategories(newProdArr)
    }

    getData()
  }, [])

  let btnArr = ['btn-neutral', 'btn-primary', 'btn-secondary', 'btn-accent', 'btn-info', 'btn-success', 'btn-warning', 'btn-error']

  return (
    <div>
      <section className='main-container grid grid-cols-2 items-center gap-5 mt-10'>
        <div>
          <h1 className='text-[60px] leading-[50px] font-extrabold text-[#333332]'>
            Making a good time with our website and enjoy shopping
          </h1>
          <p className='text-[19px] mt-[37px] mb-[50px] font-medium text-[#150C01] leading-[24px] opacity-50'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, perferendis earum saepe autem provident cumque id quo delectus reprehenderit iure laborum accusantium, sit, est suscipit.
          </p>
          <div className="flex gap-8">
            <Link href='#categories'>
              <MainButton text='See some categories' />
            </Link>
            <Link href='/allProducts'>
              <button className="btn btn-outline capitalize font-medium text-base">view all</button>
            </Link>
          </div>
        </div>
        <div className='w-full'>
          <img className='bg-transparent w-[500px] ml-auto' src="../assets/Lovepik_com-401631838-e-commerce-shopping-festival-recommended-online-shopping-product.png" alt="product bg" />
        </div>
      </section>

      <section id="categories" className="pt-12 my-10">
        <div className="main-container">
          <h1 className="text-5xl font-bold mb-24 text-center">All Categories of Products</h1>

          {isPending && <div className="main-container">
            <span className="loading loading-dots loading-lg"></span>
          </div>}

          <div className="flex justify-around flex-wrap gap-10">
            {categories.map((category, index) => (
              <div key={index} className="bg-base-300 rounded-t-full rounded-3xl flex flex-col items-center">
                <img className="rounded-full" src="../assets/category-image.png" alt="category image" />
                <div className="w-10/12 my-6">
                  <Link href={`/products/${category}`}>
                    <button className={`w-full btn text-lg ${btnArr[Math.floor((Math.random() * btnArr.length))]}`}>{category}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
