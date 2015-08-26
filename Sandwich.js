// Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

// bread
// meat
// cheese
// condiments
// veggies
// As before, one team member creates a Github project and adds the other(s) as collaborators.

// Your project should have one HTML file that has:

// a section of options for each sandwich part
// the ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
// a button with a label of "Make me a sandwich"
// an empty DOM element into which the final sandwich order and its cost will be inserted
// The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": "2.00", "bacon": "1.50"}

// Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

// Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient(s) selected by the user.

// The team should create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

// Don't worry about exposing the prices to the user until you display the final cost. This is just an exercise, not a business model.

var mySandwich = (function(){
  var ingredients: {
    Wheat: 1.00,
    White: 1.00,
    Rye: 1.50,
    Ham: 1.00,
    RoastBeef: 1.50,
    Turkey: 1.50,
    Pastrami: 2.00,
    American: 1.00,
    Cheddar: 1.50,
    Swiss: 1.50,
    Muenster: 2.00,
    Ketchup: 0.00,
    Mayo: 0.00,
    Mustard: 0.00,
    Pickles: 0.00,
    Lettuce: 0.00,
    Tomato: 0.00,
    Onion: 0.00,
    Peppers: 1.00,
  }

return sandwichCost: function();
  for
}())
