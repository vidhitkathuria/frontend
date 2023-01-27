import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import QRCode from "react-qr-code";

const Home = () => {
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
            <QRCode value={data} />
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default Home;
