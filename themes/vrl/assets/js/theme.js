(() => {
  const key = "vrl-theme";
  const modes = ["auto", "light", "dark"];
  const root = document.documentElement;
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const readMode = () => {
    try {
      const saved = localStorage.getItem(key);
      return modes.includes(saved) ? saved : "auto";
    } catch (_) {
      return "auto";
    }
  };

  const resolvedMode = mode => mode === "auto" ? (media.matches ? "dark" : "light") : mode;

  const applyMode = mode => {
    if (mode === "auto") delete root.dataset.theme;
    else root.dataset.theme = mode;

    const resolved = resolvedMode(mode);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      resolved === "dark" ? "#171a19" : "#f5f5f2"
    );

    document.querySelectorAll("[data-theme-toggle]").forEach(button => {
      const label = mode[0].toUpperCase() + mode.slice(1);
      button.querySelector("[data-theme-label]").textContent = label;
      button.setAttribute("aria-label", `Theme ${label}`);
      button.setAttribute("title", `Theme: ${label}. Click to change.`);
    });
  };

  let mode = readMode();
  applyMode(mode);

  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      mode = modes[(modes.indexOf(mode) + 1) % modes.length];
      try { localStorage.setItem(key, mode); } catch (_) {}
      applyMode(mode);
    });
  });

  media.addEventListener("change", () => {
    if (mode === "auto") applyMode(mode);
  });
})();
