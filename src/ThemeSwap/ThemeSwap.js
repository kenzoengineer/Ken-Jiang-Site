import './ThemeSwap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function swapTheme(isDark) {
    var r = document.querySelector(':root');
    if (isDark) {
        r.style.setProperty('--primary', '#282c34');
        r.style.setProperty('--secondary', '#808080');
        r.style.setProperty('--tertiary', '#cccccc');
        r.style.setProperty('--background', '#eaeaea');
        r.style.setProperty('--filter', '0.2');
        return;
    }
    r.style.setProperty('--primary', '#e2e7ec');
    r.style.setProperty('--secondary', '#a6acb8');
    r.style.setProperty('--tertiary', '#575d69');
    r.style.setProperty('--background', '#282c34');
    r.style.setProperty('--filter', '1');
}

function ThemeSwap() {
    const [isDark, setIsDark] = useState(true);
    const [isSwapping, setIsSwapping] = useState(false);

    function stateChange() {
        if (!isSwapping) {
            setIsSwapping(true);
            const e = document.getElementById("themeContent");
            e.style.animation = "swap ease-in-out 1s 1 "
            setTimeout(() => {
                e.style.animation = ""
                setIsSwapping(false);
            }, 1000);
            setTimeout(() => {
                swapTheme(isDark);
                setIsDark(!isDark)
            }, 500);
        }
        return;
    }

    return (
        <div onClick={() => stateChange()} className="Theme-Container">
            <div className="Theme-Icon">
                <div className="Theme-Content" id="themeContent">
                    <FontAwesomeIcon icon={isDark ? faMoon : faSun} />
                </div>
            </div>
        </div>
    );
}

export default ThemeSwap;