import React from "react";
import { useState } from "react";
import supabase from "../Helper/supabaseClient";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }
    if (data) {
      setMessage("user account created");
      return;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Sign up Page</h1>
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
        <button>Create Account</button>
        <br />
        Have already Account
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
