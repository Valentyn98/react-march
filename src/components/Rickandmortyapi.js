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
            </div>


        </div>
    );
};

export default Rickandmortyapi;