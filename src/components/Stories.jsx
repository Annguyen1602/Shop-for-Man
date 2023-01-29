import React from "react";
import Title from "./Template/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";

const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div>
          <Splide>
            {news.map((stories, index) => (
              <SplideSlide key={index} className="mb-0.5">
                <div>
                  <div>
                    <img src={stories.img} alt={`img/story/${index}`} />
                  </div>
                  <div>
                    <div>
                      <HeartIcon />
                      <span>{stories.like}</span>
                    </div>
                    <div>
                      <ClockIcon />
                      <span>{stories.time}</span>
                    </div>
                    <div>
                      <HashtagIcon />
                      <span>{stories.by}</span>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
