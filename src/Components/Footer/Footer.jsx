//import logo benku white
import logoWhite from '../../../logo/B-w-logo.svg';
import './Footer.css'

export default function Footer() {
  return (
    <footer className='Footer-container'>
      <div className='footer-div-con '>
        <div className='footer-info '>
       
        <img src={logoWhite} className='logoWhite'/>
        <p>Copyright &copy; Benku | happy shopping 2024.All rights reserved.</p>
        </div>

      </div>

    </footer>
  )
}
