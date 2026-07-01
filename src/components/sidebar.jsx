function Sidebar() {

  const categories = [
    "All Products",
    "Split Type",
    "Window Type",
    "Inverter",
    "Portable",
    "Accessories",
  ];

  return (
    <div className="w-60 bg-white border rounded p-5">

      <h2 className="font-bold text-lg mb-5">
        Categories
      </h2>

      <ul className="space-y-4">

        {categories.map((category, index) => (

          <li
            key={index}
            className="cursor-pointer hover:text-blue-600"
          >
            {category}
          </li>

        ))}

      </ul>

    </div>
  );
}

export default Sidebar;