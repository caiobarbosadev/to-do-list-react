import styles from './EmptyTasks.module.css';
import emptyTasksIcon from '../assets/empty-tasks-icon.svg';

export function EmptyTasks() {
    return (
        <div className={styles.content}>
            <img src={emptyTasksIcon} alt="Ícone de tarefas vazias" />
            <div>
                <p>Você ainda não possui tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    );
}