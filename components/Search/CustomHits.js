import { connectStateResults } from "react-instantsearch-dom";

function Hits({ searchState, searchResults }) {
  console.log(Hits);
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p>Awwww Snap Yo.. No results found.</p>
      )}

      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <li key={hit.product}>{hit.title}</li>
          ))}
        </ol>
      )}
    </>
  );
}
export default connectStateResults(Hits);
