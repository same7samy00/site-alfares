import React from 'react';

const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.475L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.166l-1.29 4.723 4.793-1.317z"/>
    </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
                <img src="https://i.postimg.cc/vmC5bKr8/3.png" alt="شعار الفارس للمدفوعات" className="h-10 w-auto" />
                <h2 className="text-xl font-bold mr-3">الفارس للمدفوعات</h2>
            </div>
            <p className="text-gray-600">
              حلول دفع إلكترونية متكاملة، مصممة لتمكين أعمالك وتسهيل معاملاتك المالية بأعلى معايير الأمان.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-blue-600">تواصل معنا</h3>
            <div className="flex items-center text-gray-600 font-medium">
                <WhatsAppIcon className="h-5 w-5 ml-2 text-green-500" />
                <span>واتساب:</span>
                <span className="mr-2" dir="ltr">01013803653</span>
            </div>
            <p className="text-gray-700 text-sm mt-3 bg-yellow-100 border-r-4 border-yellow-500 p-3 rounded-md">
                يرجى العلم أن التواصل حاليًا عبر الواتساب فقط لحين تفعيل الخط الساخن
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} الفارس للمدفوعات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;