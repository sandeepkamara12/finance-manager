import React from "react";
import { Link } from 'react-router-dom';

function Button({ text, bg, padding }) {
   return (
      <div>
         <button
            className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
         >
            <span>{text}</span>
         </button>
      </div>
   );
}


function Navbar() {
   return (
      <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
         <nav className="flex items-center container mx-auto h-full justify-between">
            <div>
               <ul className="flex items-center space-x-10 text-sm">
                  <li><Link to="/" className="text-gray-400 hover:text-gray-100">Home</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-gray-100">About Us</Link></li>
               </ul>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;