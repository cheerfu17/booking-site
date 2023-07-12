import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { check } from "./components/http/userAPI";
import { getBooking, getHalls } from "./components/http/bookingAPI";
import { Spinner } from "react-bootstrap";
import { _allowStateChangesInsideComputed } from "mobx";

const App = observer (() => {
  const {user, booking} = useContext(Context);
  const [loading, setLoading] = useState(true);

  const getBook = async () => {
    try {
      setLoading(true);
      const data = await getBooking();
      console.log(data);
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
      console.log(data);
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
      console.log(data);
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
  //   check().then(data => {
  //     console.log(data);
  //     user.setIsAuth(true);
  //     user.setUser(data);
  //   }).catch(() => {
  //     console.log("Error");
  //     user.setIsAuth(false);
  //     user.setUser({});
  //     localStorage.removeItem("token");
  //   }).finally(() => {setLoading(false)});

  //   getBooking().then((data)=>{
  //     console.log(data);
  //     booking.setBookingList(data);
  // }).catch(()=>console.log("error")).finally(()=> {console.log("asdwqd")});}, [booking])

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
