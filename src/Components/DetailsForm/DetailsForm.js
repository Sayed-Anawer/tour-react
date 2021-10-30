import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DetailsForm = () => {
  const [details, setDetails] = useState([]);
  const history = useHistory();
  document.title = "Register For Trip";
  //   const [registerEvent, setRegisterEvent] = useState({});
  const { tourId } = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get("http://localhost:5000/allTours")

      .then((res) => setDetails(res.data));
  }, []);

  const newData = details.find((datas) => datas._id === tourId);
  console.log(newData);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    data.img_url = newData?.img_url;
    data.status = "Pending";
    axios.post("http://localhost:5000/userEventData", data).then((res) => {
      if (res.data.acknowledged) {
        alert("data Inserted");
        history.push("/myEvents");
        reset();
      }
    });
  };

  if (!newData) {
    return (
      <div>
        <h2 className="text-center">Loading....</h2>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 " style={{ height: "100vh" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label forhtml="exampleInputName" className="form-label">
              Name
            </label>
            <input
              id="exampleInputName"
              className="form-control"
              defaultValue={user?.displayName}
              {...register("userName")}
            />
          </div>
          <div className="mb-3">
            <label forhtml="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              defaultValue={user?.email}
              {...register("userEmail")}
            />
          </div>
          <div className="mb-3">
            <label forhtml="exampleInputTourName" className="form-label">
              Tour Name
            </label>
            <input
              className="form-control"
              id="exampleInputTourName"
              defaultValue={newData?.name}
              {...register("name")}
            />
          </div>
          <div className="mb-3">
            <label forhtml="exampleInputTourPrice" className="form-label">
              Price
            </label>
            <input
              className="form-control"
              id="exampleInputTourPrice"
              defaultValue={newData?.price}
              {...register("price")}
            />
          </div>
          <div className="mb-3">
            <label forhtml="exampleInputAddress" className="form-label">
              Address
            </label>
            <input
              className="form-control"
              id="exampleInputAddress"
              {...register("address")}
            />
          </div>

          <input
            className="btn btn-primary"
            type="submit"
            value="Register Trip"
          />
        </form>
      </div>
    );
  }
};

export default DetailsForm;
