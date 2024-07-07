// 'use client'

// import { useEffect, useState } from 'react'

const getData = async () => {
  // setIsPending(true)

  let request = await fetch(`https://dummyjson.com/products`)
  let data = await request.json()

  // setIsPending(false)

  return { data };
}

async function Products({ params }) {
  // let [isPending, setIsPending] = useState(false)
  let { category } = params

  let { data: { products } } = await getData();
  console.log(products);

  let newProducts = []

  products.forEach((product) => {
    if (product.category == category) {
      newProducts.push(product)
    }
  })

  console.log(newProducts);

  return (
    <section>Products</section>
  )
}

export default Products