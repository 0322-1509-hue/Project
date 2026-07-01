function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="border px-5 py-2 font-bold">
          LOGO
        </div>

        {/* Navigation */}
        <ul className="flex gap-10 text-sm font-medium">

          <li className="cursor-pointer hover:text-blue-600">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            Services
          </li>

          <li className="cursor-pointer border-b-2 border-black pb-1">
            Products
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            About Us
          </li>

          <li className="cursor-pointer hover:text-blue-600">
            Contact
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <button className="text-2xl">
            🛒
          </button>

          {/* Login */}
          <button className="border px-5 py-2 rounded hover:bg-black hover:text-white transition">
            Login
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;