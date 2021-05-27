class SearchView {
  _parentElement = document.querySelector(".search-box");

  getQuery() {
    const query = this._parentElement.querySelector(".search-input").value;
    this._parentElement.querySelector(".search-input").value = "";
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
