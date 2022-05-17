import React from 'react'

export default function SearchAndFilter({searchCallback}) {
   const handleInput = (event)=>{console.log(event);searchCallback(event?.target?.value)};
  return (
    <div className="container d-flex justify-content-between">
      <div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for a country"
            aria-label="Search" onInput={handleInput}
          />
        </form>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter By Region
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
