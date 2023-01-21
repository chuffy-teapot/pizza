import { useState } from "react";

function NewOrder() {
  return (
    <>
      <div className="NewOrder">
        <h2 className="NewOrder_title"> Pizza Order </h2>
        <div className="NewOrder_wrapper">
          <div className="user_data">
            <input
              type="text"
              required
              placeholder="user name"
              className="user_data_input"
            />
            <input
              type="tel"
              required
              placeholder="phone number"
              className="user_data_input"
            />
            <input
              type="adress"
              required
              placeholder="user adress"
              className="user_data_input"
            />
          </div>

          <div className="select">
            <p className="select_label">Dough Thickness:</p>
            <select className="select_size" name="select_size" id="select_size">
              <option className="select_opt">none</option>
              <option className="select_opt">Thin</option>
              <option className="select_opt">Medium</option>
              <option className="select_opt">Thick</option>
            </select>
          </div>

          <div className="size">
            <p className="size_label">Size:</p>

            <div className="size_item">
              <form className="size_form">
                <label className="size_item">
                  25sm
                  <input
                    className="size_item_btn"
                    type="radio"
                    id="25sm"
                    name="size"
                    value="25sm"
                  />
                </label>

                <label className="size_item">
                  30sm
                  <input
                    className="size_item_btn"
                    type="radio"
                    id="30sm"
                    name="size"
                    value="30sm"
                  />
                </label>

                <label className="size_item">
                  35sm
                  <input
                    className="size_item_btn"
                    type="radio"
                    id="35sm"
                    name="size"
                    value="35sm"
                  />
                </label>
              </form>
            </div>
          </div>

          <div className="toppings">
            <p className="toppings_label">On Pizza: </p>

            <form className="toppings_form">
              <div className="toppings_item">
                <label>
                  Tomato
                  <input
                    name="topping1"
                    id="topping1"
                    type="radio"
                    className="toppings_input"
                    value="Tomato"
                  />
                </label>
              </div>

              <div className="toppings_item">
                <label>
                  Turkey meat
                  <input
                    name="topping2"
                    id="topping2"
                    type="radio"
                    className="toppings_input"
                    value="Turkey meat"
                  />
                </label>
              </div>

              <div className="toppings_item">
                <label>
                  Olive
                  <input
                    name="topping3"
                    id="topping3"
                    type="radio"
                    className="toppings_input"
                    value="Olive"
                  />
                </label>
              </div>

              <div className="toppings_item">
                <label>
                  Pickled cucumber
                  <input
                    name="topping4"
                    id="topping4"
                    type="radio"
                    className="toppings_input"
                    value="Pickled cucumber"
                  />
                </label>
              </div>

              <div className="toppings_item">
                <label htmlFor="vehicle5">
                  Mushroom
                  <input
                    name="topping5"
                    id="topping5"
                    type="radio"
                    className="toppings_input"
                    value="Mushroom"
                  />
                </label>
              </div>

              <div className="toppings_item">
                <label htmlFor="vehicle6">
                  Horse meat
                  <input
                    name="topping6"
                    id="topping6"
                    type="radio"
                    className="toppings_input"
                    value="Horse meat"
                  />
                </label>
              </div>
            </form>
          </div>
          {/* toppings */}

          <div className="addings">
            <p className="add_label">Add:</p>

            <form className="add_form">
              <div className="add_item">
                <label>
                  Pepper
                  <input
                    type="radio"
                    name="sausages"
                    id="pepper"
                    value="Pepper"
                  />
                </label>
              </div>
              <div className="add_item">
                <label>
                  Sausages
                  <input
                    type="radio"
                    name="sausages"
                    id="sausages"
                    value="Sausages"
                  />
                </label>
              </div>
            </form>
          </div>

          <button type="submit" className="order-btn">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default NewOrder;
