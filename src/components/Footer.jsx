import styles from "./footer.module.css"

const Footer = ({totalTasks, completedTasks}) => {
    return ( <div className={styles.footer}>
        <span className={styles.task}>Total Tasks: {totalTasks}</span>
        <span className={styles.task}>Completed Tasks: {completedTasks}</span>
    </div> );
}
 
export default Footer;