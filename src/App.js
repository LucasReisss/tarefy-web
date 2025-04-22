import { createContext, useReducer, } from 'react';
import './App.css';
import Cabecalho from './components/Cabecalho';
import NovaTarefa from './components/NovaTarefa';
import ListaTarefas from './components/ListaTarefas';
import AppContext from './store/AppContext';


export const TarefasContext = createContext(null);

function tarefasReducer(tarefas, action) {
  switch (action.type) {
    case "NOVA_TAREFA":
      const id = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;
      const novaTarefa = {id, titulo: action.value, completa: false};
      return [...tarefas, novaTarefa];
    case "CONCLUIR_TAREFA":
      const index = tarefas.findIndex(t => t.id === action.tarefa.id);
      tarefas[index].completa = true;
      return [...tarefas];
    default:
      return tarefas;
  }
}

function App() {

  const [tarefas, dispatch] = useReducer(tarefasReducer, [
    { id: 1, titulo: "Estudar React", completa: false },
    { id: 2, titulo: "Estudar JavaScript", completa: false }
  ]);

  return (
    <div className="App">


      <AppContext.Provider value={{ message: "Tarefy" }}>
        <Cabecalho />
      </AppContext.Provider>

      <TarefasContext.Provider value={{dispatch}}>
        <NovaTarefa />
        <ListaTarefas titulo="Tarefas Pendentes:" tarefasFiltradas={tarefas.filter(t => !t.completa)}/>
        <ListaTarefas titulo="Tarefas Concluídas:" tarefasFiltradas={tarefas.filter(t => t.completa)}/>
      </TarefasContext.Provider>
    </div >
  );
}

export default App;
