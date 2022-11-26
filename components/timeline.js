import React from "react";
import { HiPaperAirplane } from "react-icons/hi";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

function timeline() {
  return (
    <div>
      <h1 className="text-2xl text-gray-700 font-bold font-silkscreen text-center pt-3 pb-10 dark:text-white">
        Work Experience
      </h1>
      <ol class=" mx-auto pl-3 relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-6">
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-gray-700 dark:text-sky-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            FrontEnd Engineer - Generasi Gigih 2.0 Yayasan Anak Bangsa Bisa by
            goto
            <span class="bg-blue-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              Latest
            </span>
          </h3>
          <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Mar 2022 - Aug 2022
          </time>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Kolaborasi Membuat Project Akhir berupa website SMKJOB.id
                menggunakan React JS & Chakra UI
              </li>
              <li>
                Mengikuti Kurikulum React JS yang diajarkan Mentor dari Goto
              </li>
              <li>
                Menyelesaikan Kelas Kursus Bahasa Inggris dari Cakap dengan
                mentor dari Luar negeri
              </li>
            </ul>
          </p>
          <a
            href="#sertiv"
            className="scroll-smooth  inline-flex items-center py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <div className="pr-2">
              <HiPaperAirplane />
            </div>
            Lihat Sertifikat
          </a>
        </li>
        <li class="mb-10 ml-6">
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-gray-700 dark:text-sky-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            IT Management Support - BumiNala Books
          </h3>
          <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Dec 2021 - Mar 2022
          </time>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Melakukan Maintenance website Buminala.com menggunakan Wordpress
                & Elementor
              </li>
              <li>Fix Bug Website Buminala.com</li>
              <li>Kolaborasi dengan divisi lain untuk pengembangan website</li>
            </ul>
          </p>
        </li>
        <li class="ml-6">
          <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-gray-700 dark:text-sky-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Asisten Laboratorium - Lembaga pengembangan komputerisasi (Lepkom)
          </h3>
          <time class="block mb-2 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
            Sep 2021 - Sep 2022
          </time>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <ul className="list-disc">
              <li>
                Melakukan Penilaian Pretest, Posttest dan Hasil Ujian Pratikan
              </li>
              <li>Mengikuti Training untuk Mentoring</li>
              <li>Pernah mengikuti training materi (Cisco & Mikrotik)</li>
              <li>Absensi & Mengawasi Kegiatan kurus</li>
            </ul>
          </p>
        </li>
      </ol>
    </div>
  );
}

export default timeline;
