import React, { ReactNode, Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

const Index = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Index;


