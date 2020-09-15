import React from 'react'
import { Link } from 'react-router-dom'

function AddContact({name,email,phone,setEmail,setPhone,setName,edit,action}) {
    return (
        <div>
            <input placeholder="enter your name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <input placeholder="enter your email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="enter your phone" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
           <Link to="/contact-list"> <input type="button" value={edit?"edit contact":"add contact"} onClick={action} /></Link>
        </div>
    )
}

export default AddContact
