import { Routes, Route } from "react-router-dom";
import AddEvent from "./Components/AddEvent/AddEvent";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./App.css"
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import Resister from "./Components/Resister/Resister";
import ResisterList from "./Components/ResisterList/ResisterList";
import EventDetails from "./Components/EventDetails/EventDetails";
import { createContext, useState } from "react";
import RequireAuth from "./Components/PrivateRoute/RequireAuth";
import EventDelete from "./Components/EventDelete/EventDelete";
import Authenticatedata from "./Components/AuthenticateData/Authenticatedata";

export const userContext = createContext();

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});
  return (
    <div className="app">
      <userContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resister" element={<Resister /> } />
          <Route path="/event/:eventDetails"
            element={<EventDetails />} />
          <Route path="/admin/*" element={
            <RequireAuth>
          <Admin />
          </RequireAuth>
          }>
            <Route path="addEvent"element={<AddEvent />}/>
            <Route path="resisterList" element={<ResisterList />} />
            <Route path="eventDelete" element={<EventDelete />} />
            <Route path="authenticData" element={<Authenticatedata />} />
          </Route>

          <Route path="*" element={<p style={{ color: "red" }}>Not Found</p>} />
        </Routes>
        <Footer></Footer>
      </userContext.Provider>
    </div>
  );
}

export default App;
