import styles from './Style.module.css'

export const Searchbar = ({ onSubmit, onChange, value }) => {
    return (
        <header className={styles.Searchbar} onSubmit={evt => onSubmit(evt)}>
            <form className={styles.SearchForm}>
                <button type="submit" className={styles.SearchFormButton}>
                    <span className={styles.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    onChange={evt => onChange(evt)}
                    name="search"
                    value={value}
                    className={styles.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}