import Link from 'next/link'

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
                        <li><Link className='hover:text-orange-500' href={`/products`}>all Products</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <button className="btn text-white bg-[#DC780B] hover:bg-[#a65f13]">Booking Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar