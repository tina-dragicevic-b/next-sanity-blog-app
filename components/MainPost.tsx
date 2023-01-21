function MainPost(){
    return(
        <div className="flex justify-between items-center
        bg-yellow-400 border-y border-b-black py-10 lg:py-0">
            <div className="px-10 py-2 space-y-2">
                <h1 className="text-6xl 
                max-w-xl 
                font-serif">
                    <span className="underline 
                    decoration-4
                    decoration-green-900">Tina's blog</span> is a place to write, read and connect. </h1>
                <h2>
                    It's easy to love Christmas. Because Christmas. Yay!
                </h2>
            </div>
            <div>
                <img className="hidden md:inline-flex h-50 lg:h-full"
                 src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"/>
            </div>
        </div>
    )
}
export default MainPost