export default function ServiceCard({ title, description, image, bgColor }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md ${bgColor}
      flex flex-col h-full items-center text-center
      transform transition-all duration-300
      hover:scale-105 hover:shadow-xl`}
    >
      <h3 className="text-lg font-bold text-gray-900 mb-2 lg:text-2xl">
        {title}
      </h3>

      <p className="text-sm text-gray-700 mb-4 lg:text-[20px]">
        {description}
      </p>

      <img
        src={image}
        alt={title}
        className="h-52 object-contain"
      />
    </div>
  );
}