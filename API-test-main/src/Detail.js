import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'

const Detail = () => {
  const [name, setName] = useState();
  useEffect(() => {
    async function getData() {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setName(result.data);
    }
    getData();
  },[]);

  

  return <div>{name?.map((elem)=>{
    return (<Container>
      <Title>
          <ID>{`ID:- ${elem.id}`}</ID>
          <UserName>{elem.username}</UserName>
      </Title>
           <Name>{elem.name}</Name>
           <Email>{elem.email}</Email>
    </Container>)
  })}</div>;
};

export default Detail;


const Container = styled.div`
        width:50%;
        background-color:red;
        height:150px;
        margin-top:2%;
        margin-left:25%;
`

const ID = styled.div`
        font-size:25px;
        background-color:white;
        width:80px;
        margin-top:5px;
        height:30px;
`

const Name = styled.div`
      font-size:25px;
      color:white;
      width:290px;
      margin-top:35px;
`

const Title = styled.div`
        display:flex;
        justify-content:space-around;
        
`

const UserName = styled.div`
        font-size:25px;
        background-color:white;
        width:190px;
        margin-top:5px;
`

const Email = styled.div`
        margin-left:450px;
        color:white;
`