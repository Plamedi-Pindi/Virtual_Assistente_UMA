// Import icons
import { BsChevronLeft, BsSearch, BsThreeDotsVertical } from "react-icons/bs";

// Import navigate
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
    const navigate = useNavigate();
    return (
        <header className="bg-gradient-to-t from-[#C1171D] to-[#E41B23] h-24 w-full rounded-b-[2rem] text-third p-6 pt-10">
            <div className="flex items-center justify-between">
                <BsChevronLeft onClick={()=> navigate("/home") } className="text-xl" />
                <h1 className="text-base font-medium">UMA</h1>

                <div className="flex items-center justify-between gap-3">
                    <BsSearch className="text-xl" /> 
                    <BsThreeDotsVertical className="text-xl" />
                </div>

            </div>
        </header>
    )
}

export default HeaderSection