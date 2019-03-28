import React from "react";

export default function FilmsByGenre({genres}) {
  return(
      <div className = "films-by-genre">
        <div className = "films-by-genre-text">
          {"Films by " + genres + " genre"}
        </div>
      </div>
  );
}