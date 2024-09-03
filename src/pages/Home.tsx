import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import logo from "../logo.svg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Button
          onClick={() => {
            navigate("/page2");
          }}
        >
          page2
        </Button>
      </header>
    </div>
  );
};

export default Home;
