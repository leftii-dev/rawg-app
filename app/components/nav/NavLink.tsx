'use client'

import Link from 'next/link'

export default function NavLink({title, href}: {title: string, href: string}){
    return(
        <Link href={href} className='hover:scale-105'>
            <span className='text-xl'>{title}</span>
        </Link>
    )
}