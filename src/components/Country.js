import React from 'react'

const Country = (props) => {

    let temp = []
    if(props.value.capital) {
        temp = props.value.capital
    }

    return (
        <>
            <div className="card">
                <div className="img">     
                    <img src={props.value.flags[0]} alt={props.value.name.common} />
                </div>
                <div className="title">
                    <h3>{props.value.name.common}</h3>
                </div>
                <div className="desc">
                    <h4>Capital: {temp[0]}</h4>
                    <h4>Region: <span>{props.value.region}</span></h4>
                    <h4>Subregion: <span>{props.value.subregion}</span></h4>
                    <h4>Area: <span>{props.value.area} km<sup>2</sup></span></h4>
                </div>
            </div>
        </>
    )
}

export default Country