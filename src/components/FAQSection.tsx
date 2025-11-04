import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "ما هو Contently AI وكيف يعمل؟",
    answer:
      "Contently AI هو أداة مدعومة بالذكاء الاصطناعي تساعد المستخدمين على توليد أفكار محتوى تسويقي لإنستغرام بناءً على اهتماماتهم.",
  },
  {
    id: "faq-2",
    question: "هل يمكن استخدام Contently AI لجميع أنواع الأعمال؟",
    answer:
      "نعم، يمكن استخدام Contently AI لجميع أنواع الأعمال والصناعات. تم تصميم الأداة لتكون مرنة وقابلة للتكيف مع احتياجات مختلف القطاعات.",
  },
  {
    id: "faq-3",
    question: "كيف تم تدريب الذكاء الاصطناعي لتسويق إنستغرام؟",
    answer:
      "تم تدريب الذكاء الاصطناعي على مجموعة واسعة من البيانات التسويقية وأفضل الممارسات في إنستغرام لضمان تقديم محتوى عالي الجودة ومناسب للمنصة.",
  },
  {
    id: "faq-4",
    question: "هل أحتاج إلى خبرة تسويقية لاستخدام Contently AI؟",
    answer:
      "لا، لا تحتاج إلى خبرة تسويقية مسبقة. تم تصميم Contently AI ليكون سهل الاستخدام للمبتدئين والمحترفين على حد سواء.",
  },
  {
    id: "faq-5",
    question: "ما الفرق بين Contently AI وأدوات توليد المحتوى الأخرى؟",
    answer:
      "يتميز Contently AI بتخصصه في المحتوى العربي وفهمه العميق للثقافة المحلية، بالإضافة إلى تركيزه على منصة إنستغرام بشكل خاص.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full py-20 max-md:py-10 bg-[#F4F4F4]" dir="rtl">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className="text-[#2C0B71] text-6xl font-semibold leading-none text-center mb-16 max-md:text-[40px] max-md:mb-10">
          الأسئلة الشائعة
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={cn(
                "rounded-[19px] border border-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300 shadow-md",
                openIndex === index
                  ? "bg-gradient-to-r from-[#D45758] via-[#B86BA6] to-[#6D26BB] shadow-xl"
                  : "bg-white"
              )}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full px-8 lg:px-12 py-8 flex items-start justify-between gap-6 text-right"
              >
                <div className="flex-1">
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      openIndex === index
                        ? "text-white"
                        : "text-[#2C0B71]"
                    )}
                  >
                    {faq.question}
                  </h3>

                  {openIndex === index && faq.answer && (
                    <p className="mt-4 text-white/70 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>

                <div
                  className={cn(
                    "flex-shrink-0 w-5 h-5 flex items-center justify-center",
                    openIndex === index
                      ? "text-white"
                      : "text-[#2C0B71]"
                  )}
                >
                  {openIndex === index ? (
                    <div className="w-5 h-0.5 rounded-full bg-current opacity-80"></div>
                  ) : (
                    <div className="relative w-5 h-5">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 rounded-full bg-current opacity-80 -translate-y-1/2"></div>
                      <div className="absolute left-1/2 top-0 h-full w-0.5 rounded-full bg-current opacity-80 -translate-x-1/2"></div>
                    </div>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation line */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <button className="p-3 rounded-full hover:bg-[#2C0B71]/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3.3525 12.3974L10.1025 19.1474C10.2091 19.2467 10.3502 19.3008 10.4959 19.2983C10.6416 19.2957 10.7807 19.2367 10.8837 19.1336C10.9868 19.0305 11.0458 18.8915 11.0484 18.7458C11.051 18.6001 10.9969 18.459 10.8975 18.3524L5.10844 12.5624H20.25C20.3992 12.5624 20.5423 12.5031 20.6477 12.3976C20.7532 12.2921 20.8125 12.1491 20.8125 11.9999C20.8125 11.8507 20.7532 11.7076 20.6477 11.6021C20.5423 11.4966 20.3992 11.4374 20.25 11.4374H5.10844L10.8975 5.64739C10.9969 5.54075 11.051 5.39972 11.0484 5.25399C11.0458 5.10827 10.9868 4.96923 10.8837 4.86617C10.7807 4.76311 10.6416 4.70407 10.4959 4.7015C10.3502 4.69893 10.2091 4.75302 10.1025 4.85238L3.3525 11.6024C3.24716 11.7079 3.188 11.8508 3.188 11.9999C3.188 12.1489 3.24716 12.2919 3.3525 12.3974Z"
                fill="#2C0B71"
              />
            </svg>
          </button>

          <div className="h-px bg-[#2C0B71]/20 flex-1 max-w-[1160px] relative">
            <div className="absolute right-0 top-0 h-1.5 w-[372px] bg-[#B86BA6] -translate-y-[3px]"></div>
          </div>

          <button className="p-3 rounded-full hover:bg-[#2C0B71]/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.6475 12.3974L13.8975 19.1474C13.7909 19.2467 13.6498 19.3008 13.5041 19.2983C13.3584 19.2957 13.2193 19.2367 13.1163 19.1336C13.0132 19.0305 12.9542 18.8915 12.9516 18.7458C12.949 18.6001 13.0031 18.459 13.1025 18.3524L18.8916 12.5624H3.75C3.60082 12.5624 3.45774 12.5031 3.35225 12.3976C3.24676 12.2921 3.1875 12.1491 3.1875 11.9999C3.1875 11.8507 3.24676 11.7076 3.35225 11.6021C3.45774 11.4966 3.60082 11.4374 3.75 11.4374H18.8916L13.1025 5.64739C13.0031 5.54075 12.949 5.39972 12.9516 5.25399C12.9542 5.10827 13.0132 4.96923 13.1163 4.86617C13.2193 4.76311 13.3584 4.70407 13.5041 4.7015C13.6498 4.69893 13.7909 4.75302 13.8975 4.85238L20.6475 11.6024C20.7528 11.7079 20.812 11.8508 20.812 11.9999C20.812 12.1489 20.7528 12.2919 20.6475 12.3974Z"
                fill="#2C0B71"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
