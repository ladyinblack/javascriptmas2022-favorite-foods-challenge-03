// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Javascriptmas 2022</h1>`;
appDiv.innerHTML += `<h2>Favorite Foods</h2>`;

/**
 * TOPIC: Object Destructuring
 * 1. Edit the faveFoods object so that it contains your favorite foods.
 * 2. Destructure the faveFoods object into three consts: breakfast, lunch, and supper.
 * 3. Fetch the meals <section> from the DOM.
 * 4. Set the innerHTML content of the meals <section> to a paragraph that states what your favorite foods are for breakfast, lunch, and supper.
 * Use a template literal to construct the string.
 *
 * E.g.
 * For breakfast, I only like croissants 🥐.  For lunch, I love pasta 🍝, and for supper I usually want pizza 🍕.
 */

const faveFoods = {
  breakfast: ``,
  lunch: ``,
  supper: ``,
};

/** 1. */
faveFoods.breakfast = 'croissants 🥐';
faveFoods.lunch = 'pasta 🍝';
faveFoods.supper = 'pizza 🍕';

/** 2. */
let { breakfast, lunch, supper } = faveFoods;

/** 3. */
const meals = document.createElement('section');
meals.id = 'meals';

console.log(breakfast);
console.log(lunch);
console.log(supper);

/** 4. */
meals.innerHTML = `<p>For breakfast, I only like ${breakfast}. For lunch, I love ${lunch}, and for supper I want usually want ${supper}.</p>`;
console.log(meals);
appDiv.appendChild(meals);
