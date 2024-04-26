import { useState } from "react"
import * as emailjs from "emailjs-com"
import swal from "sweetalert";
import { AlignCenter} from "react-feather";

export default function Contact() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mobileNo,setNo]=useState('');
    const [city,setCity]=useState('');
    function sendEmail(){
        const Data={
            to_name:name,
            to_email:email,
            to_mobile:mobileNo,
            to_city:city,
        }
    
        const service_id="service_jjkp7ev";
        const template_id="template_fqg0xj7";
        const user_id="sOrAk5_jJ3HJFow6_";

        emailjs.send(service_id,template_id,Data,user_id).then(
            function(response){
                swal(
                    {title: 'Request Accepted',
                     text:'Message Send Successfully',
                     icon:'success',
                     AlignJustify:AlignCenter
                    }
                );
            },
            function(error){
                swal(
                    {title: 'Request Declined.',
                    text:'Due to technical reason message not send',
                      icon:'warning',
                    });
            }       
        )
    }

  return (
    <>
        <div className="relative flex items-top justify-center min-h-[550px] bg-white sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-">
                <div className="mt-6 overflow-hidden">
                    <div className=" grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-4 bg-gray-100 sm:rounded-l-xl">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    //stroke-linecap="round"
                                    //stroke-linejoin="round"
                                    //stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        //stroke-linecap="round"
                                        //stroke-linejoin="round"
                                        //stroke-width="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        //stroke-linecap="round"
                                        //stroke-linejoin="round"
                                        //stroke-width="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                MIDC, Gokul Shirgaon, Maharashtra 416234, India
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    //stroke-linecap="round"
                                    //stroke-linejoin="round"
                                    //stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        //stroke-linecap="round"
                                        //stroke-linejoin="round"
                                        //stroke-width="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    //stroke-linecap="round"
                                    //stroke-linejoin="round"
                                    //stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-gray-500"
                                >
                                    <path
                                        //stroke-linecap="round"
                                        //stroke-linejoin="round"
                                        //stroke-width="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    QSWW
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col border border-solid">
                            <div className='flex flex-col text-center'>
                                <h2 className='font-semibold text-2xl py-2 text-gray-800'>Enquiry Form</h2>
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    onChange={(e)=>{setName(e.target.value)}} 
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Mobile Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    onChange={(e)=>{setNo(e.target.value)}}
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <input
                                    type="city"
                                    name="city"
                                    id="tel"
                                    placeholder="City"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    onChange={(e)=>{setCity(e.target.value)}}
                                />
                            </div>
                            <div className="flex flex-col">
                                 <selection onChange={handleSelector}>
                                    {option.map(option=>(
                                        <option value={option.value}>{option.label}</option>
                                    ))}
                                 </selection>
                            </div>
                            <button
                                type="submit"
                                className=" md:w-full bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                                onClick={()=>{sendEmail()}}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='md:h-full w-full mx-20 '>
            <div className="width: 100% ">
                <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=J7RJ+2G2,%20MIDC,%20Gokul%20Shirgaon,%20Maharashtra%20416234+(Quality%20Steel%20&amp;%20Welding%20Work%20Pvt.)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
            </div>
            <div className='w-full px-5 py-5 text-justify font-mono'>
                <p className='text-gray-500 text-center'>Office Location</p>
                <p className='text-gray-500'>📌 Location: MIDC, Gokul Shirgaon, Maharashtra 416234</p>  
            </div>
            </div>
            <div className='md:h-full w-full me-20'>
            <div className="width: 100% ">
                <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=J7RJ+2G2,%20MIDC,%20Gokul%20Shirgaon,%20Maharashtra%20416234+(Quality%20Steel%20&amp;%20Welding%20Work%20Pvt.)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps systems</a>
                </iframe>
                </div>
                
            <div className='w-full px-5 py-5 text-justify font-mono'>
            <p className='text-gray-500 text-center'>Factory Location</p>
            <p className='text-gray-500'>📌 Location: MIDC, Gokul Shirgaon, Maharashtra 416234</p>  
            </div>
            </div>
            </div>
    </>
  )
}