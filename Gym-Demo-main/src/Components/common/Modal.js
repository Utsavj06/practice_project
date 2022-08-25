import React from "react";
import styled from "styled-components";

const Modals = styled.div`
  width: 300px;
  height: 150px;
  background-color: #58635b;
  position: absolute;
  display: flex;
  flex-direction:column;
  align-items:center;
`;

const Modal = ({children}) => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Modals>
        {children}
      </Modals>
    </div>
  );
};

export default Modal;
