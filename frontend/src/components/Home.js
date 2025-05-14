import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1523345863760-5b7f3472d14f)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              رقيم - منصة تعليمية رقمية
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              نقدم محتوى تعليميًا باللغة العربية يدعم المهارات التقنية والأكاديمية للشباب في المنطقة
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
              <Link
                to="/technical"
                className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
              >
                رقيم تقني
              </Link>
              <Link
                to="/academic"
                className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-white font-medium rounded-lg transition duration-300"
              >
                رقيم أكاديمي
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ماذا نقدم؟
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من الخدمات التعليمية الرقمية لدعم الطلاب والشباب
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Education */}
            <div className="feature-card rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="تعليم تقني"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  تعليم تقني
                </h3>
                <p className="text-gray-600 mb-4">
                  دورات وورش عمل في البرمجة والتكنولوجيا الحديثة للشباب
                </p>
                <Link
                  to="/technical"
                  className="text-primary hover:text-primary-dark font-medium transition duration-300"
                >
                  اكتشف المزيد &larr;
                </Link>
              </div>
            </div>

            {/* Academic Education */}
            <div className="feature-card rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1641683521844-700c456379bd"
                  alt="تعليم أكاديمي"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  تعليم أكاديمي
                </h3>
                <p className="text-gray-600 mb-4">
                  مصادر تعليمية لطلاب التوجيهي الأردني ودعم المناهج الدراسية
                </p>
                <Link
                  to="/academic"
                  className="text-primary hover:text-primary-dark font-medium transition duration-300"
                >
                  اكتشف المزيد &larr;
                </Link>
              </div>
            </div>

            {/* Volunteer */}
            <div className="feature-card rounded-lg overflow-hidden shadow-lg bg-white">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                  alt="تطوع معنا"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  تطوع معنا
                </h3>
                <p className="text-gray-600 mb-4">
                  انضم إلى فريقنا وساهم في تطوير المحتوى التعليمي العربي
                </p>
                <Link
                  to="/volunteer"
                  className="text-primary hover:text-primary-dark font-medium transition duration-300"
                >
                  اكتشف المزيد &larr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Highlights */}
      <section className="py-16 bg-gradient-to-l from-primary-light to-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">إنجازاتنا</h2>
            <p className="text-white text-opacity-80 max-w-3xl mx-auto">
              نفخر بإنجازاتنا وتأثيرنا في المجتمع التعليمي العربي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">+٥٠٠٠</div>
              <p className="text-white">طالب مستفيد</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">+١٠٠</div>
              <p className="text-white">دورة تعليمية</p>
            </div>
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6">
              <div className="text-4xl font-bold text-white mb-2">+٥٠</div>
              <p className="text-white">متطوع نشط</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/achievements"
              className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
            >
              اكتشف المزيد من الإنجازات
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            انضم إلينا اليوم
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            ساهم في بناء مستقبل تعليمي أفضل من خلال التطوع معنا أو الاستفادة من مصادرنا التعليمية
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
            <Link
              to="/volunteer"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
            >
              تطوع معنا
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition duration-300"
            >
              تعرف علينا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
