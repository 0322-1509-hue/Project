function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-8 py-4">

        <div className="flex items-center gap-6 min-w-0">
          <div className="border border-slate-200 rounded-md px-5 py-2 font-bold whitespace-nowrap text-sky-700">
            LOGO
          </div>

          <ul className="flex items-center gap-8 text-sm font-medium whitespace-nowrap overflow-x-auto text-slate-700">
            <li className="cursor-pointer hover:text-sky-600">Home</li>
            <li className="cursor-pointer hover:text-sky-600">Services</li>
            <li className="cursor-pointer border-b-2 border-sky-700 pb-1 text-sky-900">Products</li>
            <li className="cursor-pointer hover:text-sky-600">About Us</li>
            <li className="cursor-pointer hover:text-sky-600">Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;