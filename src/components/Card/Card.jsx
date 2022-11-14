import React from 'react'
import './card.css'

import perfume1 from '../../img/image-product-desktop.jpg'
import perfume2 from '../../img/image-product-mobile.jpg'
import cart from '../../img/icon-cart.svg'

const Card = () => {
  return (
    <div className='card'>
        <img src={perfume1} alt='perfume' id='img1' />
        <img src={perfume2} alt='perfume' id='img2' />
         <div className='card-text-perfume slide-in-right '>
            <h3>P E R F U M E</h3>
            <div className='card-text slide-in-right '>
                <h2>Gabrielle Essence Eau De Parfum</h2>
                <p>A floral, solar voluptous interpretation composed by Olivier Polge,
                    Perfumer-Creator for the House of CHANEL
                </p>
                <h1>$149.99 &nbsp;<span>$169.99</span></h1>
            </div>
            <div className='card-button hvr-grow '>
                <button type='button'><img src={cart} />Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card