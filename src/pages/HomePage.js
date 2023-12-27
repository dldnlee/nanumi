import food from "../assets/icons/chat.png";

function CategoryButton(props) {
  return(
    <li className="text-center">
      <a href="/" className=" w-[55px] h-[55px] flex justify-center items-center rounded-lg border-2 border-black border-solid active:bg-slate-800" >
        <img src={props.image} alt={props.alt} className="w-[40px] h-[40px]"/>
      </a>
      <p>{props.desc}</p>
    </li>
  )
}

function ListItems() {
  return(
    <ul className="grid grid-cols-3 grid-rows-2 gap-10">
      <CategoryButton image={food} alt="food" desc="음식"/>
      <CategoryButton image={food} alt="food" desc="생활"/>
      <CategoryButton image={food} alt="food" desc="가전"/>
      <CategoryButton image={food} alt="food" desc="음식"/>
      <CategoryButton image={food} alt="food" desc="음식"/>
      <CategoryButton image={food} alt="food" desc="음식"/>
    </ul>
  )
}

function SearchBar() {
  return(
    <form className="w-full">
      {/* <label htmlFor="search-bar" className="block">Search</label> */}
      <input type="text" id="search-bar" placeholder="검색하기" className="rounded-lg h-10 w-full px-5 border-2"></input>
    </form>
  )
}

function Item() {
  return(
    <div>
      
    </div>
  )
}

function ItemList() {
  return(
    <div>

    </div>
  )
}

export default function HomePage(){
  return(
    <div className="flex flex-col gap-[40px] bg-blue-300 justify-center items-center py-[40px] px-[40px]">
      <SearchBar />
      <ListItems />
    </div>
  )
}