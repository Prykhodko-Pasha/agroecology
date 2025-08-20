import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BurgerButton from "../BurgerButton/BurgerButton";

export default function Layout({ children, title = "Відділ агроекології і біобезпеки", currentPage = "home" }) {
  const [mobMenuShowed, setmobMenuShowed] = useState(false);

  const toggleMenu = () => {
    setmobMenuShowed(!mobMenuShowed);
  };

  const getActiveClass = (page) => {
    return currentPage === page ? "menu__item--active" : "";
  };

  const getMobileActiveClass = (page) => {
    return currentPage === page ? "mob-menu__link--active" : "";
  };

  const getHeaderBgClass = () => {
    switch (currentPage) {
      case "home":
        return "header-bg-index";
      case "lab":
        return "header-bg-lab";
      case "contacts":
        return "header-bg-contacts";
      default:
        return "header-bg-index";
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className={`header ${getHeaderBgClass()}`}>
        <BurgerButton isOpen={mobMenuShowed} onClick={toggleMenu} />
        <div className={mobMenuShowed ? "mob-menu is-open" : "mob-menu"}>
          <ul className="mob-menu__list">
            <li className="mob-menu__item">
              <Link className={`mob-menu__link ${getMobileActiveClass("home")}`} href="/">
                Головна
              </Link>
            </li>
            <li className="mob-menu__item">
              <Link className={`mob-menu__link ${getMobileActiveClass("lab")}`} href="/lab">
                Випробувальна лабораторія
              </Link>
            </li>
            <li className="mob-menu__item">
              <Link className={`mob-menu__link ${getMobileActiveClass("contacts")}`} href="/contacts">
                Контакти
              </Link>
            </li>
          </ul>
        </div>
        <Link className="logo" href="/">
          <Image
            src="/images/logo-9-2.jpg"
            alt="Відділ агроекології і біобезпеки"
            width={200}
            height={80}
          />
        </Link>
        <nav>
          <ul className="menu">
            <li>
              <Link className={`menu__item ${getActiveClass("home")}`} href="/">
                Головна
              </Link>
            </li>
            <li>
              <Link className={`menu__item ${getActiveClass("lab")}`} href="/lab">
                Випробувальна лабораторія
              </Link>
            </li>
            <li>
              <Link className={`menu__item ${getActiveClass("contacts")}`} href="/contacts">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className='footer__wrapper'>
            <ul className="footer__menu">
              <li className="footer__menu__item">
                <Link href="/">Головна</Link>
              </li>
              <li>-</li>
              <li className="footer__menu__item">
                <Link href="/lab">Випробувальна лабораторія</Link>
              </li>
              <li>-</li>
              <li className="footer__menu__item">
                <Link href="/contacts">Контакти</Link>
              </li>
            </ul>
            <p className="footer__text">ВЛ "ВАБ"</p>
          </div>
          <address className="footer__contacts">
            <ul>
              <li>
                <p className="footer__contacts__address">
                  м. Київ, вул. Метрологічна, 12
                </p>
              </li>
              <li>
                <a className="footer__contacts__link" href="mailto:info@devstudio.com"
                  >info@devstudio.com</a
                >
              </li>
              <li>
                <a className="footer__contacts__link" href="tel:+380961111111"
                  >+38 096 111 11 11</a
                >
              </li>
            </ul>
          </address>
        </div>
      </footer>
    </>
  );
}
