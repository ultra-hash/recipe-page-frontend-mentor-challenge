export default function PreparationTime({
  totalTime,
  preparationTime,
  cookingTime,
}) {
  return (
    <div className="bg-secondary-cRoseWhite p-6 rounded-lg mb-6 mt-6">
      <h2 className="text-xl font-bold font-cOutfit text-primary-cDarkRaspberry">
        Preparation time
      </h2>
      <ul className="p-6 list-disc marker:text-primary-cDarkRaspberry marker:text-sm">
        <li className="text-secondary-cWengeBrown pl-3">
          <span className="font-semibold">Total:</span> Approximately{" "}
          {totalTime} minutes
        </li>
        <li className="text-secondary-cWengeBrown mt-4 pl-3">
          <span className="font-semibold">Preparation:</span> {preparationTime}{" "}
          minutes
        </li>
        <li className="text-secondary-cWengeBrown mt-4 pl-3">
          <span className="font-semibold">Cooking:</span> {cookingTime} minutes
        </li>
      </ul>
    </div>
  );
}
