import styles from "./styles.module.css"

export function FormContato() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Agende um horário para a matrícula</h1>
                <p>Responda o formulário a seguir para agendar um horário para que nossa equipe o atenda no procedimento de matrícula</p>
            </div>

            <div className={styles.form}>
                <form action="">
                    <div className={styles.input}>
                        <label htmlFor="">Nome completo do responsável</label>
                        <input type="text" placeholder="Ex: Wemerson Matheus de Melo Amorim" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="">Nome completo do aluno</label>
                        <input type="text" placeholder="Ex: Thays Fernanda de Melo Amorim" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="">Telefone para contato</label>
                        <input type="tel" placeholder="(99) 9 9999-9999" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="">Data</label>
                        <input type="date" placeholder="Escolha uma data" />
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="">Horário</label>
                        <input type="time" placeholder="Escolha um horário" />
                    </div>

                    <div className={styles.button}>
                        <button>Agende uma visita</button>
                    </div>
                </form>
            </div>
        </div>
    )
}