"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { theme } from "./../theme/theme";
import { Container, Card, CardInner, CardFront, Title, Input, Button, ErrorMessage, FlipButton, CardBack, SubTitle } from "./styles";

const LoginSignupCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState(""); 
  const router = useRouter();

  useEffect(() => {
    if (loginError) {
      const timer = setTimeout(() => setLoginError(""), 12000);
      return () => clearTimeout(timer);
    }
  }, [loginError]);

  useEffect(() => {
    if (signupError) {
      const timer = setTimeout(() => setSignupError(""), 12000);
      return () => clearTimeout(timer);
    }
  }, [signupError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const response = await fetch(
        "https://backend-todo-list-liart.vercel.app/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );console.log( "https://backend-todo-list-liart.vercel.app/users/login")

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Falha ao fazer login");
      }

      const data = await response.json();
      router.push("/dashboard");
    } catch (err: any) {
      setLoginError(err.message || "Erro desconhecido");
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { firstName, lastName, email, password };

    try {
      const response = await fetch(
        "https://backend-todo-list-liart.vercel.app/users/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Falha ao fazer cadastro");
      }

      setSignupError("");
      setIsFlipped(false);
    } catch (err: any) {
      setSignupError(err.message || "Erro desconhecido");
    }
  };

  return (
    <Container>
      <Card isError={!!loginError || !!signupError}>
        <CardInner isFlipped={isFlipped}>
          <CardFront>
            <Title>Login</Title>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit}>Entrar</Button>
            {loginError && <ErrorMessage isError={true}>{loginError}</ErrorMessage>}
            <SubTitle>Ainda não é cadastrado?</SubTitle>
            <FlipButton onClick={() => setIsFlipped(true)}>Cadastre-se</FlipButton>
          </CardFront>
          <CardBack>
            <Title>Criar Conta</Title>
            <Input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignupSubmit}>Cadastrar</Button>
            {signupError && <ErrorMessage isError={true}>{signupError}</ErrorMessage>}
            <SubTitle>Já é cadastrado?</SubTitle>
            <FlipButton onClick={() => setIsFlipped(false)}>Login</FlipButton>
          </CardBack>
        </CardInner>
      </Card>
    </Container>
  );
};

export default LoginSignupCard;
