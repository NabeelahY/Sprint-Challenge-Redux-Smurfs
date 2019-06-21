import React from 'react'
import Smurf from './Smurf';

const SmurfContainer = props => {
    return (
        <div>
           {props.smurfs.map(smurf => {
               return <Smurf smurf={smurf}/>
           })} 
        </div>
    )
}

export default SmurfContainer
