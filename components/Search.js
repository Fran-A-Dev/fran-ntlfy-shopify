import { InstantSearch, SearchBox, Hits } from "react-instantsearch/dom";
import algoliasearch from "algoliasearch/lite";
import React, { Component } from "react";

const searchClient = algoliasearch(
  "6a44d0c93d60eac7dfd50a5bdccf9f25",
  "E9X7VUJFCQ"
);

class Search extends Component {
  render() {
    return (
      <InstantSearch
        searchClient={searchClient}
        indexName={"shopify_collections"}
      >
        <div>
          <SearchBox />
          <Hits hitComponent={Hits} />
        </div>
      </InstantSearch>
    );
  }
}

export default Search;
