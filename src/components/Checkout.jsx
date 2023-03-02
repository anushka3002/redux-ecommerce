import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";


const Checkout = () => {
  const totalPrice = JSON.parse(localStorage.getItem("total price"));
  const [data,setData] = useState([])
  const {register,handleSubmit} = useForm()
  const navigate = useNavigate();

  return (
    <div className="flex flex-row mx-4">
      <div className=" mt-4">
        <h4>Ship to</h4>
        <form class="row g-3 col-md-8 border mt-4">
          <div class="col-md-5">
            <label for="inputName4" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="inputName4" required/>
          </div>
          <div class="col-md-6">
            <label for="inputPhone4" class="form-label">
              Phone
            </label>
            <input type="number" class="form-control" id="inputPhone4" required/>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" required/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option value="SelectState">Select State</option>
              <option value="Andra Pradesh">Andra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madya Pradesh">Madya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttaranchal">Uttaranchal</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
              <option disabled>UNION Territories</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadar and Nagar Haveli">
                Dadar and Nagar Haveli
              </option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadeep">Lakshadeep</option>
              <option value="Pondicherry">Pondicherry</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" required/>
          </div>
          <button onClick={()=>navigate('/payment')} type="submit" to="/payment" className="btn btn-dark mx-auto text-center justify-content-center py-2 px-3">
            Next
          </button>
        </form>
      </div>
      <div className="col-md-3 mt-4">
        <h4>Order Summary</h4>
        <div className="border mt-4 p-2">
          <div className="flex justify-content-between">
            <p>Items</p>
            <p>{totalPrice}</p>
          </div>
          <div className="flex justify-content-between">
            <p>Shipping</p>
            <p>$5.00</p>
          </div>
          <div className="flex justify-content-between">
            <p>Duties & Taxes</p>
            <p>$2.00</p>
          </div>
          <button className="btn btn-dark mx-auto text-center justify-content-center py-2 px-3">
            Total checkout price : ${totalPrice + 7}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
