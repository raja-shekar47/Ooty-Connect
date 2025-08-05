import React from "react";
import { useState } from "react";
import supabase from "../Helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }
    if (data) {
      navigate("/");
      return;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <br />
      <br />
      <br />
      {message && <span>{message}</span>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter email"
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
        />
        <button>Log in</button>
        <br />
        Don't Have Account Sign up
        <Link to="/Register">
          <button>Sign up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
