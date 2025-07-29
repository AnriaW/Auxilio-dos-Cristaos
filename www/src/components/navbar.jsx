// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // ícones bonitos
import logo from "../assets/logo.png"; // coloque sua logo aqui

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Navbar superior */}
      <nav className="bg-white shadow-md px-4 py-2 flex items-center justify-between fixed top-0 w-full z-50">
        {/* Esquerda: logo e menu */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleSidebar}>
            <Menu className="w-6 h-6" />
          </button>
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Centro: busca */}
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Pesquisar no site..."
            className="w-full border rounded px-3 py-1 text-sm"
          />
        </div>

        {/* Direita: atalhos */}
        <div className="flex items-center space-x-4 text-sm">
          <a href="#devocionario">Devocionário</a>
          <a href="#intencao">Intenção</a>
          <a href="#login">Login</a>
          <a href="#cadastro">Cadastro</a>
        </div>
      </nav>

      {/* Sidebar (drawer lateral) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleSidebar}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-full p-4 space-y-2 text-sm">
          {/* Exemplo de seção expandível */}
          <details>
            <summary className="cursor-pointer font-semibold">Bíblia</summary>
            <ul className="ml-4 list-disc">
              <li>Latim</li>
              <li>Português</li>
              <li>Evangelho do dia</li>
              <li>Epístola do dia</li>
            </ul>
          </details>

          <details>
            <summary className="cursor-pointer font-semibold">Santo do dia</summary>
            <ul className="ml-4 list-disc">
              <li>História</li>
              <li>Devoções</li>
              <li>Frases para meditação</li>
            </ul>
          </details>

          {/* Continue adicionando suas seções aqui com a mesma estrutura */}
        </div>
      </div>

      {/* Espaço para evitar sobreposição com navbar */}
      <div className="h-14" />
    </>
  );
};

export default Navbar;
