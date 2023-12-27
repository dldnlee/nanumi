import home from '../assets/icons/home.svg';
import map from '../assets/icons/location.png';
import chat from '../assets/icons/chat.png';
import setting from '../assets/icons/gear.png';



export default function NavBar() {
  return (
    <nav className="navbar-container fixed  w-full bottom-0 border-t-2">
      <ul className="flex justify-between px-4 py-2">
        <li><a href="/"><img src={home} alt="Home Icon" className='w-[40px]'/></a></li>
        <li><a href="/"><img src={map} alt="Map Icon" className='w-[40px]'/></a></li>
        <li><a href="/"><img src={chat} alt="Chat Icon" className='w-[40px]'/></a></li>
        <li><a href="/"><img src={setting} alt="Setting Icon" className='w-[40px]'/></a></li>
      </ul>
    </nav>
  );
}


