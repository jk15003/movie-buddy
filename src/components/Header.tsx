import Image from "next/image";
import Link from "next/link";
import GenreDropDown from "./GenreDropDown";
import SearchInput from "./SearchInput";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
        <div className="w-full flex items-center justify-between backdrop-blur-2xl transition-colors p-5 bg-[#12121280] gap-4 md:gap-0 sticky z-50 top-0">
          {/* Logo */}
          <Link href={"/"}>
          <div className="inline-flex items-center gap-3 backdrop-blur-2xl bg-[#12121280] transition-colors px-6 py-4 rounded-md">
          {/* Film reel icon */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="2" r="1.5" fill="white" />
            <circle cx="12" cy="22" r="1.5" fill="white" />
            <circle cx="2" cy="12" r="1.5" fill="white" />
            <circle cx="22" cy="12" r="1.5" fill="white" />
          </svg>
          
          {/* Text */}
          <span className="hidden md:block text-white text-xl font-mono tracking-tight">movie-buddy</span>
        </div>
      </Link>
      {/* Others */}
      <div className="text-white flex space-x-2 items-center">
        {/* Genre */}
        <GenreDropDown />
        {/* Search */}
        <SearchInput />
        {/* Theme */}
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
