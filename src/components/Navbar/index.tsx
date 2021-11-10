import "./styles.scss";
import { BaseButton } from "../base/Button";
import { MouseEventHandler } from "react";

const Navbar = () => {
  const handleNavbarButton = (name: string): MouseEventHandler | undefined => {
    dispatchEvent(
      new CustomEvent("@disneyplus/event/focus-on-collection", {
        detail: {
          name,
        },
      })
    );
    return;
  };

  return (
    <nav className="navbar__main">
      <div className="navbar__main__logo">
        <img
          alt="logo"
          src="https://disney-clone-d1e27.web.app/images/logo.svg"
        />
      </div>
      <ul>
        <li>
          <BaseButton flat>Ínicio</BaseButton>
        </li>
        <li>
          <BaseButton flat>Pesquisa</BaseButton>
        </li>
        <li>
          <BaseButton flat>Minha lista</BaseButton>
        </li>
        <li onClick={() => handleNavbarButton("original")}>
          <BaseButton flat>Originais</BaseButton>
        </li>
        <li>
          <BaseButton flat>filmes</BaseButton>
        </li>
        <li>
          <BaseButton flat>Séries</BaseButton>
        </li>
      </ul>
      <ul>
        <li>Meu Perfil</li>
      </ul>
    </nav>
  );
};

export { Navbar };
