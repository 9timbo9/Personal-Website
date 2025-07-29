'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="h-screen w-20 bg-transparent fixed left-0 top-0 z-50 flex flex-col justify-end items-center pb-6">
      <div className="flex flex-col gap-6 items-center p-3 border border-gray-300 rounded-full bg-white/90 shadow-md">
        <a href="https://github.com/9timbo9" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-gray-700 hover:text-black" />
        </a>
        <a href="https://www.linkedin.com/in/timothy-nikolaev-17b9652bb" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-gray-700 hover:text-blue-600" />
        </a>
        <a href="mailto:timmynikolaev.student@gmail.com">
          <FaEnvelope className="text-xl text-gray-700 hover:text-red-500" />
        </a>
      </div>
    </aside>
  );
}
