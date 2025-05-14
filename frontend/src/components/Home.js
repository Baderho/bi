import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
        padding: "4rem 1rem",
        textAlign: "center",
        background: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1523345863760-5b7f3472d14f)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: "bold" }}>
            رقيم - منصة تعليمية رقمية
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem", maxWidth: "800px", margin: "0 auto 2rem" }}>
            نقدم محتوى تعليميًا باللغة العربية يدعم المهارات التقنية والأكاديمية للشباب في المنطقة
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <Link
              to="/technical"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#3B82F6",
                color: "white",
                borderRadius: "0.5rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "background-color 0.3s"
              }}
            >
              رقيم تقني
            </Link>
            <Link
              to="/academic"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#8B5CF6",
                color: "white",
                borderRadius: "0.5rem",
                fontWeight: "500", 
                textDecoration: "none",
                transition: "background-color 0.3s"
              }}
            >
              رقيم أكاديمي
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", color: "#111827", marginBottom: "1rem", fontWeight: "bold" }}>
              ماذا نقدم؟
            </h2>
            <p style={{ color: "#4b5563", maxWidth: "800px", margin: "0 auto" }}>
              نقدم مجموعة متنوعة من الخدمات التعليمية الرقمية لدعم الطلاب والشباب
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "2rem" 
          }}>
            {/* Technical Education */}
            <div style={{ 
              backgroundColor: "white", 
              borderRadius: "0.5rem", 
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ height: "12rem", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="تعليم تقني"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
                  تعليم تقني
                </h3>
                <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
                  دورات وورش عمل في البرمجة والتكنولوجيا الحديثة للشباب
                </p>
                <Link
                  to="/technical"
                  style={{ color: "#3B82F6", fontWeight: "500", textDecoration: "none" }}
                >
                  اكتشف المزيد &larr;
                </Link>
              </div>
            </div>

            {/* Academic Education */}
            <div style={{ 
              backgroundColor: "white", 
              borderRadius: "0.5rem", 
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ height: "12rem", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1641683521844-700c456379bd"
                  alt="تعليم أكاديمي"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
                  تعليم أكاديمي
                </h3>
                <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
                  مصادر تعليمية لطلاب التوجيهي الأردني ودعم المناهج الدراسية
                </p>
                <Link
                  to="/academic"
                  style={{ color: "#3B82F6", fontWeight: "500", textDecoration: "none" }}
                >
                  اكتشف المزيد &larr;
                </Link>
              </div>
            </div>

            {/* Volunteer */}
            <div style={{ 
              backgroundColor: "white", 
              borderRadius: "0.5rem", 
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ height: "12rem", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca"
                  alt="تطوع معنا"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
                  تطوع معنا
                </h3>
                <p style={{ color: "#4b5563", marginBottom: "1rem" }}>
                  انضم إلى فريقنا وساهم في تطوير المحتوى التعليمي العربي
                </p>
                <Link
                  to="/volunteer"
                  style={{ color: "#3B82F6", fontWeight: "500", textDecoration: "none" }}
                >
                  اكتشف المزيد &larr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Highlights */}
      <section style={{ 
        padding: "4rem 1rem", 
        background: "linear-gradient(to left, #60A5FA, #A78BFA)" 
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", color: "white", marginBottom: "1rem", fontWeight: "bold" }}>
              إنجازاتنا
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.9)", maxWidth: "800px", margin: "0 auto" }}>
              نفخر بإنجازاتنا وتأثيرنا في المجتمع التعليمي العربي
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
            gap: "2rem",
            textAlign: "center" 
          }}>
            <div style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              backdropFilter: "blur(8px)", 
              borderRadius: "0.5rem", 
              padding: "1.5rem" 
            }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", marginBottom: "0.5rem" }}>+٥٠٠٠</div>
              <p style={{ color: "white" }}>طالب مستفيد</p>
            </div>
            <div style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              backdropFilter: "blur(8px)", 
              borderRadius: "0.5rem", 
              padding: "1.5rem" 
            }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", marginBottom: "0.5rem" }}>+١٠٠</div>
              <p style={{ color: "white" }}>دورة تعليمية</p>
            </div>
            <div style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.2)", 
              backdropFilter: "blur(8px)", 
              borderRadius: "0.5rem", 
              padding: "1.5rem" 
            }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "white", marginBottom: "0.5rem" }}>+٥٠</div>
              <p style={{ color: "white" }}>متطوع نشط</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link
              to="/achievements"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.5rem",
                backgroundColor: "white",
                color: "#3B82F6",
                borderRadius: "0.5rem",
                fontWeight: "500",
                textDecoration: "none",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                transition: "background-color 0.3s"
              }}
            >
              اكتشف المزيد من الإنجازات
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "4rem 1rem", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2rem", color: "#111827", marginBottom: "1.5rem", fontWeight: "bold" }}>
            انضم إلينا اليوم
          </h2>
          <p style={{ color: "#4b5563", maxWidth: "800px", margin: "0 auto 2rem" }}>
            ساهم في بناء مستقبل تعليمي أفضل من خلال التطوع معنا أو الاستفادة من مصادرنا التعليمية
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
            <Link
              to="/volunteer"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "#3B82F6",
                color: "white",
                borderRadius: "0.5rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "background-color 0.3s"
              }}
            >
              تطوع معنا
            </Link>
            <Link
              to="/about"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                border: "1px solid #d1d5db",
                color: "#374151",
                borderRadius: "0.5rem",
                fontWeight: "500",
                textDecoration: "none",
                transition: "border-color 0.3s"
              }}
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
