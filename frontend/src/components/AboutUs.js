import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "أحمد الأحمد",
      role: "المؤسس والمدير التنفيذي",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      bio: "خبير في تكنولوجيا التعليم مع أكثر من 10 سنوات من الخبرة في مجال التعليم الرقمي",
    },
    {
      id: 2,
      name: "سارة العلي",
      role: "مديرة المحتوى التعليمي",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      bio: "معلمة سابقة ومتخصصة في تطوير المناهج التعليمية بأساليب مبتكرة وتفاعلية",
    },
    {
      id: 3,
      name: "محمد خالد",
      role: "مسؤول التطوير التقني",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
      bio: "مطور برمجيات مع شغف كبير في استخدام التكنولوجيا لتحسين تجربة التعلم",
    },
    {
      id: 4,
      name: "ريم الخطيب",
      role: "مديرة التسويق والتواصل",
      image: "https://randomuser.me/api/portraits/women/15.jpg",
      bio: "متخصصة في التسويق الرقمي مع خبرة في بناء العلامات التجارية في قطاع التعليم",
    },
  ];

  const milestones = [
    {
      id: 1,
      year: "٢٠٢٢",
      title: "بداية الفكرة",
      description:
        "بدأت فكرة منصة رقيم كمبادرة لتقديم محتوى تعليمي عربي مجاني للطلاب",
    },
    {
      id: 2,
      year: "٢٠٢٣",
      title: "إطلاق النسخة التجريبية",
      description:
        "إطلاق النسخة التجريبية من المنصة مع عدد محدود من المحتوى التعليمي",
    },
    {
      id: 3,
      year: "٢٠٢٣",
      title: "بناء فريق العمل",
      description:
        "توسيع فريق العمل وضم متخصصين في المجالات التعليمية والتقنية المختلفة",
    },
    {
      id: 4,
      year: "٢٠٢٤",
      title: "إطلاق المنصة رسميًا",
      description:
        "الإطلاق الرسمي للمنصة بحلتها الجديدة وبمحتوى تعليمي شامل ومتنوع",
    },
    {
      id: 5,
      year: "٢٠٢٥",
      title: "التوسع والانتشار",
      description:
        "توسيع نطاق الخدمات وزيادة الانتشار لتشمل مختلف الدول العربية",
    },
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1531545514256-b1400bc00f31)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">من نحن</h1>
          <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
            منصة رقيم هي منصة تعليمية رقمية باللغة العربية تهدف إلى دعم المهارات التقنية والأكاديمية للشباب من خلال محتوى تعليمي عالي الجودة
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-light bg-opacity-10 p-8 rounded-lg border border-primary-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 ml-2 text-primary"
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
                رسالتنا
              </h2>
              <p className="text-gray-700">
                تهدف منصة رقيم إلى توفير محتوى تعليمي عالي الجودة باللغة العربية في المجالات التقنية والأكاديمية، وإتاحته للجميع بشكل مجاني وسهل الوصول، بهدف سد الفجوة في المحتوى التعليمي العربي وتمكين الشباب من اكتساب المهارات اللازمة للنجاح في عصر الثورة الرقمية.
              </p>
            </div>
            <div className="bg-secondary-light bg-opacity-10 p-8 rounded-lg border border-secondary-light">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 ml-2 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                رؤيتنا
              </h2>
              <p className="text-gray-700">
                نسعى لأن نكون المنصة التعليمية الرائدة في العالم العربي، التي تمكن كل شاب وشابة من الوصول إلى تعليم عالي الجودة في المجالات التقنية والأكاديمية، وتساهم في بناء جيل متمكن من المهارات الرقمية والمعرفية اللازمة لبناء مستقبل أفضل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">قيمنا</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تقوم منصة رقيم على مجموعة من القيم والمبادئ التي تحكم عملنا وتوجه مسارنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                الشمولية
              </h3>
              <p className="text-gray-600">
                نسعى لتوفير محتوى تعليمي يناسب مختلف الفئات والمستويات، دون تمييز أو استثناء.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                الجودة
              </h3>
              <p className="text-gray-600">
                نلتزم بتقديم محتوى تعليمي عالي الجودة، يتم إعداده ومراجعته من قبل خبراء متخصصين.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
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
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                التفاعلية
              </h3>
              <p className="text-gray-600">
                نؤمن بأهمية التعلم التفاعلي، ونحرص على تقديم محتوى تعليمي تفاعلي يجذب الطلاب ويحفزهم على التعلم.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">فريقنا</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نفخر بفريق عمل متميز من الخبراء والمتخصصين في مجالات التعليم والتكنولوجيا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-dark mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              رحلتنا
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              تعرف على رحلة منصة رقيم منذ بدايتها وحتى اليوم
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

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              شركاؤنا
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نفخر بالتعاون مع مجموعة من المؤسسات والشركات الرائدة في مجال التعليم والتكنولوجيا
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-xl font-bold text-gray-500">شريك ١</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-xl font-bold text-gray-500">شريك ٢</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-xl font-bold text-gray-500">شريك ٣</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
              <div className="text-xl font-bold text-gray-500">شريك ٤</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-l from-primary-light to-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            تواصل معنا
          </h2>
          <p className="text-white text-opacity-90 max-w-3xl mx-auto mb-8">
            نحن دائمًا سعداء بالتواصل معكم والإجابة على استفساراتكم
          </p>
          <a
            href="mailto:info@raqeem.com"
            className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-lg shadow-md hover:bg-gray-50 transition duration-300"
          >
            راسلنا الآن
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
