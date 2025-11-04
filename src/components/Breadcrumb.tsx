import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <nav className="box-border absolute z-10 m-0 p-0 right-[86px] top-[165px] max-md:right-10 max-md:top-[140px] max-sm:right-5 max-sm:top-[100px]" aria-label="Breadcrumb">
      <div className="box-border flex items-start gap-3 w-[168px] h-6 m-0 p-0">
        <div className="box-border flex justify-center items-center gap-3 m-0 p-0 max-sm:gap-2">
          <div className="box-border text-[#F4F4F4] text-base font-normal leading-6 m-0 p-0 max-sm:text-sm">
            الرئيسية
          </div>
          <div className="box-border flex w-6 h-6 justify-center items-center m-0 p-0">
            <div className="box-border w-6 h-6 relative m-0 p-0">
              <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="box-border w-[7px] h-[11px] fill-[#F4F4F4] absolute left-[9px] top-[6px]">
                <path d="M5.64995 11.3L6.69995 10.25L2.09995 5.65L6.69995 1.05L5.64995 0L-4.86374e-05 5.65L5.64995 11.3Z" fill="#F4F4F4"/>
              </svg>
            </div>
          </div>
          <div className="box-border text-[#B86BA6] text-base font-semibold leading-6 m-0 p-0 max-sm:text-sm">
            تواصل معنا
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
