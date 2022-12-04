import { useState } from "react";
import { User } from "../../App";
import Field from "./Field";

interface FormProps {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const Form = ({ setUser }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = new FormData(event.currentTarget);

    const name = form.get("name")!.toString();
    const email = form.get("email")!.toString();

    setUser({ name, email });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex flex-col items-center justify-center gap-5 -mt-20 mx-5"
    >
      <Field
        label="Seu nome:"
        type="text"
        placeholder="Insira seu nome"
        name="name"
        id="name"
        required
        minLength={2}
        pattern="^[a-zA-Z]+(([\s][a-zA-Z ])?[a-zA-Z]*)*"
        title="Não pode conter números, caracteres especiais, ser somente espaços ou começar/terminar com espaço"
      />
      <Field
        label="Seu e-mail principal:"
        type="email"
        placeholder="example@email.com"
        name="email"
        id="email"
        required
        pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
        title="Exemplo de formato: example@email.com"
      />
      <button type="submit" className="button">
        Entrar
      </button>
    </form>
  );
};

export default Form;
