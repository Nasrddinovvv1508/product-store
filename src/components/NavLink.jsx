// components/NavLink.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    let domain = location.href;
    console.log(href);

    let expection = domain.search(pathname)
    console.log(expection);
    let domainHref = domain.substring(expection)
    console.log(domain);
    console.log(domainHref);

    const isActive = pathname == domainHref;
    console.log(pathname);
    console.log(isActive);

    return (
        <Link style={{ color: isActive ? '#DC780B' : 'black' }} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;