

const Heder = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 mt-16 bg-gray-900">
        <div>
            <h1 className="text-2xl font-bold text-orange-500">CodePrepration</h1>
        </div>
        <div className="flex items-center gap-12">
            <ul className="flex items-center gap-10">
                <li> <a href="#about" className="hover:text-orange-500 text-white">About us</a></li>
                <li> <a href="#services" className="hover:text-orange-500 text-white">Services</a></li>
                <li> <a href="#use-cases" className="hover:text-orange-500 text-white">Use Cases</a></li>
                <li> <a href="#pricing" className="hover:text-orange-500 text-white">Pricing</a></li>
                <li> <a href="#blog" className="hover:text-orange-500 text-white">Blog</a></li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Request a quote
            </button>
        </div>
    </div>
  )
}

export default Heder
