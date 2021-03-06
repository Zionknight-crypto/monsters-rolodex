import './cardlist.css'
import React from 'react'
import Card from './card'

const CardList = props => (

    <div className='card-list'>
        {props.monsters.map(monster => (
              <Card key={monster.id} monster={monster}></Card>
            ))}
    </div>

)

export default CardList;