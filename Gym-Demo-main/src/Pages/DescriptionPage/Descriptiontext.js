import React from 'react'

const Descriptiontext = ({desc}) => {
    return (
        <>
            <div>
                <div>
                    <h1 style={{ color: 'white' }}>Description</h1>
                </div>
                <div style={{fontSize:'20px', color:'white'}}>
                   {desc}
                </div>
            </div>
        </>
    )
}

export default Descriptiontext