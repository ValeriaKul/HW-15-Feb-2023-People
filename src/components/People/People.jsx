import React from 'react'

export default function People({link, name}) {
  return (
    <div className='one_people'>
        <img src={link} alt={name} />
        <p className='name'>{name}</p>
    </div>
  )
}
