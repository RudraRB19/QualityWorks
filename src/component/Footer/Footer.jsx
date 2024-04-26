import React from 'react'
import{Link,NavLink}from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="bg-white border-y max-sm:justify-center">
            <div className="mx-auto w-full max-w-screen-xl lg:px-3 lg:py-2 ">
                <div className="md:flex lg:justify-between max-sm:text-center max-sm:py-2">
                    <div className="mb-0 md:mb-0">
                        <Link to="/" className="lg:flex items-center">
                            <img
                                src="src\assets\logo.svg"
                                className="lg:mr-1 h-28 w-72"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 max-sm:text-center lg:py-6 gap-8 sm:gap-6 max-sm:grid-cols-3">
                        <div>
                            <ul className="text-gray-500 font-medium">
                                <li className="lg:mb-4">
                                    <Link to="/" className=" hover:text-orange-700">
                                        Home
                                    </Link>
                                </li >
                                
                                <li className="lg:mb-4">
                                    <Link to="/contact" className="hover:text-orange-700">
                                        Contact
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <ul className="text-gray-500 font-medium">
                            <li className="lg:mb-4">
                                    <Link to="/about" className="hover:text-orange-700">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/product" className="hover:text-orange-700">
                                        Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="lg:my-4 border-gray-200 lg:my-6 " />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 max-sm:text-center">
                        © 2023
                        <a href="/" className="hover:text-orange-700">
                            <span> </span>
                             Quality Steel & Welding Work.
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex my-2  space-x-5 justify-center sm:mt-2">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    //fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    //clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="https://www.youtube.com/@rahulbhandigare9714" className="text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg"
                             width="1.43em" height="1em" 
                             viewBox="0 0 256 180">
                                <path fill="#f00" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/>
                                <path fill="#fff" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/>
                            </svg>
                            <span className="sr-only">Youtube</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

