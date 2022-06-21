
import './App.css';

import Rickandmortyapi from "./components/Rickandmortyapi";
// import React from "@types/react";


function App() {
   return(
       <div>
           {/*simp*/}
           {/*<Character/>*/}


           {/*rickyandmort*/}

           <Rickandmortyapi id={'1'} name ={'Rick Sanchez'} status={"Alive"} image='https://rickandmortyapi.com/api/character/avatar/1.jpeg'/>
           <Rickandmortyapi id={'2'} name ={'Morty Smith'} status={"Alive"} image='https://rickandmortyapi.com/api/character/avatar/2.jpeg' />
           <Rickandmortyapi id={'3'} name ={'Summer Smith'} status={"Alive"} image='https://rickandmortyapi.com/api/character/avatar/3.jpeg'/>
           <Rickandmortyapi id={'4'} name ={'Beth Smith'} status={"Alive"} image='https://rickandmortyapi.com/api/character/avatar/4.jpeg' />
           <Rickandmortyapi id={'5'} name ={'Jerry Smith'} status={"Alive"} image='https://rickandmortyapi.com/api/character/avatar/5.jpeg' />
           <Rickandmortyapi id={'6'} name ={'Abadango Cluster Princess'} status={"Alive"} image='https://rickandmortyapi.com/api/character/avatar/6.jpeg'/>
       </div>
   )
}

export default App;
