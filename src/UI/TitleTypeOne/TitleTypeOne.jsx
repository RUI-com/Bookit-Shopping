import './TitleTypeOne.css';
//import Victor image
import Victor from '../../assets/victor.png'
export default function TitleTypeOne({ClassName,Title,TitleTop}) {
  return (
    <div className={`titleTypeOne ${ClassName}`}>
    <small>{TitleTop}</small>
    <div className='headeing-H'>
        <div className='line'></div>
        <h2>{Title}</h2>
        <div className='line'></div>


    </div>
    <img src={Victor} className='victor'/>
    </div>
  )
}
