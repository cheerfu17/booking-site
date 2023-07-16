import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./components/http/userAPI";
import { getBooking, getHalls } from "./components/http/bookingAPI";
import { Spinner } from "react-bootstrap";


const App = observer (() => {
  const {user, booking} = useContext(Context);
  const [loading, setLoading] = useState(true);

  const getBook = async () => {
    try {
      setLoading(true);
      const data = await getBooking();
      booking.setBookingList(data);
    } catch (error) {
      console.log("error")
    }finally{
      setLoading(false);
    }
  }

  const chech_user = async () => {
    try {
      setLoading(true);
      const data = await check();
      user.setIsAuth(true);
      user.setUser(data);
    } catch (error) {
      console.log("error")
    }finally{
      setLoading(false);
    }
  }

  const hall = async () => {
    try {
      setLoading(true);
      const data = await getHalls();
      booking.setHallList(data);
    } catch (error) {
      console.log("error")
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => { async function fetchData(){
    await getBook();
    await chech_user();
    await hall();
  }

  fetchData();

  }, [user, booking]);

  if (loading){
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter basename="/">
      <NavBar/>
      <AppRouter/>
    </BrowserRouter>
      
  );
})

export default App;
