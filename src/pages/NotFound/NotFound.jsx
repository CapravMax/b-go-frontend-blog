import clsx from "clsx";
import styles from "./style.module.scss";

const NotFound = () => {

    return (
        <>
        <div className={clsx(styles ['not_found'])}>
            <div className={'not_found__glitch'}  data-text="b-go.ru">b-go.ru</div>
            <div className={'not_found__glow'} >b-go.ru</div>
            <p className={'not_found__subtitle'} >go home</p>
        </div>
    <div className={'scanlines'} ></div>
        </>
 );
};

export default NotFound;