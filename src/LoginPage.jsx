import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Container,
    Title,
    Form,
    Input,
    Button,
  } from "./Styles/LoginStyles";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setLoginSuccess(true);
    } catch (error) {
      toast.error(`Login failed: ${error}`, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  if (loginSuccess) {
    toast.success("Successfully signed in", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <Container>
      <Title>Login</Title>
      <ToastContainer />
      <Form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
