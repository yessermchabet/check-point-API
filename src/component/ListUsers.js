import axios from "axios"
import { useEffect, useState } from "react"
import CardUser from "./CardUser"
import Spinner from 'react-bootstrap/Spinner';

const ListUsers=()=>{

    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=> setUsers(res.data))
        .then(()=> setLoading(false))
        .catch((err)=> console.log("Erreur ya hadir",err))
    },[])

    return(
        <div className="hadir">
            {
               loading ? <Spinner animation="border" variant="danger" /> :  users.map((el,i,t)=> <CardUser key={i} el={el}/>)
            }
        </div>
    )
}

export default ListUsers