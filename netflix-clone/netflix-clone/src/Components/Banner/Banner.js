import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/banner.jpg'
function Banner() {

  function trunDescription(string,n){
      return string?.length > n? string.substring(0,n-1)+"...": string;
  }
  return (
    <div className='banner col-sm-12' style={{ 
      backgroundSize:"cover",
      backgroundImage: `url(${BannerImg})`}}>
        <div class="col-lg-6 content align-items-center justify-content-center border-primary">
            <div className="h2 title text-white ">
                Movie Title Here
            </div>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <div className="p description text-white">
                { trunDescription(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Odio corporis ullam ab rerum voluptatum minus sit, 
                 temporibus officiis eveniet sapiente nostrum a provident,
                  quis eius harum! Labore, consequuntur aliquam beatae ipsum, 
                  nesciunt corporis laudantium consectetur quis cumque eligendi 
                  dolorem sit assumenda mollitia rem aliquid in eaque officiis
                   fugit provident, nemo debitis enim similique. 
                   Natus laborum odit ad asperiores accusamus voluptas modi perspiciatis enim.
                    Voluptate sapiente quibusdam doloribus voluptatem,
                facere ipsa dicta saepe in commodi tenetur doloremque iure blanditiis 
                consequatur laboriosam ab consequuntur! Minus modi labore
                quis eius harum! Labore, consequuntur aliquam beatae ipsum, 
                  nesciunt corporis laudantium consectetur quis cumque eligendi 
                  dolorem sit assumenda mollitia rem aliquid in eaque officiis
                   fugit provident, nemo debitis enim similique. 
                   Natus laborum odit ad asperiores accusamus voluptas modi perspiciatis enim.
                    Voluptate sapiente quibusdam doloribus voluptatem,
                facere ipsa dicta saepe in commodi tenetur doloremque iure blanditiis 
                consequatur laboriosam ab consequuntur! Minus modi labore`, 150)}
            </div> 
            
        </div>
        <div className="fade_bottom"/>
    </div>
  )
}

export default Banner