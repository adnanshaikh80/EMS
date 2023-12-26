import { useRef, useState } from "react";
import db from "./Firebase";
import { ref, set } from "firebase/database";
import emailjs from '@emailjs/browser'
export default function Home()
{


    const rName = useRef();
    const [name, setName] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [address, setAddress] = useState("");
    const [enquiry, setEnquiry] = useState("");

    const hName =(event)=> {setName(event.target.value);}
    const hPhonenumber =(event)=> {setPhonenumber(event.target.value);}
    const hAddress=(event)=> {setAddress(event.target.value);}
    const hEnquiry =(event)=> {setEnquiry(event.target.value);}

    const save= (event) =>{
        event.preventDefault();
        let data = {name,phonenumber,address,enquiry}
        let node = name +phonenumber+address+enquiry+""+ new Date().toString();
        let r = ref(db,"fb/"+ node);
        set(r, data);
        emailjs.send("service_6666", "template_6666", data ,"AdhDprps-mdkBcado")
        .then(res =>{
            alert("We Will Get Back To You")
            setName("");
            setPhonenumber("")
            setAddress("")
            setEnquiry("");
            rName.current.focus();
        })
               .catch(err => console.log("issue" + err));
    }
    return(
        <>
        <center>
               <h1>Enquiry Form</h1>
        <form onSubmit={save}>
                <input type="text" placeholder="Enter Your Name"
                onChange={hName} value={name} ref={rName}/>
                <br></br>
                <input type="text" placeholder="Enter Phone Number"
                onChange={hPhonenumber} value={phonenumber} />
                <br></br>
                <input type="text" placeholder="Enter Your Address"
                onChange={hAddress} value={address} />
                <br></br><br></br>
            <input type="radio" name="f" value="Our Services" defaultChecked
            onChange={hEnquiry} checked={enquiry=="Our Services"}/> Our Services
            <input type="radio" name="f" value="Office Hours"
            onChange={hEnquiry}/> Office Hours
            <input type="radio" name="f" value="Products"
            onChange={hEnquiry} /> Products
            <br></br>
            <input type="submit" />
        </form>
        </center>
        </>
    );
}