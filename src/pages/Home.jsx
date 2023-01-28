import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    // navigate("/register");
  };
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    const resp = JSON.parse(localStorage.getItem("user"));
    if (resp) {
      setData(resp);
    }
  }, []);
  // console.log(data.property);
  return (
    <div>
      {data ? (
        <div className="card">
          <div className="card-header">User Info</div>
          <div className="card-body">
            <p>{data.username}</p>
            <p>{data.email}</p>
            <QRCode
              value={JSON.stringify({ name: data.username, email: data.email })}
            />
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
