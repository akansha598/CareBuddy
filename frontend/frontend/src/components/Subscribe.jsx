import React from "react";

const BannerImg = {
  backgroundImage: "url(https://img.freepik.com/free-vector/abstract-purple-background_698452-2334.jpg?w=1060&t=st=1725797001~exp=1725797601~hmac=f829bc5fe09ddfc2a0bbca0b82140cce67d25211276bdce49dfb98413884814b)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-primary dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="flex items-center justify-center h-full w-full backdrop-blur-sm py-10">
        <div className="text-center space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Get Notified About New Upcomings
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full sm:w-3/4 p-3 text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
