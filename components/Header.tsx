import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <a href="/#" className="flex items-center">
            <img src="https://i.postimg.cc/vmC5bKr8/3.png" alt="شعار الفارس للمدفوعات" className="h-10 w-auto" />
            <h1 className="text-xl font-bold text-gray-800 mr-3">الفارس للمدفوعات</h1>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
