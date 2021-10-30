import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageAllEvents = () => {
  const [manageAllUsers, setManageAllUsers] = useState([]);
  const [status, setStatus] = useState(false);
  document.title = "Manage All Trips";
  useEffect(() => {
    axios
      .get("http://localhost:5000/manageAllUsers")
      .then((res) => setManageAllUsers(res.data));
  }, [status]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete ?");
    if (proceed) {
      axios
        .delete(`http://localhost:5000/deleteUsersTrip/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = manageAllUsers.filter((tour) => tour._id !== id);
            setManageAllUsers(remaining);
          }
        });
    }
  };

  const handleEditStatus = (id) => {
    axios.put(`http://localhost:5000/updateStatus/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        alert("Status Updated to Approved");
        setStatus(true);
      }
    });
  };

  if (!manageAllUsers) {
    return (
      <div
        className=" spinner-border text-primary text-center"
        role="status"
      ></div>
    );
  } else {
    return (
      <div style={{ height: "100%" }} className="container table-responsive ">
        <table className="table caption-top mt-3">
          <caption>List of users</caption>
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Trip</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {manageAllUsers.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.address}</td>
                  <td>{user.name}</td>
                  <td>
                    <span className="fs-5">{user.status}</span>
                  </td>
                  <td>
                    <i
                      className="btn btn-primary mx-4 bi bi-check2-square"
                      onClick={() => handleEditStatus(user._id)}
                    >
                      {" "}
                      Approve
                    </i>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user._id)}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ManageAllEvents;
