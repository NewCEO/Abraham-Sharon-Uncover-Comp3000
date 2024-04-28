import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { FaHome, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useSelector } from "react-redux";
import { MdExplore, MdLibraryMusic, MdOutlineClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/LOGO.png";
import { CloseButton } from "react-toastify";
import { IoIosClose } from "react-icons/io";
import { UserPlaylist } from "../../model/playlist";
import { playlistService } from "../../service/playlistService";
import { UserObject } from "../../model/user";
import React from "react";



const links = [
  { name: "Home", to: "/music-home", icon: FaHome },
  { name: "Explore", to: "/Explore", icon: MdExplore },
  { name: "My Library", to: "/Library", icon: MdLibraryMusic },
];

const NavLinks = ({ handleClick }) => ( 
  <div className="">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center w-[8rem] my-8 p-1 text-sm font-medium  rounded-md text-[#104b53] hover:bg-[#104b53] hover:text-white"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);
function Sidebar(userData) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<UserPlaylist>({
    name: "",
    image: {} as File
  });
  const user = useSelector(
    (state: { auth: { user: UserObject } }) => state.auth.user
  );
  const [errors, setErrors] = useState<Partial<UserPlaylist>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playlists, setPlaylists] = useState<UserPlaylist[]>([]);
  
  
  const fetchPlaylists = async () => {
    try {
      if (!user) {
        console.error("User is null or Undefined.");
        return;
      }
      // Make API call to fetch covers from the database
      const token = user?.access_token;
      const response = await playlistService.getAllPlaylists(token);
      const playlistData = await response.json();
      // Update state with fetched playlists
      setPlaylists(playlistData);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const closeModal = ()=>{
     // Close modal
     setIsModalOpen(false);
  };

   // Fetch playlists when component mounts
   useEffect(() => {
    fetchPlaylists();
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'image') {
      const files = (e.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        setFormData({ ...formData, [name]: files[0] });
        toast.info(`File '${files[0].name}' selected for upload`);
      } else {
        setFormData({ ...formData, [name]: {} as File }); 
        toast.warn('No file selected');// Set to an empty object if no files selected
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }; 

  const handleFormSubmit = async(event: FormEvent) => {
    event.preventDefault();
    try {
      const token = user.access_token;
      const response  = await playlistService.createPlaylist(formData, token);
      if (response.ok) {
        // Handle successful response
        toast.success("Playlist added successful");
        setIsModalOpen(false);
        setFormData({
          name: "",
          image:{} as File
        });
        // navigate("/music-home");
      } 
      
      
      // Handle response errors
      const responseData = await response.json();
      if (responseData.message) {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePlaylist = (item:UserPlaylist) => {
    navigate('/playlist-view', { state: { playlist: item } })
  };

  
  const Playlists = () => (
    <div className="mt-5 overflow-x-auto h-full">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-[#104b53] mb-5 text-2xl font-semibold mt-5 ">
          Playlist
        </h3>
        <a className="text-[#104b53] text-sm cursor-pointer" onClick={toggleModal}>
          <FaPlus />
        </a>
      </div>
      <ul className="overflow-hidden">
        {playlists?.map((item, index) => (
          <li
            key={index}
            onClick={() => handlePlaylist(item)}
            className="text-[#104b53] font-semibold py-3 p-1 cursor-pointer"
          >
            {item.name}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );


  return (
    <>
      <div className="xl:flex hidden flex-col w-[240px] px-4 border-r border-gray">
        <NavLinks handleClick={undefined} />
        <div className="bg-[#104b53]  w-full rounded-md p-4">
          <p className="text-sm">
            Want to hear a cover of your favorite song? Recommend it to an
            artist you love.
          </p>
          <button className="mt-4 flex w-24  justify-center items-center bg-[#fad9b8] text-xs p-[0.5rem] rounded-md xl:w-40 xl:text-lg text-[#104b53] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2">
            <Link className="text-xs font-bold" to="/creator-recommendation">
              Recommend A Song
            </Link>
          </button>
        </div>
        <div>
          <Playlists handlePlaylist={undefined} />
        </div>
      </div>
      {/* Mobile sidebar */}
      <div className="absolute md:hidden top-[1.3rem] right-3 z-50">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-[#104b53]"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <MdOutlineClose
            className="w-6 h-6 mr-2 text-[#104b53]"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 w-2/3 bg-gradient-to-tl from-white/20 to-[#FAD9B8] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="left-0 h-6 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <div className="bg-[#104b53] xl:h-full w-full rounded-md p-2">
          <p className="text-sm">
            Want to hear a cover of your favorite song? Recommend it to an
            artist you love.
          </p>
          <button className="mt-4 flex w-full justify-center items-center bg-[#fff] text-xs p-[0.5rem] rounded-md xl:w-40 xl:text-lg text-[#104b53] xl:outline outline-1 outline-[#104B53] mr-2 xl:mr-2">
            <Link className="text-xs font-bold" to="/creator-recommendation">
              Recommend A Song
            </Link>
          </button>
        </div>
        <div>
          <Playlists handlePlaylist={undefined} />
        </div>
      </div>
      {/* Modal for Playlist */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg">
           <div className="flex flex-row justify-between">
           <h2 className="text-[#104b53] text-lg font-semibold mb-4">
              Add Playlist
            </h2>
            <IoIosClose className="text-[#104b53] text-4xl" onClick={closeModal}/>
           </div>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-semibold text-[#104b53]"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(handleChange)}
                  className="border border-gray-300 rounded-md p-2 w-full bg-white text-[#104b53]"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-semibold text-[#104b53]"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(handleChange)}
                  className="border border-gray-300 rounded-md p-2 w-full bg-white text-[#104b53]"
                />
                  {formData.image && (
              <p className="text-sm text-gray-500 mt-1">Selected File: {formData.image.name}</p>
            )}
              </div>
              <button
                type="submit"
                className="bg-[#104b53] text-white font-semibold px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default Sidebar;