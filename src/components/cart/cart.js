import React, { Component } from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import {nanoid} from 'nanoid'
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      name: "",
      email: "",
      address: "",
      showCheckout: false,
      showproceed:false,
      orders:" "
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    e.preventDefault();
     const order = {
      id:nanoid(),
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
      Total:" "
    };
    this.props.createOrder(order);
    this.setState({orders:order})
  };
  ordercreated=()=>{
    this.setState({showproceed:false,
      showCheckout:false,
    orders:" ",
    cartItems:this.props.cartItems.splice(0,this.props.cartItems.length)
    })
    
  }
  
  openModal = () => {
    this.setState({ showproceed:true });
  };
  closeModal = () => {
    this.setState({ showproceed:false });
  };
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart-cart-header">Cart is empty</div>
        ) : (
          <div className="cart-cart-header">
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div>
          <div >
            <Fade left cascade>
              <ul className="cart-items">
                {cartItems.map((item) => (
                  <li key={item._id}>
                    <div>
                      <img src={item.image} alt={item.title}></img>
                    </div>
                    <div>
                      <div>{item.title}</div>
                      <div className="right">
                        &#8377;{item.price} x {item.count}{" "}
                        <button
                          className="button"
                          onClick={() => this.props.removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="Total">
                  <div>
                    Total:{" "}
                    &#8377;{(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    className="pro-button"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {this.state.showCheckout && (
                <Fade right cascade>
                  <div className="cart">
                    <form onSubmit={this.createOrder}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                            onChange={this.handleInput}
                          ></input>
                        </li>
                        <li>
                          <button className="button primary" type="submit"
                            onClick={()=>{
                              this.openModal();
                            }}>
                            Checkout
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </Fade>
              )}
              {
                this.state.showproceed &&(
                  <Modal isOpen={true} onRequestClose={this.closeModal} ariaHideApp={false}>
                   <Zoom>
                     <button className="modal-button" onClick={this.closeModal}>
                       X
                     </button>


                       <div className="order-details">
                       <h1 className="success-message">Your Order has been placed</h1>
                        <ul>
                          <li>
                            <div>Name :{" "}{this.state.name}</div>
                          </li>
                          <li>
                            <div>Email :{" "}{this.state.email}</div>
                          </li>
                          <li>
                            <div>Address :{" "}{this.state.address}</div>
                          </li>
                          <li>
                            <div>ORDER ID : {this.state.orders.id}</div>
                          </li>
                          <li>
                            <div>
                              ITEMS:
                            {
                              cartItems.map((item)=>(
                                <div> 
                                <div>Item id :{" "}{item._id}</div>
                                <div>Name :{" "}{item.title}</div>
                                <div>Quantity :{" "}{item.count}</div>
                                </div>
                              )
                             )
                            }
                            </div>
                          </li>
                          <li>
                            <div>Total : &#8377;{
                             
                            
                              cartItems.reduce((a, c) => a + c.price * c.count, 0)
                              } 
                             </div>
                          </li>
                        </ul>
                        <button className="ok" onClick={this.ordercreated}>OK</button>

                        </div>
                     
                   </Zoom>
                  </Modal>
                )
              }
            </div>
           
            
          )}
        </div>
      </div>
    );
  }
}
