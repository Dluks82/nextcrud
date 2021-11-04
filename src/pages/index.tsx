import { useState } from "react";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio);

  const clientes = [
    new Cliente("Diogo", 39, "1"),
    new Cliente("Lucas", 16, "2"),
    new Cliente("Greg", 41, "3"),
    new Cliente("Helder", 25, "4"),
    new Cliente("Mayara", 24, "5"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("formulario");
  }

  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir: " + cliente.nome);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel("tabela");
  }

  return (
    <div
      className={`flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Button
                className="mb-4"
                cor="green"
                onClick={() => setVisivel("formulario")}
              >
                New Client
              </Button>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={() => setVisivel("tabela")}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}
