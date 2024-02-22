import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./services.css";
import { Pagination } from "swiper/modules";
import services1 from "../../assets/services1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassMinus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const servicesdata = [
  {
    id: "1",
    image: services1,
    title: "logo design",
    subtitle: "Create Your Unique Brand Identity",
    description:
      "our logo maker provides the tools you need to make a lasting impression. Build a strong visual identity effortlessly and set your brand apart from the competition. Start designing today!",
    button: "contact us",
  },
  {
    id: "2",
    image: "",
    title: "",
    subtitle: "",
    description: "",
    button: "",
  },
  {
    id: "3",
    image: "",
    title: "",
    subtitle: "",
    description: "",
    button: "",
  },
  {
    id: "4",
    image: "",
    title: "",
    subtitle: "",
    description: "",
    button: "",
  },
  {
    id: "5",
    image: "",
    title: "",
    subtitle: "",
    description: "",
    button: "",
  },
  {
    id: "6",
    image: "",
    title: "",
    subtitle: "",
    description: "",
    button: "",
  },
];
function Services() {
  const [iSClicked, setISclicked] = useState("");
  const [TimeOutIDs, setTimeOutIDs] = useState([]);
  const [buttonID, setButtonID] = useState("");

  //
  //
  //
  //
  //
  //
  //
  //

  function timeOut(id) {
    // if (iSClicked == `${id}`) {
    let n = setTimeout(() => {
      if (iSClicked == `${id}`) {
        removeValue(id);
      }
    }, 4000);

    setTimeOutIDs([...TimeOutIDs, n]);
    // }
  }

  useEffect(() => {
    timeOut(buttonID);
    TimeOutIDs.forEach((element) => {
      clearTimeout(element);
    });
  }, [buttonID]);

  function removeValue(value) {
    setISclicked("");
    setButtonID("");
  }
  return (
    <section id="services" className="services graaay">
      <div className="mainhead">
        <h2>services</h2>
      </div>
      <div className="container">
        <div className="contentt">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {servicesdata.map((n) => {
              return (
                <SwiperSlide
                  key={n.id}
                  className="services__item card card-one"
                >
                  <span className="services__subtitle text-cs">{n.title}</span>
                  <h3 className="services__title">{n.subtitle}</h3>
                  <p className="services__description">{n.description}</p>
                  <a href="" className="link">
                    contact me
                    <FontAwesomeIcon
                      style={{
                        position: "relative",
                        bottom: "-2px",
                      }}
                      icon={faArrowCircleRight}
                    />
                  </a>
                  <div
                    className={`image ${iSClicked == n.id ? "clicked" : ""} `}
                  >
                    <img src={n.image} alt="" />
                    <div
                      className="overlayPlus"
                      onClick={() => {
                        if (iSClicked == n.id) {
                          removeValue(n.id);
                          setButtonID(n.id);
                        } else {
                          setISclicked(n.id);
                          setButtonID(n.id);
                          // handlePress(n.id);
                        }
                      }}
                    >
                      {iSClicked == n.id ? (
                        <FontAwesomeIcon
                          icon={faMagnifyingGlassMinus}
                        ></FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon
                          icon={faMagnifyingGlassPlus}
                        ></FontAwesomeIcon>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Services;
