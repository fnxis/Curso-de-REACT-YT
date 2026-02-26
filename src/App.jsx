import { useEffect, useState } from 'react';
import AddTask from './Components/addTask';
import Tasks from  './Components/tasks';
import {v4} from 'uuid';

function App(){
  const [tasks,setTasks]=useState([{
      id:1,
      title:"estudar programacao",
      description:"Estudar pra ficar inteligente",
      isCompleted:false
    },{
      id:2,
      title:"estudar JAVA",
      description:"Estudar pra ficar inteligente em JAVA e saber sobre todas as bibliotecas do JAVA",
      isCompleted:false
    },{
      id:3,
      title:"jogar",
      description:"jogar pra ficar bom,muitoooooooooooooooooooooooooooooooooooooooooooooooo bom mesmo",
      isCompleted:false
    },]);

    useEffect(()=>{//toda funcao useEffect e executada quando o segundo parametro e alterado
      const fetchTask= async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15',{
          method: "GET"
        })

        const data= await response.json()
        setTasks(data)
      }
      fetchTask()
    },[])//todas vez que for uma lista vazia ela sera executada apenas uma vez



    function onTaskClick(taskId){
      const newTasks = tasks.map(task => {
        if (task.id == taskId) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
      setTasks(newTasks);
    }

    function onDeleteTaskClick(taskId){
      const newTasks= tasks.filter(task=>task.id!=taskId)
      setTasks(newTasks)
    }

    function onAddTaskSubmit(titulo,description){
        const newTask={
          id: v4(),
          title: titulo,
          description: description,
          isCompleted: false,
        }
        setTasks([...tasks,newTask])
        
    }


  return(
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-5'>
        <h1 className=" text-3xl text-slate-100 text-center font-bold">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks  tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/> 
    </div></div>)
}

export default App;