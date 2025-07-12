import React from "react";

export default function Sidebar() {
  return (
    <div className="w-1/3 pr-8">
      <p className="text-blue-400 font-semibold text-xl mb-2">Front End Developer</p>
      <h1 className="text-4xl font-bold mb-4">Gilang Prasetyo</h1>
      <p className="text-gray-300 leading-relaxed text-md mb-6">
        Mengembangkan antarmuka pengguna dan memastikan tampilan aplikasi responsif dan interaktif.
      </p>

      {/* Tombol Aksi */}
      <div className="relative inline-flex items-center justify-center gap-4 group">
        <div
          className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"
        ></div>
        <a
          role="button"
          className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          title="lankprofile"
          href="https://lank-nalank.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click To Know Gilang
          <svg
            aria-hidden="true"
            viewBox="0 0 10 10"
            height="10"
            width="10"
            fill="none"
            className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
          >
            <path d="M0 5h7" className="transition opacity-0 group-hover:opacity-100" />
            <path d="M1 1l4 4-4 4" className="transition group-hover:translate-x-[3px]" />
          </svg>
        </a>
      </div>
    </div>
  );
}
