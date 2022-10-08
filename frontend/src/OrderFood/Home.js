import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/Home.css'

const Home = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()

    useEffect(
        ()=>{
            axios.get('http://localhost:3001/getfooditems')
            .then((res)=>{
                setData(res.data);
            })
            .catch((err)=>console.log('error'))
        },[]
    )

    const handleSubItem = (id) => {
        navigate(`/subitem/${id}`)
    }

    return ( 
     <div className="container" id='outerContainer'>
         <div className="row">
        {
            data.map((item)=>(
                <div key={item._id} id={'container'} onClick={()=>handleSubItem(item._id)}>    
                    <div id={'innerContainer'}>
                    <img src={item.image}></img>
                    </div>
                    <p>{item.name}</p>
                </div>
            ))
        }
        </div>
     </div>
   );
}
 
export default Home;