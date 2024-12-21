import React from 'react';
import donuts from '../assets/donuts.jpg';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';

const Story = () => {
  return (
    <div class="story-page">
      <h2>FAMILY OWNED</h2>
      <h3>SINCE 1999</h3>
      <p>Welcome to our family-owned donut shop! For the past two decades, we have been honored to serve our lovely Escondido community with delicious, freshly-made donuts. </p>
      <p>Our journey began with a dream to support our family, and over the years, it has grown into a beloved local treasure. We take immense pride in being a part of your mornings and special moments, offering not just donuts, but a warm and welcoming experience.</p>
      <p>Thank you for letting us be a part of your lives; we look forward to many more years of sweet memories together!</p>
      <div class="img">
        
      <img src={donuts}></img>
      </div>
      <h3 class="left">OUR ETERNAL GRATITUDE</h3>
      <p class="left">We are incredibly grateful for your support, especially to those who brighten our days with their visits. From our humble beginnings, we are thankful to finally feel secure and to provide our children with brighter futures.</p>
      <div class="something">
      <div class="img imgs">
        <img src={two}></img>
      </div>
      <div class="img imgs">
        <img src={three}></img>
      </div>
      </div>
      <h3 class="left">DECADES OF DEDICATION</h3>
      <p class="left">For almost three decades, Kork Seng Chen has poured his heart into donuts and family. After founding Mart’s Donuts, he passed it to his sister Siv Phong and went on to help other family members start their own shops across Southern California.</p>
      
      <div class="img">
        
        <img src={one}></img>
        </div>
      <h3 class="left">BACK TO SERVE YOU</h3>
      <p class="left">Returning in 2022, Kork is once again working tirelessly, starting every night at 10 PM to ensure that by 4 AM, our donuts are fresh and ready for you. His dedication continues through the morning, so every bite is as fresh as the first.</p>
    </div>
  );
};

export default Story;
