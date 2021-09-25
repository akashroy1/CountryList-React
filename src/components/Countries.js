import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './Country'

function Countries() {
    const url = 'https://restcountries.com/v3/all'
    const [country, setCountry] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setCountry(response.data)
        })
    }, [url])
    
    const allCountries= []
    
    if(country){
        for (let i = 0; i < country.length; i++) {
            allCountries.push({key:i, value:country[i]})
        }
    }

    return (
        <>
            <div className="center">
                {
                    allCountries.map((item) => (
                        <Country key={ item.key } value={ item.value }/>
                    ))
                }
            </div>
        </>
    )

}

export default Countries