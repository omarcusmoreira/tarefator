import { useState } from "react";


function TaskTable(){
    
    const [tasks, setTasks] = useState([]);

    const [taskTexts, setTaskTexts] = useState ("");

    function handleTaskText(e){

        setTaskTexts(e.target.value)
    }

    function handleAddTask(e){
        e.preventDefault();
        setTasks([...tasks, { taskText: taskTexts }])

    }


    return (
        <>
            <header>
                <div> 
                    <h1>Tarefator</h1>
                    <h2>Olá, Marcus, voce tem {tasks.length} tarefas para realizar,</h2>
                    <h2>Faltam YYY tarefas para serem realizadas.</h2>
                </div>
                <form onSubmit={handleAddTask}>
                    <input type="text" placeholder="insira uma tarefa nova" onChange={handleTaskText}/>
                    <button type="submit">+</button>
                </form>
            </header>

            <table>    
                <ul>
                    {tasks.map(task => (
                        <li>{task.taskText}</li>
                        ))}
                </ul>
            </table>
        </>
    )
}

export default TaskTable;