import React from 'react';


const Rickandmortyapi = (props) => {
    let {id,name,status,image} = props
    console.log(props.id)
    return (
        <div>
            <div className="App">
                <h1>{id}</h1>
                <h2>{name}</h2>
                <h3>{status}</h3>
                <img src={image} alt=""/>

                <h1>2</h1>
                <h2>Morty Smith</h2>
                <h3>Alive</h3>
                <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt=""/>

                <h1>3</h1>
                <h2>Summer Smith</h2>
                <h3>Alive</h3>
                <img src="https://rickandmortyapi.com/api/character/avatar/3.jpeg" alt=""/>

                <h1>4</h1>
                <h2>Beth Smith"</h2>
                <h3>Alive</h3>
                <img src="https://rickandmortyapi.com/api/character/avatar/4.jpeg" alt=""/>

                <h1>5</h1>
                <h2>Jerry Smith</h2>
                <h3>Alive</h3>
                <img src="https://rickandmortyapi.com/api/character/avatar/5.jpeg" alt=""/>

                <h1>6</h1>
                <h2>Abadango Cluster Princess</h2>
                <h3>Alive</h3>
                <img src="https://rickandmortyapi.com/api/character/avatar/6.jpeg" alt=""/>
            </div>


        </div>
    );
};

export default Rickandmortyapi;