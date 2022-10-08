import './Styles/Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({cart,setCart,setCartLength}) => {
    const handleRemove = (name) => {
      setCart(cart.filter((item) => item.name !== name));
      setCartLength(cart.length - 1);
    }

    const handlefinalOrder = (e) => {
      e.preventDefault()
      setCart([])
      setCartLength(0)
      alert("Your order has been placed");
    }
  
    return (
      <div className='container'>
        <h2 className="text-center">You have Ordered:</h2>
        <div id='cartItems'>
          {cart.map((item) => (
            <div id={'card'}>
              <div key={item.name} className={'row'} id={'innerCard'}>
                <div className={'col-sm-2'} id={'imgContainer'}>
                  <img style={{ width: '100px' }} id={'image'} src={item.image} alt={''} />
                </div>
                <div className={'col-sm-7'} style={{ paddingLeft: '20px' }}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <h4>Rs. {item.price}</h4>
                </div>
                <div className={'col-sm-2'} style={{ marginTop: '40px' }}>
                  <button className={'btn btn-outline-danger'} onClick={() => handleRemove(item.name)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div className='text-center'><button type='button' onClick={(e)=>handlefinalOrder(e)} className='btnOrder'>Place Order</button></div>
        </div>  
      </div>
    )
  }
  
  export default Cart;