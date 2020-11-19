import styles from './PojectList.module.css'

function ProjectList({projects}) {
    const boxes = projects.map((elem, i) => <div key={i} className={styles.box}>
        <img src={elem.img} className='box-img'/></div>);
    return (
        <div className={styles.wrapperBox}>{boxes}</div>
    );
}

export default ProjectList;
