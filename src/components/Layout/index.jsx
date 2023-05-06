import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
// import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Main />
      {/* <Outlet /> */}
      <Footer />
    </div>
  );
}
