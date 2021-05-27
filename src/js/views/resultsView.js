import View from "./View.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".search-results");
  _parentError = document.querySelector(".search-results");
  _errorMessage =
    "No recipes found for your query! </br> Please, try another one. E.g 'pizza'";

  _generateMarkup() {
    return this._data.map((el) => this._generateMarkupResult(el)).join("");
  }

  _generateMarkupResult(item) {
    return `
        <a href="#${item.id}" class="preview">
            <img
            src="${item.image}"
            class="preview-image"
            />
            <h3 class="preview-title">${item.title}</h3>
            <h3 class="preview-author">Author: ${item.publisher}</h3>
        </a> 
      `;
  }
}

export default new ResultsView();
