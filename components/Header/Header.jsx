import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/cartContext";
import Container from "../UI/Container/Container";
import Icon from "../UI/Icon/Icon";

const navItems = [
  {
    id: 1,
    link: "/",
    name: "صفحه اصلی",
  },
  {
    id: 2,
    link: "/category",
    name: "دسته بندی",
  },
  {
    id: 3,
    link: "/blog",
    name: "وبلاگ",
  },
  {
    id: 4,
    link: "/about-us",
    name: "درباره ما",
  },
  {
    id: 5,
    link: "/contatc-us",
    name: "تماس با ما",
  },
];

const Header = () => {
  const navRef = useRef(null);

  const cartContext = useContext(CartContext);

  const router = useRouter(),
    { asPath } = router;

  const toggleNav = () => {
    navRef.current.classList.toggle("open");
  };

  return (
    <>
      {/* Start Header */}
      <header className="top-header position-relative">
        <Container className="d-flex align-items-center">
          {/* Start Btn Nav */}
          <button
            type="button"
            className="top-header-btn-nav d-md-none"
            onClick={toggleNav}
          >
            <Icon name="menu" />
          </button>
          {/* End Btn Nav */}
          {/* Start Logo */}
          <Link href="/">
            <a className="top-header-logo">فروشگاه</a>
          </Link>
          {/* End Logo */}
          {/* Start Nav */}
          <nav className="top-header-nav d-none d-md-block">
            <ul className="d-flex align-items-center">
              {navItems.map(({ id, link, name }) => {
                return (
                  <li key={id}>
                    <Link href={link}>
                      <a className={asPath === link ? "active" : ""}>{name}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* End Nav */}
          {/* Start Auth & Cart */}
          <Link href="/auth/login">
            <a className="top-header-auth">
              <Icon name="user" />
            </a>
          </Link>
          <Link href="/cart">
            <a className="top-header-cart position-relative">
              <Icon name="shopping-cart" />
              <span className="position-absolute">
                {cartContext.items.length}
              </span>
            </a>
          </Link>
          {/* End Auth & Cart */}
        </Container>
      </header>
      {/* End Header */}
      {/* Start Nav Responsive */}
      <div className="nav-responsive" ref={navRef}>
        <div className="nav-responsive-backdrop" onClick={toggleNav}></div>
        <button
          type="button"
          className="nav-responsive-close"
          onClick={toggleNav}
        >
          <Icon name="x" />
        </button>
        <div className="nav-responsive-content">
          <Link href="/">
            <a className="nav-responsive-content-logo">فروشگاه</a>
          </Link>
          <ul className="nav-responsive-content-nav">
            {navItems.map(({ id, link, name }) => {
              return (
                <li key={id}>
                  <Link href={link}>
                    <a className={asPath === link ? "active" : ""}>{name}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* End Nav Responsive */}
    </>
  );
};

export default Header;
