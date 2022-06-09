import ReactDOM from 'react-dom';
import styles from "./MobileNav.module.css";
import cancelIcon from "../../Assets/cancel.svg"

export default function MobileNav({ openModal, setOpenModal }) {
	return ReactDOM.createPortal(
		<div className={styles.mobile_nav } >
      <NavItem setOpenModal={setOpenModal} />
      <div className={styles.cancel} onClick={() => setOpenModal(false)}><img src={cancelIcon} alt="cancel" /> </div>
    </div>,
		document.getElementById("mobile-nav")
	);
}


function NavItem({ setOpenModal }) {
  const closeMobileNav = () => {
    setOpenModal(false)
  }

  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="/">Developers</a></li>
        <li><a href="/">Company</a></li>
        <li><a href="/">Innovators</a></li>
        <li><a href="/">About us</a></li>
      </ul>
      <ul>
        <li><a href="/#info" onClick={closeMobileNav}>Get Started</a></li>
        <li><a href="/#form" onClick={closeMobileNav}>Sign up</a></li>
      </ul>
    </nav>
  )
}

