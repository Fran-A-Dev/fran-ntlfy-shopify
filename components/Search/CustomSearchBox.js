import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }) {
  return (
    <form>
      <label htmlFor="algolia_search">Search Products</label>
      <input
        id="algolia-search"
        type="search"
        placeholder="Buy stuff..."
        onChange={(e) => refine(e.currentTarget.value)}
      ></input>
    </form>
  );
}

export default connectSearchBox(SearchBox);
