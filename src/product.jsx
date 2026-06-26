function Product() {
    const product = [
        {
        name: 'Product 1',
        price: "P20"
        },
        {
        name: 'Product 2',
        price: "P30"
        },
        {
        name: 'Product 3',
        price: "P40"
        },
    ]
    return (
        <div className="p-10">
            <h1>Product List</h1>
            <div className="grid grid-cols-3 gap-6">
                {product.map((item, index) => (
                    <div
                    key={index}
                    className="border p-5 rounded"
                >
                    <div className="h-40 bg-gray-300">
                        test
                    </div>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <button>View</button>
                </div>
                ))}
            </div>
        </div>
    );

}
export default Product;