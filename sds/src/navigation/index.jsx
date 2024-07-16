import { Outlet } from 'react-router-dom';
import Header from "../components/Header";

const BeforeLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  };
  
  export default BeforeLayout;