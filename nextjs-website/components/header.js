import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Header( {children} ) {

    return (
        <div className={styles.headcontainer}>
            <nav>
                <a href="index.html"> 
                    <Image src="images/computer.svg" alt="Computer Image" width="100" height="100"/>
                    <h1>Sat P.</h1>
                </a>
                <div class="nav-links" id="navLink">
                    <i class="fa fa-times" onclick="hideMenu()"></i>
                    <ul>
                        <li><Link href="/about" class="undaline">About</Link></li>
                        <li><Link href="/projects" class="undaline">Projects</Link></li>
                        <li><Link href="/contact" class="undaline">Contact</Link></li>
                    </ul>
                </div>
                    <i class="fa fa-bars" onclick="showMenu()"></i>
            </nav> 
            <br></br>
        </div>
    );

}

export default Header; 