import React from 'react'

const ContactCard = () => {
  return (
    <div className="py-16">
        <div className="container mx-auto flex gap-20 flex-col md:flex-row items-center">
        <div className="md:w-2/3 ">
            <iframe
              className="w-[90%] h-64 rounded-[20px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.120987803604!2d77.30333448092!3d28.445769013284643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3df0d0081fd%3A0x5afbd5eb9d43c667!2sAgile%20Nobel!5e0!3m2!1sen!2sin!4v1734338356733!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
          <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-[#000339] text-[47px] font-bold mb-2">Contact Us</h3>
            <p className='text-[20px]'>Office No. 404,</p>
             




            <p className='text-[20px]'>4th Floor, SRS Tower,</p>
            <p className='text-[20px]'>Main Mathura Road,</p>
            <p className='text-[20px]'>Near Mewla Maharajpur Metro Station,</p>
            <p className='text-[20px]'>Faridabad-121003, Haryana,India</p>
            
            <a href="mailto:agile@agilenobel.com" className="text-[20px] text-blue-600">
            agile@agilenobel.com
            </a>
          </div>
          
        </div>
      </div>
  )
}

export default ContactCard