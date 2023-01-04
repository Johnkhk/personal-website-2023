import React, { useState } from 'react';

// import { FaGithub } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    
    return (
        <>
            <div className="block">
                <div className="m-3">
                    <div className='flex'>
                        <h2 className="text-4xl font-bold dark:text-blue-900">Contact</h2> 
                    </div>
                    <hr class="my-4 h-px bg-slate-300 border-0 dark:bg-slate-300"/>
                    
                    <div className='flex flex-row justify-center'>

                    {/* <a href="https://github.com/Johnkhk"> */}
								{/* <FaGithub className="text-2xl cursor-pointer hover:text-red-600" /> */}
                    
                    {/* <SocialIcon url="https://twitter.com/JohnKwokHungHo1" className='m-2'/>
                    <SocialIcon url="https://github.com/Johnkhk" className='m-2'/>
                    <SocialIcon url="johnho.khh@gmail.com" className='m-2'/>
                    <SocialIcon url="https://www.linkedin.com/in/johnkhho/" className='m-2'/> */}

                    {/* <div className='flex flex-row gap-1'> */}
                    {/* <div className="grid grid-cols-12 gap-2 w-3/4">
                        <div className="col-span-6 w-full md:w-full">
                            <a href="mailto:johnho.khh@gmail.com" target="blank"><img align="center"
                                src="https://img.shields.io/badge/gmail-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white"
                                alt="azzar" height="30"/></a>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                            <span className=''>HIasas</span>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                            <a href="https://www.linkedin.com/in/johnkhho/" target="blank"><img align="center"
                                src="https://img.shields.io/badge/linkedin-%231DA1F2.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                                alt="azzar" height="30"/></a>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                            <span className=''>HIasas</span>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                        <a href="" target="blank"><img align="center"
                                src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                                alt="azzar" height="30"/></a>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                            <span className=''>HIasas</span>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                        <a href="mailto:johnho.khh@gmail.com" target="blank"><img align="center"
                                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                                alt="azzar" height="30"/></a>
                        </div>
                        <div className="col-span-6 w-full md:w-full">
                            <span className=''>HIasas</span>
                        </div> */}

                        {/* <div>
                            <a href="mailto:johnho.khh@gmail.com" target="blank"><img align="center"
                                src="https://img.shields.io/badge/gmail-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white"
                                alt="azzar" height="30"/></a>
                            <a href="https://www.linkedin.com/in/johnkhho/" target="blank"><img align="center"
                                src="https://img.shields.io/badge/linkedin-%231DA1F2.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                                alt="azzar" height="30"/></a>
                            <a href="" target="blank"><img align="center"
                                src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                                alt="azzar" height="30"/></a>
                            <a href="mailto:johnho.khh@gmail.com" target="blank"><img align="center"
                                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                                alt="azzar" height="30"/></a>
                        </div>
                        <div className='flex flex-col grow-0 shrink-1 basis-auto'>
                            <span className=''>HIasas</span>
                            <span className=''>HIasas</span>
                            <span className=''>HIasas</span>
                            <span className=''>HIasas</span>
                        </div> */}

                    {/* </div> */}

                    {/* </a> */}

                    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Platform
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Contact Info
              </th>
              {/* <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Last
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Handle
              </th> */}
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <a href="mailto:johnho.khh@gmail.com" target="blank"><img align="center"
                                src="https://img.shields.io/badge/gmail-EA4335.svg?style=for-the-badge&logo=gmail&logoColor=white"
                                alt="azzar" height="30"/></a>
              </td>
              <td class="hover:underline text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                johnho.khh@gmail.com
              </td>
              {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @mdo
              </td> */}
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="https://www.linkedin.com/in/johnkhho/" target="blank"><img align="center"
                                    src="https://img.shields.io/badge/linkedin-%231DA1F2.svg?style=for-the-badge&logo=linkedin&logoColor=white"
                                    alt="azzar" height="30"/></a>
              </td>
              <td class="hover:underline text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                linkedin.com/in/johnkhho
              </td>
              {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @fat
              </td> */}
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <a href="" target="blank"><img align="center"
                                    src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
                                    alt="azzar" height="30"/></a>
              </td>
              <td class="hover:underline text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                858-250-9116
              </td>
              {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td> */}
            </tr>
            <tr class="bg-white border-b">
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <a href="https://github.com/Johnkhk" target="blank"><img align="center"
                                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                                alt="azzar" height="30"/></a>
              </td>
              <td class="hover:underline text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                github.com/Johnkhk
              </td>
              {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                @twitter
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

                    </div>
                    
                </div>
            </div>

        </>
    )
}
export default Contact

// livehealth.com