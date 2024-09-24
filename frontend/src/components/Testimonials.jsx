import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Emily Johnson",
    text: "Emily has been a tremendous support for my elderly mother. She is compassionate, attentive, and truly treats her with the utmost respect. My mother loves her company.!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "James Taylor",
    text: "James has been babysitting for us for over a year. He’s great with the kids and has a wonderful rapport with them. They enjoy playing games and learning new things together!.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Ava Garcia",
    text: "Ava is amazing! She not only looks after my kids but also teaches them valuable life skills. They adore her, and I appreciate how responsible she is. She always keeps me update!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Michael Smith",
    text: "Michael has been helping my father for the past six months. He is punctual, reliable, and very patient. He engages my dad in activities that keep him active and happy. .",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
        <div className="py-10 mb-10 ">
      <div className="container mx-auto">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          We take pride in showcasing some of our Testimonial!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Testimonials;