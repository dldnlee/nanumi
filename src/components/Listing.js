import camera from "../assets/images/camera.jpg";




export default function Listing(props) {

  // Just for testing
  // const text = "니콘 카메라"
  // const location = "목동동"


  return(
    <div key={props.id} className="w-full px-2 py-2 flex items-center">
      <img src={camera} alt="hello" className="w-[40%] p-2"></img>
      <div>
        <h2>{props.name}</h2>
        <h2>{props.location}</h2>
      </div>
    </div>
  )
}