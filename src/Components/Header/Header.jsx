import './Header.css';
//import Header Books Data ...
import {headerBooks} from '../../Data/Data';

// import Swiper React Components ..
import {Swiper , SwiperSlide } from 'swiper/react';
// import swiper style
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation,Pagination} from 'swiper/modules';

//import Arrow icon
import {IoMdArrowDroprightCircle,IoMdArrowDropleftCircle} from 'react-icons/io';

// Sape Svg import
import HeaderShape from '../../assets/header-shape.svg'

// import link from react router
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <header>
        <div className='header-container'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop = {true}
            
              modules={[Navigation,Pagination]}
              pagination={{ el:'.swiper-pagination', clickable:true}}
              navigation={
               {  prevEl:'.button-prev-slide',
                  nextEl:'.button-next-slide'
               }
              }
            >
                {
                    headerBooks.map(({title,info,img,btnLink},index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className='header-wrapper container'>
                                    {/* Header Left */}
                                    <div className='header-left'>
                                        <h1>{title}</h1>
                                        <p dangerouslySetInnerHTML={{__html:info}}></p>
                                        <Link className='btn btn-border' to={btnLink}>Learn More</Link>

                                    </div>
                                     {/* Header Right */}
                                     <div className='header-right'>
                                        <img src={img}/>

                                     </div>

                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                   {/* Header pagination */}
            <div className='slider-button'>
                    <div className='button-prev-slide slidebutton'>
                        <IoMdArrowDropleftCircle/>

                    </div>
                    <div className='button-next-slide slidebutton'>
                        <IoMdArrowDroprightCircle/>
                    </div>

                  </div>

                {/* Header pagination */}
                <div className='container'>
                    <div className='swiper-pagination'>

                    </div>


                </div>


            </Swiper>
           
            {/* Header Shpae */}
            <div className='header-shape'>
            <img src={HeaderShape}/>
            </div>
           

        </div>
    </header>
  )
}
