import clsx from 'clsx';
import styles from './filterbar.module.scss';
import { useEffect, useRef, useState } from 'react';

//---------------PRIME REACT

import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-cyan/theme.css";

//---------------ANOTHER COMPONENTS

//--------------------------
function FilterBar() {
    const [value, setValue] = useState([0, 100000000])
    const [filterStatus, setFilterStatus] = useState({
        'testID' : false,
    })
    const prevFilterStatus = useRef(filterStatus);

    useEffect(() => {
        let filterIcons = document.getElementsByClassName('filterIcon');
        const handlerIconFilter = (e) => {
            let target = e.target.getAttribute('target')
            // console.log(e.target.getAttribute('target'));
            
            setFilterStatus({...prevFilterStatus.current, [target] : !prevFilterStatus.current[target]})
        }
        for (let f of filterIcons) {
            f.addEventListener('click', handlerIconFilter);
        }
        // filterIcons.forEach((f) => {
            // })

            return () => {
                for (let f of filterIcons) {
                    f.removeEventListener('click', handlerIconFilter);
            }
            
        }
    }, []);

    useEffect(() => {
        const handle = () => {
            for (const [key, value] of Object.entries(filterStatus)){
                const e = document.getElementById(key);
                const i = document.querySelector(`i[target='${key}']`)
                console.log(i);
                if (value === true) {
                    e.classList.add(styles.Active);
                    i.classList.add(styles.Active);
                }
                else{
                    e.classList.remove(styles.Active);                    
                    i.classList.remove(styles.Active);
                }
            }

        }
        prevFilterStatus.current = filterStatus;
        // console.log(filterStatus)
        handle();

    }, [filterStatus]);

    return <>
        <div className={clsx(styles.filterBar)}>
            <div className={clsx(styles.filterPriceBox)}>
                <h5>
                    Khoảng giá
                </h5>
                <div className={clsx(styles.inputPriceBox)}>
                    <InputText className={clsx(styles.inputText)} value={[value[0]]} onChange={(e) => setValue(e.target.value[0])} />
                    <InputText className={clsx(styles.inputText)} value={[value[1]]} onChange={(e) => setValue(e.target.value[1])} />
                </div>

                <div>
                    <Slider min={0} max={100000000}
                        // value={[value[0], Math.max(value[0], value[1])]}
                        value={value}
                        onSlideEnd={(e) => {
                            console.log(e);
                        }}
                        onChange={(e) => {
                            setValue(e.value)
                        }} range />

                </div>

            </div>
            <div className={clsx(styles.divider)}></div>
            <div className={clsx(styles.filterBox)}>
                <div className={clsx(styles.filterTitle)}>
                    <h5>
                        Filter
                    </h5>
                    <i target={'testID'} className={clsx('filterIcon', styles.iconActive, "fi fi-rr-angle-small-right")}></i>
                </div>
                <div id={'testID'} className={clsx(styles.filterContent)}>
                    <div className={clsx(styles.filterCheckbox)}>
                        <input type="checkbox" />
                        <label >ABC</label>
                    </div>
                    <div className={clsx(styles.filterCheckbox)}>
                        <input type="checkbox" />
                        <label >ABC</label>
                    </div>
                    <div className={clsx(styles.filterCheckbox)}>
                        <input type="checkbox" />
                        <label >ABC</label>
                    </div>
                    <div className={clsx(styles.filterCheckbox)}>
                        <input type="checkbox" />
                        <label >ABC</label>
                    </div>
                    <div className={clsx(styles.filterCheckbox)}>
                        <input type="checkbox" />
                        <label >ABC</label>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.divider)}></div>
            <div></div>
            <div className={clsx(styles.divider)}></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
}

export default FilterBar;