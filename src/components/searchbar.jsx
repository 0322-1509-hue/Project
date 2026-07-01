function SearchBar() {
  return (
    <div className="flex justify-between items-center mb-6">

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        className="border rounded px-4 py-2 w-72 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Sort */}
      <select className="border rounded px-4 py-2 outline-none">
        <option>Sort by</option>
        <option>Name</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>

    </div>
  );
}

export default SearchBar;