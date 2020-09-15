import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { getContacts,addContact, putContact } from "./redux/actions/action";
import ContactCard from "./components/ContactCard";
import AddContact from "./components/AddContact";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  const addContactt = () => {
    dispatch(addContact({ name, email, phone }));
  };
  const editContact=()=>{
    dispatch(putContact(id,{id,name,email,phone}))
    setEdit(false)
    setEmail("")
    setId(0)
    setPhone("")
    setName("")
  }
  const getPerson=(contact)=>{
    setEmail(contact.email)
    setName(contact.name)
    setPhone(contact.phone)
    setId(contact._id)
    setEdit(true)

  }
  return (
    <Router>
      <div className="App">
        <Link to="/contact-list">
          <button>Contact list</button>
        </Link>
        <Link to="/add-contact">
          <button>Add contact </button>
        </Link>

        <Route
          path="/contact-list"
          render={() => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {contacts.map((contact) => (
                <ContactCard contact={contact} getPerson={getPerson} />
              ))}
            </div>
          )}
        />
        <Route
          path="/(add-contact|edit-contact)"
          render={() => (
            <AddContact
              name={name}
              email={email}
              phone={phone}
              setEmail={setEmail}
              setName={setName}
              setPhone={setPhone}
              action={edit? editContact : addContactt }
              // addContactt={addContactt}
              edit={edit}
            />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
