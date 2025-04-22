import { useContext, useState } from 'react';
import { TarefasContext } from '../../App';
export default function NovaTarefa() {
    const {dispatch} = useContext(TarefasContext);
    const [titulo, setTitulo] = useState(''); 
    function novaTarefa() {
       if(titulo.trim() === "") return;
        dispatch({type: "NOVA_TAREFA", value: titulo});
        
        setTitulo('');
    }
    return (
        <div className='NovaTarefa'>
            <input type='text' placeholder='Digite uma nova tarefa' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            <button type='button' onClick={novaTarefa} >Nova Tarefa</button>
        </div>
    )
}