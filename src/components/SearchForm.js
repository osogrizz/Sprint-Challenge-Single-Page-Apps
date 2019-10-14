import React, { useState } from "react";

export default function SearchForm(props) {
  console.log(props)
  return (
    <section className="search-form">
     <form  >
       <input type="search" name="search" placeholder="search" onChange={props.handleSearch} />
       {/* <button type="submit">Search</button> */}
     </form>
    </section>
  );
}
