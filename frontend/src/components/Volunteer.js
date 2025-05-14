import React, { useState } from "react";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    skills: "",
    experience: "",
    availability: "",
    motivation: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log("Form submitted:", formData);
    // For demonstration purposes, we'll just show a success message
    setSubmitted(true);
  };

  const volunteerAreas = [
    {
      id: 1,
      title: "تطوير المحتوى التقني",
      description:
        "المساهمة في إعداد وتطوير محتوى تعليمي لمهارات التكنولوجيا والبرمجة",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "تطوير المحتوى الأكاديمي",
      description:
        "المساعدة في إعداد وتطوير محتوى أكاديمي لطلاب التوجيهي الأردني",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "تصميم جرافيك",
      description:
        "تصميم رسومات توضيحية وإنفوجرافيك لدعم المحتوى التعليمي",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "الترجمة والتدقيق اللغوي",
      description:
        "ترجمة المحتوى التعليمي وتدقيقه لغويًا",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "تسجيل مقاطع فيديو تعليمية",
      description:
        "تسجيل فيديوهات تعليمية وشرح دروس في مجال تخصصك",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "تسويق ووسائل التواصل الاجتماعي",
      description:
        "المساعدة في نشر المحتوى وإدارة منصات التواصل الاجتماعي",
      icon: (
        <svg
          className="h-12 w-12 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="volunteer-container">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">تطوع معنا</h1>
          <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto mb-8">
            انضم إلى فريقنا المتطوع وساهم في إثراء المحتوى التعليمي العربي
            ودعم طلابنا في رحلتهم التعليمية
          </p>
          <a
            href="#volunteer-form"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
          >
            سجل الآن
          </a>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              مجالات التطوع
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              هناك العديد من المجالات التي يمكنك المساهمة فيها بناءً على مهاراتك واهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerAreas.map((area) => (
              <div
                key={area.id}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition duration-300 hover:border-primary"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section
        id="volunteer-form"
        className="py-16 bg-gray-50"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              نموذج التطوع
            </h2>
            <p className="text-gray-600">
              يرجى ملء النموذج التالي للتسجيل كمتطوع في منصة رقيم
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <svg
                className="h-12 w-12 text-green-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                تم إرسال طلبك بنجاح!
              </h3>
              <p className="text-gray-600 mb-4">
                شكرًا لك على رغبتك في التطوع معنا. سنقوم بمراجعة طلبك والتواصل
                معك قريبًا.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
              >
                العودة للنموذج
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-sm p-8"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="area"
                  className="block text-gray-700 font-medium mb-2"
                >
                  مجال التطوع <span className="text-red-500">*</span>
                </label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="form-select w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                >
                  <option value="">اختر مجال التطوع</option>
                  <option value="تطوير المحتوى التقني">تطوير المحتوى التقني</option>
                  <option value="تطوير المحتوى الأكاديمي">تطوير المحتوى الأكاديمي</option>
                  <option value="تصميم جرافيك">تصميم جرافيك</option>
                  <option value="الترجمة والتدقيق اللغوي">الترجمة والتدقيق اللغوي</option>
                  <option value="تسجيل مقاطع فيديو تعليمية">تسجيل مقاطع فيديو تعليمية</option>
                  <option value="تسويق ووسائل التواصل الاجتماعي">تسويق ووسائل التواصل الاجتماعي</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="skills"
                  className="block text-gray-700 font-medium mb-2"
                >
                  المهارات والخبرات <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="form-textarea w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  placeholder="اذكر المهارات والخبرات التي تمتلكها في مجال التطوع المختار"
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 font-medium mb-2"
                >
                  الخبرة السابقة في مجال التطوع
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows="3"
                  className="form-textarea w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  placeholder="اذكر خبراتك السابقة في مجال التطوع (إن وجدت)"
                ></textarea>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="availability"
                  className="block text-gray-700 font-medium mb-2"
                >
                  الوقت المتاح للتطوع <span className="text-red-500">*</span>
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  className="form-select w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                >
                  <option value="">اختر الوقت المتاح</option>
                  <option value="يوم واحد أسبوعيًا">يوم واحد أسبوعيًا</option>
                  <option value="2-3 أيام أسبوعيًا">2-3 أيام أسبوعيًا</option>
                  <option value="4-5 أيام أسبوعيًا">4-5 أيام أسبوعيًا</option>
                  <option value="عند الطلب">عند الطلب</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="motivation"
                  className="block text-gray-700 font-medium mb-2"
                >
                  ما الذي يدفعك للتطوع معنا؟ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="form-textarea w-full rounded-lg border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  placeholder="أخبرنا عن دوافعك للتطوع في منصة رقيم"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
                >
                  إرسال طلب التطوع
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Volunteer Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              فوائد التطوع معنا
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              التطوع في منصة رقيم يمنحك العديد من الفوائد والفرص
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <div className="inline-block p-3 bg-primary-light rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-primary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                تطوير المهارات
              </h3>
              <p className="text-gray-600">
                تعزيز مهاراتك الحالية واكتساب مهارات جديدة
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="inline-block p-3 bg-primary-light rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-primary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                توسيع شبكة العلاقات
              </h3>
              <p className="text-gray-600">
                التواصل مع أشخاص يشاركونك نفس الاهتمامات
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="inline-block p-3 bg-primary-light rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-primary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                شهادة خبرة
              </h3>
              <p className="text-gray-600">
                الحصول على شهادة خبرة معتمدة بعد فترة التطوع
              </p>
            </div>

            <div className="p-6 text-center">
              <div className="inline-block p-3 bg-primary-light rounded-full mb-4">
                <svg
                  className="h-8 w-8 text-primary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                المساهمة في المجتمع
              </h3>
              <p className="text-gray-600">
                المساهمة في إثراء المحتوى التعليمي العربي
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              آراء المتطوعين
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              اقرأ تجارب بعض المتطوعين السابقين في منصة رقيم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <blockquote className="text-gray-700 italic mb-6">
                "تجربتي في التطوع مع منصة رقيم كانت من أجمل التجارب التي خضتها.
                استطعت تطوير مهاراتي في إعداد المحتوى التعليمي وتوسيع شبكة
                علاقاتي مع أشخاص رائعين."
              </blockquote>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full ml-4"
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="نورا أحمد"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">نورا أحمد</h3>
                  <p className="text-gray-600">متطوعة في تطوير المحتوى التقني</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-sm">
              <blockquote className="text-gray-700 italic mb-6">
                "التطوع في منصة رقيم أتاح لي الفرصة للمساهمة في إثراء المحتوى
                التعليمي العربي وتقديم المساعدة للطلاب. كما ساعدني على صقل
                مهاراتي في تسجيل الفيديوهات التعليمية."
              </blockquote>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full ml-4"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="خالد محمود"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">خالد محمود</h3>
                  <p className="text-gray-600">متطوع في تسجيل الفيديوهات التعليمية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
