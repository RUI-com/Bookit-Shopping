import './LettestArticle.css';

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne'
import {lettestArticleData} from '../../Data/Data';
import { Link } from 'react-router-dom';
//import icons social
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import {BsArrowRight} from 'react-icons/bs';

export default function LettestArticle() {
  return (
    <section className='lettestArticle'>
        <div className='container latet-container'>
            <TitleTypeOne Title={'Latest Articles'} TitleTop={'Read our articles'}/>
            <div className='latest-article-content'>
                {
                    lettestArticleData.map(({title,image,titLink,date,inspiration,fbLink,instLink,twitaLink},index)=>{
                        return(
                            <article className='latest-article' key={index}>
                                <div className='article-image'>
                                    <img src={image}/>
                                </div>
                                <div className='article-info'>
                                    <h5>{date}</h5>
                                    <Link to={titLink}>
                                        <h3>{title}</h3>
                                    </Link>
                                </div>
                                <div className='latest-article-social'>
                                    <p>{inspiration}</p>
                                    <div className='article-social'>
                                    <a href={fbLink}><FaFacebook/></a>
                                    <a href={instLink}><FaInstagram/></a>
                                    <a href={twitaLink}><FaXTwitter/></a>
                                    </div>
                                    
                                </div>

                            </article>

                        )
                    })
                }
                 
            </div>
            <Link to={'*'} className='btn btn-border' >read all articles<BsArrowRight/></Link>
           
        </div>

    </section>
  )
}
