// import Link from 'next/link';
// import Nav from './Nav';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  color: $text-01;

  .footer__logo {
    width: 150px;
  }

  .footer__interactive {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .footer__link--wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
    }
  }
  
  .footer__link {
    height: 40px;
  }
  .social-icon {
    height: 40px;
    margin-top: 8px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      {/* <img className='footer__logo' src={mainLogo} /> */}
      <p>FOOTER LOGO</p>
      <section className='footer__interactive'>

        <div className='footer__link--wrapper footer__link--consult'>
          <p className='footer__label'>Call me to set up a consultation</p>
          <a href="tel: 949-784-9719">949-784-9719</a>
        </div>

        <div className='footer__link--wrapper footer__link--instagram'>
          <p className='footer__label'>Follow me on Instagram</p>
          <a href='https://instagram.com/jenamyjewelry' target='_blank' className='footer__link'>
            {/* <img src={instaLogo} className='social-icon' /> */}
            <p>INSTAGRAM</p>
          </a>
        </div>
     </section>
    </StyledFooter>
  );
};

export default Footer;