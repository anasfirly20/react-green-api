import React, { useEffect, useState } from "react";

// Components
import Input from "../../Components/Input";

// Utils
import { getIdInstance, getApiTokenInstance } from "../../../utils";

// Miscellaneous
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = ({ title }) => {
  const idInstance = getIdInstance();
  const apiTokenInstance = getApiTokenInstance();

  const navigate = useNavigate();
  const [data, setData] = useState({
    idInstance: "",
    ApiTokenInstance: "",
  });
  const [trigger, setTrigger] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (data?.idInstance && data?.ApiTokenInstance) {
      localStorage.setItem("idInstance", JSON.stringify(data?.idInstance));
      localStorage.setItem(
        "apiTokenInstance",
        JSON.stringify(data?.ApiTokenInstance)
      );
      navigate(0);
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <section className="min-h-screen bg-customBg flex justify-center items-start py-longer text-customWhite">
        <form>
          <h1 className="text-center font-semibold text-3xl mb-3">LOGIN</h1>
          <h3>
            Enter your Id Instance and Api Token Instance from your green-api
            account
          </h3>
          <div className="grid gap-5 mt-10">
            <Input
              label="Id Instance"
              name="idInstance"
              value={data?.idInstance}
              onChange={handleChange}
            />
            <Input
              label="Api Token Instance"
              name="ApiTokenInstance"
              value={data?.ApiTokenInstance}
              onChange={handleChange}
            />
          </div>
          <div className="text-center">
            <button
              className="text-customWhite mt-10 w-[70%] py-2 font-semibold text-lg bg-customTealGreen rounded-lg"
              onClick={handleClick}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
