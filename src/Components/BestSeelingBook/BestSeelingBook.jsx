import './BestSeelingBook.css';
import TitleTypeTwo from '../../UI/TitleTypeTwo/TitleTypeTwo';

import TreeShape from '../../assets/treeShape.png';
import {sellingBooksData} from '../../Data/Data';
import { Link } from 'react-router-dom';
import {BsArrowRight} from 'react-icons/bs'
export default function BestSeelingBook() {
  return (
    <section className='BestSellingBook'>
      <div className='treeShape'>
        <img src={TreeShape}/>
      </div>
       
          {
            sellingBooksData.map(({img,infoTitleTop,infoTitle,desc,price,shopbtnLink})=>{
              return(
                <div className='container bestselling-container'>
                  <div className='selling-book-left'>
                    <img src={img}/>
                  </div>
                  <div className='selling-book-right'>
                  <TitleTypeTwo Title={'Best Selling book'} className="sellingBookTitle"/>
                  <div><small>{infoTitleTop}</small></div>
                  <h3>{infoTitle}</h3>
                  <p>{desc}</p>
                  <h5><span>{price}</span></h5>
                  <Link to={shopbtnLink} className='btn'>
                    Shop it now
                    <BsArrowRight/>
                  </Link>

                  </div>
                </div>
              )
            })
          }
            

     
    </section>
  )
}
