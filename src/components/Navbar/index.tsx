import { BaseButton } from "../base/Button";

const Navbar = () => {
  return (
    <nav className="navbar__main">
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
        <li>
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
