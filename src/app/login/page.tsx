"use client";

import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import Image from "next/image";
import { HomeButton } from "../components/IconButton/IconButton";
import { useRouter } from "next/navigation";
import { VisibilityInput } from "../components/VisibilityInput/VisibilityInput";
import { Bounce, toast, ToastContainer } from "react-toastify";

interface InputData {
  username: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<InputData>();

  const router = useRouter();

  function handleHomeClick() {
    router.back();
  }

  function handleLogin(data: InputData) {
    if (data.username == "admin" && data.password == "1234") {
      router.push("/projects");
    } else {
      setError("username", {});
      setError("password", {});
      toast.error("Nome de usuário ou senha incorretos.");
    }
  }

  if (errors.password) console.log("Erro na password");

  return (
    <div className={styles.page}>
      <ToastContainer
        className={styles.toast}
        position="top-center"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <nav>
        <Image
          src="/images/logo.svg"
          alt="Logo IFConecta, universidade e comunidade ligadas por uma linha tracejada que passa pela palavra 'IFConecta'"
          width={140}
          height={60}
          quality={100}
        />
        <HomeButton onClick={handleHomeClick} />
      </nav>
      <div className={styles.container}>
        <h1>IFConecta</h1>
        <h2>IFSULDEMINAS</h2>
        <div className={styles.card}>
          <h3>Login</h3>
          <p>para professores</p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className={styles.field}>
              <label htmlFor="username">Usuário:</label>
              <input
                type="text"
                {...register("username")}
                className={
                  errors.username ? styles.errorInput : styles.borderlessInput
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="password">Senha</label>
              <VisibilityInput
                {...register("password")}
                className={
                  errors.password ? styles.errorInput : styles.borderlessInput
                }
              />
            </div>
            <button type="submit">Continuar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
