import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AdminDashboardCard from '../../src/components/AdminDashboardCard'

describe('<AdminDashboardCard />', () => {
    it('renders', () => {
        cy.mount(<BrowserRouter><AdminDashboardCard/></BrowserRouter>)
    })
})