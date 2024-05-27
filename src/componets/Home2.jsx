import React from 'react';
import image from '../asset/IMG.png';
import Banner from './shared/Banner';

function Home() {
  
  return (
    <div className="md:px-12 p-4 max-w-screen-2x1 mx-auto mt-[73px] pt-9 ">
      <Banner banner={image} heading={"I'm a FullStack Developer"} subheading={'As a dedicated full-stack developer, I bring creativity with apassion for crafting visually appealing and user-friendlyinterfaces, I specialize in turning design concepts into seamless,responsive web applications.'} anch={'Resume'} />
    </div>
  );
}

export default Home;
