import { ChevronsRightIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

function Tasks(props){

    function onSeeDetailsClick(task){
        const query=new URLSearchParams()
        query.set("title",task.title)
        query.set("description",task.description)
        navigate(`/task?${query.toString()}`)
    }
    const navigate =useNavigate()

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md">
            {props.tasks.map((task)=>(
                <li key={task.id}className="text-white p-2 rounded-md flex gap-2">
                    <button onClick={()=>{props.onTaskClick(task.id)}} className={`bg-slate-400 text-left text-white p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                        
                        </button>
                    <Button onClick={()=>onSeeDetailsClick(task)} ><ChevronsRightIcon/></Button>
                    <Button onClick={()=>props.onDeleteTaskClick(task.id)} ><TrashIcon/></Button>
                </li>
                ))}
        </ul>
    )
}



export default Tasks