import './PopularBooks.css';

import TitleTypeOne from '../../UI/TitleTypeOne/TitleTypeOne';

import {galleryData} from '../../Data/Data';
// import Link from react router
import { Link } from 'react-router-dom';
//import icon
import {BsPlus , BsEyeFill} from 'react-icons/bs';
import { useState } from 'react';
export default function PopularBooks() {
    const [activeButton,setaActiveButton] = useState('all');
    const handleFilterChange = (category) =>{
        setaActiveButton(category);
    }

    const filterItems = activeButton === 'all' ? galleryData : galleryData.filter((item)=>item.category === activeButton);




  return (
    <section className='PopularBooks'>
        <div className='container popularbooks-container'>
            <TitleTypeOne TitleTop={'Some Quality items'} Title={'Popular Books'} className={'popularbooks-title'} />

            <div className='filter-buttons'>
                <button
                className={activeButton === 'all' ? 'active' : ' '}
                onClick={()=> handleFilterChange('all')}
                >
                    All
                </button>
                <button
                className={activeButton === 'Business' ? 'active' : ' '}
                onClick={()=> handleFilterChange('Business')}
                >
                    Business
                </button>
                <button
                className={activeButton === 'Technology' ? 'active' : ' '}
                onClick={()=> handleFilterChange('Technology')}
                >
                    Technology
                </button>
                <button
                className={activeButton === 'Adventure' ? 'active' : ' '}
                onClick={()=> handleFilterChange('Adventure')}
                >
                    Adventure
                </button>
                <button
                className={activeButton === 'Romantic' ? 'active' : ' '}
                onClick={()=> handleFilterChange('Romantic')}
                >
                    Romantic
                </button>
                <button
                className={activeButton === 'Fictional' ? 'active' : ' '}
                onClick={()=> handleFilterChange('Fictional')}
                >
                    Fictional
                </button>
            </div>
            <div className='gallery'>
                {
                    filterItems.map(({name,writer,price,image},index)=>{
                        return(
                            <div className='gallery-item' key={index}>
                                <div className='popularbook-image'>
                                    <img src={image}/>
                                    <div className='featurebook-btn'>
                                        <button>
                                          <div className='featurebook-btnBs'>
                                      <BsPlus  className='BsPlus' />
                                          </div>
                                        </button>
                                        <Link to='*' className='featurebook-btnBe'><BsEyeFill/></Link>
                                      </div>
                                </div>
                                
                                    
                                <div className='popularbook-info'>
                                    <h4>{name}</h4>
                                    <div><small>{writer}</small></div>
                                    <h5><span>{price}</span></h5>
                                </div>



                            </div>
                        )
                    })
                }

            </div>
        </div>
    </section>
  )
}
