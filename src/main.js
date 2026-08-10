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

let meals = loadMeals();

function initializeApp(meals) {
  meals.forEach(function (meal) {
    renderCard(meal);
  });
}

initializeApp(meals);

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

  this.reset();
});

cancelBtn.addEventListener("click", function () {
  mealForm.classList.remove("open");
  overlay.classList.remove("open");
});

function createMeal() {
  const newMeal = {
    id: crypto.randomUUID(),
    name: mealNameInput.value,
    type: mealTypeInput.value,
    ingredients: ingredientsInput.value,
  };

  return newMeal;
}

function addDeleteListener(deleteBtn, meal, mealCard) {
  deleteBtn.addEventListener("click", function () {
    deleteMeal(meal.id);
    mealCard.remove();
  });
}

function deleteMeal(id) {
  meals = meals.filter(function (meal) {
    return meal.id !== id;
  });
  localStorage.setItem("meals", JSON.stringify(meals));
}

function saveMeal(meal) {
  meals.push(meal);
  localStorage.setItem("meals", JSON.stringify(meals));
}

function renderCard(meal) {
  const mealCard = document.createElement("div");
  const mealTitle = document.createElement("h2");
  const cardHeader = document.createElement("div");
  const mealTypeEl = document.createElement("div");
  const deleteBtn = document.createElement("button");

  mealCard.className = "card";
  cardHeader.className = "card-header";
  mealTypeEl.className = "pill";
  deleteBtn.className = "delete-btn";

  mealTitle.textContent = meal.name;
  mealTypeEl.textContent = meal.type;
  deleteBtn.textContent = "x";

  mealCard.appendChild(cardHeader);
  cardHeader.appendChild(mealTypeEl);
  cardHeader.appendChild(deleteBtn);
  mealCard.appendChild(mealTitle);

  cardsContainer.appendChild(mealCard);

  addDeleteListener(deleteBtn, meal, mealCard);
}

function loadMeals() {
  const savedMeals = localStorage.getItem("meals");

  if (savedMeals === null) {
    return [];
  }

  return JSON.parse(savedMeals);
}
