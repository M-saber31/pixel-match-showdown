import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  fullName: string;
  email: string;
  address: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', data);
      reset();
      alert('تم إرسال الرسالة بنجاح!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="box-border flex w-[466px] flex-col items-end gap-6 absolute h-[332px] m-0 p-0 right-[81px] top-[84px] max-md:w-[400px] max-md:right-10 max-sm:w-full max-sm:relative max-sm:px-5 max-sm:py-10 max-sm:right-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="box-border flex flex-col items-start gap-9 self-stretch m-0 p-0">
        <div className="box-border flex flex-col items-end gap-2.5 self-stretch m-0 p-0">
          <label htmlFor="fullName" className="box-border self-stretch text-[#F4F4F4] text-right text-lg font-light leading-7 m-0 p-0 max-sm:text-base">
            الاسم الكامل
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName', { required: 'الاسم الكامل مطلوب' })}
            className="box-border w-full bg-transparent border-none outline-none text-[#F4F4F4] text-right text-lg font-light leading-7 pb-2 border-b border-[rgba(244,244,244,0.30)]"
            aria-invalid={errors.fullName ? 'true' : 'false'}
          />
          {errors.fullName && (
            <span className="text-red-400 text-sm">{errors.fullName.message}</span>
          )}
        </div>

        <div className="box-border flex flex-col items-end gap-2.5 self-stretch m-0 p-0">
          <label htmlFor="email" className="box-border self-stretch text-[#F4F4F4] text-right text-lg font-light leading-7 m-0 p-0 max-sm:text-base">
            البريد الالكتروني
          </label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'البريد الإلكتروني مطلوب',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'البريد الإلكتروني غير صحيح'
              }
            })}
            className="box-border w-full bg-transparent border-none outline-none text-[#F4F4F4] text-right text-lg font-light leading-7 pb-2 border-b border-[rgba(244,244,244,0.30)]"
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          {errors.email && (
            <span className="text-red-400 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="box-border flex flex-col items-end gap-2.5 self-stretch m-0 p-0">
          <label htmlFor="address" className="box-border self-stretch text-[#F4F4F4] text-right text-lg font-light leading-7 m-0 p-0 max-sm:text-base">
            العنوان
          </label>
          <input
            id="address"
            type="text"
            {...register('address', { required: 'العنوان مطلوب' })}
            className="box-border w-full bg-transparent border-none outline-none text-[#F4F4F4] text-right text-lg font-light leading-7 pb-2 border-b border-[rgba(244,244,244,0.30)]"
            aria-invalid={errors.address ? 'true' : 'false'}
          />
          {errors.address && (
            <span className="text-red-400 text-sm">{errors.address.message}</span>
          )}
        </div>

        <div className="box-border flex flex-col items-end gap-2.5 self-stretch m-0 p-0">
          <label htmlFor="message" className="box-border self-stretch text-[#F4F4F4] text-right text-lg font-light leading-7 m-0 p-0 max-sm:text-base">
            الرسالة
          </label>
          <textarea
            id="message"
            {...register('message', { required: 'الرسالة مطلوبة' })}
            className="box-border w-full bg-transparent border-none outline-none text-[#F4F4F4] text-right text-lg font-light leading-7 pb-2 border-b border-[rgba(244,244,244,0.30)] resize-none h-20"
            aria-invalid={errors.message ? 'true' : 'false'}
          />
          {errors.message && (
            <span className="text-red-400 text-sm">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="box-border flex w-[162px] h-12 justify-center items-center gap-2 border m-0 px-6 py-2 rounded-[999px] border-solid border-white hover:bg-white hover:text-[#0D0229] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="box-border text-lg font-medium leading-7 m-0 p-0 max-sm:text-base">
            {isSubmitting ? 'جاري الإرسال...' : 'ارسال'}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
