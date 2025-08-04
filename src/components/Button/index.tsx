import styles from "./styles.module.css"

type Props = {
    title: string;
    onClick?: () => void;
}

export function Button({ title, onClick }: Props) {
    return (
        <div className={styles.container}>
            <button onClick={onClick}>{title}</button>
        </div>
    )
}