import React from 'react';
import momo from '../img/momo.jpg';
import Burger from '../img/burger.jpg';
import pizza from '../img/pizza.jpg';
import combo from '../img/combo.jpg'

const Trending = () => {
  return (
    <div class="bg-Secondary ">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={momo} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Momos</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">6 pieces in 45 rs/-</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={Burger} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Burger</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">60/- </p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={pizza} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Pizza</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">starting from 180/-</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={combo} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Combo of burger and fries</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">120/- per head</p>
      </a>
    </div>
  </div>
</div>
  )
}

export default Trending