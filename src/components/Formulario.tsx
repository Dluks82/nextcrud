import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  cancelado?: () => void;
  clienteMudou?: (cliente: Cliente) => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada
          texto="Código"
          valor={id}
          somenteLeitura
          className="mb-5"
        ></Entrada>
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        className="mb-5"
        valor={nome}
        valorMudou={setNome}
      ></Entrada>
      <Entrada
        texto="Idade"
        className="mb-5"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      ></Entrada>
      <div className="flex justify-end">
        <Button
          className="mr-2"
          cor="blue"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancelado}>Cancelar</Button>
      </div>
    </div>
  );
}
