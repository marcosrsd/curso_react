import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import { v4 } from "uuid";
import Header from "./componentes/Header";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  function onTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };

    let cont = 0;
    const testTask = tasks.map((task) => {
      if (task.title === title) {
        cont++;
      }
    });

    if (cont > 0) {
      return alert("Já existe uma tarefa já com o título informado");
    }
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    //Armazenando na variável local "tasks" um json, que são as tasks convertidas em uma string
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const fetchTasks = async () => {
      //Chamando a API
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );

      //Pegando os dados que a API retorna
      const data = await response.json();
      //Armazenando os dados no state
      setTasks(data);
    };
    //Retirar o comentário abaixo se quiser utilizar os dados da API
    //fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="h-auto w-[1200px] bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Header>Gerenciador de Tarefas</Header>
        <hr />
        <br />
        <AddTask onTaskSubmit={onTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
