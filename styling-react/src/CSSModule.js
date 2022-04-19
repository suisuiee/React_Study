import React from "react";
import classNames from "classnames/bind.js";
//import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아오도록 설정

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요. 저는 <span className="something">CSS Module!</span>
        </div>
        /*
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요. 저는 <span className="something">CSS Module!</span>
        </div>
         */
    );
};

export default CSSModule;