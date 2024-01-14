import './FeaturesBooks.css';

// import Title Props ....
import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne';


// import Swiper React Components ..
import {Swiper , SwiperSlide } from 'swiper/react';
// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';

// import featuredBooksData ...
import {featuredBooksData} from '../../Data/Data';
// import Link from react router
import { Link } from 'react-router-dom';
// import react icon
import {BsArrowReturnRight} from 'react-icons/bs'
//import icon
import {BsPlus , BsEyeFill} from 'react-icons/bs';

const breakpoints = {
    1024:{
        slidesPerView:4,
        spaceBetweenSlides:30
    },
    768:{
        slidesPerView:3,
        spaceBetweenSlides:20
    },
    480:{
        slidesPerView:2,
        spaceBetweenSlides:10
    },

    0:{
        slidesPerView:1,
        spaceBetweenSlides:0
    },

    }



export default function FeaturesBooks() {
  return (
    <section className='Featured'>
        <div className='container features-book-container'>
            {/* ......................Title Props...................... */}
            <TitleTypeOne TitleTop={'Some Quality Items'} Title={'Featured Books'}/>
            {/* ...............featuredBooksData Slider............... */}
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              loop = {true}
            
              modules={[Pagination]}
              pagination={{ el:'.swiper-pagination', clickable:true}}
              breakpoints={breakpoints}

           
             
            >
                {
                    featuredBooksData.map(({img,imgLlink,name,nameLink,writer,price},index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='featurebook-box'>
                                    <div className='featurebook-boxnav'>
                                    <Link to={imgLlink}>
                                        <img  src={img} className='featurebook'/>
                                        
                                    </Link>
                                    <div className='featurebook-btn'>
                                        <button>
                                          <div className='featurebook-btnBs'>
                                      <BsPlus  className='BsPlus' />
                                          </div>
                                        </button>
                                        <Link to='*' className='featurebook-btnBe'><BsEyeFill/></Link>
                                      </div>
                                    </div>
                                    <div className='featurebook-info'>
                                        <Link to={nameLink}>
                                            <h4>{name}</h4>
                                        </Link>
                                        <div><small>{writer}</small></div>
                                        <h5><span>{price}</span></h5>
                                    </div>
                                    
                                   

                                </div>

                            </SwiperSlide>

                        )
                    })
                }
                <div className='feature-border container'></div>

                <div className='swiper-pagination'></div>

                <Link to='*' className='btn feature-btn'>View All Product <BsArrowReturnRight/></Link>

            </Swiper>

        </div>
    </section>
  )
}
