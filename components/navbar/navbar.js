import styles from './navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    const links = [{ link: '/', name: 'Home' }, { link: '/#about-me', name: 'About Me' }, { link: '/#projects', name: 'Projects' }, {link: '/#books', name: 'Books'}];
    const socialMedia = [{icon: '/github-svgrepo-com.svg', alt: 'Github repo logo', href: "https://github.com/RandomNoob724"}, {icon: '/linkedin-svgrepo-com.svg', href: 'https://www.linkedin.com/in/emil-persson-aa5a17157/', alt: 'Linkedin logo'}];

    const socialMediaLinks = socialMedia.map((socialMediaObj, index) => {
        return(
            <li key={index}>
                <a href={socialMediaObj.href ? socialMediaObj.href : ""} target={"_blank"}>
                    <Image src={socialMediaObj.icon} alt={socialMediaObj.alt} height={24} width={24} />
                </a>
            </li>
        );
    })

    const navLinks = links.map((linkObj, index) => {
        return (
            <li key={index}>
                <Link href={`${linkObj.link}`}>
                    <a href={`${linkObj.link}`}>{linkObj.name}</a>
                </Link>
            </li>
        );
    });

    return (
        <div className={styles.navbar}>
            <ul>
                {navLinks}
            </ul>
            <ul>
                {socialMediaLinks}
            </ul>
        </div>
    );
}

export default NavBar;