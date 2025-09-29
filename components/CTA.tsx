import React from 'react';

const CTACard: React.FC<{icon: React.JSX.Element, title: string, description: string}> = ({icon, title, description}) => (
    <div className="bg-white/10 p-6 rounded-lg text-center flex flex-col items-center h-full">
        <div className="bg-white/20 p-3 rounded-full mb-4 text-white">
            {icon}
        </div>
        <h3 className="font-bold text-lg text-white mb-2">{title}</h3>
        <p className="text-blue-200 text-sm flex-grow">{description}</p>
    </div>
);

const CTA: React.FC = () => {
  return (
    <section id="agent" className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="bg-[#006eff] rounded-2xl p-10 md:p-16 text-center shadow-2xl shadow-blue-200">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="bg-white/20 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              كن وكيلاً للفارس
            </h2>
          </div>
          <p className="text-blue-100 text-lg mb-10 max-w-3xl mx-auto">
            سجل كوكيل وابدأ في فتح حسابات للعملاء. استفد من المزايا الحصرية التي نقدمها لشبكة وكلائنا.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <CTACard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                title="عمولات مجزية"
                description="احصل على عمولات على كل معاملة تتم من خلالك أو من خلال شبكتك."
              />
              <CTACard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>}
                title="خصومات على الماكينات"
                description="تمتع بخصومات حصرية عند شرائك لماكينات الدفع الإلكتروني."
              />
              <CTACard 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                title="مكافآت شهرية"
                description="نقدر الأداء المتميز ونقدم مكافآت شهرية للوكلاء الأكثر نشاطًا."
              />
          </div>

          <a
            href="#agent-details"
            className="bg-white text-[#006eff] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            المزيد من التفاصيل
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;