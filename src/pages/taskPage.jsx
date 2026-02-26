import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"

function TaskPage(){
     const [searchParams]=useSearchParams();
     const title=searchParams.get("title")
     const description = searchParams.get("description")
     const navigate=useNavigate()


    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className='w-[500px] space-y-5'>
                <div className="flex justify-center relative">
                    <button onClick={()=>navigate(-1)} className="bg-slate-100 text-black absolute left-0"><ChevronLeft/></button>
                    <h1 className="text-3xl text-slate-100 text-center font-bold">Gerenciador de Tarefas</h1>
                </div>
                <div className="space-y-4 p-6 bg-slate-200 rounded-md">
                    <h1 className="text-2xl text-black text-left font-bold">{title}</h1>
                    <h1 className="text-lg text-black text-left font-bold">{description}</h1>
                </div>
            </div>
        </div>
    );
}

export default TaskPage