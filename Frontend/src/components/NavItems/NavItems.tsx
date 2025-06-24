// Import Navbar icons
import homeIcon from "../../assets/navIcons/Home.png";
import searchIcon from "../../assets/navIcons/search.png";
import notificationIcon from "../../assets/navIcons/notification.png";
import userIcon from "../../assets/navIcons/user.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


type NavItemsType = {
    imgUrl: string,
    alt: string,
    imgDimession: string,
    isClicked: boolean,
    onclick: () => void
}

type clickedType = 'Home' | 'Search' | 'Notification' | 'User'

const NavigationBar = () => {
    const [clicked, setClicked] = useState<clickedType>("Home");
    const navigate = useNavigate();

    const handleHomeClick = () => {
        setClicked("Home");
        navigate("/home")
    }

    const handleNotificationClick = () => {
        setClicked("Notification")
    }

    const handleSearchClick = () => {
        setClicked("Search")
    }

    const handleUserClick = () => {
        setClicked("User")
    }

    return (
        <nav className="w-full h-14 bg-primary rounded-t-[2rem] absolute bottom-0 p-2 pl-8 pr-8 ">
            <ul className="flex items-center justify-between h-full">
                <NavItems
                    imgUrl={homeIcon}
                    alt="home Navbar icon"
                    imgDimession={`w-5`}
                    isClicked={clicked === "Home"}
                    onclick={handleHomeClick}
                />
                <NavItems
                    imgUrl={searchIcon}
                    alt="home seach icon"
                    imgDimession={`w-5`}
                    isClicked={clicked === "Search"}
                    onclick={handleSearchClick}
                />
                <NavItems
                    imgUrl={notificationIcon}
                    alt="notification Navbar icon"
                    imgDimession={`w-5 `}
                    isClicked={clicked === "Notification"}
                    onclick={handleNotificationClick}
                />
                <NavItems
                    imgUrl={userIcon}
                    alt="user Navbar icon"
                    imgDimession={`w-5`}
                    isClicked={clicked === "User"}
                    onclick={handleUserClick}
                />
            </ul>
        </nav>
    )
}

export const NavItems = ({ imgUrl, alt, imgDimession, isClicked, onclick }: NavItemsType) => {

    return (
        <li className={`${isClicked && "border-b pb-0.5"}`}>
            <img
                src={imgUrl}
                alt={alt}
                className={`${imgDimession} ${!isClicked && "opacity-50"} duration-700 ease-in-out`}
                onClick={onclick}
            />
        </li>
    )
}

export default NavigationBar