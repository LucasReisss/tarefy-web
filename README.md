# Tarefy Web

Este projeto foi desenvolvido como parte de uma pós-graduação, com o objetivo de praticar **React.js** e conceitos de **modularização**, aplicando o princípio de **responsabilidade única** (Single Responsibility Principle). Recentemente, foram implementadas melhorias na experiência do usuário, incluindo **motion design** com a biblioteca [Framer Motion](https://www.framer.com/motion/).

## 🛠️ Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Framer Motion**: Biblioteca para animações e transições suaves em React.
- **CSS**: Estilização do projeto.
- **JavaScript (ES6+)**: Linguagem principal para desenvolvimento.

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto foi:
- Criar componentes reutilizáveis e modulares.
- Aplicar o princípio de responsabilidade única em cada componente.
- Implementar animações para melhorar a experiência do usuário.

## 🚀 Funcionalidades

1. **Adicionar Tarefas**: Permite ao usuário adicionar novas tarefas à lista.
2. **Marcar como Concluído**: O usuário pode marcar tarefas como concluídas.
3. **Filtrar Tarefas**: As tarefas são exibidas em duas listas separadas:
    - Tarefas Pendentes
    - Tarefas Concluídas
4. **Animações com Framer Motion**:
    - Transições suaves ao adicionar ou remover tarefas.
    - Animações de entrada e saída para melhorar a experiência visual.

## 📂 Estrutura do Projeto

A estrutura do projeto segue uma abordagem modular, com componentes organizados por responsabilidade:

```
src/
├── components/
│   ├── Cabecalho/       # Componente do cabeçalho
│   ├── NovaTarefa/      # Formulário para adicionar novas tarefas
│   ├── ListaTarefas/    # Lista de tarefas (pendentes e concluídas)
│   ├── Tarefa/          # Componente individual de uma tarefa
├── App.js               # Componente principal
├── index.js             # Ponto de entrada do React
├── App.css              # Estilos globais
```

## 🖼️ Motion Design com Framer Motion

O **Framer Motion** foi integrado ao projeto para adicionar animações às listas de tarefas. Aqui estão os principais pontos de implementação:

- **Entrada e Saída de Tarefas**:
  Cada tarefa é envolvida em um `motion.div` para aplicar animações de entrada e saída.

```javascript
<motion.div
     key={tarefa.id}
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 20 }}
     transition={{ duration: 0.3 }}
>
     <Tarefa tarefa={tarefa} {...props} />
</motion.div>

<AnimatePresence>
     {tarefasFiltradas.map(tarefa => (
          <motion.div
                key={tarefa.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
          >
                <Tarefa tarefa={tarefa} {...props} />
          </motion.div>
     ))}
</AnimatePresence>
```