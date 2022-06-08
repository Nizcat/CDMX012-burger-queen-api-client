/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react'
import { NewOrder } from './NewOrder.jsx'
import React from 'react'

test('render table', () => {
  const listOrder = [
    { id: 4, item: 'Bacon eggs', price: 110, img: 'https://i.pinimg.com/564x/4c/e1/66/4ce16641c30907aeb7dd3e5ef800c0b3.jpg', type: 'breakfast' },
    { id: 5, item: 'Turkish eggs', price: 130, img: 'https://i.pinimg.com/474x/28/d4/22/28d422800cf89bcc04c00fda959ba90c.jpg', type: 'breakfast' }]
  render(<NewOrder listOrder={listOrder}/>)
  const kitchenButton = screen.queryByText('Kitchen')
  const total = screen.queryByText('TOTAL')
  const cancel = screen.queryByText('Cancel Order')
  const table = screen.queryByText('Table')
  // expect(kitchenButton).toBeInTheDocument()
})

test('change values via the fireEvent.onchange method', () => {
  const changeTable = jest.fn()
  const { NewOrder } = render(<input type='number' onChange={changeTable} />)
  fireEvent.onChange(changeTable)
  expect(changeTable).toHaveBeenCalledTimes(1)
  expect(input.value).toBe(number)
})