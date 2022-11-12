import { Header } from './components/Header';
import styles from './App.module.css';
import './global.css';
import { EmptyTasks } from './components/EmptyTasks';
import { Task } from './components/Task';
import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid } from 'uuid';

export function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const [countCreatedTasks, setCountCreatedTasks] = useState(0);
  const [countCompletedTasks, setCountCompletedTasks] = useState(0);

  function handleCreateNewTask() {
    event.preventDefault();

    setTasks([...tasks, { id: uuid(), content: newTask, status: 0 }]);
    setNewTask('');

    const inputNewTask = document.getElementById('inputNewTask');
    inputNewTask.focus();

    setCountCreatedTasks(countCreatedTasks + 1);
  }

  function handleNewTaskChange() {

    setNewTask(event.target.value);

  }

  function deleteTask(taskToDelete) {

    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
    setCountCreatedTasks(tasksWithoutDeletedOne.length);

  }

  return (

    <div className="App">

      <Header />

      <div className={styles.wrapper}>

        <form onSubmit={handleCreateNewTask} className={styles.menu}>

          <input
            id="inputNewTask"
            required
            onChange={handleNewTaskChange}
            className={styles.createTaskInput}
            placeholder="Adicione uma nova tarefa"
            value={newTask}
          />

          <button
            className={styles.createTaskButton}>
            Criar <PlusCircle size={20} />
          </button>

        </form>

        <header className={styles.header}>
          <p className={styles.createdTasksText}>Tarefas criadas <span>{countCreatedTasks}</span></p>
          <p className={styles.completedTasksText}>Concluídas {countCreatedTasks === 0 ? <span>0</span> : <span>{countCompletedTasks} de {countCreatedTasks}</span>}</p>
        </header>

        <div className={styles.tasksBox}>

          {
            tasks.length > 0 ? tasks.map(task => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  status={task.status}
                  onDeleteTask={deleteTask}
                />)
            }) : <EmptyTasks />
          }

        </div>

      </div>

    </div>

  )

}