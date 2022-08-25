import React, { useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Styled from "styled-components";
import styles from "./Description.module.css";
import Error from "../../Components/common/Error";
import Facilities from "../../Components/Facilities";
import Filter5Icon from "@mui/icons-material/Filter5";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import MoneyIcon from "@mui/icons-material/Money";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import Rating from "../../Components/Rating";
import Descriptiontext from "./Descriptiontext";

const Wrap = Styled.div`
    border-radius: 10px;
    background-color: #a80e03;
    width: 170px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    font-size:15px;
`;

const DesriptionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  useEffect(()=>{
    if(!data){
      navigate('/errorPage')
    }
  },[])
  
  return (
    <>
      {data &&
      (    <div className="App">
            <div style={{backgroundImage: `url(${data.cover_image})`, width: '100%', height: '483px', objectFit: 'cover'}}>
              <div className={styles.backPage}>
                <h2
                  style={{ marginTop: "40px", cursor: "pointer" }}
                  onClick={() => navigate(-1)}
                >
                  {"<-- Back"}
                </h2>
              </div>
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <div className={styles.descriptionTitle}>
                  <h1 style={{ color: "white", fontSize: "55px" }}>{data.gym_name}</h1>
                  <h3 style={{ color: "white" , display:'flex'}}>
                    <LocationOnOutlinedIcon />
                    {data.address1 +" "+ data.address2+","+ " "+ data.city}</h3>
                </div>
                <div className={styles.descriptionRating}>
                  <div className={styles.ratingDesign}>
                    <Rating rating={data.rating}/>
                  </div>
                </div>
              </div>
              <div className={styles.descriptionHeader}>
                <div className={styles.descriptionStyle}>
                  <Descriptiontext desc={data.description} />
                  <div style={{height:'50px'}} />
                  <Facilities />
                  <div>
                    <h1 style={{ color: "white" }}>Why to Choose WTF?</h1>
                    <div style={{ display: "flex", gap: "10px" }}>
                      {[
                        { title: "Earn WFT Reward Point", icon: Filter5Icon },
                        { title: "Fully Vaccinated Staff", icon: VaccinesIcon },
                        {
                          title: "Track Fitness Journey",
                          icon: MonitorHeartIcon,
                        },
                        {
                          title: "Pocket Friendly Membership",
                          icon: MoneyIcon,
                        },
                      ].map((item, index) => {
                        return (
                          <div key={index} style={{ display: "flex" }}>
                            <Wrap>
                              <item.icon fontSize="large" />
                              {item.title}
                            </Wrap>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h1
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      How its Work?
                    </h1>
                    <div>
                      <ul className={styles.descriptionUnorderedList}>
                        {[
                          {
                            descDetail:
                              "Pick MemberShip Start date and Complete your Subscription by Clicking Buy Now below.",
                            icon: MaleOutlinedIcon,
                          },
                          {
                            descDetail:
                              "A dedicated general trainer will be assigned after have taken your Subscription",
                            icon: MaleOutlinedIcon,
                          },
                          {
                            descDetail:
                              "Explore WTF and start your fitness Journey",
                            icon: MaleOutlinedIcon,
                          },
                        ].map((item, index) => {
                          return (
                            <li key={index}>
                              <div style={{ display: "flex" }}>
                                <item.icon fontSize="large" />
                                {item.descDetail}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.buy}
              >
                Buy Now
              </button>
              <button
                className={styles.free}
              >
                Buy Now
              </button>
            </div>
          </div>
      )}
    </>
  );
};

export default DesriptionPage;
