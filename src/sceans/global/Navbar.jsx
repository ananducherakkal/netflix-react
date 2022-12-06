import SearchIcon from '../../icons/SearchIcon'
import BellIcon from '../../icons/BellIcon'
import { useScrollPosition } from '../../hooks/useScrollPosition'

const Navbar = () => {
  const scrollPosition = useScrollPosition()

  return (
    <nav className={`w-full h-16 flex px-10 fixed z-40 top-0 transition-all duration-500 ${scrollPosition > 0 ? 'bg-black' : 'bg-transparent'}`}>
      <a href="#" className="my-auto mr-10">
        <img src="../../../assets/netflix_logo.png" alt="netflix logo" className="h-8" />
      </a>
      <ul className="hidden md:flex space-x-5 mr-10 my-auto text-xs text-white child:cursor-pointer child-hover:text-gray-400">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className="flex space-x-3 ml-auto items-center">
        <button className='nav-transparent-icon-btn'>
          <SearchIcon color="#ffffff" className="w-6" />
        </button>
        <button className='nav-transparent-icon-btn'>
          <BellIcon color="#ffffff" className="w-6" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar;