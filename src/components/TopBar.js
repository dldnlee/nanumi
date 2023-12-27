import home from '../assets/icons/home.svg';



export default function TopBar() {
  return (
    <header className="topbar-container sticky top-0 w-full flex justify-between items-center px-3 py-2 shadow-lg">
      <h1 className="text-xl font-extrabold underline">LogoHere</h1>
      <a href="/" className='w-[40px]'>
        <img src={home} alt="Home Button" />
      </a>
    </header>
  );
}