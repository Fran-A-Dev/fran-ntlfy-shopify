import React from "react";

export default function Hit({ hit, onClick }) {
  return (
    <div>
      <header>
        <div>{hit.handle}</div>
      </header>

      <div>{hit.title}</div>
      <div>
        <button onClick={() => onClick(hit)}>Deets</button>
      </div>
    </div>
  );
}
