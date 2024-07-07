'use client';

import Link from 'next/link'
import { MainButton } from '.';

function Navbar() {
    return (
        <div className="bg-base-200 py-3">
            <div className='navbar main-container'>
                <div className="navbar-start flex gap-8">
                    <Link href='/' className="text-xl">
                        <h1 className='text-4xl font-black'>Digital <span className='text-orange-500 -ml-2'>Store</span></h1>
                    </Link>
                    <ul className="menu-horizontal px-1 flex gap-5 text-[17px] font-bold">
                        <li><Link className='hover:text-orange-500' href={`/`}>Home</Link></li>
                        <li><Link className='hover:text-orange-500' href={`/about`}>About</Link></li>
                        <li><Link className='hover:text-orange-500' href='/allProducts'>all Products</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <Link href={`/allProducts`}>
                            <MainButton text='booking now' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar