import React from "react";
import Sidebar from "../UI/Sidebar/Sidebar";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Sidebar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
