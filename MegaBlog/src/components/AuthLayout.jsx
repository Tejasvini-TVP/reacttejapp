import React, {useEffect,useState} from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication = true}) {

    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    
    return (
    <div>
      
    </div>
  )
}
