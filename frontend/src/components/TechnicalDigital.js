import React from "react";

const TechnicalDigital = () => {
  const workshops = [
    {
      id: 1,
      title: "أساسيات البرمجة",
      description:
        "تعلم أساسيات البرمجة من الصفر وكيفية التفكير البرمجي وحل المشكلات",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      duration: "٦ أسابيع",
      level: "مبتدئ",
    },
    {
      id: 2,
      title: "تطوير تطبيقات الويب",
      description:
        "تعلم كيفية بناء مواقع ويب تفاعلية باستخدام HTML و CSS و JavaScript",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      duration: "٨ أسابيع",
      level: "متوسط",
    },
    {
      id: 3,
      title: "أساسيات الذكاء الاصطناعي",
      description:
        "مقدمة في الذكاء الاصطناعي وتعلم الآلة وتطبيقاتها في حياتنا اليومية",
      image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5",
      duration: "٤ أسابيع",
      level: "متقدم",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "مقدمة في لغة Python",
      embedUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
      description: "تعلم أساسيات البرمجة بلغة Python من الصفر",
    },
    {
      id: 2,
      title: "تطوير واجهات المستخدم",
      embedUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      description: "كيفية إنشاء واجهات مستخدم جميلة وتفاعلية",
    },
    {
      id: 3,
      title: "أساسيات قواعد البيانات",
      embedUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
      description: "مقدمة في قواعد البيانات وكيفية التعامل معها",
    },
  ];

  return (
    <div className="technical-container">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-primary-light to-secondary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">رقيم تقني</h1>
            <p className="text-white text-opacity-80 text-lg max-w-3xl mx-auto">
              نقدم ورش عمل تفاعلية، ودورات تدريبية، ومقاطع فيديو تعليمية باللغة العربية
              في مجالات المهارات الرقمية، والبرمجة، والتكنولوجيا الحديثة
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ورش العمل والدورات التدريبية
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              انضم إلى ورش العمل التفاعلية المقدمة من قبل خبراء في مجالات التكنولوجيا المختلفة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="feature-card rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="bg-primary-light text-primary-dark text-sm px-3 py-1 rounded-full">
                      {workshop.level}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {workshop.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <button className="text-primary hover:text-primary-dark font-medium transition duration-300">
                    سجل الآن &larr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مقاطع فيديو تعليمية
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              استفد من مقاطع الفيديو التعليمية باللغة العربية لتطوير مهاراتك التقنية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="feature-card rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div className="video-container">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-t-lg"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  <button className="text-primary hover:text-primary-dark font-medium transition duration-300">
                    شاهد المزيد &larr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مصادر تعليمية إضافية
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              مجموعة من المصادر التعليمية الإضافية لمساعدتك في رحلة التعلم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                مكتبة الكتب الإلكترونية
              </h3>
              <p className="text-gray-600 mb-4">
                مجموعة من الكتب الإلكترونية المتخصصة في مجالات البرمجة والتكنولوجيا
              </p>
              <button className="text-primary hover:text-primary-dark font-medium transition duration-300">
                استكشف المكتبة &larr;
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                مشاريع عملية
              </h3>
              <p className="text-gray-600 mb-4">
                تطبيق المهارات البرمجية من خلال مشاريع عملية بإرشاد المدربين
              </p>
              <button className="text-primary hover:text-primary-dark font-medium transition duration-300">
                استعرض المشاريع &larr;
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                مسابقات وتحديات
              </h3>
              <p className="text-gray-600 mb-4">
                شارك في المسابقات والتحديات البرمجية لتطوير مهاراتك
              </p>
              <button className="text-primary hover:text-primary-dark font-medium transition duration-300">
                اكتشف التحديات &larr;
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                مجتمع المبرمجين
              </h3>
              <p className="text-gray-600 mb-4">
                انضم إلى مجتمع المبرمجين لتبادل الخبرات والمعرفة
              </p>
              <button className="text-primary hover:text-primary-dark font-medium transition duration-300">
                انضم للمجتمع &larr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalDigital;
