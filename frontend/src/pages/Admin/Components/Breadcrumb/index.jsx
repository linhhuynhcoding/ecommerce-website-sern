import clsx from "clsx";
import styles from './Breadcrumb.module.scss';

function Breadcrumb({args = []}) {
    const _url = document.location.pathname.split('/').filter(i => i);
    _url.push(...args);
    if (_url.length === 0) {
        _url = ['home'].concat(_url);
    }
    else {
        if (_url[0] !== 'admin') {
            _url = ['home'].concat(_url);
        }
    }
    console.dir(_url);
    return (
        <>
            <ul>
                {
                    _url.map((i, index) => {
                        const t = i.toString().replace('-', ' ');
                        
                        return <>
                            {index !== 0 ?
                                <li><span>/</span></li>
                                : null}
                            <li key={index}><a href={'/' + _url.slice(0, index + 1).join('/')}>{t}</a></li>
                        </>
                    })
                }
            </ul>
        </>
    );
}

export default Breadcrumb;