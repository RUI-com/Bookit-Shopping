import './TitleTypeTwo.css'
//import Victor image
import Victor from '../../assets/victor.png'
export default function TitleTypeTwo({ClassName,Title,}) {
  return (
    <div className={`titleTypeTwo ${ClassName}`}>
    <h2>{Title}</h2>
    <img src={Victor} className='victor'/>
    </div>
  )
}
