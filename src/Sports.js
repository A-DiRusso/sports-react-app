/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Sports(props) {
  return (
    <ul>
        {
            props.sports.map((sport, i) => {
                return (
                    <li key={i}>
                        <a
                            href="#"
                            onClick={() =>{
                                props.handleClick(sport);
                            }}
                        >{sport}</a>
                    </li>
                )
            })
        }
    </ul>
  )
}

export default Sports;