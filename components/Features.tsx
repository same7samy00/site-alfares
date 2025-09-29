import React from 'react';

// FIX: Explicitly reference JSX namespace from React to resolve "Cannot find namespace 'JSX'" error.
const FeatureItem: React.FC<{ icon: React.JSX.Element; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#006eff] text-white">
        {icon}
      </div>
    </div>
    <div className="mr-4">
      <h3 className="text-lg leading-6 font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-600">{children}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "إيداع وسحب بدون رسوم",
      description: "قم بإيداع وسحب الأموال من حسابك بكل سهولة وبدون أي رسوم إضافية.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "إعفاء من الرسوم لمدة 60 يوم",
      description: "استمتع بخدمات المحافظ الإلكترونية مع إعفاء كامل من الرسوم لأول 60 يومًا.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      title: "دعم المحافظ الإلكترونية",
      description: "ندعم جميع المحافظ الإلكترونية الرئيسية مثل محافظ البنوك، شركات الاتصالات، وانستا باي.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8" /></svg>,
      title: "دعم جميع أنواع الكروت",
      description: "استخدم جميع كروتك البنكية وكروت المرافق العامة لإتمام مدفوعاتك بسهولة.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "دعم خدمات المعاشات",
      description: "نوفر خدمات معاشات تكافل وكرامة وغيرها لتسهيل حياة المواطنين.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
      title: "خدمة سلفني",
      description: "تحتاج سيولة؟ خدمة سلفني تتيح لك استلاف مبالغ تصل إلى 3000 جنيه.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      title: "إضافة خدمات مخصصة",
      description: "يمكنك إضافة خدمات معينة حسب طبيعة نشاطك التجاري واحتياجاتك الخاصة.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
      title: "أكثر من 1300 خدمة",
      description: "منصة شاملة تجمع لك أكثر من 1300 خدمة دفع في تطبيق واحد.",
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <div className="flex flex-col items-center justify-center mb-2">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}> <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /> </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#006eff] to-blue-500 text-transparent bg-clip-text">
                    مميزات التطبيق
                </h2>
            </div>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            كل ما تحتاجه لإدارة مدفوعاتك بفعالية
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
            {featuresData.map((feature, index) => (
              <FeatureItem key={index} icon={feature.icon} title={feature.title}>
                {feature.description}
              </FeatureItem>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
            <a href="/ALFares%20Pay.apk" download className="bg-[#006eff] text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                حمّل التطبيق الآن
            </a>
        </div>
      </div>
    </section>
  );
};

export default Features;