/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function TeamList(props) {
  return (
        <ul>
            {
                props.teams.map((team, i) => (
                    <li key={i}>
                        <a 
                            href="#"
                            onClick={() => {
                                props.handleClick(team);
                            }}
                         >
                            {team}
                         </a>   
                    </li>
                ))
            }
        </ul>
  )
}

export default TeamList;