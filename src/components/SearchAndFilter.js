import React from 'react'

export default function SearchAndFilter() {
  return (
    <div className='container d-flex justify-content-between'>
        <div><form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search for a country" aria-label="Search" />
             </form></div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Filter By Region
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

    </div>
  )
}
