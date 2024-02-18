import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./services.css";
import { Pagination } from "swiper/modules";
import services1 from "../../assets/services1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
  return (
    <section id="services" className="services graaay">
      <div className="mainhead">
        <h2>services</h2>
      </div>
      <div className="container">
        <div className="content">
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
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {servicesdata.map((n, index) => {
              return (
                // <SwiperSlide key={n.id}>
                //   <div>{n.title}</div>
                //   <div> {n.subtitle}</div>
                //   <div>{n.description}</div>
                //   <img
                //     style={{
                //       width: "100px",
                //       height: "100px",
                //     }}
                //     src={n.image}
                //     alt=""
                //   />
                // </SwiperSlide>

                <SwiperSlide
                  key={n.id}
                  className="services__item card card-one"
                >
                  <span className="services__subtitle text-cs">{n.title}</span>
                  <h3 className="services__title">{n.subtitle}</h3>
                  <p className="services__description">{n.description}</p>
                  <a href="" className="link">
                    contact me
                    {/* <FaArrowRight className="link__icon" /> */}
                    <FontAwesomeIcon
                      style={{
                        position: "relative",
                        bottom: "-2px",
                      }}
                      icon={faArrowCircleRight}
                    />
                  </a>
                  <img src={n.image} alt="" />
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

{
  /* <div className="logo box">
            <div className="childImage">
              <img src="image/logoDesign cutted.png" alt="" />
            </div>
            <div className="title">Logo Design</div>
          </div>
     
          <div className="Illustrations box">
            <div className="childImage">
              <img src="image/night crop.png" alt="" />
            </div>
            <div className="title">Illustrations</div>
          </div>
          <div className="decore box">
            <div className="childImage">
              <img src="image/fotor_2023-1-23_19_26_3.png" alt="" />
            </div>
            <div className="title">Decore</div>
          </div>
          <div className="branding box">
            <div className="childImage">
              <img
                src="image/WhatsApp Image 2021-10-23 at 1.00.57 AM.jpeg"
                alt=""
              />
            </div>
            <div className="title">Branding</div>
          </div>
          <div className="courses box">
            <div className="childImage">
              <img src="image/fotor_2023-1-23_19_27_28.png" alt="" />
            </div>
            <div className="title">Courses</div>
          </div> */
}
