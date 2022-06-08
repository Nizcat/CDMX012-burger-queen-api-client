
import './Waiter.css'
import React, { useState } from 'react'
import Menu from '../../helpers/Menu'
import CrudApi from '../Waiter/ListStatus/CrudApi'

export default function WaiterPage () {
  const [filterMenu, setFilterMenu] = useState()

  return (
    <div className='container-waiter'>
      <section className='container-take-orders'>
        <div className='option-menu'>
          <button className='btn-menu' value='breakfast' onClick={(e) => setFilterMenu(e.target.value)}>
          {' '}
          Breakfast
          </button>
          <button type='button' className='btn-menu' value='burgers' onClick={(e) => setFilterMenu(e.target.value)}>
            {' '}
            Burger
          </button>
          <button type='button' className='btn-menu' value='dessert' onClick={(e) => setFilterMenu(e.target.value)}>
            {' '}
            Dessert
          </button>
          <button type='button' className='btn-menu' value='beverage' onClick={(e) => setFilterMenu(e.target.value)}>
            {' '}
            Beverage
          </button>
        </div>
        <section className='container-products'>
        <div className='container-menu1' >
      <Menu option={filterMenu}/>
        </div>
        </section>
        </section>
      <section className='container-order'>
      <CrudApi />
      </section>
      <section></section>
    </div>
  )
}
