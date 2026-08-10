import "./style.css";
import feather from "feather-icons";

feather.replace();

const addMealBtn = document.getElementById("add-meal-btn");
const cardsContainer = document.getElementById("cards-container");
const mealForm = document.getElementById("meal-form");
const mealName = document.getElementById("meal-name");
const mealType = document.getElementById("meal-type");
const ingredients = document.getElementById("ingredients");
const mealContainer = document.getElementById("meal-container");
const cancelBtn = document.getElementById("cancel-btn");
const overlay = document.getElementById("overlay");

addMealBtn.addEventListener("click", () => {
  mealForm.classList.add("open");
  overlay.classList.add("open");
});

mealForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createNewMeal();
  mealForm.classList.remove("open");
  overlay.classList.remove("open");
});

cancelBtn.addEventListener("click", function () {
  mealForm.classList.remove("open");
  overlay.classList.remove("open");
});

function createNewMeal() {
  const mealCard = document.createElement("div");
  const mealTitle = document.createElement("h2");
  const mealType = document.createElement("div");
  mealCard.className = "card";
  mealType.className = "pill";
  mealTitle.textContent = mealName.value;
  mealType.textContent = mealName.value;
  mealCard.appendChild(mealType);
  mealCard.appendChild(mealTitle);
  cardsContainer.appendChild(mealCard);

  mealForm.classList.add("hidden");
}
