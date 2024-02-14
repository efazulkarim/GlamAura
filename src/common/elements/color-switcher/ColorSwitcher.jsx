import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"


const ColorSwitcher = () => {
    const [activeClass, SetActiveClass] = useState("Light");
	
	const ColorHandler = (e) => {
		var targetText = e.target.textContent;
		window.localStorage.setItem("color-mode", targetText);
	}
	useEffect(() => {
		var colorModeStore = window.localStorage.getItem("color-mode") || "Light";
        SetActiveClass(colorModeStore);

		if (colorModeStore === "Dark") {
			document.body.classList.add("active-dark-mode");
			document.body.classList.remove("active-light-mode");
		}else {
			document.body.classList.add("active-light-mode");
			document.body.classList.remove("active-dark-mode");
		}

	}, [ColorHandler]);


    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    
    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }

    }, [])

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }


    return ( 
        <>
            <motion.div variants={variants} animate="default" className="mouse-cursor cursor-outer" />
            <motion.div variants={variants} animate="default" className="mouse-cursor cursor-inner" />

            <div className="my_switcher">
                <ul>
                    <li>
                        <Link href="#/">
                        <a className={`setColor ${activeClass === "Light" ? "active" : ""}`} onClick={ColorHandler}>
                            <span title="Light Mode">Light</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#/">
                        <a className={`setColor ${activeClass === "Dark" ? "active" : ""}`} onClick={ColorHandler}>
                            <span title="Dark Mode">Dark</span>
                        </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
     );
}
 
export default ColorSwitcher;