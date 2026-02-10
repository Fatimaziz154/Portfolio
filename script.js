const PROFILE = {
  name: "فاطمة عبدالعزيز السعيد",
  role: "سنة سادسة (سنة امتياز) — تخصص المعلوماتية الصحية",
  email: "fatiziz154@gmail.com",
  whatsapp: "+966566577808",
  location: "السعودية",
  bio: "سنة امتياز في المعلوماتية الصحية، وقائدة في منصة المعلوماتية الصحية بالعربي. أشارك مشاريعي وأعمالي في تحليل البيانات، لوحات المؤشرات، والأتمتة لتحسين سير العمل ودعم القرار.",
  about:
    "أعمل على مبادرات معرفية ومحتوى/مشاريع ضمن منصة المعلوماتية الصحية بالعربي، إلى جانب مشاريعي الأكاديمية والتطبيقية في المعلوماتية الصحية. ستجد/ين هنا نماذج مختارة مع ملخص وروابط للاطلاع.",

  links: {
    github: "",
    linkedin: ""
  },

  skills: [
    "Health Informatics",
    "Medical Coding",
    "CDI",
    "Data Visualization",
    "Looker Studio",
    "Power BI",
    "Automation",
    "Web Technology"
  ],

  projects: [
    {
      title: "مشروع 1 — عنوان المشروع",
      desc: "وصف مختصر من سطر إلى سطرين يوضح الهدف والنتيجة/الأثر.",
      url: "#"
    },
    {
      title: "مشروع 2 — عنوان المشروع",
      desc: "مثال: لوحة مؤشرات لمتابعة الأداء مع فلترة وتوحيد بيانات من مصادر متعددة.",
      url: "#"
    }
  ]
};

/* ===========================
   1) تعبئة المحتوى
   =========================== */
document.getElementById("brandName").textContent = PROFILE.name;
document.getElementById("heroName").textContent = PROFILE.name;
document.getElementById("cardName").textContent = PROFILE.name;
document.getElementById("footerName").textContent = PROFILE.name;

document.getElementById("cardRole").textContent = PROFILE.role;
document.getElementById("heroBio").textContent = PROFILE.bio;
document.getElementById("aboutText").textContent = PROFILE.about;

document.querySelectorAll("#emailText, #emailText2").forEach((el) => (el.textContent = PROFILE.email));
document.getElementById("whatsText").textContent = PROFILE.whatsapp;

/* ===========================
   2) الروابط (اخفاء إذا فاضي)
   =========================== */
const githubLink = document.getElementById("githubLink");
const linkedinLink = document.getElementById("linkedinLink");

if (PROFILE.links?.github) {
  githubLink.href = PROFILE.links.github;
} else {
  githubLink.style.display = "none";
}

if (PROFILE.links?.linkedin) {
  linkedinLink.href = PROFILE.links.linkedin;
} else {
  linkedinLink.style.display = "none";
}

/* ===========================
   3) Skills chips
   =========================== */
const skillsWrap = document.getElementById("skillsChips");
PROFILE.skills.forEach((s) => {
  const chip = document.createElement("span");
  chip.className = "chip reveal"; // ✅ reveal لطيف
  chip.textContent = s;
  skillsWrap.appendChild(chip);
});

/* ===========================
   4) Projects
   =========================== */
const projectsGrid = document.getElementById("projectsGrid");
PROFILE.projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card project fx-card reveal"; // ✅ مهم للموشن
  card.innerHTML = `
    <div class="project-top">
      <h3 class="h3">${escapeHtml(p.title)}</h3>
      <span class="pill">Project</span>
    </div>
    <p class="muted">${escapeHtml(p.desc)}</p>
    <a href="${p.url}" target="_blank" rel="noreferrer">زيارة المشروع →</a>
  `;
  projectsGrid.appendChild(card);
});

// السنة
document.getElementById("year").textContent = new Date().getFullYear();

/* ===========================
   5) نسخ الإيميل
   =========================== */
document.getElementById("copyEmailBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(PROFILE.email);
    toast("تم نسخ البريد ✅");
  } catch {
    toast("تعذر النسخ—انسخي يدويًا.");
  }
});

/* ===========================
   6) نموذج التواصل (يفتح برنامج البريد)
   =========================== */
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

/* ===========================
   7) تبديل الثيم (فاتح/داكن)
   =========================== */
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

/* ===========================
   8) Micro-interactions + Scroll reveal
   =========================== */
initReveal();


/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = Array.from(document.querySelectorAll(".reveal"));

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));
}

/* ---------- Helpers ---------- */
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
