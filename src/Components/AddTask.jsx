import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTaskSubmit}){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md flex flex-col">
            <Input value={title} type="text" onChange={(event)=>setTitle(event.target.value)} placeholder="Digite o titulo" />
            <Input value={description} type="text" onChange={(event)=>setDescription(event.target.value)}  placeholder="Digite a descrição" />
            <button onClick={()=>{if(!title.trim() || !description.trim()){return alert("preencha os campos")}onAddTaskSubmit(title,description); setTitle(""); setDescription("");}} className="bg-slate-500 text-white px-4 py-2 rounded-md">Adicionar</button>
        </div>
    )
}

export default AddTask