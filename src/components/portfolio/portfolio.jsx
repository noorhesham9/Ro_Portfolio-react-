import React from "react";
import List from "./List";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";
import "./portfolio.css";
const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

function Portfolio() {
  const [projectItems, setMEnuItem] = useState(projects);
  const [navList, setnavList] = useState(allNavList);

  const filterItems = (category) => {
    console.log(category);
    const newProjectItems = projects.filter((item) => {
      if (category === "all") {
        return projects;
      } else {
        return item.category === category;
      }
    });
    setMEnuItem(newProjectItems);
  };
  return (
    <section className="portfolio section graaay" id="work">
      <div className="mainhead">
        <h2>Portfolio</h2>
      </div>
      <List list={navList} filterItems={filterItems} />

      <div className="portfolio__container container grid">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          style={{
            width: "350px",
            maxWidth: "100%",
          }}
        >
          <AnimatePresence initial={false}>
            {projectItems.map((por, index) => {
              const { id, img, category, title, description } = por;
              return (
                <SwiperSlide
                  key={id}
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  {({ isVisible }) => {
                    return (
                      <motion.div
                        animate={{ y: 0, opacity: 1 }}
                        initial={{
                          y: 170,
                          opacity: 0,
                        }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="portfolio__items card card-two"
                      >
                        <div className="portfolio__img-wrapper">
                          <img src={img} alt="" className="portfolio__img" />
                        </div>
                        <span className="portfolio__category text-cs">
                          {category}
                        </span>
                        <h3 className="portfolio__title">{title}</h3>
                        <p className="portfolio__description">{description}</p>
                      </motion.div>
                    );
                  }}
                </SwiperSlide>
              );
            })}
          </AnimatePresence>
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
