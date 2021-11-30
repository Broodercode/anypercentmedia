import React, {useState, useEffect} from 'react';

function MenuService() {
    const [loaded, setLoaded] = useState([])

    // function fetchSubscription() {
    //     fetch('')
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
       
    //         setLoaded(data.results);
    //     })
    // }
    useEffect(() => {
        const fetchData = async () => {
           const result = api.get('') 
        }
    })

    return (
        <div className="">
            <h1>test</h1>
        </div>
    )
}