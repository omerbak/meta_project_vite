import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
import SharedLayout from "./components/SharedLayout";
import {Routes, Route} from "react-router-dom";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI } from "./api";

function App() {

  const [availableTimes, dispatch] = useReducer(updateTime, []);

  function updateTime(state, action){
    console.log("updateTime", action.payload)
    if(action.payload < new Date()){
      return []
      
    } else {
      return initializeState(action.payload);
    }
  }

    function initializeState(date = new Date){
      console.log("initializeState", date)
      const response = fetchAPI(date);
      return response;

  }
  useEffect(() => {
    dispatch({payload: new Date()})
    console.log("useEffect")
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
