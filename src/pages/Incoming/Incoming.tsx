import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Incoming = () => {
  return (
    <div>
      Incoming Letter
      <div>
        <Link to="/out">Исходящие </Link>
      </div>
    </div>
  );
};

export default Incoming;
