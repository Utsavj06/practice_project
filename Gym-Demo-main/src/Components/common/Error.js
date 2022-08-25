import React from "react";
import styled from './Error.module.css'
import find from '../../assents/Img/finding-signatures.gif'

const Error = () => {
  return (
    <>
      <div className={styled.Error}>
        <img src={find} alt='find' />
        <p>No Data Founs</p>
        <p>Please try again later</p>
      </div>
    </>
  );
};

export default Error;
