export default function Instructions({ instructionList }) {
  return (
    <div className="mt-6 mb-6">
      <h1 className="text-2xl font-bold font-cYoungSerif text-primary-cNutmeg">
        Instructions
      </h1>
      <ol className="list-decimal marker:text-primary-cNutmeg marker:text-sm marker:font-bold p-6 pt-2">
        {instructionList.map((instruction, index) => (
          <li
            key={`${instruction}_${index}`}
            className="text-secondary-cWengeBrown pl-4 mt-3"
          >
            <span className="font-bold">{instruction.title}: </span>
            {instruction.actualInstruction}
          </li>
        ))}
      </ol>
    </div>
  );
}
