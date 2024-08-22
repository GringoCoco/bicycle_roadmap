import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'

export default function OneRoute() {
    const[card, setCard] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
       axiosInstance(`/cards/${id}`)
       .then(({data})=>
        setCard(data));
       }, [])
       const deleteHandler = async () => {
        await axiosInstance.delete(`/cards/${id}`)
        navigate('/')
       }
  return (
    <div>
      
    </div>
  )
}
