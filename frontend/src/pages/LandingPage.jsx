import { useEffect, useState } from "react";
import Intro_Section from "../components/Intro-section";
import Navigation_Bar from "../components/navigationBar";
import axios from 'axios'

const LandingPage = () => {
    const [check, setCheck] = useState([]);

    useEffect(()=>{
        const fetchTestAPI = async () => {
            const res = await axios.get("http://localhost:5000/api/test");
            console.log("This is a response of backend",res.data)
            setCheck(res.data)
        }
        fetchTestAPI();
    },[])
    return (
      <>
       <Navigation_Bar/>
       <Intro_Section/>
      <h1 className="text-center">{check?.message}</h1>
      </>
    )
}

export default LandingPage;