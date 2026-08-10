import "./style.css";
import feather from "feather-icons";

feather.replace();

const addMealBtn = document.getElementById("add-meal-btn");
const cardsContainer = document.getElementById("cards-container");
const cancelBtn = document.getElementById("cancel-btn");
const overlay = document.getElementById("overlay");

const mealForm = document.getElementById("meal-form");
const mealNameInput = document.getElementById("meal-name-input");
const mealTypeInput = document.getElementById("meal-type-input");
const ingredientsInput = document.getElementById("ingredients-input");

const meals = [];

addMealBtn.addEventListener("click", () => {
  mealForm.classList.add("open");
  overlay.classList.add("open");
});

mealForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newMeal = createMeal();

  saveMeal(newMeal);

  renderCard(newMeal);

  mealForm.classList.remove("open");
  overlay.classList.remove("open");
  mealForm.classList.add("hidden");
});

cancelBtn.addEventListener("click", function () {
  mealForm.classList.remove("open");
  overlay.classList.remove("open");
});

function createMeal() {
  const newMeal = {
    name: mealNameInput.value,
    type: mealTypeInput.value,
    ingredients: ingredientsInput.value,
  };

  return newMeal;
}

function saveMeal(meal) {
  meals.push(meal);
  console.log(meals);
}

function renderCard(meal) {
  const mealCard = document.createElement("div");
  const mealTitle = document.createElement("h2");
  const mealTypeEl = document.createElement("div");

  mealCard.className = "card";
  mealTypeEl.className = "pill";

  mealTitle.textContent = meal.name;
  mealTypeEl.textContent = meal.type;

  mealCard.appendChild(mealTypeEl);
  mealCard.appendChild(mealTitle);

  cardsContainer.appendChild(mealCard);
}
