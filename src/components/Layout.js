import React from "react";
import Helmet from "react-helmet";

import Navbar from "./Navbar";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Ri Le" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
