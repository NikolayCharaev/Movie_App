import React from 'react'

const RandomFactCart = (props) => {
  return (
    <div
    className="interesting__item"
    style={{
      backgroundImage: `url(${props.randomFilmImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top-center',
      backgroundSize: 'cover',
    }}
    >
    <div className="interesting__item-text">
      <p>{props.randomFilmText}</p>
    </div>
  </div>
  )
}

export default RandomFactCart
