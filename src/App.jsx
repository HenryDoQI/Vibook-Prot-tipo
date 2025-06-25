import { useState } from "react";

function Card({ id }) {
  return (
    <div className="bg-gray-800 rounded p-4">
      <div className="h-40 bg-gray-700 rounded mb-3" />
      <h3 className="text-lg font-bold">Título do Vi-book #{id}</h3>
      <p className="text-sm text-gray-400">Categoria: Desenvolvimento Pessoal</p>
      <button className="bg-white text-black w-full mt-3 py-2 rounded">Assistir</button>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">📚 Vibook</h1>
        <button className="bg-white text-black px-4 py-2 rounded">Login</button>
      </header>

      <div className="mb-6">
        <input
          placeholder="Buscar Vi-books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 text-white placeholder-gray-400 p-2 rounded w-full"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">Destaques da Semana</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <Card key={id} id={id} />
        ))}
      </div>

      <footer className="mt-12 text-center text-gray-500 text-sm">
        © 2025 Vibook. Todos os direitos reservados.
      </footer>
    </div>
  );
}
