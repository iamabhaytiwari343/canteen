import React from 'react'
import p5 from '../img/p5.jpg';
import p6 from '../img/p6.jpg';
import p7 from '../img/p7.jpg';
import p8 from '../img/p8.jpg';

const Services = () => {
  return (
    <div class="bg-Secondary">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={p5} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Bhelpuri</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">25/-</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={p6} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Dhokla</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">50/- </p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={p7} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Pakode</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">40/-</p>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={p8} class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">Gujhiya</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">15/-</p>
      </a>
    </div>
  </div>
</div>
  )
}

export default Services