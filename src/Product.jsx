import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Sidebar from "./components/sidebar";
import SearchBar from "./components/searchbar";
import ProductCard from "./components/productcard";
import Page from "./components/page";

function Product() {
  const products = [
    {
      id: 1,
      name: "Daikin Split Type 1.0 HP",
      price: "₱28,995",
      category: "Split Type",
    },
    {
      id: 2,
      name: "LG Dual Inverter 1.5 HP",
      price: "₱34,990",
      category: "Inverter",
    },
    {
      id: 3,
      name: "Carrier Aura 2.0 HP",
      price: "₱42,500",
      category: "Split Type",
    },
    {
      id: 4,
      name: "Panasonic Premium 1.5 HP",
      price: "₱36,500",
      category: "Inverter",
    },
    {
      id: 5,
      name: "Samsung WindFree 2.0 HP",
      price: "₱44,990",
      category: "Inverter",
    },
    {
      id: 6,
      name: "Kolin Window Type 1.0 HP",
      price: "₱18,995",
      category: "Window Type",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner />

      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          <Sidebar />

          <div className="space-y-6">
            <SearchBar />

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Page />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
