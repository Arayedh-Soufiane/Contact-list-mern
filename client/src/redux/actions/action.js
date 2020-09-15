import { GET_CONTACTS } from "./actionTypes"
import axios from "axios"
export const getContacts=()=>dispatch=>{
    axios.get('/contacts/all')
    .then(res=>dispatch({type:GET_CONTACTS,payload:res.data}))
    .catch(err=>console.log(err))
}
export const addContact=(newContact)=>dispatch=>{
    axios.post('/contacts/addContact',newContact)
    .then(res=> dispatch(getContacts()))
    .catch(err=>console.log(err))
}
export const deleteContact=(idContact)=>dispatch=>{
    axios.delete(`/contacts/deleteContact/${idContact}`)
    .then(res=> dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const putContact=(idContact,updatedContact)=>dispatch=>{
    axios.put(`/contacts/editContact/${idContact}`,updatedContact)
    .then(res=> dispatch(getContacts()))
    .catch(err=>console.log(err))
}