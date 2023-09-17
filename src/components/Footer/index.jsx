import classes from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <ul className={classes.lista}>
              <li><a className={classes.elemento} href="https://github.com/Duh0127" target="_blank">GitHub</a></li>
              <li><a className={classes.elemento} href="https://twitter.com" target="_blank">X</a></li>
              <li><a className={classes.elemento} href="https://reddit.com" target="_blank">Reddit</a></li>
            </ul>
        </footer>
    );
}