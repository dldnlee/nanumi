import home from '../assets/icons/home.svg';
import map from '../assets/icons/location.png';
import chat from '../assets/icons/chat.png';
import setting from '../assets/icons/gear.png';



export default function NavBar() {
  return (
    <nav className="navbar-container fixed bg-primary-color1 w-full bottom-0">
      <ul className="flex justify-between px-8 py-5">
        <li><a href="/"><img src={home} alt="Home Icon"/></a></li>
        <li><a href="/"><img src={map} alt="Map Icon"/></a></li>
        <li><a href="/"><img src={chat} alt="Chat Icon"/></a></li>
        <li><a href="/"><img src={setting} alt="Setting Icon"/></a></li>
      </ul>
    </nav>
  );
}


