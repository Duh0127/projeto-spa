import classes from "./Modal.module.css"

export default function Modal({ open, setOpen, children }) {
    if (open) {
        return (
            <div className={classes.container}>
                <header className={classes.header}>
                    <h1 className={classes.h1}>Modal Inserir</h1>
                    <button onClick={() => setOpen(false)}>X</button>
                </header>
                {children}
            </div>
        )
    }
}