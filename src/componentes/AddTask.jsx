import { useState } from "react";
import Input from "./Input";

function AddTask({ onTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Informe o título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Informe a descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <hr className="border-slate-500" />
      <button
        onClick={() => {
          //Verificando os preenchimentos
          if (!title.trim() || !description.trim()) {
            return alert("Informe o título e a descrição da tarefa.");
          }

          if (title.length < 10) {
            return alert("O título deve conter, no mínimo, 10 caracteres.");
          }

          if (description.length < 10) {
            return alert("A descrição deve conter, no mínimo, 10 caracteres.");
          }

          onTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 rounded-md text-white font-medium px-4 py-2 w-40"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
