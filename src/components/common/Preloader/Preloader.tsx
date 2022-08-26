import preloader from "../../../assets/images/Preloader.gif";
import React from "react";
import styles from './Preloader.module.css'

export const Preloader = () => {


    return <div>
        <img src={preloader} alt='preloader' className={styles.preloader}/>
    </div>
}