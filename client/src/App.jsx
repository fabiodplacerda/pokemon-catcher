import { Routes, Route } from 'react-router-dom';

import PokemonList from './components/PokemonsList';
import PokemonSingleCard from './components/PokemonSingleCard';

function App() {
  return (
    <>
      <h1>Pokemon Catcher</h1>
      <Routes>
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemons/:id" element={<PokemonSingleCard />} />
      </Routes>
    </>
  );
}

export default App;
