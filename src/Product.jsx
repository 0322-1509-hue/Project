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
    category: "Split Type",  },
  {
    id: 2,
    name: "LG Dual Inverter 1.5 HP",
    price: "₱34,990",
    category: "Inverter",  },
  {
    id: 3,
    name: "Carrier Aura 2.0 HP",
    price: "₱42,500",
    category: "Split Type",  },
  {
    id: 4,
    name: "Panasonic Premium 1.5 HP",
    price: "₱36,500",
    category: "Inverter",  },
  {
    id: 5,
    name: "Samsung WindFree 2.0 HP",
    price: "₱44,990",
    category: "Inverter",  },
  {
    id: 6,
    name: "Kolin Window Type 1.0 HP",
    price: "₱18,995",
    category: "Window Type",  },
];
  return (
  <div>
    <Navbar />
    <Banner />
    <div className="grid grid-cols-3 gap-6">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
    />
  ))}
</div>
    <Sidebar />
    <SearchBar />
    <page />
  </div>
);
}

export default Product;
