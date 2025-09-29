import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-white pt-16 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-right mb-10 md:mb-0">
            <img src="https://i.postimg.cc/vmC5bKr8/3.png" alt="شعار الفارس للمدفوعات" className="h-20 w-auto mx-auto md:mx-0 mb-4" />
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-[#006eff] to-blue-500 text-transparent bg-clip-text">
              الفارس للمدفوعات
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl mx-auto md:mx-0">
              كل اللي محتاجه في إيدك. حمّل التطبيق وابدأ ادفع فواتيرك، اشحن، وحوّل فلوسك بسهولة وأمان.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-4">
              <a href="#features" onClick={(e) => handleScroll(e, 'features')} className="bg-[#006eff] text-white px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                مميزات التطبيق
              </a>
              <a href="#machine" onClick={(e) => handleScroll(e, 'machine')} className="bg-white text-[#006eff] px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border border-gray-200 shadow-lg whitespace-nowrap">
                مميزات الماكينة
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img src="https://i.postimg.cc/fL6NHcyM/image.png" alt="تطبيق الفارس للمدفوعات وماكينة الدفع" className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;