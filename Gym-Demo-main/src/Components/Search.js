import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "./Search.module.css";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import { getGym } from "../redux/Actions/Action";
import Modal from "./common/Modal";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClear = () => {
    setSearchInput("");
  };

  useEffect(() => {
    dispatch(getGym({ name: searchInput }));
  }, [searchInput]);

  const handleLocationSelect = () => {
    setModal(true);
  };

  const handleModalNavigation = () => {
    navigate("/");
    setModal(false);
  };

  return (
    <>
      <div className={styled.top}>
        <div className={styled.searchBar}>
          <div className={styled.searchWrite}>
            <SearchIcon
              fontSize="medium"
              sx={{ color: "white", marginTop: "5px" }}
            />
            <input
              className={styled.searchWriteStyle}
              type="text"
              name="searchInput"
              placeholder="Search gym name here"
              onChange={(e) => handleChange(e)}
              value={searchInput}
            />
          </div>
          <div className={styled.searchButtons}>
            <button
              className={styled.locationButton}
              onClick={handleLocationSelect}
            >
              <RoomIcon fontSize="large" />
            </button>
            <button className={styled.clearText} onClick={handleSearchClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className={styled.modalStyle}>
            <h4>
              In order to give you the better experience we need your location
              access.
            </h4>
          </div>
          <div className={styled.modalButtons}>
            <span onClick={() => setModal(false)} style={{ cursor: "pointer" }}>
              Cancel
            </span>
            <span
              onClick={handleModalNavigation}
              style={{ color: "red", cursor: "pointer" }}
            >
              Ok
            </span>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Search;
