import React from 'react'
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom'
import { deleteContact } from '../redux/actions/action'
function ContactCard({contact,getPerson}) {
    const dispatch = useDispatch()
    const deleteContactt=()=>{
        console.log("aa")
        dispatch(deleteContact(contact._id))
    }
    return (
        <div style={{border:"1px solid red",width:"350px",flexDirection:"column"}} >
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <button onClick={deleteContactt} >Delete</button>
           <Link to="edit-contact"> <button onClick={()=>getPerson(contact)}>Edit</button></Link>
        </div>
    )
}

export default ContactCard
