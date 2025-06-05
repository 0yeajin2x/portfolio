document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const scrollThreshold = 50;
  
    // 사용자가 스크롤할 때 특정 위치를 기준으로 헤더에 클래스 추가 or 제거
    window.addEventListener("scroll", function () {
      if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // 스크롤 시 애니메이션 효과
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
  
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed header
            behavior: "smooth",
          });
        }
      });
    });
  
    // 뷰포트에 들어올 때 애니메이션 적용
    const fadeElements = document.querySelectorAll(
      ".section-title, .about-content, .work-item, .process-item, .skill-category"
    );
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
  
    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  
    // CTA 버튼 클릭 시 특정 섹션으로 스크롤
    const ctaButton = document.querySelector(".cta-btn");
    if (ctaButton) {
      ctaButton.addEventListener("click", function () {
        const workSection = document.querySelector("#work");
        if (workSection) {
          window.scrollTo({
            top: workSection.offsetTop - 80,
            behavior: "smooth",
          });
        }
      });
    }
  });
  