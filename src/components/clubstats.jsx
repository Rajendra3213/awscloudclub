function Clubstats() {

    return (
        <div className="w-full bg-transparent  shadow dark:bg-transparent my-11">
            <h2 className="text-4xl my-11 py-7 font-bold tracking-tight leading-none text-center text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 animate-gradient-x">
                    Our stats
                </span>
            </h2>

            <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                <div className={`p-4 bg-white rounded-lg md:p-8  dark:bg-transparent`} id="stats" role="tabpanel" aria-labelledby="stats-tab">
                    {/* Statistics content */}
                    <dl className="grid max-w-screen-xl grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8 p-4 mx-auto text-gray-900 justify-center items-center dark:text-white sm:p-8">
                        <div className="flex flex-col items-center">
                            <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
                            <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
                        </div>
                        <div className="flex flex-col items-center">
                            <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
                            <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
                        </div>
                        <div className="flex flex-col items-center">
                            <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
                            <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
                        </div>
                        {/* Add more items as needed */}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Clubstats;
