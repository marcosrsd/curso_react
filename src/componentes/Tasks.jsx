import { EyeIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsOnclick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="text-left">
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 w-full text-white text-left p-2 rounded-m ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <Button
              onClick={() => onSeeDetailsOnclick(task)}
              title="Visualizar detalhes da tarefa"
            >
              <EyeIcon />
            </Button>

            <Button
              onClick={() => onDeleteTaskClick(task.id)}
              title="Remover tarefa"
            >
              <TrashIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
