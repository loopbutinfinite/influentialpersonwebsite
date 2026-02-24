import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'

const NavLinks = () => {
    return (
        <div className='w-screen'>
            <Navbar fluid rounded className='bg-linear-to-br from-[#211f2f] to-[#918ca9]'>
                <div className="flex md:order-2">
                    <NavbarToggle />
                </div>
                <NavbarCollapse className='mx-auto py-5'>
                    <NavbarLink className='text-2xl' href="/"><span className='text-white'>Home</span></NavbarLink>
                    <NavbarLink className='text-2xl' href="/Pages/Biography"><span className='text-white'>Biography</span></NavbarLink>
                    <NavbarLink className='text-2xl' href="/Pages/Interests"><span className='text-white'>Interests</span></NavbarLink>
                    <NavbarLink className='text-2xl' href="/Pages/Accomplishments"><span className='text-white'>Accomplishments</span></NavbarLink>
                    <NavbarLink className='text-2xl' href="/Pages/FunFacts"><span className='text-white'>Fun Facts</span></NavbarLink>
                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default NavLinks