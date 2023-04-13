import CompA from './CompA';
import React, { createContext } from 'react';

const FirstName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Ram"}>
        <CompA />
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName} ;
