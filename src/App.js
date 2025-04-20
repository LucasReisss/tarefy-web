import { createContext, useState } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import AppContext from './store/AppContext';


export const TarefasContext = createContext(null);
function App() {

  const [tarefas, setTarefas] = useState([]);

  return (
    <div className="App">


      <AppContext.Provider value={{ message: "Tarefy" }}>
        <Cabecalho />
      </AppContext.Provider>

      <TarefasContext.Provider value={[tarefas, setTarefas]}>
        <NovaTarefa />
        <ListaTarefas titulo="Tarefas Pendentes:" tarefasFiltradas={tarefas.filter(t => !t.completa)}/>
        <ListaTarefas titulo="Tarefas Concluídas:" tarefasFiltradas={tarefas.filter(t => t.completa)}/>
      </TarefasContext.Provider>
    </div >
  );
}

export default App;
