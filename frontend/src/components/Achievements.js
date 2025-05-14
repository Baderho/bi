import React from "react";

const Achievements = () => {
  const milestones = [
    {
      id: 1,
      year: "٢٠٢٣",
      title: "إطلاق منصة رقيم",
      description:
        "إطلاق المنصة الرقمية الأولى لدعم التعليم التقني والأكاديمي باللغة العربية",
    },
    {
      id: 2,
      year: "٢٠٢٣",
      title: "الوصول لأكثر من ١٠٠٠ طالب",
      description:
        "توسيع نطاق الوصول وتقديم الخدمات التعليمية لأكثر من ألف طالب",
    },
    {
      id: 3,
      year: "٢٠٢٤",
      title: "إطلاق أكثر من ٥٠ دورة تدريبية",
      description:
        "تطوير وإطلاق أكثر من ٥٠ دورة تدريبية في مجالات البرمجة والتكنولوجيا",
    },
    {
      id: 4,
      year: "٢٠٢٤",
      title: "الشراكة مع وزارة التربية والتعليم",
      description:
        "توقيع اتفاقية شراكة مع وزارة التربية والتعليم لدعم طلاب المدارس",
    },
    {
      id: 5,
      year: "٢٠٢٥",
      title: "إطلاق تطبيق الهاتف المحمول",
      description:
        "إطلاق تطبيق الهاتف المحمول لتسهيل الوصول إلى المحتوى التعليمي",
    },
  ];

  const stats = [
    { id: 1, title: "طلاب مستفيدون", value: "+٥٠٠٠" },
    { id: 2, title: "دورات تدريبية", value: "+١٠٠" },
    { id: 3, title: "محتوى تعليمي", value: "+١٠٠٠ ساعة" },
    { id: 4, title: "متطوعون نشطون", value: "+٥٠" },
  ];

  const successStories = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "خريج دورة البرمجة",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote:
        "ساعدتني منصة رقيم على تطوير مهاراتي البرمجية وحصلت على وظيفة مطور ويب بعد تخرجي من الدورة التدريبية.",
    },
    {
      id: 2,
      name: "سارة أحمد",
      role: "طالبة توجيهي",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote:
        "استفدت كثيرًا من المحتوى التعليمي في منصة رقيم أكاديمي وحصلت على معدل ٩٨٪ في امتحان التوجيهي.",
    },
    {
      id: 3,
      name: "محمد خالد",
      role: "متطوع في المنصة",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote:
        "تطوعي في منصة رقيم كان تجربة مثرية وممتعة، وساعدني على تطوير مهاراتي الشخصية والمهنية.",
    },
  ];

  return (
    <div className="achievements-container">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1499540633125-484965b60031)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">الإنجازات</h1>
          <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto mb-8">
            نفخر بما حققناه من إنجازات ونتطلع لمواصلة رحلتنا في دعم التعليم
            الرقمي باللغة العربية
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              إنجازاتنا بالأرقام
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نفخر بالنمو المستمر والتأثير الإيجابي الذي نحققه في مجتمعنا
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-gradient-to-br from-primary-light to-secondary-light rounded-lg p-6 text-center text-white shadow-lg"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm">{stat.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              رحلتنا حتى الآن
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تعرف على أهم المراحل والإنجازات في مسيرة منصة رقيم
            </p>
          </div>

          <div className="relative timeline">
            {milestones.map((milestone) => (
              <div
                key={milestone.id}
                className={`timeline-item mb-16 flex flex-col md:flex-row ${
                  milestone.id % 2 === 0
                    ? "md:flex-row-reverse"
                    : "md:flex-row"
                }`}
              >
                <div className="md:w-1/2">
                  <div
                    className={`mb-8 md:mb-0 ${
                      milestone.id % 2 === 0
                        ? "md:pl-10 md:pr-0"
                        : "md:pr-10 md:pl-0"
                    }`}
                  >
                    <span className="bg-secondary-light text-secondary-dark text-sm px-3 py-1 rounded-full mb-3 inline-block">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              قصص نجاح
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تعرف على قصص نجاح المستفيدين من منصة رقيم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="p-8 bg-gray-50 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <img
                    className="w-16 h-16 rounded-full ml-4"
                    src={story.image}
                    alt={story.name}
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {story.name}
                    </h3>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic">
                  "{story.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Awards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              التقدير والجوائز
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              الجوائز والتقديرات التي حصلت عليها منصة رقيم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                جائزة أفضل مبادرة تعليمية رقمية
              </h3>
              <p className="text-gray-600 mb-2">
                حصلت منصة رقيم على جائزة أفضل مبادرة تعليمية رقمية في مؤتمر
                التعليم الرقمي العربي ٢٠٢٤
              </p>
              <span className="text-sm text-gray-500">مارس ٢٠٢٤</span>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                شهادة تقدير من وزارة التربية والتعليم
              </h3>
              <p className="text-gray-600 mb-2">
                منحت وزارة التربية والتعليم شهادة تقدير لمنصة رقيم لدورها في دعم
                طلاب التوجيهي
              </p>
              <span className="text-sm text-gray-500">ديسمبر ٢٠٢٣</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
