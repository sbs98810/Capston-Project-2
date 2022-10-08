import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Styles/SubItem.css'

const SubItem = (props) => {
    const handleOrder = props.handleOrder;
    const [data,setData] = useState([]);
    const {id} = useParams();

    useEffect(
        ()=>{
            axios.get('http://localhost:3001/getfooditems')
            .then((res)=>{
                const mainitem = res.data.find((item)=>item._id === id);
                setData(mainitem.subItems);
            })
            .catch((err)=>console.log('error'));
        },[]
    )
    return (
        <div className="container">
            <div className={'row cartItems'}>
                {
                    data.map((item)=>(
                        <div key={item.name} className={"col-lg card"}>
                            <div>
                                <img className={'image'} src={item.image}></img>
                            </div>
                            <div className={'cardBody'}>
                            <div className={'itemDescription'}>
                            <h3>{item.name}</h3>
                            <p>Rs. {item.price}</p>
                            <p>{item.description}</p>
                            </div>
                            <button onClick={()=>handleOrder(item)}>Order Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default SubItem;