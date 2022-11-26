import React from "react";
import Image from "next/image";

import smkjob from "../public/smkjob.png";

function timeline() {
  return (
    <div>
      {/* Project */}
      <section>
        <div>
          <h3 className="text-2xl font-silkscreen font-semibold text-center text-gray-700 pt-8 pb-8 dark:text-white">
            My Project
          </h3>
        </div>

        {/* cardlist */}
        <div className="grid grid-cols-2 gap-4 ">
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-800"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  GatotAnime
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    Home Project
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Sebuah search engine khusus untuk mencari anime yang di consume
                langsung dari restAPI Jikan Anime.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-black text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                Next JS
              </span>

              <span className="bg-sky-300 px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                Tailwind CSS
              </span>
              <span className="bg-yellow-300 px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                JavaScript
              </span>
            </div>
          </a>

          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-800"></span>

            <div class="justify-between sm:flex ">
              <div className="">
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  SMKJOB.id
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji & Generasi Gigih Partner
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <Image
                  alt="portofolio"
                  src={smkjob}
                  width={80}
                  height={40}
                ></Image>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Sebuah Project akhir berupa pembuatan Website SMKJOB.id yang
                ditujukan untuk memudahkan para lulusan SMK dalam mencari
                pekerjaan yang sesuai bidangnya melalui platform ini.
              </p>
            </div>

            <div className="text-right pt-10 xs:text-center">
              <span className="bg-gray-800 dark:bg-gray-700 text-sky-400 px-2 py-2 m-2 rounded-md text-xs  font-semibold sm:text-xs xs:text-xs">
                React JS
              </span>
              <span className="bg-sky-500 text-white px-2 py-2 mr-2 rounded-md text-xs  font-semibold sm:text-xs xs:text-xs">
                Typescript
              </span>
              <span className="bg-teal-300 text-gray-900 px-2 py-2 mr-2 rounded-md text-xs  font-semibold sm:text-xs xs:text-xs">
                Chakra UI
              </span>
            </div>
          </a>

          {/* 2 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Portofolio Website
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    Tony Aji
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Sebuah Website Portofolio yang berisi tentang minat dan
                ketertarikan penulis didunia programming dengan memberikan CV
                beserta detail pengalaman penulis.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-black text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                Next JS
              </span>

              <span className="bg-sky-300 px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                Tailwind CSS
              </span>
            </div>
          </a>
          {/* 3 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-800"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Card Playlist
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    homework
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Tugas Kampus merdeka, membuat card playlist dengan auto slide
                picture.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-orange-600 text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                HTML
              </span>

              <span className="bg-sky-600 text-white px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                CSS
              </span>
              <span className="bg-yellow-300 px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                JavaScript
              </span>
            </div>
          </a>
          {/* 4 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Car Landing Page
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    Car
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Sebuah Website Landing page untuk penjualan mobil.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-orange-600 text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                HTML
              </span>

              <span className="bg-sky-600 text-white px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                CSS
              </span>
              <span className="bg-yellow-300 px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                JavaScript
              </span>
            </div>
          </a>

          {/* 5 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-800"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Web Capture
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    webcapture
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Project coba-coba untuk mengambil tangkapan gambar secara
                realtime.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-orange-600 text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                HTML
              </span>

              <span className="bg-sky-600 text-white px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                CSS
              </span>
              <span className="bg-yellow-300 px-2 py-2 mr-2 rounded-md text-xs  font-semibold">
                JavaScript
              </span>
            </div>
          </a>

          {/* 6 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Content Design
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    adobe xd/ui design
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                5 tips to set an accurate deadline - Adalah sebuah design tips
                untuk post linkedin
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-black text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                Adobe XD
              </span>
            </div>
          </a>

          {/* 7 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-800"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Ineed app
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    ui & prototype design
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                design dan prototype sebuah aplikasi mobile yang berisi tentang
                aplikasi alquran, alarm, dan lainnya.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-black text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                Adobe XD
              </span>
            </div>
          </a>

          {/* 8 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Kampus Merdeka x Citiasia Inc
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    ui landing page
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                UI Design untuk landing page kampus merdeka x citiasia.
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-black text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                Adobe XD
              </span>
            </div>
          </a>

          {/* 9 */}
          <a
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-100 p-8"
          >
            <span class="absolute  inset-x-0 bottom-0 h-2 bg-gradient-to-r from-sky-300 via-blue-500 to-purple-800"></span>

            <div class="justify-between sm:flex">
              <div>
                <h5 class="text-xl font-bold text-gray-900 dark:text-white">
                  Redesign app Vocasia
                </h5>

                <p class="mt-1 text-xs font-medium text-gray-600 dark:text-white">
                  By Tony Aji
                </p>
              </div>

              <div class="ml-3 hidden flex-shrink-0 sm:block">
                <div class="ml-3 hidden flex justify-between sm:block">
                  <h1 className="text-md text-right text-gray-700 font-burtons hover:-rotate-7  cursor-pointer dark:text-white">
                    ui design
                  </h1>
                </div>
              </div>
            </div>

            <div class="mt-4 sm:pr-8">
              <p class="text-xs text-gray-500 dark:text-white">
                Redesign aplikasi mobile dari vocasia
              </p>
            </div>

            <div className="text-right pt-10">
              <span className="bg-black text-white px-2 py-2 m-2 rounded-md text-xs  font-semibold">
                Adobe XD
              </span>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default timeline;
