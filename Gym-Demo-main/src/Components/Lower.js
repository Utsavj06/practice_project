import React from 'react'
import Styled from 'styled-components'
import styles from './lower.module.css'
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import Bar from '../assents/Img/redBar.png'

const Wrap = Styled.div`
    border-radius: 10px;
    background-color: #db1107;
    box-shadow: -5px -7px 3px #705e5d;
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    padding-top:-20px;
`

const Lower = () => {
    return (
        <>
            <div className={styles.top}>
                <div className={styles.lowerContents}>
                    <div className={styles.initialContent}>
                        <h1 className={styles.Heading}>
                            WTF Fitness<span>Experience ?</span>
                        </h1>
                        <div className={styles.gymCost}>
                            <img src={Bar} style={{ width:'60px', height:'170px', marginTop:'-15px'}} />
                            <h2 style={{ display: 'flex', flexDirection: 'column', 
                                         fontSize:'30px', marginTop:'-27px' }}>
                                @ Your Regular <span>gym cost?</span>
                            </h2>
                        </div>
                    </div>
                    <div style={{ width: '75%', display:'flex', justifyContent:'flex-end',
                                  alignItems:'center', height:'100%', gap:'10px', marginTop:'50px' }}>
                        {[{title:'Moder Equipment',
                           icon:ConstructionSharpIcon}, 
                           {title:'Skilled Trainer',
                            icon:RollerSkatingIcon},
                            {title:'Top Class Ambience',
                             icon:StickyNote2Icon}, 
                            {title:'Sanitized Gym',
                             icon:SanitizerIcon}].map((item, index) => {
                                return <div key={index} style={{ display: 'flex' }}>
                                    <Wrap style={{ display: 'flex', flexDirection:'column', justifyContent:'center' }}>
                                        {<item.icon fontSize='large'/>}
                                        {item.title}
                                    </Wrap>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lower