import clsx from 'clsx';
import styles from './mainmenu.module.scss';
import { createElement, useEffect, useState } from 'react';

const categoriesList = [
    { code: 'lap', icon: 'fi fi-rr-laptop', name: 'Laptop' },
    { code: 'pc', icon: 'fi fi-rr-laptop', name: 'PC - Máy tính bàn' },
    { code: 'monitor', icon: 'fi fi-rr-laptop', name: 'Màn hình máy tính' },
    { code: 'cpn', icon: 'fi fi-rr-laptop', name: 'Linh kiện máy tính' },
    { code: 'acc', icon: 'fi fi-rr-laptop', name: 'Phụ kiện máy tính' },
];

const subCates = {
    '': [{ title: '', sub: [{ name: '', href: '/' }] }],
    'lap': [
        { title: 'Thương hiệu', sub: [{ name: 'A1', href: '/' }, { name: 'A2', href: '/' }] },
        { title: 'Thương hiệu', sub: [{ name: 'A1', href: '/' }, { name: 'A2', href: '/' }] },
        { title: 'Thương hiệu', sub: [{ name: 'A1', href: '/' }, { name: 'A2', href: '/' }] },
        { title: 'Thương hiệu', sub: [{ name: 'A1', href: '/' }, { name: 'A2', href: '/' }] },
        { title: 'Thương hiệu', sub: [{ name: 'A1', href: '/' }, { name: 'A2', href: '/' }] },
    ],
    'pc': [
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
        { title: 'Thương hiệu 2', sub: [{ name: 'A0', href: '/' }, { name: 'A32', href: '/' }] },
    ],
    'monitor': [
        { title: 'Thương hiệu 3', sub: [{ name: 'A11', href: '/' }, { name: 'A22', href: '/' }] },
        { title: 'Thương hiệu 3', sub: [{ name: 'A11', href: '/' }, { name: 'A22', href: '/' }] },
        { title: 'Thương hiệu 3', sub: [{ name: 'A11', href: '/' }, { name: 'A22', href: '/' }] },
        { title: 'Thương hiệu 3', sub: [{ name: 'A11', href: '/' }, { name: 'A22', href: '/' }] },
        { title: 'Thương hiệu 3', sub: [{ name: 'A11', href: '/' }, { name: 'A22', href: '/' }] },
    ],
}

function ChildMenu({ cate }) {
    return (
        <>
            {
                subCates[cate].map((i, index) => {
                    return (
                        <div key={cate}>
                            <h2>{i['title']}</h2>
                            {
                                i['sub'].map((j, jindex) => {
                                    return (
                                        <div>
                                            <a href={j['href']}>{j['name']}</a>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    );

}

function MainMenu() {
    const [cate, setCate] = useState('');
    // let cate = '';
    const [cateSub, setcateSub] = useState('');



    useEffect(() => {
        const menuChild = document.getElementById(`menu-child`);
        const handleHover = (e) => {
            console.dir(e.target['dataset'].key);
            menuChild.classList.remove('is-disable');
            if (subCates[e.target['dataset'].key])
                setCate(e.target['dataset'].key);
        }
        const handleUnHover = () => {
            // setCate('');
            menuChild.classList.add('is-disable');

        }
        const handleMenuChild = () => {
            menuChild.classList.remove('is-disable');
        }
        const handleUnMenuChild = () => {
            menuChild.classList.add('is-disable');
        }
        const menus = document.getElementsByClassName(`${clsx(styles.labelMenuTree)}`);
        menuChild.addEventListener("mouseenter", handleMenuChild);
        menuChild.addEventListener("mouseleave", handleUnMenuChild);
        for (let menu of menus) {
            menu.addEventListener("mouseenter", handleHover);
            menu.addEventListener("mouseleave", handleUnHover);
        }
        
        
        return () => {
            for (let menu of menus) {
                menu.removeEventListener("mouseenter", handleHover);
                menu.removeEventListener("mouseleave", handleUnHover);
            }
            menuChild.removeEventListener("mouseenter", handleMenuChild);
            menuChild.removeEventListener("mouseleave", handleUnMenuChild);

        };
    }, []);

    console.dir('rerender');

    return (
        <>
            <div className={clsx(styles.mainMenu)}>
                <div className={clsx(styles.menuContainer)}>
                    {
                        categoriesList.map((i, index) => {
                            return (
                                <div data-key={i.code} key={i.code} className={clsx(styles.labelMenuTree)}>
                                    <a href="" className={clsx(styles.labelItem)}>
                                        <i class={i.icon}></i>
                                        <span>{i.name}</span>
                                    </a>
                                </div>
                            )
                        })  
                    }

                </div>
                <div id="menu-child" className={clsx('is-disable', styles.menuChild)}>
                    <div className={clsx('', styles.menuChildContainer)} >
                        {
                            categoriesList.map((i, index) => {
                                return (
                                    <>
                                    { cate == i.code ? <ChildMenu key={i} cate={cate}/> : null}
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );

}

export default MainMenu;