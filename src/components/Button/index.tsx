import styles from "./styles.module.css"

type Props = {
    title: string
}

export function Button({ title }: Props) {
    return (
        <div className={styles.container}>
            <button>{title}</button>
        </div>
    )
}