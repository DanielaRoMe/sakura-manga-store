import React from "react";
import { useState } from "react";
// import { Formik } from "formik";

//Bootstrap form
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

//SweetAlert
import Swal from "sweetalert2";

//CSS
import "../ConfirmShippment/confirmShippment.css"


const initialState ={
    name:"",
    lastName:"",
    city:"",
    email:""
}

const ConfirmShippment = () => {


    const [values, setValues] = useState(initialState);

    const [purchaseId, setPurchaseId] = useState("");

    const handleOnChange = (e) =>{
        const {value, name} = e.target;
        setValues({...values, [name]: value })

    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        
        if (!values.name || !values.lastName || !values.city || !values.email) {
            Swal.fire({
              icon: "error",
              title: "Opss...",
              text: "Por favor complete de manera correcta todos los campos.",
            });
            return;
        }

          const validateEmail = /^\S+@\S+\.\S+$/;
          if (!validateEmail.test(values.email)) {
            Swal.fire({
              icon: "error",
              title: "Opss..",
              text: "Por favor ingrese un email válido.",
            });
            return;
          }

        
        const docRef = await addDoc(collection(db, "purchases"),{
            values
        });
        setPurchaseId(docRef.id);

        setValues(initialState);

        Swal.fire({
            icon: "success",
            title: "Su compra ha sido confirmada! :)",
            text: "Su numero de referencia es: "+ purchaseId,
          });
    };


  return (
    <div className="general-container">
      <h2 className="h2-form">Para finalizar la compra por favor confirme sus datos:</h2>
      <div className= "form-container">
        <Form onSubmit={handleOnSubmit}>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="name" placeholder="Nombre" value={values.name} onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="lastName" placeholder="Apellido" value={values.lastName} onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control name="city" placeholder="Ciudad" value={values.city} onChange={handleOnChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control name="email" placeholder="Email" value={values.email} onChange={handleOnChange}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Button className='btn-form' type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ConfirmShippment;
