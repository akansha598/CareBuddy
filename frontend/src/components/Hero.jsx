import React from 'react';
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerImg = {
  backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/regal-airway-426618-d0.appspot.com/o/file-upload%2FWhatsApp%20Image%202024-09-08%20at%2011.13.32%20PM.jpeg?alt=media&token=09d10bf4-0f45-42c9-a2af-94d8558df746')",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const ImageList = [
  {
    id: 1,
    img: "https://png.pngtree.com/png-vector/20220120/ourlarge/pngtree-wanted-babysitter-rubber-rectangular-wanted-vector-png-image_15735044.png",
    title: "Babysitters: Trusted Companions",
    description: "Turn every moment into a memory, making your life easier and children's lives happier.",
  },
  {
    id: 2,
    img: "https://dryharbor.com/wp-content/uploads/2018/08/qtq80-vfqth2-1140x876-1.jpeg",
    title: "Parents Need an Extra Hand?",
    description: "Babysitters are here to help, ensuring every child feels loved and every parent feels at ease.",
  },
  {
    id: 3,
    img: "https://tse3.mm.bing.net/th?id=OIP.9uZ_hkNdBsWt0zF5QG1zfQHaE5&pid=Api&P=0&h=180",
    title: "Caretakers: The Silent Heroes",
    description: "A great caretaker is a beacon of hope, providing comfort, dignity, and support.",
  },
];

function Hero() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
  };

  // Initialize AOS for animations
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div data-aos="zoom-in" className="relative overflow-hidden min-h-[80vh] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" style={BannerImg}>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 h-full w-full bg-black/40 z-0"></div>

      <div className="container relative z-10 h-full flex items-center ">
        <Slider {...settings} className="w-full">
          {ImageList.map((data) => (
            <div
              key={data.id}
              className="relative flex flex-col items-center justify-end gap-8 h-[80vh] w-full"
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              {/* Text Section at the Bottom */}
              <div className="flex flex-col justify-center text-center mt-40 z-10">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
                >
                  {data.title}
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm mb-6 text-white"
                >
                  {data.description}
                </p>
                <div className="flex justify-center">
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
