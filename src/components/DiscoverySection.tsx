import React from 'react';

const DiscoverySection: React.FC = () => {
  return (
    <section className="box-border w-full h-[1000px] relative m-0 p-0 overflow-x-hidden">
      {/* Background */}
      <div className="box-border w-full h-full absolute m-0 p-0 left-0 top-0">
        <div className="box-border w-full h-full absolute bg-[#F4F4F4] m-0 p-0 left-0 top-0" />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/eccda452f94c45bdda62f82983b4b66b2f01a382?width=2880"
          alt="Background gradient"
          className="box-border w-full h-full mix-blend-color-dodge absolute object-cover m-0 p-0 rounded-[9.793px] border-[8.569px] border-solid border-[rgba(255,255,255,0.21)] left-0 top-0"
        />
      </div>
      
      {/* Content Container */}
      <div className="box-border w-[1300px] h-[880px] absolute m-0 p-0 left-[78px] top-20 max-md:w-[calc(100%_-_80px)] max-md:flex-col max-md:h-auto max-md:left-10 max-sm:w-[calc(100%_-_40px)] max-sm:px-0 max-sm:py-10 max-sm:left-5">
        {/* Gradient Eclipse */}
        <div className="absolute w-[612px] h-[612px] rounded-[611.991px] bg-gradient-to-br from-[rgba(136,84,225,0.40)] via-[rgba(191,73,139,0.40)] to-[rgba(212,87,88,0.40)] blur-[100px] left-[-236px] top-[26px]" />
        
        {/* Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/93cb7c9e79f9c3a5e1ebf17cf5b691f3c613618b?width=1390"
          alt="Discovery content"
          className="box-border w-[695px] h-[538px] absolute object-cover m-0 p-0 rounded-2xl left-2 top-[151px] max-md:w-full max-md:h-[400px] max-md:relative max-md:mb-10 max-md:left-0 max-md:top-0 max-sm:h-[300px] max-sm:mb-[30px]"
        />
        
        {/* Content */}
        <div className="box-border flex w-[450px] flex-col items-end gap-6 absolute h-[336px] m-0 p-0 right-0 top-[252px] max-md:w-full max-md:relative max-md:items-center max-md:text-center max-md:right-auto max-md:top-auto">
          <div className="box-border w-[450px] h-[264px] relative m-0 p-0">
            <h2 className="box-border w-[450px] h-36 text-[#2C0B71] text-right text-6xl font-semibold leading-[68px] absolute m-0 p-0 left-0 top-0 max-md:text-5xl max-md:leading-[52px] max-md:text-center max-sm:text-[28px] max-sm:leading-8 max-sm:w-full max-sm:h-auto">
              استكشف عالم المحتوى الذكي
            </h2>
            <p className="box-border w-[450px] text-[#64606E] text-right text-lg font-light leading-7 absolute h-28 m-0 p-0 left-0 top-[152px] max-md:text-center max-sm:text-base max-sm:leading-6 max-sm:w-full max-sm:h-auto">
              اختبر كونتينتلي بشكل مباشر! قم بجدولة عرض توضيحي مخصص في الوقت
              الذي يناسبك واكتشف كيف يمكن لحلولنا تلبية احتياجاتك. سيوجهك
              فريقنا خلال الميزات ويجيب على أي أسئلة قد تكون لديك. اختر الوقت
              الذي يناسبك.
            </p>
          </div>
          
          <button className="box-border flex w-48 h-12 justify-center items-center gap-2 border m-0 px-6 py-2 rounded-[999px] border-solid border-[#6D26BB] hover:bg-[#6D26BB] hover:text-white transition-colors duration-200 max-sm:w-full">
            <span className="box-border text-[#2C0B71] text-lg font-medium leading-7 m-0 p-0 hover:text-white">
              احجز عرضاً توضيحياً
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverySection;
