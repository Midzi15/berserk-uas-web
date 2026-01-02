function waktu() {
  const el = document.getElementById("jam");
  if (!el) return;

  const tick = () => {
    const now = new Date();
    el.textContent = "Waktu: " + now.toLocaleString("id-ID");
  };

  tick();
  setInterval(tick, 1000);
}

// Nav active (otomatis menandai halaman aktif)
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
})();