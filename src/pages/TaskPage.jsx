import { HomeIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../componentes/Header";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  function backHome() {
    navigate("/");
  }

  return (
    <div className="h-[800px] w-[1200px] bg-slate-500 p-6 space-y-5">
      <div className="space-y-4">
        <div className="flex justify-center relative">
          <button
            title="Retornar à página principal"
            onClick={() => backHome()}
            className="absolute left-0 top-0  bottom-0 text-white text-left"
          >
            <HomeIcon />
          </button>
          <Header>Detalhes da Tarefa</Header>
          <hr />
        </div>
        <div className="bg-slate-200 rounded-md text-left p-4">
          <h2 className="text-xl text-slate-900 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
