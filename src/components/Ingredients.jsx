export default function Ingredients({ ingredientsList }) {
  return (
    <div className="mt-6 mb-6">
      <h1 className="text-2xl font-bold font-cYoungSerif text-primary-cNutmeg">
        Ingredients
      </h1>
      <ul className="list-disc marker:text-primary-cNutmeg marker:text-sm p-6 pt-2">
        {ingredientsList.map((ingredient, index) => (
          <li
            key={`${ingredient}_${index}`}
            className="text-secondary-cWengeBrown pl-4 mt-3"
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
