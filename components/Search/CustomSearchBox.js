import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }) {
  return (
    <form>
      <label htmlFor="algolia_search">Search Products</label>
      <input
        className="mt-1 block w-medium bg-cyan-300"
        placeholder="Placeholder"
        type="search"
        placeholder="I am a nerd"
        onChange={(e) => refine(e.currentTarget.value)}
      ></input>
    </form>
  );
}

export default connectSearchBox(SearchBox);
