import { GlobalHooks } from "../context/CartContextProvider";
import "../css/card.css";

const Card = () => {
  const { state, dispatch } = GlobalHooks();
  return (
    <div className="card">
      <div className="container">
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
                    <td> ${product.quantity * product.price}</td>
                    <td>{product.quantity}</td>
                    
                    <td className="quantity_col">
                        <button onClick={ () => dispatch({type: 'Increase' ,payload : product})}> + </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => dispatch({type : 'Decrease' ,payload: product})}> - </button>
                    </td>
                    <td className="remove_product" onClick={() => dispatch({type: 'Removecart' , payload: product })}><button>X</button></td>
                </tr>
              )
            })}
          </div>
      </div>
    </div>
  );
};

export default Card;
