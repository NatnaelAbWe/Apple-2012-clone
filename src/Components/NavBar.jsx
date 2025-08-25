import logo from "../assets/icons/logo.png";
import searchIcon from "../assets/icons/search-icon.png";
import cart from "../assets/icons/cart.png";

function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-black backdrop-blur supports-[backdrop-filter]:bg-black/95 text--sm text-gray-300">
      <ul className="mx-auto flex max-w-6xl items-center justify-center gap-x-10">
        <li className="shrink-0">
          <a href="#" className="p-1" aria-label="Apple">
            <img
              src={logo}
              className="w-5 h-5 brightness-100 hover:brightness-75 sm:mr-auto"
              alt=""
            />
          </a>
        </li>

        {/* <!-- desktop links --> */}
        <li className="hidden md:flex gap-x-8">
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            Mac
          </a>
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            iPhone
          </a>
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            iPad
          </a>
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            Watch
          </a>
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            TV
          </a>
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            Music
          </a>
          <a
            href="#"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded px-1 py-0.5"
          >
            Support
          </a>
        </li>
        {/* <!-- icons --> */}
        <li className="flex items-center gap-x-4 ml-auto sm:ml-0 mr-5 sm:mr-0">
          <a href="#" className="block p-1" aria-label="search">
            <img
              src={searchIcon}
              className="w-5 h-5 brightness-100 hover:brightness-75"
              alt=""
            />
          </a>
          <a href="#" className="block p-1" aria-label="Cart">
            <img
              src={cart}
              className="w-5 h-5 brightness-100 hover:brightness-75"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
