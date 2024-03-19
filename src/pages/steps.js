import React from 'react';
import Layout from './layout';
import ProcessHero from '../components/processHero';

import ButtonWhite from "../components/ButtonWhite"


import { FaPencilAlt, FaClock, FaComments, FaDollarSign, FaRocket, FaSmileBeam } from 'react-icons/fa';

// Define the steps and corresponding icons in an array
const steps = [
  { icon: <FaPencilAlt />, title: '1. Drop Us a Line', description: 'Fill out the quick form on our site with your project\'s scoop and how to reach you.' },
  { icon: <FaClock />, title: '2. Set Up a Chat', description: 'Pick a time that works for you to have a talk—either at your place or over a call.' },
  { icon: <FaComments />, title: '3. Talk Details', description: 'We\'ll swing by or call to hear about your vision and what you\'re after, and we\'ll take notes and measurements.' },
  { icon: <FaDollarSign />, title: '4. Estimate in Hand', description: 'Check out the estimate we send over—it’ll have all you need to know about costs and how long we think it\'ll take.' },
  { icon: <FaRocket />, title: '5. Kick-off', description: 'Give us the thumbs up and we’ll get the ball rolling, keeping you in the loop as your home transformation begins.' },
  { icon: <FaSmileBeam />, title: '6. Enjoy a Job Well Done', description: 'Sit back, relax, and enjoy the results of your home transformation with peace of mind.' },

];

const StepsPage = () => {
  return (
    <Layout>
      <ProcessHero />
      <div className="max-w-4xl px-4 py-2 mx-auto pb-14">
        <h1 className="pt-12 mb-12 text-3xl font-bold text-center">Our Process: From Vision to Reality</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-4 mb-8 border border-gray-200 rounded-lg shadow">
              <div className="text-4xl text-gold-100 md:text-5xl">{step.icon}</div>
              <h2 className="mt-4 mb-2 text-xl font-semibold text-center">{step.title}</h2>
              <p className="text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default StepsPage;
