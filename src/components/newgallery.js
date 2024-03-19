import React,{ useState } from "react";
import ReactCompareImage from 'react-compare-image';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const NewGallery = () => {

  const [tabIndex, setTabIndex] = useState(0);


  const handleChange = (event) => {
    setTabIndex(parseInt(event.target.value))
  };

  return(
    <section className="px-8 py-32 border-b border-tdf lg:px-16 bg-navy border-darkNavy">
      <div className="m-auto max-w-screen-2xl">
        <div class="max-w-screen-md m-auto pb-12 flex flex-col items-center">
          <h3 className="pb-2 mb-4 text-3xl text-center text-white border-b-2 border-gold-100 w-fit">Before & After Showcase</h3>
          <p class="text-white text-center text-lg">Dive into our portfolio of home renovations and commercial remodels. From modernizing interiors to crafting inviting patios, our gallery showcases a range of projects that highlight our quality and creativity. See the remarkable transformations and envision the potential for your own space.</p>
        </div>
        <div className="w-full">
          <Tabs className="flex flex-col md:flex-row" forceRenderTabPanel={true} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

          <div className="flex-shrink hidden md:block">
            <TabList>
              <Tab>Commercial Renovations</Tab>
              <Tab>Basements</Tab>
              <Tab>Ceilings</Tab>
              <Tab>Patios</Tab>
              <Tab>Home Renovations</Tab>
            </TabList>
          </div>

          <div className="block m-auto mb-8 text-lg md:hidden w-fit">
            <select value={tabIndex} onChange={handleChange}>
              <option value={0}>Commercial Renovations</option>
              <option value={1}>Basements</option>
              <option value={2}>Ceilings</option>
              <option value={3}>Patios</option>
              <option value={4}>Home Renovations</option>

              {/* Add more options as needed */}
            </select>
          </div>

            <div className="flex-1 border border-1 border-white/25 ">
              <div class="m-auto grid">
                <TabPanel class="py-0 px-0 md:py-10 md:px-28" forceRender={true}>
                  <ReactCompareImage sliderLineColor="#f4c263" aspectRatio="wider" leftImage="commercial_before.jpg" rightImage="commercial_after_01.jpg" />
                </TabPanel>
                <TabPanel forceRender={true}>
                  <ReactCompareImage sliderLineColor="#f4c263" aspectRatio="wider" leftImage="basement_before.jpg" leftImageAlt="Pittsburgh basement before renovation." rightImage="basement_after.jpg" rightImageAlt="Pittsburgh basement after renovation." />
                </TabPanel>
                <TabPanel forceRender={true}>
                  <ReactCompareImage sliderLineColor="#f4c263" aspectRatio="wider" leftImage="ceiling_before_01.jpg" leftImageAlt="Pittsburgh drop-down ceiling before renovation" rightImage="ceiling_after_01.jpg" rightImageAlt="Renovated drop-down ceiling with new tiles." />
                </TabPanel>
                <TabPanel forceRender={true}>
                  <ReactCompareImage sliderLineColor="#f4c263" aspectRatio="wider" leftImage="patio_before_01.jpg" leftImageAlt="Original backyard pre-renovation" rightImage="patio_after_02.jpg" rightImageAlt="Completed Backyard Patio" />
                </TabPanel>
                <TabPanel forceRender={true}>
                  <ReactCompareImage sliderLineColor="#f4c263" aspectRatio="wider" leftImage="home_reno_before.jpg" leftImageAlt="Original fireplace before remodel" rightImage="home_reno_after_01.jpg" rightImageAlt="Remodeled home fireplace with shelves and cabinents." />
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )

}

export default NewGallery
