import React from "react";
import Sidenav from "../UI/Sidenav/Sidenav";

function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <div className="row vh-100 m-0">
          <div className="col-2 m-0 p-0 shadow-lg">
            <Sidenav />
          </div>
          <div className="col-10">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
