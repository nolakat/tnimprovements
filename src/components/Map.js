import React from "react";
import CountyMap from "./countyMap";

const Map = () =>{

  return(
    <div className="text-white bg-navy">
      <div className="max-w-screen-2xl m-auto py-32 ">
        <div className=" flex flex-col md:grid md:grid-cols-4 gap-x-4">
          <h3 className="text-center col-span-4 mb-12 lg:mb-0 lg:hidden text-3xl w-fit m-auto border-b-2 pb-3 border-gold-100">Our Service Areas</h3>
          <div className="flex items-center col-span-4 mx-16 overflow-hidden lg:col-span-2 md:mx-10">
            <CountyMap />
          </div>
          <div className=" col-span-4 lg:col-span-2 ">
            <h3 className="hidden lg:block text-center text-3xl w-fit m-auto border-b-2 pb-3 border-gold-100">Our Service Areas - Your Neighborhood Included</h3>

            <div className="container hidden md:block mx-auto p-4 mt-12">
              <ul className="justify-start w-fit m-auto gap-x-10 grid text-center md:text-left grid-cols-4 gap-4 font-semibold capitalize">
                <li>Adams</li>
                <li>Aleppo</li>
                <li>Aspinwall</li>
                <li>Avalon</li>
                <li>Bellevue</li>
                <li>Ben Avon</li>
                <li>Ben Avon Heights</li>
                <li>Blawnox</li>
                <li>Bradford Woods</li>
                <li>Callery</li>
                <li>Cranberry</li>
                <li>Edgewood</li>
                <li>Emsworth</li>
                <li>Etna</li>
                <li>Evans City</li>
                <li>Fox Chapel</li>
                <li>Franklin Park</li>
                <li>Glen Osborne</li>
                <li>Glenfield</li>
                <li>Hampton</li>
                <li>Harmar</li>
                <li>Harmony</li>
                <li>Haysville</li>
                <li>Indiana</li>
                <li>Jackson</li>
                <li>Kilbuck</li>
                <li>Mars</li>
                <li>Marshall</li>
                <li>McCandless</li>
                <li>Millvale</li>
                <li>Mt Oliver</li>
                <li>Oakmont</li>
                <li>Ohara</li>
                <li>Ohio</li>
                <li>Pine</li>
                <li>Pittsburgh</li>
                <li>Reserve</li>
                <li>Richland</li>
                <li>Ross</li>
                <li>Seven Fields</li>
                <li>Sewickley</li>
                <li>Sewickley Heights</li>
                <li>Sewickley Hills</li>
                <li>Shaler</li>
                <li>Sharpsburg</li>
                <li>Swissvale</li>
                <li>Valencia</li>
                <li>Verona</li>
                <li>West Deer</li>
                <li>West View</li>
                <li>Zelienople</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map
