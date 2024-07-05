import React from 'react'
 import { FaInstagram, FaFacebook, FaLinkedin, FaHeart } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
 import { HashLink } from 'react-router-hash-link';
 import logo from '../assets/Ieee-footer.png'


function Footer() {
  return (
    <section id='footer'>
           <div className='footer-main bg-gradient-to-b from-[#D04992] to-[#272626] flex flex-col justify-start items-center  h-auto md:h-[373px] font-poppins text-white'>



                 <div className='footer-grid pt-12 sm:h-[90%] w-[90%] grid grid-rows-[40%_60%] sm:grid-rows-3 md:grid-cols-[42%_16%_42%] justify-center items-start sm:gap-6 md:gap-9 lg:gap-6 sm:pb-[40px] md:pb-0'>


                          <div className='Ieee-info h-auto sm:h-[175px] flex flex-col justify-start md:mr-auto md:pl-5 xl:w-[471px] '>
                                                  <img src={logo}  className='h-[46.84px]  w-[271px] mx-auto md:mx-0 '/>

                                                  <p className="text-[15px] font-normal leading-[25px] list-items pt-[30px] text-center md:text-left">
                                                   The Jadavpur University IEEE student branch, founded in 2010,
                                                    belongs to the Kolkata section of Region 10 of the organization.
                                                    We are a group of enthusiastic students who are promoting
                                                    innovative ideas both within and outside the campus.
                                                    </p>
                           </div>


                         <div className='Useful-links w-[178px] md:w-[185px] lg:w-[178px] mx-auto pt-[30px] sm:pt-0 md:pr-[26px] md:pl-0 lg:pr-0 lg:pl-[10px] md:pt-2 hidden sm:block'>
  <h4 className="footer-header text-[28px] font-normal leading-[25px]">Useful Links</h4>
  
  {/* <div className="list-div flex flex-col justify-between  w-[115px] h-[105px]  absolute ml-[25px] mt-[30px] "> */}
  
  <ul className='list-disc text-[20px] leading-9 ml-[25px] mt-[30px] pl-5 md:pl-0'>
    <li><HashLink smooth to="#home" className="list-items transition-colors duration-150 ease-in-out hover:text-black">
      Home
    </HashLink></li> 
    <li><HashLink smooth to="#about" className="list-items transition-colors duration-150 ease-in-out hover:text-black">
      About Us
    </HashLink></li> 
    <li><HashLink smooth to="#contact" className="list-items transition-colors duration-150 ease-in-out hover:text-black">
      Contact
    </HashLink></li> 
  </ul>
</div>



                          <div className='Contact-Us-xyz sm:h-[225px] flex flex-col justify-start items-center  md:items-start  md:ml-auto md:pt-2 md:w-[96%] lg:w-[93%] md:pl-[10px] lg:pl-10 pb-10 sm:pb-none'>

                                                     <h4 className="footer-header text-[27px] sm:text-[30px] font-normal leading-[25px] sm:w-[166px] sm:h-[25px] sm:mt-0 mt-16 ">Contact Us</h4>

                                                     <div className='Contact-Us-details-xyz flex flex-col items-center text-center md:items-start md:text-left text-[16px] sm:text-[17px] lg:text-[19px] leading-[35px] pt-[30px] md:pt-[25px]'>

                                                              <p className="list-items">Jadavpur University</p>
                                                              <p className="list-items">188, Raja S.C. Mallick Rd, Kolkata-700032, India</p>
                                                              <span><span className="list-items font-bold">Phone: </span><span><a href="tel:+918910398827">+91 89103 98827</a></span></span>
                                                              <div> <span className='font-bold'>Email: </span><span><a href="mailto:jaduniv.ieee@gmail.com">jaduniv.ieee@gmail.com</a></span></div>
                                                    </div>
                                                              
                                                              <div className="social-links grid grid-cols-4 gap-8 pt-[12px] sm:pt-7 md:pt-[15px] justify-evenly md:justify-between md:mr-[70%]  ">

                                                                          <HashLink to="https://www.linkedin.com/company/ieee-ju" target="blank">
                                                                          <FaLinkedin className="footer-icons text-xl   transition-colors duration-150 ease-in-out hover:text-black" /></HashLink>
      
                                                          
                                                                          <HashLink to="https://www.facebook.com/ieeejusb" target="blank">
                                                                          <FaFacebook className="footer-icons text-xl  transition-colors duration-150 ease-in-out  hover:text-black" /></HashLink>

                                                                          <HashLink to="https://www.instagram.com/_ieeeju/" target="blank">
                                                                          <FaInstagram className="footer-icons text-xl absolute transition-colors duration-150 ease-in-out hover:text-black" /></HashLink>

                                                                          <HashLink to="https://twitter.com/IeeeJadavpur" target="blank">
                                                                          <BsTwitterX className="footer-icons text-xl  transition-colors duration-150 ease-in-out hover:text-black" /></HashLink>
                                                              </div>
                          </div>
                  </div>

                  <div className="mx-auto h-[2px] w-[90%] flex bg-[#4E4E4E] rounded "></div>

                  <div className="flex flex-col justify-between items-center text-sm  h-[55px] text-[15px]">

                              <p className="mt-2 mb-2">&#169; Copyright IEEE-JUSB. All Rights Reserved</p>

                  </div>

           </div>

    </section>
  )
}

export default Footer
