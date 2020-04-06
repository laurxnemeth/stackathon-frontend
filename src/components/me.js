import React from 'react'
import thedev from '../developer.png'
import { links } from '../links'

const Me = () => {
  return (
    <div id="me">
      <img src={thedev} alt="image of laura nemeth" id="selfie" />
      <p>
        {' '}
        I’m Laura Nemeth, your friendly neighborhood developer! Other than
        coding, I spend my free time crocheting too many sweaters, baking a
        variety of pastries, and playing Animal Crossing. I’m passionate about
        knowledge, information, and the accessibility of data. Hope you enjoy
        this website, and consider getting a library card from your local
        branch!
      </p>
      {links.map((link, idx) => {
        return (
          <div id={idx}>
            <img src={link.img} alt={link.name} />
          </div>
        )
      })}
    </div>
  )
}

export default Me
