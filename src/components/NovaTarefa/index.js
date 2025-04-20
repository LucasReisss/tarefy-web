import { useContext, useState } from 'react';
import { TarefasContext } from '../../App';
export default function NovaTarefa() {
    const [tarefas, setTarefas] = useContext(TarefasContext);
    const [titulo, setTitulo] = useState('');
    function novaTarefa() {
       if(titulo.trim() === "") return;
        const id = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;
        const novaTarefa = { id, titulo, completa: false };
        setTarefas([...tarefas, novaTarefa]);
        setTitulo('');
    }
    return (
        <div className='NovaTarefa'>
            <input type='text' placeholder='Digite uma nova tarefa' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <button type='button' onClick={novaTarefa} >Nova Tarefa</button>
        </div>
    )
}