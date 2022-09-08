import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./popUp.css";
import { connect } from "react-redux";

const PopUp = (props) => {
  const heading = ["Item", "Description", "Rate", "Quantity"];
  const total = props.updatedData.map((item) => {
    return item.price * item.quantity;
  });
  const price = total.reduce((item,num) => {return item+num })
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon">
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </span>

        <article>
          <h1 className="popup_heading">Recipient</h1>
          <address>
            <p>
              RKFOODMART
              <br />
              c/o Rohit Kumbhar
            </p>
          </address>
          <table className="inventory">
            <thead>
              <tr>
                {heading.map((item) => {
                  return <th key={item}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {props.updatedData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <span className="popup_items">{item.name}</span>
                    </td>
                    <td>
                      <span className="popup_items">{item.info}</span>
                    </td>
                    <td>
                      <span className="popup_items">${item.price}</span>
                    </td>
                    <td>
                      <span className="popup_items">{item.quantity}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="balance">
            <thead>
              <tr className="thead">
                <th>
                  <span>Total</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="thead">
                <td>
                  <span className="popup_items">${price}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <input type="button" className="orderBtn" value="Order" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    updatedData: state.FoodReducer.updatedData,
    numOfFoods: state.FoodReducer.data,
    payload: state.FoodReducer.payload,
  };
};

export default connect(mapStateToProps)(PopUp);
