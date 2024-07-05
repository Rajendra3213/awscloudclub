import clublogo from '/src/assets/logos/logoclub.png';

export default function Navbar() {
    return (
        <div className="navbar navgradient rounded-full my-5 px-10 py-0 justify-between">
            <div className="flex items-center">
                <img src={clublogo} alt="logo" className="w-20 h-auto" />
                <h3 className="text-white font-semibold ml-2 text-lg">NEPAL</h3> {/* Font size updated to text-lg */}
            </div>
            <div className="flex items-center justify-between text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-purple-600 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base">
                            <li><a className="text-lg">Event</a></li> {/* Font size updated to text-lg */}
                            <li><a className="text-lg">Sponsors</a></li> {/* Font size updated to text-lg */}
                            <li><a className="text-lg">Speaker</a></li> {/* Font size updated to text-lg */}
                            <li><a className="text-lg">Gallery</a></li> {/* Font size updated to text-lg */}
                            <li><a className="text-lg">About Us</a></li> {/* Font size updated to text-lg */}
                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Register</button>
                        </ul>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 text-base">
                        <li><a className="text-lg">Event</a></li> {/* Font size updated to text-lg */}
                        <li><a className="text-lg">Sponsors</a></li> {/* Font size updated to text-lg */}
                        <li><a className="text-lg">Speaker</a></li> {/* Font size updated to text-lg */}
                        <li><a className="text-lg">Gallery</a></li> {/* Font size updated to text-lg */}
                        <li><a className="text-lg">About Us</a></li> {/* Font size updated to text-lg */}
                        <div className="flex items-center">
                            <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2">Register</button>
                        </div>
                    </ul>
                </div>


            </div>
        </div>
    );
}
