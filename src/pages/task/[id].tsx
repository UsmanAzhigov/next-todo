import { useRouter } from 'next/router';
import styles from './Task.module.css';

const TaskDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const handleBackClick = () => {
        router.push('/');
    };

    return (
        <div className={styles.taskDetailContainer}>
            <button className={styles.backButton} onClick={handleBackClick}>
                Back
            </button>
            <h1 className={styles.taskTitle}>Task</h1>
            <p className={styles.taskId}>Task ID: {id}</p>
        </div>
    );
};

export default TaskDetail;
