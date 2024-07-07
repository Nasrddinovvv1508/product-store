"use client";

import { MainButton } from '@/components';
import { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

function ProductDecs({ params }) {
    const [product, setProduct] = useState([])
    const [isPending, setIsPending] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const getData = async () => {
            let request = await fetch(`https://dummyjson.com/products/${params.id}`)
            let data = await request.json()

            setProduct(data)
            setIsPending(false)
        }

        getData()
    }, [])

    return (
        <section>
            <div className='main-container'>
                <div className='mt-12'>

                    {isPending ? <span className="loading loading-spinner loading-lg"></span> :
                        <div className='w-full my-12 flex items-center'>
                            <div className='w-5/12 shadow-xl border-black h-[450px]'>
                                <img className='h-full' src={product.images && product.images[0]} alt={product && product.title} />
                            </div>
                            <div className='w-6/12 shadow-2xl border-2 h-[510px] p-[50px]'>
                                {product.title && (
                                    <center>
                                        <ReactTypingEffect
                                            text={product.title}
                                            speed={30}
                                            eraseSpeed={0}
                                            eraseDelay={1000000}
                                            typingDelay={50}
                                            className='text-4xl font-bold mb-5 mt-10 mx-auto text-center w-7/12'
                                        />
                                    </center>
                                )}
                                <br />
                                {product.description && (
                                    <ReactTypingEffect
                                        text={product.description}
                                        speed={15}
                                        eraseSpeed={0}
                                        eraseDelay={1000000}
                                        typingDelay={50}
                                        className='typing-effect text-xl w-8/12 text-center mx-auto mb-7 opacity-55'
                                    />
                                )}
                                <div className='w-9/12 flex justify-end gap-3'>
                                    <span className='badge badge-neutral'>{product.price}$</span>
                                    <span className='badge badge-primary'>{product.category}</span>
                                </div>
                                <div className='w-full flex justify-center mt-16'>
                                    <button className='btn btn-wide hover:bg-[#a65f13] bg-[#DC780B] text-white font-medium text-base capitalize'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </section>
    )
}

{/* <ReactTypingEffect
    text={data.description}
    speed={15}
    eraseSpeed={0}
    eraseDelay={1000000}
    typingDelay={50}
    className='typing-effect'
/> */}

export default ProductDecs