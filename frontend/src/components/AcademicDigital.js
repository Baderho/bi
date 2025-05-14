import React from "react";

const AcademicDigital = () => {
  const subjects = [
    {
      id: 1,
      title: "الرياضيات",
      description:
        "شروحات مفصلة لمادة الرياضيات للصف التوجيهي بفرعيه العلمي والأدبي",
      image: "https://images.unsplash.com/photo-1604933834215-2a64950311bd",
    },
    {
      id: 2,
      title: "الفيزياء",
      description:
        "دروس تفاعلية في الفيزياء تشمل الميكانيكا والكهرباء والمغناطيسية والفيزياء الحديثة",
      image: "https://images.unsplash.com/photo-1641683521844-700c456379bd",
    },
    {
      id: 3,
      title: "الكيمياء",
      description:
        "شرح مفصل للمفاهيم الأساسية في الكيمياء وتطبيقاتها العملية",
      image: "https://images.unsplash.com/photo-1604933834215-2a64950311bd",
    },
    {
      id: 4,
      title: "اللغة العربية",
      description:
        "دروس شاملة في النحو والصرف والبلاغة والأدب العربي للتوجيهي",
      image: "https://images.unsplash.com/photo-1641683521844-700c456379bd",
    },
    {
      id: 5,
      title: "اللغة الإنجليزية",
      description:
        "تعلم قواعد اللغة الإنجليزية وتنمية مهارات القراءة والكتابة والمحادثة",
      image: "https://images.unsplash.com/photo-1604933834215-2a64950311bd",
    },
    {
      id: 6,
      title: "العلوم الإسلامية",
      description:
        "دروس في العلوم الإسلامية تغطي المنهاج الدراسي للتوجيهي بفروعه المختلفة",
      image: "https://images.unsplash.com/photo-1641683521844-700c456379bd",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "فيزياء - الحركة الموجية",
      embedUrl: "https://www.youtube.com/embed/alhpH6ECFvQ",
      subject: "الفيزياء",
    },
    {
      id: 2,
      title: "الرياضيات - التكامل",
      embedUrl: "https://www.youtube.com/embed/rqFDMpX5JX0",
      subject: "الرياضيات",
    },
    {
      id: 3,
      title: "الكيمياء - التفاعلات العضوية",
      embedUrl: "https://www.youtube.com/embed/bka20Q9TN6M",
      subject: "الكيمياء",
    },
  ];

  const resources = [
    {
      id: 1,
      title: "ملخصات جميع المواد",
      type: "PDF",
      size: "25 MB",
    },
    {
      id: 2,
      title: "نماذج امتحانات سابقة",
      type: "PDF",
      size: "30 MB",
    },
    {
      id: 3,
      title: "بنك أسئلة مع الحلول",
      type: "PDF",
      size: "40 MB",
    },
    {
      id: 4,
      title: "خرائط ذهنية للمفاهيم الأساسية",
      type: "PDF",
      size: "15 MB",
    },
  ];

  return (
    <div className="academic-container">
      {/* Hero Section */}
      <section className="bg-gradient-to-l from-secondary-light to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">رقيم أكاديمي</h1>
            <p className="text-white text-opacity-80 text-lg max-w-3xl mx-auto">
              مصادر تعليمية شاملة لطلاب التوجيهي في الأردن تدعم المناهج الدراسية
              بأسلوب تفاعلي وممتع
            </p>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              المواد الدراسية
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اكتشف مجموعة واسعة من المواد الدراسية التي تدعم منهاج التوجيهي
              الأردني
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <div
                key={subject.id}
                className="feature-card rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={subject.image}
                    alt={subject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{subject.description}</p>
                  <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                    استعرض الدروس &larr;
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
              فيديوهات تعليمية
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              شاهد شروحات فيديو تفاعلية باللغة العربية لمختلف المواد الدراسية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <span className="inline-block bg-secondary-light text-secondary-dark text-sm px-3 py-1 rounded-full mb-3">
                    {video.subject}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                    شاهد المزيد &larr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-white font-medium rounded-lg transition duration-300">
              شاهد جميع الفيديوهات
            </button>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مصادر قابلة للتحميل
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              حمّل المصادر التعليمية للاستفادة منها دون الحاجة للاتصال بالإنترنت
            </p>
          </div>

          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900"
                  >
                    المادة
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                  >
                    النوع
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                  >
                    الحجم
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 pl-4 text-right text-sm font-semibold text-gray-900"
                  >
                    تحميل
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {resources.map((resource) => (
                  <tr key={resource.id}>
                    <td className="whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium text-gray-900">
                      {resource.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {resource.type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {resource.size}
                    </td>
                    <td className="whitespace-nowrap py-4 pr-3 pl-4 text-sm">
                      <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                        تحميل &darr;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Study Tools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أدوات المذاكرة
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              استخدم أدواتنا التفاعلية لتحسين فعالية المذاكرة والتحضير للامتحانات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                بطاقات تعليمية تفاعلية
              </h3>
              <p className="text-gray-600 mb-4">
                استخدم البطاقات التعليمية التفاعلية لمراجعة المفاهيم الأساسية
                بسرعة وكفاءة
              </p>
              <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                استخدم البطاقات &larr;
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                اختبارات تجريبية
              </h3>
              <p className="text-gray-600 mb-4">
                قم بإجراء اختبارات تجريبية محاكية للامتحانات الرسمية مع التصحيح
                الفوري
              </p>
              <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                ابدأ اختبار &larr;
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                جدول المذاكرة
              </h3>
              <p className="text-gray-600 mb-4">
                نظم وقتك باستخدام أداة جدول المذاكرة لتحقيق أقصى استفادة من وقت
                الدراسة
              </p>
              <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                أنشئ جدولك &larr;
              </button>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg hover:shadow-md transition duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                آلة حاسبة علمية
              </h3>
              <p className="text-gray-600 mb-4">
                استخدم الآلة الحاسبة العلمية لحل المسائل الرياضية والفيزيائية
                المعقدة
              </p>
              <button className="text-secondary hover:text-secondary-dark font-medium transition duration-300">
                استخدم الآلة &larr;
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicDigital;
