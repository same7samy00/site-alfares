import React, { useState } from 'react';

const Machine: React.FC = () => {
  const images = [
    'https://i.postimg.cc/HL0qHq67/Generated-Image-September-28-2025-1-32-PM.png',
    'https://i.postimg.cc/g0RZ0Dhr/1.webp',
    'https://i.postimg.cc/s2Sh2cWY/OIP.webp',
    'https://i.postimg.cc/wBJmBVNQ/OIP-1.webp',
    'https://i.postimg.cc/DzsXzgGs/OIP-2.webp',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="machine" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Slider */}
          <div className="lg:w-1/2 w-full max-w-md mx-auto h-96 relative group overflow-hidden rounded-2xl">
            <div className="relative w-full h-full">
                {images.map((src, index) => (
                    <div
                    key={index}
                    style={{ backgroundImage: `url(${src})` }}
                    className={`absolute inset-0 w-full h-full bg-center bg-contain bg-no-repeat transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    />
                ))}
            </div>
            {/* Left Arrow */}
            <button onClick={prevSlide} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            {/* Right Arrow */}
            <button onClick={nextSlide} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
             <div className="flex justify-center py-2 absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 mx-1.5 rounded-full cursor-pointer transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'}`}
                    ></div>
                ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start mb-8 text-center lg:text-right">
                <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#006eff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#006eff] to-blue-500 text-transparent bg-clip-text">
                    الماكينة
                </h2>
            </div>
            <div className="space-y-6">
                 <div>
                    <h3 className="text-xl font-bold text-gray-800">مواصفات ماكينة SUNMI V2 PRO</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                        <li>شاشة 5.99 بوصة لمس.</li>
                        <li>نظام أندرويد 7.1 بمعالج رباعي النواة.</li>
                        <li>ذاكرة 2 جيجا رام + 16 جيجا تخزين.</li>
                        <li>كاميرا خلفية 5 ميجا بكسل مع ماسح باركود.</li>
                        <li>طابعة حرارية مدمجة (عرض ورق 58مم، سرعة 70مم/ث).</li>
                        <li>تدعم 4G، واي فاي، بلوتوث، وGPS.</li>
                        <li>بطارية 2580mAh.</li>
                        <li>ضمان لمدة سنتين.</li>
                        <li>توصيل سريع خلال 48 ساعة.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-800">السعر وخيارات الدفع</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
                        <li><span className="font-semibold">سعر الكاش:</span> 4599 جنيه.</li>
                        <li><span className="font-semibold">التقسيط:</span> 500 جنيه مقدم + 341 جنيه شهريًا لمدة 12 شهر.</li>
                    </ul>
                </div>
                <div className="bg-yellow-100 border-r-4 border-yellow-500 text-yellow-800 p-4 rounded-md">
                    <p className="font-bold">ملاحظة هامة:</p>
                    <p className="mt-1">
                        لا يمكن طلب الماكينة إلا من خلال تطبيق الفارس للمدفوعات. عند الطلب، يجب أن يتوفر بحسابك مبلغ 500 جنيه على الأقل، سيتم خصم هذا المبلغ كمقدم جدية للتعامل في حالة الشراء النقدي، أو كمقدم لأول قسط في حالة التقسيط.
                    </p>
                </div>
                <div className="bg-blue-50 border-r-4 border-[#006eff] p-4 rounded-md">
                    <p className="text-gray-700 font-medium">
                        "الماكينة اختيار إضافي للتجار الذين يرغبون في توسيع أعمالهم، لكن جميع المميزات متوفرة في التطبيق."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Machine;