// import components
import { SquireButton } from "../../components/Button/Button";
import NavigationBaar from "../../components/NavItems/NavItems";
import Modal from "../../components/Modal/Modal";
import PayInfoItems from "../../components/Payment/PaymenteComponent";
import StartChat from "../../components/OnBoarding/StartChat";

// Import icons
import icon1 from "../../assets/icons/1.png";
import icon2 from "../../assets/icons/2.png";
import icon3 from "../../assets/icons/3.png";
import icon4 from "../../assets/icons/4.png";
import icon5 from "../../assets/icons/5.png";
import icon6 from "../../assets/icons/6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";
import icon10 from "../../assets/icons/icon10.png";

// import images for banners
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";

// Hooks
import { useEffect, useState, useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';




const HomePage = () => {
    const images = [banner1, banner2, banner3, banner4];
    const [isModalDisplay, setIsModalDisplay] = useState(false);
    const [isStartChat, setIsStartChat] = useState(false);

    const modalDivRef = useRef<HTMLDivElement>(null);
    const modalbuttonRef = useRef<HTMLButtonElement>(null);

    const displayStartChat = ()=> {
        setIsStartChat(true);
    }

    // ######################################
    useEffect(() => {
        const currentDiv = modalDivRef.current;
        const currentButton = modalbuttonRef.current;
        const divChildRef = currentDiv?.querySelector('.div-Child-Ref') as HTMLElement;

        if (!currentDiv || !currentButton || !divChildRef) return;

        currentDiv.style.height = "0vh";
        divChildRef.style.height = `0rem`;
        divChildRef.style.opacity = `0`;

        currentDiv.style.transition = " 0.5s ease-in-out";
        divChildRef.style.transition = " 0.5s ease-in-out";

        const handleModel = () => {

            const isBackCollapsed = currentDiv.style.height === "0vh"
            const isContentCollapsed = divChildRef.style.height === "0rem"

            if (isBackCollapsed && isContentCollapsed) {
                currentDiv.style.height = "100vh";

                setTimeout(() => {
                    divChildRef.style.opacity = `100`;
                    divChildRef.style.height = "33rem"
                }, 250);

                setIsModalDisplay((isBackCollapsed && isContentCollapsed))

            } else {
                divChildRef.style.height = "0rem"
                divChildRef.style.opacity = `0`;

                setTimeout(() => {
                    currentDiv.style.height = "0vh";
                    setIsModalDisplay((isBackCollapsed && isContentCollapsed))
                }, 250);
            }
        }

        if (isModalDisplay) {
            handleModel()
        }

        currentButton.addEventListener("click", handleModel);

        return () => {
            currentButton.removeEventListener("click", handleModel);
        }


    }, [isModalDisplay]);


    return (
        <div className="bg-third h-screen relative flex flex-col items-center overflow-hidden">
            {/*  */}
            <header className="bg-gradient-to-t from-[#E41B23]  to-[#C1171D] w-full h-40 rounded-b-[2rem] pt-6 pl-4 pr-4 p-2 shadow-[0_35px_60px_-10px_rgba(0,0,0,0.3)] ">

                <div className=" flex  justify-between items-center mb-10">
                    <div className="flex gap-4 text-white items-center text-sm">
                        <img src="./Ellipse1.png" alt="User Avatar" className="w-12 h-12 object-cover" />
                        <p>Olá, Paulo 👋</p>
                    </div>

                    <img src="./Frame 53.png" className="object-cover" />
                </div>

                <h3 className="text-[1.5rem] text-third">O que desejas? </h3>
            </header>

            {/*  */}
            <section className="pl-4 pr-4 p-2 w-full mt-10 mb-4 grid grid-cols-3 gap-4 ">
                <SquireButton
                    onClick={() => ""}
                    title="Emissão de documentos"
                >
                    <img src={icon1} className="w-8" />
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Consultar as minhas notas"
                >
                    <img src={icon2} className="w-7" />
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Consultar horários"
                >
                    <img src={icon3} className="w-8" />
                </SquireButton>

                <SquireButton
                    onClick={() => setIsModalDisplay(true)}
                    title="Pagar serviços"
                >
                    <img src={icon4} className="w-7" />
                </SquireButton>

                <SquireButton
                    onClick={displayStartChat}
                    title="Assistente virtual"
                >
                    <img src={icon5} className="w-6" />
                </SquireButton>

                <SquireButton
                    onClick={() => ""}
                    title="Comprovativos"
                >
                    <img src={icon6} className="w-7" />
                </SquireButton>
            </section>

            {/* BANNER */}
            <section className="w-full pl-6 pr-6 grow flex flex-col justify-center ">
                <div className="mb-[4rem] ">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectFade]}
                        effect="fade"
                        spaceBetween={3}
                        slidesPerView={1}
                        pagination={{ el: '.custom-pagination', clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        speed={800}
                        className="w-full h-auto"
                    >
                        {images.map((banner, index) => (
                            <SwiperSlide key={index}>
                                <img src={banner} className="w-full block" />
                            </SwiperSlide>

                        ))}
                    </Swiper>
                    <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
                </div>
            </section>

            {/* App Navigation */}
            <NavigationBaar />

            {/* Modal */}
            <Modal modalButtonRef={modalbuttonRef} modalDivRef={modalDivRef} >
                <PayInfoItems
                    imgUrl={icon1}
                    title="Pagar Propina"
                    alt="Icon do item pagar propina"
                    imgDimassion="w-8"
                />

                <PayInfoItems
                    imgUrl={icon7}
                    title="Certidão de frequência"
                    alt="Icon do item pagar propina"
                    imgDimassion="w-8"
                />

                <PayInfoItems
                    imgUrl={icon8}
                    title="Certificado de habilitações (por ano curricular)"
                    alt="Icon do item pagar propina"
                    imgDimassion="w-8"
                />

                <PayInfoItems
                    imgUrl={icon9}
                    title="Pagar Propina"
                    alt="Icon do item pagar propina"
                    imgDimassion="w-8"
                />

                <PayInfoItems
                    imgUrl={icon10}
                    title="Pagar Propina"
                    alt="Icon do item pagar propina"
                    imgDimassion="w-8"
                />
            </Modal>

            {/* Start Chat */}
            <StartChat isDisplayed={isStartChat} onClick={()=> setIsStartChat(false)} />

        </div>
    )
}

export default HomePage