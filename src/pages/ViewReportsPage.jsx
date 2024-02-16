import React from 'react'

//Dependencies
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//API
import { loggedIn } from '../api/Client'

export default function ViewReportsPage() {

  const navigate = useNavigate()

  useEffect(()=> {
    loggedIn(navigate)
  }, [])

  return (
    <div className='pt-20'>
        ViewReports
    </div>
  )
}
