import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = (props) => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getAll", {
        headers: { auth: `${JSON.parse(localStorage.getItem("auth"))}` },
      })
      .then((res) => {
        setJson(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  }, []);
  return (
    <div>
      <p>{JSON.stringify(json)}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.clear();
          props.history.push("/login");
          toast.success("logout Success");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
