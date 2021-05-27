import icons from "url:../../images/icons.svg";
import { Fraction } from "fractional";
import View from "./view";

class RecipeView extends View {
  _parentElement = document.querySelector(".content-box");
  _parentError = document.querySelector(".search-results");
  _errorMessage = "We could not find that recipe. Please try another one!";

  _generateMarkup() {
    return `
      <h1 class="heading--1">${this._data.title}</h1>
      <img src="${this._data.image}" class="main-img" alt="${
      this._data.title
    }" />
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes"
            >${this._data.cookingTime}</span
          >
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>
        </div>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">

      ${this._data.ingredients
        .map((ing) => this._generateMarkupIngredient(ing))
        .join("")}
        </ul>
      </div>
    `;
  }

  _generateMarkupIngredient(ing) {
    return `
        <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${icons}#icon-check"></use>
          </svg>
          <div class="recipe__description">
            <span class="recipe__unit">${
              ing.quantity ? new Fraction(ing.quantity).toString() : ""
            } ${ing.unit}</span>
            ${ing.description}
          </div>
        </li>
      `;
  }

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((event) => addEventListener(event, handler));
  }
}

export default new RecipeView();
