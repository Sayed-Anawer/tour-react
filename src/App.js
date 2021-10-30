import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AddMoreTrips from "./Components/AddMoreTrips/AddMoreTrips";
import DetailsForm from "./Components/DetailsForm/DetailsForm";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageAllEvents from "./Components/ManageAllEvents/ManageAllEvents";
import MyEvent from "./Components/MyEvent/MyEvent";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Shared/Footer/Footer";
import NavBar from "./Components/Shared/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/tourBook/:tourId">
              <DetailsForm></DetailsForm>
            </PrivateRoute>
            <PrivateRoute exact path="/myEvents">
              <MyEvent></MyEvent>
            </PrivateRoute>
            <PrivateRoute exact path="/manageAllEvents">
              <ManageAllEvents />
            </PrivateRoute>
            <PrivateRoute exact path="/addMoreTrips">
              <AddMoreTrips />
            </PrivateRoute>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
