import { ANIMALS } from "@frontendmasters/pet";
import React, { useState } from "react";
import UseDropdown from "./useDropdown";


const Paramas = () => {
  const [location, setLocation] = useState("Seattle, WA")
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = UseDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown] = UseDropdown('Bredd', '', breeds)

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Paramas;
