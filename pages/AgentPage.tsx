import React from 'react';
import Footer from '../components/Footer';
import { WhatsAppButton } from '../App';

const DetailCard: React.FC<{icon: React.JSX.Element, title: string, description: string}> = ({icon, title, description}) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start space-x-4 space-x-reverse h-full">
        <div className="flex-shrink-0 bg-blue-100 text-[#006eff] rounded-full p-3">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
        </div>
    </div>
);


const AgentPage: React.FC = () => {
    const privileges = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>,
            title: "فتح حسابات للعملاء",
            description: "إمكانية تسجيل عملاء جدد مباشرة من خلالك وتوسيع شبكتك."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "عمولات مباشرة",
            description: "احصل على عائد 18 جنيهًا على كل 1000 جنيه من معاملاتك الخاصة."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "أرباح من شبكتك",
            description: "اربح 20 جنيهًا على كل 1000 جنيه من معاملات العملاء المسجلين تحت وكالتك."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
            title: "لوحة تحكم متكاملة",
            description: "إدارة كاملة لحسابات عملائك وتتبع أنشطتهم بسهولة وفعالية."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
            title: "خصم حصري على الماكينات",
            description: "احصل على ماكينة الدفع بسعر 4400 جنيه بدلًا من 4599 جنيه."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
            title: "طلب مباشر للماكينات",
            description: "إمكانية طلب ماكينات الدفع لعملائك مباشرة من خلال لوحة التحكم."
        },
         {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            title: "نمو مستمر لأرباحك",
            description: "عمولات ومكافآت تصاعدية مع زيادة حجم شبكتك ومعاملاتك."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            title: "تقارير أداء شاملة",
            description: "تتبع أرباحك وأداء عملائك بتقارير مفصلة ودقيقة."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
            title: "مكافآت شهرية للمتميزين",
            description: "جوائز وعروض خاصة للوكلاء الأكثر تحقيقًا للأهداف."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
            title: "دعم فني متخصص",
            description: "فريق دعم فني متاح على مدار الساعة لمساعدتك وحل أي مشكلة."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
            title: "مواد تسويقية احترافية",
            description: "نوفر لك كل ما تحتاجه من تصميمات ومحتوى لتسويق خدماتك بفعالية."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>,
            title: "توسيع شبكة أرباحك",
            description: "إمكانية بناء شبكة من الوكلاء الفرعيين لزيادة دخلك بشكل كبير."
        }
    ];

    const requirements = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6" /></svg>,
            title: "بطاقة رقم قومي",
            description: "صورة واضحة من بطاقة الرقم القومي (سارية)."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
            title: "مقر تجاري",
            description: "إثبات وجود مقر تجاري (عقد إيجار أو تمليك)."
        }
    ];

    const conditions = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
            title: "كن مستخدمًا أولًا",
            description: "يجب أن تكون مستخدمًا حاليًا لتطبيق الفارس للمدفوعات."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h1.447c.527 0 1.039.214 1.414.589l.829.828a2 2 0 001.414.583h1.829a2 2 0 012 2v1" /></svg>,
            title: "حجم المعاملات",
            description: "أن يتجاوز إجمالي حجم المعاملات في حسابك 3000 جنيه مصري."
        }
    ];

    return (
    <>
      <main className="bg-gray-50">
        <section className="bg-white pt-16 pb-12">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-[#006eff] to-blue-500 text-transparent bg-clip-text">
                    انضم إلى شبكة وكلاء الفارس
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                   كن شريكًا في النجاح وابدأ في تحقيق أرباح إضافية عبر الانضمام لشبكة وكلائنا المعتمدين في جميع أنحاء الجمهورية.
                </p>
            </div>
        </section>
        
        <section id="privileges" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                        امتيازات حصرية لوكلاء الفارس
                    </h2>
                     <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        نوفر لك كل الأدوات والمزايا التي تحتاجها لتنمية أعمالك وتحقيق النجاح.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {privileges.map((item, index) => (
                        <DetailCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
        
        <section id="requirements" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center lg:text-right">
                           المطلوب وشروط التسجيل
                        </h2>
                        <div className="space-y-8">
                           <div>
                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                                المستندات المطلوبة
                             </h3>
                             <div className="space-y-4">
                                {requirements.map((item, index) => (
                                     <DetailCard key={index} {...item} />
                                ))}
                             </div>
                           </div>
                           <div>
                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#006eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                شروط التسجيل
                             </h3>
                             <div className="space-y-4">
                                {conditions.map((item, index) => (
                                     <DetailCard key={index} {...item} />
                                ))}
                             </div>
                           </div>
                        </div>
                    </div>
                     <div className="bg-[#006eff] rounded-2xl p-10 text-center text-white shadow-2xl shadow-blue-200 sticky top-24">
                        <h3 className="text-2xl font-bold mb-4">جاهز للانضمام؟</h3>
                        <p className="text-blue-100 mb-8">
                           تواصل معنا الآن عبر الواتساب لتقديم طلبك وبدء رحلتك كوكيل معتمد للفارس للمدفوعات.
                        </p>
                        <a
                            href="https://wa.me/201013803653"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-[#006eff] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                          >
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-1.29 4.723 4.793-1.317z" /></svg>
                            سجل الآن عبر واتساب
                          </a>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AgentPage;