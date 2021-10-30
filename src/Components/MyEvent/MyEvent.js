import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyEvent = () => {
  const [myEvents, setMyEvents] = useState([]);
  const { user } = useAuth();
  document.title = "My Trips";
  const email = user.email;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myEvents/${email}`)
      .then((res) => setMyEvents(res.data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios.delete(`http://localhost:5000/deleteTrip/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          const remaining = myEvents.filter((tour) => tour._id !== id);
          setMyEvents(remaining);
        }
      });
    }
  };
  if (!myEvents || myEvents.length == 0) {
    return (
      <div className="container  text-center" style={{ height: "100vh" }}>
        <div>
          <img
            className="img-fluid"
            src="https://i.ibb.co/277JQj1/nos-removebg-preview-1.png"
            alt=""
          />
        </div>
        <h2 className="text-danger">No Result Found !</h2>
      </div>
    );
  } else {
    return (
      <div className="container" style={{ marginBottom: "300px" }}>
        <div className="row mt-5">
          {myEvents.map((tour) => {
            return (
              <div className="col-sm-6 my-4 ">
                <div className=" d-sm-flex   align-items-center shadow-lg h-100 rounded .justify-content-center">
                  <div className="w-50  d-flex justify-content-center align-items-center">
                    <img
                      src={tour.img_url}
                      className="img-fluid w-75 pt-4 pt-sm-0 "
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h6
                      className={
                        tour.status == "Pending"
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {tour.status}
                    </h6>
                    <h4 className="card-title">{tour.name}</h4>

                    <h5 className="py-3">Price : {tour.price} </h5>

                    <button
                      className="btn btn-danger px-4"
                      onClick={() => handleDelete(tour._id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MyEvent;
