import React from 'react'
import './Main.css'
import background from '../../background.png'
import { animals } from '../../data'
import Animal from '../Animal/Animal'

export default function Main() {
  return (
    <main>
      <img src={background} alt="farmyard" />
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          type={animal.type}
          name={animal.name}
          top={animal.top}
          left={animal.left}
          says={animal.says}
        />
      ))}
    </main>
  )
}
