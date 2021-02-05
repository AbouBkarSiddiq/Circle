import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
export default function File() {
  return (
    <div>
      <h1>Hello Northbridge</h1>
      <button className='btn btn-primary btn-lg'> Guru </button>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenu1" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          Dropdown
      </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
          <a class="dropdown-item" href="#!">Action</a>
          <a class="dropdown-item" href="#!">Another action</a>
        </div>
      </div>
    </div>
  )
}
