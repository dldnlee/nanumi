import NavButtons from "./buttons/NavButtons";
import home from '../assets/icons/home.svg';



export default function TopBar() {
  return (
    <header className="topbar-container fixed top-0 w-full h-[70px] bg-primary-color3 flex justify-between items-center px-3">
      <h1 className="text-3xl font-extrabold underline">LogoHere</h1>
      <NavButtons home={home} />
    </header>
  );
}