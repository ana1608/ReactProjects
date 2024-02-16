import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./components/home/Home";
import GeraPalavra from "./components/home/GeraPalavra";
import SobreTi from "./components/home/Sobreti";
import "./page.css";
export default function Page() {
  return (
    <div className="global">
      <Login></Login>
      <Signup></Signup>
      <Home></Home>
      <GeraPalavra></GeraPalavra>
      <SobreTi></SobreTi>
    </div>
  );
}
