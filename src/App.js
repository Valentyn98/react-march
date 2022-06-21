
import './App.css';

import Rickandmortyapi from "./components/Rickandmortyapi";
import React from "@types/react";

// 1. Описати всю сім'ю сімпсонів (5 персонажів)
function App() {
   return(
       <div>
           {/*simp*/}
           {/*<Character/>*/}


           {/*rickyandmort*/}

           <Rickandmortyapi id={'1'} name ={'Rick Sanchez'} status={"Alive"} img={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'} />

       </div>
   )
}

export default App;
