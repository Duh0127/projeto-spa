import classes from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={classes.container}>
            <ul>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">X</a></li>
              <li><a href="#">Reddit</a></li>
            </ul>
        </footer>
    );
}