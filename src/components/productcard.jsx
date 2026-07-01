function ProductCard({ product }) {
  return (
    <div className="border p-4">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;