import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // use effect run tiap render
    useEffect(()=> { 
        setTimeout(()=> {
            fetch(url)
                .then(res =>{
                    // console.log(res);
                    if(!res.ok){
                        throw Error("could not fetch the data for that resource");
                    }
                    return res.json()
                })
                .then ((data)=> {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000); // simulate wait 1 second
    }, [url]);
    // [] dibelakang nikin use effect awal cuma run sekali, ga console lagi setelah ganti state
    // [name] dibelakang sebagai dependencies


    return { data, isPending, error};
}
 
export default useFetch;