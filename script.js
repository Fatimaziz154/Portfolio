
const PROFILE = {
  name: "فاطمة عبدالعزيز السعيد",
  role: "سنة سادسة (سنة امتياز) — تخصص المعلوماتية الصحية",
  tagline: "لوحات مؤشرات · أتمتة · تحليل بيانات",
  email: "fatiziz154@gmail.com",
  whatsapp: "+966566577808",
  location: "السعودية",
  bio: "سنة امتياز في المعلوماتية الصحية، وقائدة في منصة المعلوماتية الصحية بالعربي. أشارك مشاريعي وأعمالي في تحليل البيانات، لوحات المؤشرات، والأتمتة لتحسين سير العمل ودعم القرار.",
  about:
    "أعمل على مبادرات معرفية ومحتوى/مشاريع ضمن منصة المعلوماتية الصحية بالعربي، إلى جانب مشاريعي الأكاديمية والتطبيقية. ستجد/ين هنا نماذج مختارة مع ملخص وروابط للاطلاع.",

  links: {
    github: "",      // ضعي رابطك
    linkedin: ""     // ضعي رابطك
  },

  services: [
    { title: "لوحات مؤشرات (Dashboards)", desc: "تصميم KPI + فلترة + سرد بصري واضح لمسؤول القرار." },
    { title: "أتمتة تقارير (Automation)", desc: "تقليل الإدخال اليدوي عبر Apps Script وعمليات تحديث ذكية." },
    { title: "تنظيف/توحيد البيانات", desc: "قواعد توحيد، كشف التكرار، ورفع جودة البيانات قبل العرض." },
    { title: "Web Portfolio / صفحات عرض", desc: "واجهة توظيف احترافية مع أقسام واضحة وروابط مباشرة." }
  ],

  projects: [
    {
      client: "مشروع ٠١",
      subtitle: "Dashboard / متابعة مهام",
      url: "#"
    },
    {
      client: "مشروع ٠٢",
      subtitle: "Automation / تحديث تلقائي",
      url: "#"
    },
    {
      client: "مشروع ٠٣",
      subtitle: "Data Quality / توحيد قيم",
      url: "#"
    }
  ],

  testimonials: [
    { text: "تنفيذ سريع وواضح، مع اهتمام كبير بجودة البيانات وسهولة قراءة اللوحة.", name: "اسم (اختياري)", role: "مسمى/جهة" },
    { text: "أفضل شيء: تبسيط المشكلة وتحويلها لمؤشرات قابلة للقياس.", name: "اسم (اختياري)", role: "مسمى/جهة" },
    { text: "توثيق ممتاز وتجربة مستخدم نظيفة—مناسب جدًا للتقارير.", name: "اسم (اختياري)", role: "مسمى/جهة" }
  ]
};

/* ====== Fill hero / header ====== */
document.getElementById("brandName").textContent = PROFILE.name;
document.getElementById("heroName").textContent = PROFILE.name;
document.getElementById("heroTagline").textContent = PROFILE.tagline;
document.getElementById("heroBio").textContent = PROFILE.bio;
document.getElementById("aboutText").textContent = PROFILE.about;

document.getElementById("pillRole").textContent = PROFILE.role.includes("امتياز") ? "سنة امتياز — معلوماتية صحية" : PROFILE.role;
document.getElementById("pillLead").textContent = "قائدة — منصة المعلوماتية الصحية بالعربي";
document.getElementById("pillLoc").textContent = PROFILE.location;

document.getElementById("emailText").textContent = PROFILE.email;
document.getElementById("emailBig").textContent = PROFILE.email;
document.getElementById("fEmail").textContent = PROFILE.email;
document.getElementById("fWhats").textContent = PROFILE.whatsapp;
document.getElementById("footerName").textContent = PROFILE.name;

const cvLink = document.getElementById("cvLink");
cvLink.href = "assets/Fatimah-CV.pdf"; // عدلي الاسم إذا تبينه مختلف

/* Links */
const githubLink = document.getElementById("githubLink");
const linkedinLink = document.getElementById("linkedinLink");
const fGithub = document.getElementById("fGithub");
const fLinkedin = document.getElementById("fLinkedin");

setLinkOrHide(githubLink, PROFILE.links.github);
setLinkOrHide(fGithub, PROFILE.links.github);

setLinkOrHide(linkedinLink, PROFILE.links.linkedin);
setLinkOrHide(fLinkedin, PROFILE.links.linkedin);

function setLinkOrHide(el, url){
  if (!url) { el.style.display = "none"; return; }
  el.href = url;
}

/* Profile image fallback */
const img = document.getElementById("profileImg");
const initials = document.getElementById("profileInitials");
img.addEventListener("error", () => {
  img.style.display = "none";
  initials.style.display = "flex";
});
img.addEventListener("load", () => {
  initials.style.display = "none";
});

/* Services */
const servicesList = document.getElementById("servicesList");
PROFILE.services.forEach((s, i) => {
  const row = document.createElement("div");
  row.className = "svc-row";
  row.innerHTML = `
    <div class="svc-num">${String(i + 1).padStart(2, "0")}</div>
    <div>
      <div class="svc-title">${escapeHtml(s.title)}</div>
      <div class="svc-desc">${escapeHtml(s.desc)}</div>
    </div>
  `;
  servicesList.appendChild(row);
});

/* Projects */
const board = document.getElementById("projectsBoard");
PROFILE.projects.forEach((p, i) => {
  const row = document.createElement("div");
  row.className = "prow reveal";
  row.innerHTML = `
    <div class="prow-head">
      <div class="p-left">
        <div class="pn">${String(i + 1).padStart(2, "0")}</div>
        <div>
          <div class="ptitle">${escapeHtml(p.client)}</div>
          <div class="psub">${escapeHtml(p.subtitle)}</div>
        </div>
      </div>
      <a class="pbtn" href="${p.url}" target="_blank" rel="noreferrer">عرض المشروع</a>
    </div>

    <div class="pthumbs" aria-hidden="true">
      <div class="bigthumb"></div>
      <div class="stack">
        <div class="smallthumb"></div>
        <div class="smallthumb"></div>
      </div>
    </div>
  `;
  board.appendChild(row);
});

/* Testimonials */
const tgrid = document.getElementById("testimonialsGrid");
PROFILE.testimonials.forEach((t) => {
  const card = document.createElement("article");
  card.className = "tcard reveal";
  card.innerHTML = `
    <p class="ttext">"${escapeHtml(t.text)}"</p>
    <div class="trow">
      <div class="tava" aria-hidden="true"></div>
      <div>
        <div class="tname">${escapeHtml(t.name || "—")}</div>
        <div class="trole">${escapeHtml(t.role || "")}</div>
      </div>
    </div>
  `;
  tgrid.appendChild(card);
});

/* Copy email */
document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    toast("تم نسخ البريد ✅");
  } catch {
    toast("تعذر النسخ—انسخي يدويًا.");
  }
});

/* Contact mailto */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const name = fd.get("name");
  const email = fd.get("email");
  const message = fd.get("message");

  const subject = encodeURIComponent(`رسالة من الموقع: ${name}`);
  const body = encodeURIComponent(`الاسم: ${name}\nالبريد: ${email}\n\n${message}`);
  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
});

/* Theme toggle */
const themeBtn = document.getElementById("themeBtn");
const themeLabel = document.getElementById("themeLabel");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

function setTheme(t) {
  if (t === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeLabel.textContent = "فاتح";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeLabel.textContent = "داكن";
  }
  localStorage.setItem("theme", t);
}

/* Reveal on scroll */
initReveal();
function initReveal() {
  const els = Array.from(document.querySelectorAll(".reveal:not(.in)"));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) { els.forEach((el) => el.classList.add("in")); return; }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

  els.forEach((el) => io.observe(el));
}

/* Helpers */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(text) {
  const el = document.createElement("div");
  el.textContent = text;
  el.style.cssText = `
    position: fixed; bottom: 18px; left: 18px;
    padding: 10px 12px; border-radius: 12px;
    border: 1px solid rgba(255,255,255,.12);
    background: rgba(20,20,30,.85);
    color: white;
    box-shadow: 0 20px 60px rgba(0,0,0,.35);
    z-index: 9999;
  `;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}
