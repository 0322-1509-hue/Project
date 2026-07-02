function SearchBar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
      <input
        type="text"
        placeholder="Search products..."
        className="border border-slate-300 rounded-xl px-4 py-3 w-full max-w-md outline-none focus:ring-2 focus:ring-sky-300"
      />

      <select className="border border-slate-300 rounded-xl px-4 py-3 w-full max-w-xs outline-none focus:ring-2 focus:ring-sky-300">
        <option>Sort by</option>
        <option>Name</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
}

export default SearchBar;