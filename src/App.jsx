
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Admin from "./components/Admin";
import BookService from "./components/BookService";
import PrivateComponent from "./components/PrivateComponent";
import Adminlogin from "./components/Adminlogin";
import AddBike from "./components/AddBike";
import UpdateProduct from "./components/UpdateBike";
import Bike from "./components/Bike";
import Bill from "./components/Bill";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Bikes from "./components/Bikes";
import Bookings from "./components/Bookings";
import Inventory from "./components/Inventory";



export default function App() {
  

  return (
    <BrowserRouter>
     
      <main >
        <Routes>
          <Route element={<PrivateComponent/>} >
          <Route path="/adminPanel" element={<Admin/>} /> 
          <Route path="/bikes" element={<Bikes/>}/>
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/addBike" element={<AddBike/>}/>
          <Route path="/adminPanel/:id" element={<Bike></Bike>}/>
          <Route path="/updateBike/:id" element={<UpdateProduct/>}/>
          <Route path="/adminPanel/:bikeId/:serviceId/bill" element={<Bill/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          </Route>
          
          <Route path="/" element={<MainPage />} />
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/BookService" element={<BookService/>}></Route>
          <Route path="/adminLogin" element={<Adminlogin/>}/>
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}
