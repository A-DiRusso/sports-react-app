import React from 'react'

export default function PlayerList({players}) {
  return (
    <ul>
        {
            players.map((player, i) => <li key={i}>{player}</li>)
        }
    </ul>
  )
}
