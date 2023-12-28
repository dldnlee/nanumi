import food from "../assets/icons/chat.png";
import Listing from "../components/Listing";
import CategoryButton from "../components/buttons/CategoryButton";


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

function TopSection() {
  return(
    <div className="bg-red-400 w-full px-[40px] py-5 flex justify-center flex-col items-center gap-6">
      <SearchBar />
      <ListItems />
    </div>
  )
}

function ItemList() {
  const listOfItems = [
    {
      id: 1,
      name: "니콘 카메라",
      location: "목동동"
    },
    {
      id: 2,
      name: "게이밍 의자",
      location: "야당동"
    },
    {
      id: 3,
      name: "2015년 맥북",
      location: "와동동"
    },
    {
      id: 4,
      name: "니콘 카메라",
      location: "헤이리"
    },
    {
      id: 5,
      name: "니콘 카메라",
      location: "마포구"
    },
    {
      id: 6,
      name: "니콘 카메라",
      location: "서대문구"
    },
    {
      id: 7,
      name: "니콘 카메라",
      location: "건대입구"
    },
  ];

  const newItems = listOfItems.map(item => {
    return (
      <div>
        <Listing id={item.id} name={item.name} location={item.location} />
      </div>
    )
  })

  return(newItems);
}

export default function HomePage(){
  return(
    <div>
      <TopSection />
      <ItemList />
    </div>
  )
}