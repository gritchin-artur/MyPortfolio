import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { BackdropStyle, PortfolioContainer } from "./portfolio.styled";
import MyProjects from "../../../myPortfolio.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Internet } from "../../../img/svg/svg_internet.svg";
import { ReactComponent as Git } from "../../../img/svg/svg_github.svg";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";

const modalRoot = document.querySelector("#modal-root");

export default function Portfolio() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [projectPhoto, setProjectPhoto] = useState([]);

  useEffect(() => {
    const body = document.body;
    if (isOpenModal) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isOpenModal]);

  const handleOpenModal = (pictures) => {
    setIsOpenModal(true);
    setProjectPhoto(pictures);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpenModal(false);
    }
  };

  const renderedMyProjects = useMemo(() => {
    return MyProjects.map(
      (
        {
          project,
          pictures,
          linkToLivePage,
          linktoProjectGit,
          description,
          role,
          technologies,
        },
        id
      ) => (
        <SwiperSlide className="ProjectItem" key={id}>
          <div className="PicturesContainer">
            <h2 className="TitleProject">{project}</h2>
            <p className="Description">{description}</p>
          </div>
          <div className="ImageContainer">
            <img
              className="Img"
              alt="pictures"
              src={pictures[0]}
              onClick={() => handleOpenModal(pictures)}
            />
            <p className="Role">Role: {role}</p>
            <ul className="LinkList">
              <li>
                <a className="LinkItem" href={linktoProjectGit}>
                  <Git /> Git Hub
                </a>
              </li>
              <li>
                <a className="LinkItem" href={linkToLivePage}>
                  <Internet /> Live Page
                </a>
              </li>
            </ul>
          </div>
          <ul className="TechnologieList">
            {technologies.map((tech, index) => (
              <li className="TechnologieElement" key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </SwiperSlide>
       
      )
    );
  }, []);

  const renderedPhotoProjects = useMemo(() => {
    return createPortal (
          <>
      <BackdropStyle  onClick={handleBackdropClick}>
        <Swiper
          style={{
            "--swiper-navigation-color": "grey",
            "--swiper-pagination-color": "#fff",
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="ModalDiv"
        >
          {projectPhoto.map((photo, id) => (
            <SwiperSlide key={id}>
              <img alt={photo} src={photo} width="100%" height="100%" />
            </SwiperSlide>
          ))}
        </Swiper>
            </BackdropStyle>
   </>, modalRoot
    );
  }, [projectPhoto]);

  return  (
    <PortfolioContainer id="section-portfolio">
      <h1 className="TitleMyProject">My Project</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="MySwiper"
      >
        {renderedMyProjects}
      </Swiper>
      {isOpenModal && renderedPhotoProjects}
    </PortfolioContainer>
  );
}
