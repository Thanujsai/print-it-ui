// Define the allIngredients array without TypeScript annotations
export const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🦸‍♂️", label: "Superhero" },
    { icon: "🔧 ", label: "Gadget" },
    { icon: "🧩", label: "Parts" },
    { icon: "🥂", label: "Champers?" }
  ];
  
  // Destructure the first three ingredients from the allIngredients array
  const [Superhero, Gadget, Parts] = allIngredients;
  export const initialTabs = [
    allIngredients[6], // Superhero
    allIngredients[7], // Gadget
    allIngredients[8]  // Parts
  ];
  
  // Function to get the next ingredient
  export function getNextIngredient(ingredients) {
    const existing = new Set(ingredients.map(ingredient => ingredient.label));
    return allIngredients.find((ingredient) => !existing.has(ingredient.label));
  }
  