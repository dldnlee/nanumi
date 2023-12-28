

export default function CategoryButton(props) {
  return(
    <li className="text-center">
      <a href="/" className=" w-[55px] h-[55px] flex justify-center items-center rounded-lg border-2 border-black border-solid active:bg-slate-800" >
        <img src={props.image} alt={props.alt} className="w-[40px] h-[40px]"/>
      </a>
      <p>{props.desc}</p>
    </li>
  )
}
