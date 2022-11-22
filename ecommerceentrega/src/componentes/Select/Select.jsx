import React, {useState, useEffect} from 'react'
import Data from '../../config/data'

const Select = () => {
  const [data, setData]=useState(Data)
  return (
    <div className="container-fluid mx-2">
      <div className="row mt-5 mx-2">
        <div className="col-md-3">
          <button className="btn btn-warning w-100 mb-4">Men</button>
          <button className="btn btn-warning w-100 mb-4">Women</button>
          <button className="btn btn-warning w-100 mb-4">Children</button>
          <button className="btn btn-warning w-100 mb-4">Black</button>
          <button className="btn btn-warning w-100 mb-4">White</button>
          <button className="btn btn-warning w-100 mb-4">All</button>

        </div>
      </div>
    </div>
  )
}

export default Select