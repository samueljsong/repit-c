import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from '../../src/components/Navbar'

describe('<Navbar />', () => {
  it('renders', () => {
    cy.mount(<BrowserRouter><Navbar/></BrowserRouter>)
  })
})