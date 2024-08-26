import React, { useEffect, useState } from 'react';
import { getPlayerWinPercentage } from '../Services/ChessAPIService'
import '../styling/PlayerCard.css';


const PlayerWinPercentage = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const data = await getPlayerWinPercentage();
            if (data) {
                setPlayers(data);
                console.log(data);
            }
        };
        fetchPlayers();
    }, []);

    return (
        <>
        <div className="player-cards">
            {players.map((player, index) => (
                <div key={index} className="card">
                    <p>Full Name : {player.fullName}</p>
                    <p>Total Matches Won: {player.totalMatchesWon}</p>
                    <p>Win Percentage: {player.winPercentage}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default PlayerWinPercentage ;