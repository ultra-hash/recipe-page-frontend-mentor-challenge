export default function Nutrition({ nutritionList }) {
  return (
    <div className="mb-6 mt-6">
      <h1 className="text-2xl font-bold font-cYoungSerif text-primary-cNutmeg mb-4">
        Nutrition
      </h1>
      <p className="text-secondary-cWengeBrown font-medium">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <ul className="mt-4 mb-4">
        {nutritionList.map((nutrition, index) => (
          <li
            key={`${nutrition}_${index}`}
            className={`w-full pt-2 pb-2 flex ${
              index < nutritionList.length - 1
                ? "border-b border-secondary-cLightGrey"
                : ""
            } `}
          >
            <p className="pl-4 w-1/2 text-secondary-cWengeBrown font-medium">
              {nutrition.title}
            </p>
            <p className="pl-4 w-1/2 text-primary-cNutmeg font-bold">
              {nutrition.value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
