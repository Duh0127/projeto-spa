import classes from './Home.module.css';

export default function Home(){
    return(
        <main className={classes.container}>
            <h1 className={classes.titulo}>REACT + VITE</h1>
            <h3 className={classes.subtitulo}>Site produzido na disciplina RWD</h3>
        </main>
    )
}