import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'ما هو Contently AI وكيف يعمل؟',
    answer: 'Contently AI هو أداة مدعومة بالذكاء الاصطناعي تساعد المستخدمين على توليد أفكار محتوى تسويقي لإنستغرام بناءً على اهتماماتهم.'
  },
  {
    id: 'faq-2',
    question: 'هل يمكن استخدام Contently AI لجميع أنواع الأعمال؟',
    answer: 'نعم، يمكن استخدام Contently AI لجميع أنواع الأعمال والصناعات. تم تصميم الأداة لتكون مرنة وقابلة للتكيف مع احتياجات مختلف القطاعات.'
  },
  {
    id: 'faq-3',
    question: 'كيف تم تدريب الذكاء الاصطناعي لتسويق إنستغرام؟',
    answer: 'تم تدريب الذكاء الاصطناعي على مجموعة واسعة من البيانات التسويقية وأفضل الممارسات في إنستغرام لضمان تقديم محتوى عالي الجودة ومناسب للمنصة.'
  },
  {
    id: 'faq-4',
    question: 'هل أحتاج إلى خبرة تسويقية لاستخدام Contently AI؟',
    answer: 'لا، لا تحتاج إلى خبرة تسويقية مسبقة. تم تصميم Contently AI ليكون سهل الاستخدام للمبتدئين والمحترفين على حد سواء.'
  },
  {
    id: 'faq-5',
    question: 'ما الفرق بين Contently AI وأدوات توليد المحتوى الأخرى؟',
    answer: 'يتميز Contently AI بتخصصه في المحتوى العربي وفهمه العميق للثقافة المحلية، بالإضافة إلى تركيزه على منصة إنستغرام بشكل خاص.'
  }
];

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string>('faq-1');

  return (
    <section className="box-border w-full relative bg-[#F4F4F4] m-0 px-0 py-20">
      <div className="box-border w-[1300px] h-[880px] relative mx-auto my-0 p-0 max-md:w-[calc(100%_-_80px)] max-md:mx-10 max-md:my-0 max-sm:w-[calc(100%_-_40px)] max-sm:mx-5 max-sm:my-0">
        {/* Section Title */}
        <div className="box-border w-[1036px] h-[68px] mt-0 mb-[104px] mx-auto p-0">
          <h2 className="box-border w-full text-[#2C0B71] text-right text-6xl font-semibold leading-[68px] h-[68px] m-0 p-0 max-md:text-5xl max-md:leading-[52px] max-md:text-center max-sm:text-[28px] max-sm:leading-8 max-sm:text-center max-sm:mb-10">
            الأسئلة الشائعة
          </h2>
        </div>
        
        {/* FAQ Items */}
        <div className="box-border flex w-[1284px] flex-col items-start gap-[60px] h-[776px] m-0 p-0 max-md:w-full">
          <div className="box-border flex flex-col items-start gap-6 self-stretch m-0 p-0">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="box-border w-[1284px] h-[100px] relative m-0 p-0 max-md:w-full">
                {/* Card Background */}
                <div className="box-border w-full h-full shadow-[0_0_16px_0_rgba(0,0,0,0.15)] backdrop-blur-[10px] absolute m-0 p-0 rounded-[19.234px] border-[1.202px] border-solid border-[rgba(255,255,255,0.06)] left-0 top-0" />
                
                {/* Card Content */}
                <div className="box-border absolute w-[817px] h-[107px] m-0 p-0 right-[431px] top-[37px] max-sm:w-[calc(100%_-_40px)] max-sm:right-5">
                  {index === 0 && openItem === faq.id ? (
                    // Expanded first item
                    <>
                      <div className="box-border text-[#F4F4F4] text-right text-lg font-semibold leading-[23.4px] opacity-[0.88] w-[433px] h-[22px] absolute m-0 p-0 right-[330px] top-0 max-sm:text-base max-sm:w-[calc(100%_-_40px)] max-sm:right-0">
                        {faq.question}
                      </div>
                      <div className="box-border w-[762px] h-[55px] text-[#F4F4F4] text-right text-lg font-normal leading-7 tracking-[0.1px] opacity-70 absolute m-0 p-0 left-0 top-[52px] max-sm:text-base max-sm:leading-6 max-sm:w-full">
                        {faq.answer}
                      </div>
                      <div className="box-border w-[22px] h-[3px] opacity-80 absolute bg-[#F4F4F4] m-0 p-0 rounded-[20px] right-0 top-[9px]" />
                    </>
                  ) : (
                    // Collapsed items
                    <>
                      <div className="box-border text-[#2C0B71] text-right text-lg font-semibold leading-[23.4px] opacity-[0.88] w-[438px] h-[22px] m-0 p-0 max-sm:text-base max-sm:w-[calc(100%_-_40px)]">
                        {faq.question}
                      </div>
                      <button 
                        onClick={() => setOpenItem(openItem === faq.id ? '' : faq.id)}
                        className="box-border w-[18px] h-[18px] absolute m-0 p-0 left-[474px] top-px"
                        aria-expanded={openItem === faq.id}
                        aria-controls={`faq-content-${faq.id}`}
                      >
                        <div className="box-border w-[18px] h-[3px] opacity-80 absolute bg-[#2C0B71] m-0 p-0 rounded-[20px] left-0 top-2" />
                        <div className={`box-border w-[18px] h-[3px] -rotate-90 opacity-80 absolute bg-[#2C0B71] m-0 p-0 rounded-[20px] left-2 top-0 transition-transform duration-200 ${openItem === faq.id ? 'rotate-0' : ''}`} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="box-border w-[1275px] h-6 relative m-0 p-0">
            {/* Progress Line */}
            <div className="absolute w-[1160px] h-0 border-t border-[rgba(44,11,113,0.20)] left-[115px] top-3" />
            <div className="absolute w-[372px] h-0 border-t-[6px] border-[#B86BA6] right-0 top-[11px]" />
            
            {/* Navigation Arrows */}
            <div className="box-border inline-flex items-center gap-4 absolute w-20 h-6 m-0 p-0 left-0 top-0">
              <button className="w-6 h-6" aria-label="Previous page">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.3525 12.3974L10.1025 19.1474C10.2091 19.2467 10.3502 19.3008 10.4959 19.2983C10.6416 19.2957 10.7807 19.2367 10.8837 19.1336C10.9868 19.0305 11.0458 18.8915 11.0484 18.7458C11.051 18.6001 10.9969 18.459 10.8975 18.3524L5.10844 12.5624H20.25C20.3992 12.5624 20.5423 12.5031 20.6477 12.3976C20.7532 12.2921 20.8125 12.1491 20.8125 11.9999C20.8125 11.8507 20.7532 11.7076 20.6477 11.6021C20.5423 11.4966 20.3992 11.4374 20.25 11.4374H5.10844L10.8975 5.64739C10.9969 5.54075 11.051 5.39972 11.0484 5.25399C11.0458 5.10827 10.9868 4.96923 10.8837 4.86617C10.7807 4.76311 10.6416 4.70407 10.4959 4.7015C10.3502 4.69893 10.2091 4.75302 10.1025 4.85238L3.3525 11.6024C3.24716 11.7079 3.188 11.8508 3.188 11.9999C3.188 12.1489 3.24716 12.2919 3.3525 12.3974Z" fill="#2C0B71"/>
                </svg>
              </button>
              <div className="w-0 h-6 border-l border-[rgba(44,11,113,0.20)]" />
              <button className="w-6 h-6" aria-label="Next page">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6475 12.3974L13.8975 19.1474C13.7909 19.2467 13.6498 19.3008 13.5041 19.2983C13.3584 19.2957 13.2193 19.2367 13.1163 19.1336C13.0132 19.0305 12.9542 18.8915 12.9516 18.7458C12.949 18.6001 13.0031 18.459 13.1025 18.3524L18.8916 12.5624H3.75C3.60082 12.5624 3.45774 12.5031 3.35225 12.3976C3.24676 12.2921 3.1875 12.1491 3.1875 11.9999C3.1875 11.8507 3.24676 11.7076 3.35225 11.6021C3.45774 11.4966 3.60082 11.4374 3.75 11.4374H18.8916L13.1025 5.64739C13.0031 5.54075 12.949 5.39972 12.9516 5.25399C12.9542 5.10827 13.0132 4.96923 13.1163 4.86617C13.2193 4.76311 13.3584 4.70407 13.5041 4.7015C13.6498 4.69893 13.7909 4.75302 13.8975 4.85238L20.6475 11.6024C20.7528 11.7079 20.812 11.8508 20.812 11.9999C20.812 12.1489 20.7528 12.2919 20.6475 12.3974Z" fill="#2C0B71"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
