import "./style.scss"
import 'swiper/css';
// import CardSm from './components/card'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() =>{
    Aos.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
      });
     
  },[])
  return (
    <>
      <div className="container">
        <video src="/videoplayback.mp4" className='vid-bg' muted loop autoPlay
        ></video>

        <div className="showcase">

          <div className="nav">
            <button><label htmlFor="lo"><i class="fa-solid fa-bars"></i><p>Menu</p></label></button>
            <input type="checkbox" id='lo' />
            <ul>
              <label htmlFor="lo"><h1 className='abs'><i class="fa-solid fa-x"></i></ h1></label>
              <li><a href="#"><h2>Models</h2> <p>{">"}</p></a></li>
              <li><a href="#"><h2>Shoping Tools</h2>  <p>{">"}</p></a></li>
              <li><a href="#"><h2>Porsche Shop</h2>  </a></li>
              <li><a href="#"><h2>Secices</h2> <p>{">"}</p></a></li>
              <li><a href="#"><h2>Expirience</h2> <p>{">"}</p></a></li>
              <li><a href="#"><h2>Find Your Porsche Center </h2><p>{">"}</p></a></li>
              <li><a href="#"><h2>My Porsche</h2> <p>{">"}</p></a></li>
            </ul>
            <img src="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.min.8a292fbd35a5155789ddd011585e05c4@2x.png" alt="" />
            <svg className='poe' style={{ color: 'white ' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>
            <button><a href="#"><i class="fa-regular fa-user"></i></a></button>
          </div>
          <a href="#" className='ok'><div className="info">
            <h1>Fully-jaw-dropping-electric</h1>
            <button><a href="#">The Taycan. from $90,900</a></button>
          </div></a>
        </div>

      </div>
      <div className="cards"  >
        <div className="card" data-aos="fade-up"  >
          <div className="txt">
            <span>The All-Electric Macan. </span><i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="card" data-aos="fade-up"data-aos-delay="150" >
          <div className="txt">
            <span>Subscribe monthly. Rent daily. </span><i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="card" data-aos="fade-up"data-aos-delay="300" >
          <div className="txt">
            <span>Become a Macan Insider. </span><i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="modules">
        <div className="title">
          <h1>Models</h1>
        </div>
        <div className="crds">
          <Link data-aos="fade-right" to={"/shop/boxster"}>
            <div className="cad">
              <div className="top-left">
                <h1>718</h1>
              </div>
              <div className="info">
                <div className="txt">
                  <h2>The mid-engine sports car for two made for pure driving pleasure.</h2>
                  <p>from $ 68,300*</p>
                </div>
                <div className="btn">
                  <button><a href="#">Build your 718</a></button>
                  <button><a href="#">All 718 modules</a></button>
                </div>
              </div>
            </div></Link>
          <Link data-aos="fade-left" data-aos-delay="500" to={"/shop/911"}>
            <div className="cad one">
              <div className="top-left">
                <h1>911</h1>
              </div>
              <div className="info">
                <div className="txt">
                  <h2>The iconic, rear-engine sports car with exceptional performance.</h2>
                  <p>from $ 114,400*</p>
                </div>
                <div className="btn">
                  <button><a href="#">Build your 911</a></button>
                  <button><a href="#">All 911 modules</a></button>
                </div>
              </div>
            </div></Link>
          <Link data-aos="fade-right" to={"/shop/taycan"}>
            <div className="cad uno">
              <div className="top-left">
                <h1>Taycan</h1>
              </div>
              <div className="info">
                <div className="txt">
                  <h2>Coming Summer 2024: the pure expression of an electric sports car.</h2>
                  <p>from $ 99,400*</p>
                </div>
                <div className="btn">
                  <button><a href="#">Build your Taycan</a></button>
                  <button><a href="#">All Taycan modules</a></button>
                </div>
              </div>
            </div></Link>
          <Link data-aos="fade-left" data-aos-delay="500" to={"/shop/panamera"}>
            <div className="cad two">
              <div className="top-left">
                <h1>Panamera</h1>
              </div>
              <div className="info">
                <div className="txt">
                  <h2>The sports car sedan for an active lifestyle with highest comfort.</h2>
                  <p>from $ 102,800*</p>
                </div>
                <div className="btn">
                  <button><a href="#">Build your Panamera</a></button>
                  <button><a href="#">All Panamera modules</a></button>
                </div>
              </div>
            </div>
          </Link>
          <Link data-aos="fade-right" to={"/shop/macan"}>
            <div className="cad tre">
              <div className="top-left">
                <h1>Macan</h1>
              </div>
              <div className="info">
                <div className="txt">
                  <h2>All-electric SUV with impressive E‑Performance.</h2>
                  <p>from $ 78,800*</p>
                </div>
                <div className="btn">
                  <button><a href="#">Build your Macan</a></button>
                  <button><a href="#">All Macan modules</a></button>
                </div>
              </div>
            </div></Link>
          <Link data-aos="fade-left" data-aos-delay="500" to={"/shop/cayenne"}>
            <div className="cad for">
              <div className="top-left">
                <h1>Cayenne</h1>
              </div>
              <div className="info">
                <div className="txt">
                  <h2>The versatile SUV with sports car performance and up to five seats.</h2>
                  <p>from $ 79,200*</p>
                </div>
                <div className="btn">
                  <button><a href="#">Build your Cayenne</a></button>
                  <button><a href="#">All Cayenne modules</a></button>
                </div>
              </div>
            </div></Link>
        </div>
      </div>
      <div className="eaz" data-aos='zoom-in'>
        <div className="info">
          <h1>Find Your Porsche Center</h1>
          <p>A Porsche Center, and your dream Porsche vehicle, may be closer than you think. Search our Porsche Center network for the location closest to you.</p>
          <button><a href="#">Search Now</a></button>
        </div>
        <img src="https://images-porsche.imgix.net/-/media/F3D689BF517843DF9F9E79F5AFD86008_0D6016CEDC714793879B0E14411AB9C1_16-9_dealer_search_new?iar=0&w=792&ar=16%3A9&q=85&auto=format" alt="" />
      </div>
      <div className="unno">
        <div className="find" data-aos="fade-down">
          <h1>Find your new or pre-owned Porsche.</h1>
          <p>Making it easy to find your dream Porsche. Enter your location and browse the best car offers available near you.</p>
          <form>
            <p>Enter a location for your search</p>
            <div className="sear">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Enter City or ZIP Code' />
            </div>

          </form>
        </div>
        <img data-aos="fade-up" src="https://images-porsche.imgix.net/-/media/DBB5B21ECE2947CB8771FD9948199CD3_D4A989FDCF784F618352F5B1DC7E15C6_Enhanced-Finder?h=1413&iar=0&w=900&ar=4%3A3&q=80&crop=faces%2Centropy%2Cedges&auto=format" alt="" />
      </div>
      <div className="slider" data-aos="fade-left">
        <div className="title">
          <h1>Online Shop Highlights</h1>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={
            {
              10: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 50,

              },
              890: {
                slidesPerView: 4,
                spaceBetween: 50,
              }
            }
          }
        >
          <SwiperSlide className='sl'><div className="fap">
            <img src="https://images-porsche.imgix.net/-/media/4785FBDADB894B6D84F75335A59FFBD2_1A84DB17FAD049469E805E42DC91E92D_Extended-Teaser---Wall-Charger?iar=0&w=1299&ar=4%3A3&q=85&auto=format" alt="" />
            <div className="txt">
              <h4>Porsche Wall Charger Connect</h4>
              <p>An easy charging solution for your home.</p>
              <button><a href="#"><i class="fa-solid fa-arrow-right"></i> Charger</a></button>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className='sl'><div className="fap">
            <img src="https://images-porsche.imgix.net/-/media/3F9DB32B404B43969177DF65E08395E6_FD2EA2B6BB60453AB6919EECDDC8C393_Extended-Teaser---Smartwatch?iar=0&w=1299&ar=4%3A3&q=85&auto=format" alt="" />
            <div className="txt">
              <h4>Porsche x Garmin® Epix smartwatch</h4>
              <p>GPS multisport smartwatch with unique Porsche details.</p>
              <button><a href="#"><i class="fa-solid fa-arrow-right"></i> Charger</a></button>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className='sl'><div className="fap">
            <img src="https://images-porsche.imgix.net/-/media/5B635AEC8E5644148375A26CF923A89C_D22149D78B0B4D62BC33E0D33B9A30BD_Extended-Teaser---Golf-Cartbag?iar=0&w=1299&ar=4%3A3&q=85&auto=format" alt="" />
            <div className="txt">
              <h4>Golf Cartbag – Sport</h4>
              <p>Spacious cart bag made of waterproof nylon with padded shoulder strap and lined inner pocket.</p>
              <button><a href="#"><i class="fa-solid fa-arrow-right"></i> Cartbag</a></button>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className='sl'><div className="fap">
            <img src="https://images-porsche.imgix.net/-/media/460209A433A645BC87D51D8891925F45_C7AE43B5C7D748B48E28494F05991FDE_Extended-Teaser---Bicycle?iar=0&w=1299&ar=4%3A3&q=85&auto=format" alt="" />
            <div className="txt">
              <h4>Porsche eBike Cross Performance</h4>
              <p>High-performance electric mountain bike from Porsche.</p>
              <button><a href="#"><i class="fa-solid fa-arrow-right"></i> eBike</a></button>
            </div>
          </div></SwiperSlide>
          <SwiperSlide className='sl'><div className="fap">
            <img src="https://images-porsche.imgix.net/-/media/B66F2A03B9C24C219CC3CC0F111F1425_529CA41E2DCA4F95A6CA91AB28531E54_Extended-Teaser---Posterset?iar=0&w=1299&ar=4%3A3&q=85&auto=format" alt="" />
            <div className="txt">
              <h4>Porsche Poster Set - The Porsche Jump</h4>
              <p>Powerful motifs and high quality printing:
                the limited-edition poster set portray variuos Porsche models.
              </p>
              <button><a href="#"><i class="fa-solid fa-arrow-right"></i> Porsterset</a></button>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </div>

      <div className="cont" data-aos="flip-right">
        <div className="title">
          <h1>Discover</h1>
        </div>
        <div className="cards">
          <div className="card uno" >
            <div className="txt">
              <span>Travel & Expirience </span><i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card tor" >
            <div className="txt">
              <span>Porshce Approved </span><i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="card des" >
            <div className="txt">
              <span>Motosport Expirience </span><i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="newseller" data-aos="fade-up">
          <div className="list">
            <h2>Newseller</h2>
            <p>Latest news directly in your box</p>
            <button id='lo'>Subscribe</button>

          </div>
          <div className="list">
            <h2>Contact</h2>
            <p>Do you have any question?</p>
            <button
            >Contact Form</button>

          </div>
          <div className="list">
            <h2>Social Media</h2>
            <p>Get in touch with via social media</p>
            <div className="btn">
              <button><i class="fa-brands fa-facebook"></i></button>
              <button><i class="fa-brands fa-instagram"></i></button>
              <button><i class="fa-brands fa-pinterest-p"></i></button>
              <button><i class="fa-brands fa-youtube"></i></button>
              <button><i class="fa-brands fa-x-twitter"></i></button>
              <button><i class="fa-brands fa-linkedin"></i></button>

            </div>
          </div>
        </div>
        <div className="uls" data-aos="fade-up" data-aos-delay="500">
          <div className="title">
            <h2>Company</h2>
          </div>
          <div className="body">
            <ul>
              <li><a href="#">Porshce at Glance</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
            <ul>
              <li><a href="#">Porshce at Glance</a></li>
              <li><a href="#">Partner forum</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Affilietes</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom"  data-aos="fade-up" data-aos-delay="900">
          <div className="links">
            <p>© 2024 Porsche Cars North America, Inc.</p>
            <a href="#">Legal notice.</a>
            <a href="#">Privacy notice.</a>
            <a href="#">California privacy.</a>
            <a href="#">Accessibility Statement.</a>
            <a href="#">Open source Software.</a>
            <a href="#">Do not sell or Share My Personal Information.</a>
            <a href="#">Whistleblower System.</a>
            <a href="#">Emergency Responders.</a>
            <a href="#"> Recall Information. </a>
            <a href="#">3G Wireless Turndown FAQs.</a>
          </div>
          <svg className='poe' style={{ color: 'white ' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4500 300"><title>Porsche</title><path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path></svg>

        </div>
      </div >
    </>
  )
}