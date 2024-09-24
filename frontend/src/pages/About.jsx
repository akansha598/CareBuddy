import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerImg = {
  backgroundImage: "url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg')",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function About() {
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
    <div>
      <div>
        {/* First featurette aligned to the left */}
        <div>
          <div className="flex flex-row flex-wrap justify-start m-5">
            {/* Text section starts at the top */}
            <div className="col-md-7 order-md-1 text-start flex flex-col justify-start ">
              <h2 className="text-4xl font-bold text-black p-3" data-aos="zoom-in">
              Trusted Babysitters,{" "}
                <span className="text-muted text-gray-500">Caring for Your Child with Safety and Responsibility.</span>
              </h2>
              <p className="lead m-3">
              A babysitter is a responsible caregiver who takes care of children in the absence of their parents, ensuring their safety and well-being. They engage children in various activities, help with homework, and maintain daily routines like meals and bedtime. Babysitters provide a nurturing and secure environment, catering to the unique needs of each child, whether it's for a few hours or an extended period. Trusted by parents, babysitters offer peace of mind by being dependable and attentive, making sure children feel comfortable and cared for while parents are away, allowing families to balance work, social, or personal commitments.              </p>
            </div>

            {/* Image section aligned to the bottom */}
            <div className="col-md-5 order-md-2 w-2/3 flex flex-col justify-end p-2 m-3">
              <img
                className="img-fluid rounded-start border rounded-lg"
                style={{ height: "380px", width: "650%", objectFit: "cover" }}
                src="https://media.istockphoto.com/id/534134538/photo/mothers-and-a-child-hands.jpg?s=612x612&w=0&k=20&c=DwTe7hNlwO-tQGlAvDf_INmfN-eJqEpj-xtpliZsW18="
                alt="featurette"
              />
            </div>
          </div>
        </div>



        {/* Second featurette aligned to the right */}
        <div className="row featurette d-flex justify-content-end align-items-end mt-10">
          <div className=" text-end">
            <h2 className="text-4xl font-bold m-3 " data-aos="zoom-in">
            Compassionate Caretakers,{" "}
              <span className="text-muted text-gray-500">Ensuring Comfort and Dignity for Your Loved Ones</span>
            </h2>
            <div className="flex justify-end items-end ml-5">
              <p className="lead m-3">
              A caretaker plays a vital role in providing compassionate support and care for those who need assistance, whether it's for the elderly, individuals with disabilities, or those recovering from illness. They ensure a safe and comfortable environment, assisting with daily tasks such as bathing, dressing, and medication management. Beyond physical care, caretakers offer emotional support, companionship, and dignity, helping to improve the overall well-being of the individual. With patience and dedication, a caretaker brings peace of mind to families, knowing their loved ones are in capable hands, receiving the attention and care they need to thrive.              </p>
            </div>

          </div>
          <div className="col-md-5 flex justify-end items-end">
            <img
              className="img-fluid img-fluid rounded-start border rounded-lg m-5 "
              style={{ height: "380px", width: "65%", objectFit: "cover" }}
              src="https://t3.ftcdn.net/jpg/00/14/97/78/360_F_14977840_BVZwpV5LTbqc1e13mBaBFb1TTr9K9tiA.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
