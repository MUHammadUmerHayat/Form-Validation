import React, { useState } from 'react';
import './Form.css';
// import {Button} from 'react-bootstrap';
// import axios from 'axios';    //Import Axios package

const Form=()=>{
    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[age,setAge]=useState("");
    const[nic,setNic]=useState("");

    const[firstnameerr, setFirstNameErr]=useState({});
    const[lastnameerr, setLastNameErr]=useState({});
    const[nicerr,setNicErr]=useState({});

    const onSubmit=(e)=>{      //Event
        e.preventDefault();
        const isValid=formValidation();
        if(isValid){
            // Here we can use Api 
            setFirstName(" ");
            setLastName(" ");
            setAge("");
            setNic("");
        }
    }

    const formValidation=()=>{
        const firstnameerr={};
        const lastnameerr={};
        const nicerr={};
        let isValid=true;

        if (firstname.trim().length<5){
            firstnameerr.firstshort="First Name is too short";
            isValid=false;
        }
        if(firstname.trim().length>20){
            firstnameerr.firstlong="First Name is too long";
            isValid=false;
        }
        if (lastname.trim().length<5){
            lastnameerr.lastshort="Last Name is too short";
            isValid=false;
        }
        if(lastname.trim().length>20){
            lastnameerr.lastlong="Last Name is too long";
            isValid=false;
        }
        if(nic.trim().length!=13){
            nicerr.nicissue="Nic number is not valid";
            isValid=false;
        }

        setFirstNameErr(firstnameerr);
        setLastNameErr(lastnameerr);
        setNicErr(nicerr);
        return isValid;
    }
 
    /* The value we given as {firstname}, {lastname}, {age}, {nic} is caleed SINGLE SOURCE OF TRUTH */
    /* JSX work */
    return(
        <form onSubmit={onSubmit}>
                <h2>
                    Nadra Form
                </h2>
            {/* working start on first name*/}
                <input type="text" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} />
                <br/>
                {
                    Object.keys(firstnameerr).map((key)=>{
                        return <div style={{color:"red"}} > {firstnameerr[key]} </div>
                    })
                }
            {/* working end on first name*/}

            {/* working start on last name */}
                <input type="text" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} />
                <br/>
                {
                    Object.keys(lastnameerr).map((key)=>{
                        return <div style={{color:"red"}} > {lastnameerr[key]} </div>
                    })
                }
            {/* working end on last name error */}

            {/** working start on age*/}
                <input type="text" pattern="[0-9]*" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <br/>
            {/* working end on age */}

            {/* Working start on nic*/}
                <input type="text" pattern="[0-9]*" value={nic} onChange={(e)=>{setNic(e.target.value)}} />
                <br/>
                {
                    Object.keys(nicerr).map((key)=>{
                        return <div style={{color:"red"}} > {nicerr[key]} </div>
                    })
                }
            {/* Working end on nic */}

            <button type="submit" >Submit</button>
        </form>
    )
}

export default Form;