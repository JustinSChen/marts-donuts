import React from 'react';
import donuts from '../assets/donuts.jpg';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';

const Story = () => {
  return (
    <div>
      <h2>FAMILY OWNED SINCE 1999</h2>
      <p>Welcome to our family-owned donut shop! For the past two decades, we have been honored to serve our lovely Escondido community with delicious, freshly-made donuts. </p>
      <p>Our journey began with a dream to support our family, and over the years, it has grown into a beloved local treasure. We take immense pride in being a part of your mornings and special moments, offering not just donuts, but a warm and welcoming experience.</p>
      <p>Thank you for letting us be a part of your lives; we look forward to many more years of sweet memories together!</p>
      <img src={donuts}></img>
      <h2>OUR ETERNAL GRATITUDE</h2>
      <p>We are incredibly grateful for your support, especially to those who brighten our days with their visits. From our humble beginnings, we are thankful to finally feel secure and to provide our children with brighter futures.</p>
      <img src={three}></img>
      <img src={two}></img>
      <h2>DECADES OF DEDICATION</h2>
      <p>For almost three decades, Kork Seng Chen has poured his heart into donuts and family. After founding Mart’s Donuts, he passed it to his sister Siv Phong and went on to help other family members start their own shops across Southern California.</p>
      <img src={one}></img>
      <h2>BACK TO SERVE YOU</h2>
      <p>Returning in 2022, Kork is once again working tirelessly, starting every night at 10 PM to ensure that by 4 AM, our donuts are fresh and ready for you. His dedication continues through the morning, so every bite is as fresh as the first.</p>
    </div>
  );
};

export default Story;
