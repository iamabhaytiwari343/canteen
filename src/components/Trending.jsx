import React from 'react';
import momo from '../img/momo.jpg';
import Burger from '../img/burger.jpg';
import pizza from '../img/pizza.jpg';
import combo from '../img/combo.jpg';
import p5 from '../img/p5.jpg';
import p6 from '../img/p6.jpg';
import p7 from '../img/p7.jpg';
import p8 from '../img/p8.jpg';
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'
import p4 from '../img/p4.jpg'



const Trending = () => {
  return (
    <>
      <div class="bg-secondary">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={momo} alt="Momos" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Momos</h3>
                <p class="mt-1 text-gray-600">6 pieces in 45 rs/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={Burger} alt="Burger" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Burger</h3>
                <p class="mt-1 text-gray-600">60/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={pizza} alt="Pizza" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Pizza</h3>
                <p class="mt-1 text-gray-600">starting from 180/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={combo} alt="Combo of burger and fries" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Combo of burger and fries</h3>
                <p class="mt-1 text-gray-600">120/- per head</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-secondary">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p5} alt="Bhelpuri" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Bhelpuri</h3>
                <p class="mt-1 text-gray-600">25/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p6} alt="Dhokla" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Dhokla</h3>
                <p class="mt-1 text-gray-600">50/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p7} alt="Pakode" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Pakode</h3>
                <p class="mt-1 text-gray-600">40/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p8} alt="Gujhiya" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Gujhiya</h3>
                <p class="mt-1 text-gray-600">15/-</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bg-secondary">
        <div class="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p1} alt="Jalebi" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Jalebi</h3>
                <p class="mt-1 text-gray-600">6 pieces in 45 rs/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p2} alt="Golgappe" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Golgappe</h3>
                <p class="mt-1 text-gray-600">10/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p3} alt="Samose" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Samose</h3>
                <p class="mt-1 text-gray-600">8/-</p>
              </div>
            </a>
            <a href="#" class="group bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div class="aspect-w-3 aspect-h-2">
                <img src={p4} alt="Rasgulla" class="object-cover object-center w-full h-full rounded-t-lg" />
              </div>
              <div class="p-4">
                <h3 class="text-lg font-semibold text-gray-900">Rasgulla</h3>
                <p class="mt-1 text-gray-600">15/- per</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Trending