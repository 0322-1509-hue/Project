function ProductCard({ product }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition">
      <div className="h-40 bg-slate-100 flex items-center justify-center text-slate-400">
        Image
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h2 className="font-semibold text-lg text-slate-900">{product.name}</h2>
          <p className="text-slate-500 text-sm">{product.category}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-900">{product.price}</span>
          <button className="bg-sky-600 text-white text-sm px-3 py-2 rounded-md hover:bg-sky-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;