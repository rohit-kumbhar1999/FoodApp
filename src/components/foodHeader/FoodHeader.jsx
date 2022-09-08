import React from 'react'
import logo from "../../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import "./foodHeader.css"
import { connect } from 'react-redux'
import PopUp from './PopUp'
import ShowPopUp from '../../redux/action/PopUpAction'

const FoodHeader = (props) => {
  return (
    <div className='header'>
        <div className="logoContainer">
            <img className='logo' src={logo} alt="foodLogo" />
            <h1>RKFOODMART</h1>
        </div>
        <div className="headercart">
          <p className='cart-container'>
            <button onClick={props.ShowDisplay}>{props.display? <PopUp/> : ""}
            <FontAwesomeIcon icon={faShoppingCart} className="shopcart"/></button>
            <span className='cart_tag'>Your cart</span>
            <span className='cart-item'>{props.payload}</span>
          </p>
        </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    numOfFoods: state.FoodReducer.data,
    payload : state.FoodReducer.payload,
    display : state.ShowPopUpReducer.display
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ShowDisplay: () => dispatch(ShowPopUp()),
  };
};
export default connect(mapStateToProps , mapDispatchToProps)(FoodHeader);