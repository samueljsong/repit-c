import React, { useEffect } from 'react'

//Dependencies
import { useNavigate } from 'react-router-dom'

//API
import { loggedIn } from '../api/Client'

export default function CreateReportPage() {

  const navigate = useNavigate()

  useEffect(()=> {
    loggedIn(navigate)
  }, [])

  return (
    <div className='pt-20'>
        CreateReport
    </div>
  )
}
