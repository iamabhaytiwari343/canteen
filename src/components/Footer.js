import React from 'react'
import d1 from '../img/d1.png';
import d2 from '../img/d2.png';
import d3 from '../img/d3.png';
import d4 from '../img/d4.png';
import d5 from '../img/d5.png';
import d6 from '../img/d6.png';

const Footer = () => {
  return (
    <footer class="bg-black text-white">
      <div class="container p-6">
        <div class="grid grid-cols-3 gap-4 md:grid-cols-6">
          <div class="col-span-3 md:col-span-6 flex justify-center space-x-4">
            <img src={d1} class="w-20 h-20 rounded-md shadow-lg" alt='.' />
            <img src={d2} class="w-20 h-20 rounded-md shadow-lg" alt='.' />
            <img src={d3} class="w-20 h-20 rounded-md shadow-lg" alt='.' />
            <img src={d4} class="w-20 h-20 rounded-md shadow-lg" alt='.' />
            <img src={d5} class="w-20 h-20 rounded-md shadow-lg" alt='.' />
            <img src={d6} class="w-20 h-20 rounded-md shadow-lg" alt='.' />
          </div>
        </div>
        <div class="text-center p-4">
          &copy; 2022 Copyright: <a class="text-white" href="mailto:abhay@gmail.com">Abhay Tiwari</a>
        </div>
        {/* <div class="text-center pt-9">
          <div class="flex justify-center space-x-9">
            <a href="#" class="text-gray-800">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              </svg>
            </a>
            <a href="#" class="text-gray-800">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              </svg>
            </a>
            <a href="#" class="text-gray-800">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
              </svg>
            </a>
            <a href="#" class="text-gray-800">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              </svg>
            </a>
            <a href="#" class="text-gray-800">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              </svg>
            </a>
            <a href="#" class="text-gray-800">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              </svg>
            </a>
          </div> */}
        {/* </div> */}
      </div>
    </footer>
  )
}

export default Footer