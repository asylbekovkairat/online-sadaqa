import "./App.css";
import { RandomSadaqa } from "./features/random-sadaqa";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <header className="flex justify-between items-center pb-4 border-b-2 border-b-gray-200 mb-6">
        <h1 className="text-2xl font-bold">Онлайн Садака 🤲</h1>
        <RandomSadaqa />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
