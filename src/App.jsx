import PreparationTime from "./components/PreparationTime";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import "./App.css";

function App() {
  const imageUrl = "/assets/images/image-omelette.jpeg";
  const title = "Simple Omelette Recipe";
  const description = `An easy and quick dish, perfect for any meal. 
    This classic omelette combines beaten eggs cooked to perfection, 
    optionally filled with your choice of cheese, vegetables, or meats.`;

  const preparationTime = {
    total: 10,
    preparation: 5,
    cooking: 5,
  };

  const ingredientsList = [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ];

  const instructionList = [
    {
      title: "Beat the eggs",
      actualInstruction:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture",
    },
    {
      title: "Heat the pan",
      actualInstruction:
        "Place a non-stick frying pan over medium hear and add butter or oil.",
    },
    {
      title: "Cook the omelette",
      actualInstruction:
        "Once the butter is melted and bubbling, pur in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      title: "Add fillings (optional)",
      actualInstruction:
        "When the eggs begin to set at the edges but are still slightly runny in middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      title: "Fold and server",
      actualInstruction:
        "As the omelette continues to cook, carefully life one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      title: "Enjoy",
      actualInstruction:
        "Server hot, with additional salt and pepper if needed.",
    },
  ];

  const nutritionList = [
    { title: "Calories", value: "277kcal" },
    { title: "Carbs", value: "0g" },
    { title: "Protein", value: "20g" },
    { title: "Fat", value: "22g" },
  ];

  return (
    <div className="page bg-secondary-cEggShell lg:pt-16 lg:pb-16">
      <div className="font-cOutfit lg:max-w-[960px] bg-secondary-cWhite lg:m-auto lg:rounded-3xl lg:shadow-lg shadow-secondary-cLightGrey lg:p-10">
        <img className="w-full lg:rounded-2xl" src={imageUrl} alt={title} />
        <div className="p-8 lg:pl-0 lg:pr-0">
          <h1 className="font-cYoungSerif text-3xl font-bold text-secondary-cDarkCharcoal mb-4">
            {title}
          </h1>
          <p className="text-secondary-cWengeBrown text-cParagraph mb-4">
            {description}
          </p>

          <PreparationTime
            totalTime={preparationTime.total}
            preparationTime={preparationTime.preparation}
            cookingTime={preparationTime.cooking}
          />

          <Ingredients ingredientsList={ingredientsList} />
          <hr />
          <Instructions instructionList={instructionList} />
          <hr />
          <Nutrition nutritionList={nutritionList} />
        </div>
      </div>
    </div>
  );
}

export default App;
