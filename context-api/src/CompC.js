import React from 'react';
import {FirstName} from './App';

const CompC = () => {
  return (
    <>
     <FirstName.Consumer>
       {
        (fname)=>{
          return <div>My name is {fname}</div>
        }
       }
     </FirstName.Consumer>
    </>
  )
}

export default CompC