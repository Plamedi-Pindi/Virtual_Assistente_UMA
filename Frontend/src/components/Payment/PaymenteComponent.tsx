
// Import motion animation
import * as motion from "motion/react-client";

type PayInfoItemsType = {
    imgUrl: string,
    title: string,
    alt: string,
    imgDimassion: string
}

const PayInfoItems = ({ imgUrl, title, alt, imgDimassion }: PayInfoItemsType) => {

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="w-full h-20 shadow-md rounded-xl p-3 flex justify-between items-center hover:bg-white"
        >
            <div className="flex items-center gap-2">
                <div className="rounded-full w-14 h-14 bg-primary flex items-center justify-center">
                    <img src={imgUrl} alt={alt} className={`${imgDimassion}`} />
                </div>
                <p className="text-sm w-44" >{title}</p>
            </div>

            <img src="/right.png" alt="icon para acessar este item" className="w-7" />
        </motion.div>
    )
}

export default PayInfoItems