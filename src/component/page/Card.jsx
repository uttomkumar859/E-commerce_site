import { GlobalHooks } from "../context/CartContextProvider";
import "../css/card.css";

const Card = () => {
  const { state, dispatch } = GlobalHooks();
   
  const { totalPrice} = state.cart.reduce((acc, curr)=>{
    // acc.totalItems += curr.quantity
    acc.totalPrice += curr.quantity * curr.price
    return acc;
  },{
    // totalItems:0,
    totalPrice:0
  })




  return (
    <div className="card">
      <div className="container">
          <div className="col_gird">
              <div className="left">
              <tr className="table_row">
            <td>Product</td>
            <td>Description</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Add or Remove</td>
        </tr>
          <div className="table_cart">
            {state.cart.map((product , index) => {
              console.log((state))
              return (
                <tr className="table_row" key={index}>
                    <td><img src={product.image} alt="" /></td>
                    <td>{product.title}</td>
                    <td> $ {Math.floor(product.quantity * product.price)} </td>
                    <td>{product.quantity}</td>
                    
                    <td className="quantity_col">
                        <button onClick={ () => dispatch({type: 'Increase' ,payload : product})}> + </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => dispatch({type : 'Decrease' ,payload: product})}> - </button>
                    </td>
                    <td className="remove_product"><button onClick={() => dispatch({type: 'Removecart' , payload: product })}>X</button></td>
                </tr>
              )
            })}
          </div>
              </div>
              <div className="right">
                  <p>Total : $ <span>{Math.floor(totalPrice)}</span></p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
