"use client";
import React, { useState, useEffect } from "react";
import {
  DashboardContainer,
  Header,
  Title,
  AddTaskSection,
  TaskInput,
  AddButton,
  TaskListContainer,
  TaskCard,
  TaskText,
  TaskButtonGroup,
  CompleteButton,
  DeleteButton,
  NoTasksMessage, // Adicionei o componente para a mensagem
} from "./styles";

// Interface para representar a estrutura do JSON
interface Task {
  id: number; // Assumindo que existe um identificador único
  description: string;
  status: "TO_DO" | "DONE"; // Status esperado
  dueDate: string; // Data no formato recebido
}

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState("");

  // Função para buscar dados da API
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("URL_DA_SUA_API");
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    if (newTaskDescription.trim() !== "") {
      const newTask = {
        description: newTaskDescription.trim(),
        status: "TO_DO",
        dueDate: new Date().toISOString().split("T")[0], // Define uma data padrão (hoje)
      };

      // Adiciona a tarefa na API e atualiza o estado local
      const response = await fetch("URL_DA_SUA_API", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const createdTask = await response.json();
        setTasks([...tasks, createdTask]);
        setNewTaskDescription("");
      }
    }
  };

  const completeTask = async (id: number) => {
    // Atualiza o status da tarefa na API
    const taskToUpdate = tasks.find((task) => task.id === id);
    if (!taskToUpdate) return;

    const updatedTask = { ...taskToUpdate, status: "DONE" };

    const response = await fetch(`URL_DA_SUA_API/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    if (response.ok) {
      //setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
    }
  };

  const deleteTask = async (id: number) => {
    // Remove a tarefa da API
    const response = await fetch(`URL_DA_SUA_API/${id}`, { method: "DELETE" });

    if (response.ok) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <DashboardContainer>
      <Header>
        <Title>To-Do List Dashboard</Title>
      </Header>

      <AddTaskSection>
        <TaskInput
          value={newTaskDescription}
          onChange={(e: any) => setNewTaskDescription(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />
        <AddButton onClick={addTask}>Adicionar</AddButton>
      </AddTaskSection>

      <TaskListContainer>
        {tasks.length === 0 ? (
          <NoTasksMessage>Não há tarefas a serem visualizadas</NoTasksMessage>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id}>
              <div>
                <TaskText>
                  <strong>Tarefa:</strong> {task.description}
                </TaskText>
                <TaskText>
                  <strong>Status:</strong>{" "}
                  {task.status === "TO_DO" ? "Pendente" : "Concluído"}
                </TaskText>
                <TaskText>
                  <strong>Prazo:</strong> {task.dueDate}
                </TaskText>
              </div>
              <TaskButtonGroup>
                {task.status === "TO_DO" && (
                  <CompleteButton onClick={() => completeTask(task.id)}>
                    Completar
                  </CompleteButton>
                )}
                <DeleteButton onClick={() => deleteTask(task.id)}>
                  Excluir
                </DeleteButton>
              </TaskButtonGroup>
            </TaskCard>
          ))
        )}
      </TaskListContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
