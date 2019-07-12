const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}


// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  const element = ingredients[i];
  console.log(element);
}


// Write any loop (while or for) that prints out the contents of ingredients backwards:

var r = 0
reversedIngredients = ingredients.reverse();
while (r < reversedIngredients.length) {
  console.log(reversedIngredients[r]);
  r++;
}