import {useEffect, useState} from 'react'

function useCurrenyinfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate.host/live?access_key=4704609ad4ea597ff151edeb5d7a88f3`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, )
    console.log(data);
    return data;
}