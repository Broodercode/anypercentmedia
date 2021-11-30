import React, { useEffect, useState }from 'react';
import api from '../api'

function TwitchWH() {
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams?first=40")
            console.log(result.data)
        }
        fetchData()
    })
    return (
        <div>
            <h1>Big Papa Test</h1>
        </div>
    )
}

export default TwitchWH;