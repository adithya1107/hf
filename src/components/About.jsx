import React from 'react';
import Heading from './Heading';

const About = () => {
  return (
    <section id='about' className='py-16 bg-black/15 text-white'>
      <div className='relative z-2 max-w-8xl mx-auto px-6'>
        <Heading
          className="md:max-w-md lg:max-w-2xl mx-auto"
          title="About"
          tag="Who are we"
        />
        
        <div className='flex flex-col md:flex-row justify-center mt-12 gap-10'>
          <div className='flex flex-col space-y-6 md:w-2/3 lg:w-9/12 text-left'>
            <h2 className='text-3xl font-bold text'>
              India's Top Student Rocketry Team!
            </h2>
            
            <p className='text-lg leading-relaxed'>
              thrustMIT started off in early 2016 as a group of rocket enthusiasts with the aim of promoting High-Power Rocketry in India. The team takes part in the Spaceport America Cup, which is the biggest platform in the world for students to showcase their rocketry skills. We are currently the top team in India and one of the top teams in Asia.
            </p>
            
            <p className='text-lg leading-relaxed'>
              The team has competed in several editions of the Spaceport America Cup since 2016. Our rockets, Vyom, Arya, and Rayquaza earned Spot awards for design and team professionalism in 2018, 2019, and 2022 and were well received by the judges and other competitors. Altair was our latest rocket for the year 2023, it was our first rocket to have a successful recovery, and this was our closest ever launch with an apogee of 10,331 ft. In 2022, our rocket Rayquaza came 4th in the James Barrowman Award. In 2016 and 2018, we were featured in India's biggest magazines, Composite Today, India Times, and Bangalore Mirror.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;