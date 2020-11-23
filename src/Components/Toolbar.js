import styles from './Toolbar.module.css'

function Toolbar({filters, selected, onSelectFilter}) {
    const buttons = filters.map((elem,i) => <button
        className={styles.button + ' ' +(selected === elem ? styles.active : '')}
        key={i} onClick={() => onSelectFilter(elem)}>{elem}</button>);
    return (
        <div className={styles.wrapper}>{buttons}</div>
    );
}

export default Toolbar;
