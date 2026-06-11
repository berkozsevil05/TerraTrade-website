export default function Navbar() {
    return (
      <nav className="flex justify-between items-center py-6 px-8 bg-white shadow-md rounded-2xl mb-12">
  
        <a
          href="/"
          className="text-3xl font-bold text-[#2f3b1f]"
        >
          TerraTrade
        </a>
  
        <div className="flex gap-8 text-lg font-medium">
  
          <a
            href="/"
            className="hover:text-green-700 transition"
          >
            Home
          </a>
  
          <a
            href="/about"
            className="hover:text-green-700 transition"
          >
            About
          </a>
  
          <a
            href="/supplier"
            className="hover:text-green-700 transition"
          >
            Supplier
          </a>
  
          <a
            href="/buyer"
            className="hover:text-green-700 transition"
          >
            Buyer
          </a>
  
          <a
            href="/logistics"
            className="hover:text-green-700 transition"
          >
            Logistics
          </a>
  
        </div>
  
      </nav>
    )
  }