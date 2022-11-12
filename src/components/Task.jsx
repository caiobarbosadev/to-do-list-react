import styles from './Task.module.css';
import { Trash } from 'phosphor-react';
import { useState } from 'react';

export function Task({ id, content, onDeleteTask, onChangeTaskStatus }) {

    const [status, setStatus] = useState(0);

    function handleDeleteTask() {

        onDeleteTask(id);

    }

    function handleChangeTaskStatus() {

        if (status === 0) {

            setStatus(1);

        } else if (status === 1) {

            setStatus(0);

        }

    }

    return (
        <div className={styles.singleTask}>

            {status == 0
                ?
                <input className={styles.checkbox} type="checkbox" onChange={handleChangeTaskStatus} />
                :
                <input checked className={styles.checkbox} type="checkbox" onChange={handleChangeTaskStatus} />
            }

            {status == 0 ? <p>{content}</p> : <p className={styles.completedTask}>{content}</p>}

            <button
                title="Deletar tarefa"
                onClick={handleDeleteTask}
                className={styles.deleteTaskButton}>
                <Trash size={20} />
            </button>

        </div>
    );
}