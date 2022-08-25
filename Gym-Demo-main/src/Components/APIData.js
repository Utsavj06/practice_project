import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './ApiData.module.css';
import GymList from "../nearestgym.json";
import Rating from "./Rating";
import Card from "./common/Card";
import Gym1 from "../assents/Img/gym_poster_1.jpg";

const APIData = () => {

  const navigate = useNavigate();
  const [AllGymList, setMyGymList] = useState(GymList.data);

  const gymName = useSelector((state) => state.SearchReducer.name);
  console.log(useSelector((state)=>state.SearchLocation.location))
  // const gymLocation = useSelector((state)=>state.SearchLocation.location)

  useEffect(() => {
    let tmparr = [];

    if (gymName) {
      tmparr = GymList.data.filter((filteredName) => {
        return filteredName.gym_name.includes(gymName);
      });
    } else {
      tmparr = GymList.data;
    }
    tmparr?.length && setMyGymList([...tmparr]);
  }, [gymName]);

  const booking = (data) =>{
    navigate('/gym-desc',{state: data})
  }
  return (
    <div className={styles.top}>
      {AllGymList.map((itemList) => {
        return (
          <Card key={itemList.user_id}>
            <div className={styles.cardMaterial}>
              <div>
                <img src={itemList.cover_image ? itemList.cover_image : Gym1} />
              </div>
              <div className={styles.parentContentDiv} >
                <div>
                  <h1>{itemList.gym_name}</h1>
                  <Rating />
                  <p>
                    {itemList.address1 +
                      " " +
                      itemList.address2 +
                      " " +
                      itemList.city}
                  </p>
                </div>
                <div className={styles.bottomDiv} >
                  <h4 style={{ color: "yellow" }}>
                    Rs. {itemList.plan_price ? itemList.plan_price : 2000} for 3
                    Months
                  </h4>
                  <button className={styles.bottombutton} onClick={() => {
                        booking(itemList);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default APIData;
