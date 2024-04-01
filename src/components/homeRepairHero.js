import * as React from "react";
import { StaticImage } from "gatsby-plugin-image"


const HomeRepairHero = ({ image, }) => {


  return (
      <div className="bg-navy">
          <div className="relative flex items-center justify-start m-auto max-w-screen-2xl md:h-96">
              {/* <StaticImage
                loading="eager"
                src={"../images/doors/home_reno_after_01.jpg"}
                alt="TN Home Improvements Banner Image"
                placeholder="blurred"
                className="hidden md:block heroContainer__image "
                imgClassName="object-middle"
                width={2400}
                height={1200}
              /> */}

            {/* <StaticImage
              loading="eager"
              src={"../images/services_hero.jpg"}
              alt="TN Home Improvements Banner Image"
              placeholder="blurred"
              className=" md:hidden"
              imgClassName="object-middle"
              width={2400}
              height={1200}
            /> */}


          <div className="absolute top-0 z-20 p-5 scale-75 rounded-full md:top-auto md:scale-1 ">
          </div>

            <div className="hidden absolute px-8 left-0 z-10 md:flex flex-col items-start justify-center w-full h-full text-white bg-gradient-to-t md:bg-gradient-to-r from-navy from-0% via-transparent  to-navy to-100% ">
              {/* <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start">
                <h1 className="pb-2 text-4xl text-white border-b-2 border-gold-100">Home Renovations</h1>
                <p className="mt-4">Lorem Ipusm </p>
              </div> */}
            </div>


          </div>
      </div>
  );
};

export default HomeRepairHero;
