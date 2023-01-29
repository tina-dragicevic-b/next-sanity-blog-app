// import React from 'react'
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-8xl mx-auto">
        {/* <h1>Nadglavlje zaglavlje nadtjelije</h1> */}
        <div className="flex items-center space-x-9">
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt=""></img>
            </Link>
            <div className="hidden md:inline-flex items-center space-x-8">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white 
                bg-green-700 px-4 py-1 rounded-full
                hover:rounded-bl-lg hover:scale-x-100" 
                >Follow</h3>
            </div>
        </div>
        <div className="flex items-end space-x-9 text-green-900">
          <h3 className="border px-4 py-1 border-white">
            Sing In
          </h3>
          <h3 className="border px-4 py-1 rounded-full border-green-900">Get Started</h3>
        </div>
    </header>
  )
}

export default Header