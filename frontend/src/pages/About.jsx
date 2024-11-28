import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerImg = {
  backgroundImage: "url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="relative">
        {/* Hero Section */}
        <div className="text-center py-12" style={BannerImg}>
          <h1 className="text-5xl font-bold text-white" data-aos="fade-down">
            About Us
          </h1>
          <p className="text-lg text-gray-200 mt-4" data-aos="fade-up">
            Trusted Caregivers, Providing Safe and Compassionate Services for Your Loved Ones
          </p>
        </div>

        {/* First Section */}
        <div className="container mx-auto py-12 px-5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-start lg:w-1/2">
              <h2 className="text-4xl font-bold text-black mb-5" data-aos="zoom-in">
                Trusted Babysitters,{" "}
                <span className="text-gray-500">Caring for Your Child with Safety and Responsibility</span>
              </h2>
              <p className="text-lg leading-relaxed">
                A babysitter is a responsible caregiver who takes care of children in the absence of their parents,
                ensuring their safety and well-being. They engage children in various activities, help with homework,
                and maintain daily routines like meals and bedtime.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Babysitters provide a nurturing and secure environment, catering to the unique needs of each child,
                whether for a few hours or an extended period. Your child's safety and happiness are our priority.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                Learn More
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                className="img-fluid rounded-lg shadow-lg"
                style={{ objectFit: "cover" }}
                src="https://media.istockphoto.com/id/534134538/photo/mothers-and-a-child-hands.jpg?s=612x612&w=0&k=20&c=DwTe7hNlwO-tQGlAvDf_INmfN-eJqEpj-xtpliZsW18="
                alt="Babysitting"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-5">
            <h2 className="text-center text-4xl font-bold mb-10" data-aos="fade-up">
              Why Choose Us?
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              <div
                className="bg-white p-6 rounded-lg shadow-md flex-1"
                data-aos="flip-left"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">Experienced Professionals</h3>
                <p className="text-gray-600">
                  Our caregivers are trained and experienced to provide the best care for children and elders.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md flex-1"
                data-aos="flip-left"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">Safe and Secure</h3>
                <p className="text-gray-600">
                  Safety is our priority. Our team ensures a nurturing and secure environment at all times.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md flex-1"
                data-aos="flip-left"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-3">24/7 Availability</h3>
                <p className="text-gray-600">
                  We provide flexible services tailored to your needs, available round the clock.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="container mx-auto py-12 px-5">
          <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8">
            <div className="text-end lg:w-1/2">
              <h2 className="text-4xl font-bold mb-5" data-aos="zoom-in">
                Compassionate Caretakers,{" "}
                <span className="text-gray-500">Ensuring Comfort and Dignity for Your Loved Ones</span>
              </h2>
              <p className="text-lg leading-relaxed">
                A caretaker plays a vital role in providing compassionate support and care for those who need
                assistance. Whether it's the elderly, individuals with disabilities, or those recovering from illness,
                we ensure their comfort and dignity.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                From managing daily tasks to emotional support, our caretakers provide personalized care with empathy
                and professionalism.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                Explore Services
              </button>
            </div>
            <div className="lg:w-1/2">
              <img
                className="img-fluid rounded-lg shadow-lg"
                style={{ objectFit: "cover" }}
                src="https://t3.ftcdn.net/jpg/00/14/97/78/360_F_14977840_BVZwpV5LTbqc1e13mBaBFb1TTr9K9tiA.jpg"
                alt="Caretaker"
              />
            </div>
          </div>
        </div>

        {/* Footer / Credits Section */}
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 py-6 m-5 rounded-lg shadow-lg">
          <p className="text-center text-black text-lg font-medium">
            Made with <span className="text-red-500 text-xl"></span> by{" "}
            <span className="font-bold text-black underline decoration-dotted">
              Samarth Narayan, Akansha Vasistha, Ankita Raj,
            </span>{" "}
            and{" "}
            <span className="font-bold text-black underline decoration-dotted">
              Prashasti Chaturvedi
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}
