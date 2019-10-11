import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import SWPList from './components/SWPList';
import styled from 'styled-components';


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const App = props => {

const [data, setData] = useState([]);
useEffect(() => {
axios 
  .get (`https://swapi.co/api/people/`)
  .then(response => {
    const data = response.data.results;
    console.log("Character Data", data);
    setData(data);
  })
  .catch(error => {
    console.log("ERROR beep boop", error);
  });
},[]);





const Container = styled.div`
  color: #000000;
  
`;
const Div = styled.div`

`;



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container>
        <Div>
          {data.map(data => {
            return (
              <SWPList
              key={data.id}
              name={data.name}
              height={data.height}
              gender={data.gender}
              skin={data['skin_color']}
              eyes={data['eye_color']}
              />
            );
          })}
        </Div>
      </Container>
    </div>
  );
}

export default App;
