import styles from "./styles.module.css"

import estrela from "../../assets/estrela (1) 2.svg"

type Props = {
    icon: string 
    name: string
    description: string
    person: string
}

export function CardFeedbacks({ icon, name, description, person }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={icon} alt="" />
                <h3>{name}</h3>
            </div>

            <div className={styles.avaliaton}>
                <div className={styles.estrela}>
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                    <img src={estrela} alt="" />
                </div>

                <p>{description}</p>
            </div>

            <div className={styles.name}>
                <p>{person}</p>
            </div>
        </div>
    )
}