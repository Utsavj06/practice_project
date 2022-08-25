import React , { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLocation } from "../redux/Actions/Action";
import styled from './SideComponent.module.css'

const SideComponent = () => {
  const dispatch = useDispatch()
  const [selection, setSelection] = useState()

  const handleSelection = (e) => {
    setSelection(e.target.value)
  }
  useEffect(()=>{
    dispatch(getLocation(selection))
  },[selection])

  return (
    <>
      <div className={styled.topDiv}>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{fontSize:'35px'}}>Filter</h1>
            <button className={styled.ResetButton}>
              Reset
            </button>
          </div>
          <div>
            <h3>Location</h3>
            <input
              type="text"
              placeholder="Enter Location"
              className={styled.LocationInput}
            />
          </div>
          <div>
            <h3>Price</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                placeholder="Min"
                className={styled.Price}
              />
              <input
                type="text"
                placeholder="Max"
                className={styled.Price}
              />
            </div>
          </div>
          <div>
            <h3>Cities</h3>
            <select
              name="city"
              value={selection} 
              className={styled.citySelection}
              onChange={handleSelection}
            >
              {["New Delhi", "Ghaziabad", "Noida", "Delhi"].map(
                (item, index) => {
                  return (
                    <option key={index}>
                      {item}
                    </option>
                  );
                }
              )}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideComponent;
