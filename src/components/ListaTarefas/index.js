import Tarefa from "../Tarefa";
import { motion, AnimatePresence } from "framer-motion";

export default function ListaTarefas({ titulo, tarefasFiltradas, ...props }) {
    return (
        <div className="ListaTarefas">
            <h2>{titulo}</h2>
            <AnimatePresence>
                {tarefasFiltradas.map(tarefa => (
                    <motion.div
                        key={tarefa.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Tarefa key={tarefa.id} tarefa={tarefa} {...props} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}