import React from 'react';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import ContactForm from './ContactForm';

const HeroSection: React.FC = () => {
  return (
    <section className="box-border w-full h-[1000px] relative overflow-hidden m-0 p-0 max-md:h-[800px] max-sm:h-[600px] max-w-[100vw]">
      {/* Background */}
      <div className="box-border w-full h-full absolute z-[1] bg-[#0D0229] m-0 p-0 left-0 top-0" />
      
      {/* Background Images */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/b4d89d0c16d9e23b92b0f90fc21841b1d889cbec?width=2880"
        alt="Background mask"
        className="box-border w-full h-full absolute z-[2] object-cover m-0 p-0 left-0 top-0"
      />
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/898e373b5e732c0cbd8247f0aba994576af5df1a?width=2880"
        alt="Gradient overlay"
        className="box-border w-full h-full mix-blend-color-dodge absolute z-[3] object-cover m-0 p-0 rounded-[9.793px] border-[8.569px] border-solid border-[rgba(255,255,255,0.21)] left-0 top-0"
      />
      
      {/* Gradient Ellipses */}
      <div className="absolute z-[4] w-[719px] h-[686px] rounded-[718.608px] bg-gradient-to-b from-[rgba(212,87,88,0.50)] via-[rgba(191,73,139,0.50)] to-[rgba(136,84,225,0.50)] blur-[100px] left-[571px] top-[63px]" />
      <div className="absolute z-[4] w-[612px] h-[612px] rounded-[611.991px] bg-gradient-to-br from-[rgba(136,84,225,0.40)] via-[rgba(191,73,139,0.40)] to-[rgba(212,87,88,0.40)] blur-[100px] right-[-150px] top-[915px]" />
      
      {/* Header */}
      <Header />
      
      {/* Breadcrumb */}
      <Breadcrumb />
      
      {/* Main Title */}
      <h1 className="box-border w-[633px] text-white text-right text-6xl font-semibold leading-[64px] bg-clip-text absolute h-16 z-10 m-0 p-0 right-[86px] top-[237px] max-md:text-5xl max-md:leading-[52px] max-md:w-[500px] max-md:right-10 max-md:top-[180px] max-sm:text-[32px] max-sm:leading-9 max-sm:w-[calc(100%_-_40px)] max-sm:text-center max-sm:right-5 max-sm:top-[120px]">
        تواصل معنا
      </h1>
      
      {/* Contact Form Container */}
      <div className="box-border w-[1276px] h-auto min-h-[500px] absolute z-10 m-0 p-0 left-[86px] top-[380px] max-md:w-[calc(100%_-_80px)] max-md:left-10 max-md:top-[300px] max-sm:w-[calc(100%_-_40px)] max-sm:flex-col max-sm:left-5 max-sm:top-[220px]">
        {/* Form Background */}
        <div className="box-border w-full h-full absolute rounded-[19.234px] border-[1.202px] border-solid border-[rgba(255,255,255,0.06)] bg-gradient-radial from-[rgba(92,124,230,0.10)] to-[rgba(244,244,244,0.05)] shadow-[0_0_16px_0_rgba(0,0,0,0.15)] backdrop-blur-[10px] top-0 left-0" />
        
        {/* Vertical Divider */}
        <div className="absolute w-px h-full bg-[rgba(244,244,244,0.1)] right-[556px] top-0 max-sm:hidden" />
        
        {/* Contact Form */}
        <div className="absolute right-[81px] top-[50px] max-md:right-10 max-sm:relative max-sm:right-auto max-sm:top-auto max-sm:w-full">
          <ContactForm />
        </div>
        
        {/* Contact Information */}
        <div className="box-border w-[213px] h-[340px] absolute flex flex-col items-start gap-[50px] m-0 p-0 left-[298px] top-[50px] max-md:left-10 max-sm:relative max-sm:w-full max-sm:mt-5 max-sm:p-5 max-sm:left-auto max-sm:pb-8">
          <div className="box-border flex h-20 flex-col items-end gap-2 self-stretch m-0 p-0">
            <div className="box-border flex-[1_0_0] self-stretch text-[rgba(244,244,244,0.60)] text-right text-lg font-light leading-7 m-0 p-0">
              بريدنا الالكتروني
            </div>
            <div className="box-border flex-[1_0_0] self-stretch text-[#F4F4F4] text-right text-lg font-light leading-7 m-0 p-0">
              info@contentlyai.com
            </div>
          </div>
          
          <div className="box-border flex h-20 flex-col items-end gap-2 self-stretch m-0 p-0">
            <div className="box-border flex-[1_0_0] self-stretch text-[rgba(244,244,244,0.60)] text-right text-lg font-light leading-7 m-0 p-0">
              رقم التواصل
            </div>
            <div className="box-border flex-[1_0_0] self-stretch text-[#F4F4F4] text-right text-lg font-light leading-7 m-0 p-0">
              +965 1234 5678
            </div>
          </div>
          
          <div className="box-border flex h-20 flex-col items-end gap-2 self-stretch m-0 p-0">
            <div className="box-border flex-[1_0_0] self-stretch text-[rgba(244,244,244,0.60)] text-right text-lg font-light leading-7 m-0 p-0">
              تابعونا على
            </div>
            <div className="box-border flex justify-center items-center gap-6 m-0 p-0">
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM17 26.9538V19H20C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H17V14C17 13.4696 17.2107 12.9609 17.5858 12.5858C17.9609 12.2107 18.4696 12 19 12H21C21.2652 12 21.5196 11.8946 21.7071 11.7071C21.8946 11.5196 22 11.2652 22 11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H19C17.9391 10 16.9217 10.4214 16.1716 11.1716C15.4214 11.9217 15 12.9391 15 14V17H12C11.7348 17 11.4804 17.1054 11.2929 17.2929C11.1054 17.4804 11 17.7348 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H15V26.9538C12.181 26.6964 9.56971 25.3622 7.7093 23.2287C5.8489 21.0952 4.8826 18.3266 5.0114 15.4988C5.1402 12.671 6.35419 10.0017 8.40085 8.04613C10.4475 6.09057 13.1693 4.9993 16 4.9993C18.8307 4.9993 21.5525 6.09057 23.5992 8.04613C25.6458 10.0017 26.8598 12.671 26.9886 15.4988C27.1174 18.3266 26.1511 21.0952 24.2907 23.2287C22.4303 25.3622 19.819 26.6964 17 26.9538Z" fill="#F4F4F4"/>
                </svg>
              </div>
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 10C14.8133 10 13.6533 10.3519 12.6666 11.0112C11.6799 11.6705 10.9108 12.6075 10.4567 13.7039C10.0026 14.8003 9.88378 16.0067 10.1153 17.1705C10.3468 18.3344 10.9182 19.4035 11.7574 20.2426C12.5965 21.0818 13.6656 21.6532 14.8295 21.8847C15.9933 22.1162 17.1997 21.9974 18.2961 21.5433C19.3925 21.0892 20.3295 20.3201 20.9888 19.3334C21.6481 18.3467 22 17.1867 22 16C21.9983 14.4092 21.3657 12.884 20.2408 11.7592C19.116 10.6343 17.5908 10.0017 16 10ZM16 20C15.2089 20 14.4355 19.7654 13.7777 19.3259C13.1199 18.8864 12.6072 18.2616 12.3045 17.5307C12.0017 16.7998 11.9225 15.9956 12.0769 15.2196C12.2312 14.4437 12.6122 13.731 13.1716 13.1716C13.731 12.6122 14.4437 12.2312 15.2196 12.0769C15.9956 11.9225 16.7998 12.0017 17.5307 12.3045C18.2616 12.6072 18.8864 13.1199 19.3259 13.7777C19.7654 14.4355 20 15.2089 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20ZM22 3H10C8.14409 3.00199 6.36477 3.74012 5.05245 5.05245C3.74012 6.36477 3.00199 8.14409 3 10V22C3.00199 23.8559 3.74012 25.6352 5.05245 26.9476C6.36477 28.2599 8.14409 28.998 10 29H22C23.8559 28.998 25.6352 28.2599 26.9476 26.9476C28.2599 25.6352 28.998 23.8559 29 22V10C28.998 8.14409 28.2599 6.36477 26.9476 5.05245C25.6352 3.74012 23.8559 3.00199 22 3ZM27 22C27 23.3261 26.4732 24.5979 25.5355 25.5355C24.5979 26.4732 23.3261 27 22 27H10C8.67392 27 7.40215 26.4732 6.46447 25.5355C5.52678 24.5979 5 23.3261 5 22V10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5H22C23.3261 5 24.5979 5.52678 25.5355 6.46447C26.4732 7.40215 27 8.67392 27 10V22ZM24 9.5C24 9.79667 23.912 10.0867 23.7472 10.3334C23.5824 10.58 23.3481 10.7723 23.074 10.8858C22.7999 10.9994 22.4983 11.0291 22.2074 10.9712C21.9164 10.9133 21.6491 10.7704 21.4393 10.5607C21.2296 10.3509 21.0867 10.0836 21.0288 9.79264C20.9709 9.50166 21.0007 9.20006 21.1142 8.92597C21.2277 8.65189 21.42 8.41762 21.6666 8.2528C21.9133 8.08797 22.2033 8 22.5 8C22.8978 8 23.2794 8.15804 23.5607 8.43934C23.842 8.72064 24 9.10218 24 9.5Z" fill="#F4F4F4"/>
                </svg>
              </div>
              <div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.555 15.1675L14.555 11.1675C14.4044 11.067 14.2293 11.0093 14.0484 11.0005C13.8675 10.9918 13.6877 11.0323 13.528 11.1177C13.3684 11.2032 13.2349 11.3304 13.1419 11.4858C13.0489 11.6412 12.9999 11.8189 13 12V20C12.9999 20.1811 13.0489 20.3588 13.1419 20.5142C13.2349 20.6696 13.3684 20.7968 13.528 20.8823C13.6877 20.9677 13.8675 21.0082 14.0484 20.9995C14.2293 20.9907 14.4044 20.933 14.555 20.8325L20.555 16.8325C20.6922 16.7412 20.8047 16.6175 20.8825 16.4722C20.9603 16.327 21.001 16.1648 21.001 16C21.001 15.8352 20.9603 15.673 20.8825 15.5278C20.8047 15.3826 20.6922 15.2588 20.555 15.1675ZM15 18.1313V13.875L18.1975 16L15 18.1313ZM29.2913 8.69C29.1735 8.22919 28.9478 7.80298 28.6329 7.44654C28.318 7.09011 27.9228 6.81366 27.48 6.64C23.195 4.985 16.375 5 16 5C15.625 5 8.805 4.985 4.52 6.64C4.0772 6.81366 3.68204 7.09011 3.36712 7.44654C3.05219 7.80298 2.82653 8.22919 2.70875 8.69C2.385 9.9375 2 12.2175 2 16C2 19.7825 2.385 22.0625 2.70875 23.31C2.82636 23.771 3.05194 24.1975 3.36687 24.5542C3.68181 24.9108 4.07706 25.1875 4.52 25.3613C8.625 26.945 15.05 27 15.9175 27H16.0825C16.95 27 23.3787 26.945 27.48 25.3613C27.9229 25.1875 28.3182 24.9108 28.6331 24.5542C28.9481 24.1975 29.1736 23.771 29.2913 23.31C29.615 22.06 30 19.7825 30 16C30 12.2175 29.615 9.9375 29.2913 8.69ZM27.355 22.815C27.3169 22.9684 27.243 23.1105 27.1394 23.2298C27.0357 23.3491 26.9053 23.4421 26.7588 23.5013C22.8025 25.0288 16.0738 25.0013 16.0088 25.0013H16C15.9325 25.0013 9.20875 25.0263 5.25 23.5013C5.10346 23.4421 4.97303 23.3491 4.86938 23.2298C4.76574 23.1105 4.69184 22.9684 4.65375 22.815C4.35 21.6738 4 19.5713 4 16C4 12.4288 4.35 10.3263 4.645 9.19125C4.68239 9.03698 4.75596 8.89382 4.85965 8.77362C4.96333 8.65342 5.09413 8.55963 5.24125 8.5C9.05625 7.02625 15.4487 7 15.9725 7H16.0063C16.0738 7 22.8038 6.9775 26.7563 8.5C26.9028 8.55915 27.0332 8.65217 27.1369 8.77146C27.2405 8.89074 27.3144 9.03289 27.3525 9.18625C27.65 10.3263 28 12.4288 28 16C28 19.5713 27.65 21.6738 27.355 22.8088V22.815Z" fill="#F4F4F4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
