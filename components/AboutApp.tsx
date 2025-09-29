import React from 'react';

const AboutApp: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#006eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#006eff] to-blue-500 text-transparent bg-clip-text">
                    عن التطبيق
                </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
                تطبيق الفارس هو منصتك الكاملة للمدفوعات الإلكترونية.
                من خلاله تقدر تدير كل معاملاتك من موبايلك: دفع فواتير، شحن، تحويلات، محافظ إلكترونية، خدمات حكومية، وأكثر من 1300 خدمة.
            </p>
            <div className="bg-blue-100 text-[#006eff] inline-flex items-center px-6 py-3 rounded-full font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                كل اللي محتاجه جهازك في إيدك
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutApp;
