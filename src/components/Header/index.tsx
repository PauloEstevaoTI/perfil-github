import logo from "../../assets/logo-git.png";

export function Header() {
  return (
    <div className="flex justify-center items-center h-[200px]">
      <header className="flex justify-between items-center h-[82px] w-[420px]">
        <img src={logo} alt="logo github" width={58} height={58} />
        <h1 className="text-white text-6xl">
          Perfil <strong>Github</strong>
        </h1>
      </header>
    </div>
  );
}
