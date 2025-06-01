const Categories = () => {
  const categories = [
    { id: 1, name: "Security Agents", img: "/assets/images/police.svg" },
    { id: 2, name: "Work", img: "/assets/images/work.svg" },
    { id: 3, name: "Education", img: "/assets/images/education.svg" },
    { id: 4, name: "Health", img: "/assets/images/medical.svg" },
  ];

  return (
    <section className="w-full h-fit bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-gray-600 font-bold text-center text-xl">
        Learn your Rights
      </h2>
      <div className="w-full h-fit grid grid-cols-2 gap-4 mt-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center px-2 py-5 border-b bg-[#ef2fff] hover:bg-[#d9c6ff] transition-colors duration-300 rounded-lg flex-col"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-[90%] h-15 mr-4"
            />
            <span className="text-white">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
