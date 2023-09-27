import classes from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <ul className={classes.lista}>
              <li><a className={classes.elemento} href="https://github.com/Duh0127">GitHub</a></li>
              <li><a className={classes.elemento} href="https://twitter.com">X</a></li>
              <li><a className={classes.elemento} href="https://reddit.com">Reddit</a></li>
            </ul>
        </footer>
    );
}