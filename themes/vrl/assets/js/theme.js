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

  const openHashTarget = () => {
    if (!window.location.hash) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (target?.matches("details")) target.open = true;
  };

  openHashTarget();
  window.addEventListener("hashchange", openHashTarget);

  const serviceNames = {
    "reproduction-and-replication": "Research reproduction and replication",
    "claim-and-method-review": "Claim and method review",
    "artifact-review": "Artifact review",
    "benchmark-audit": "Benchmark audit",
    "independent-verification-report": "Independent verification report",
    "technical-due-diligence": "Technical due diligence"
  };

  document.querySelectorAll("[data-fit-form]").forEach(form => {
    const requestedService = new URLSearchParams(window.location.search).get("service");
    const serviceField = form.elements.service;
    if (requestedService && serviceNames[requestedService] && serviceField) {
      serviceField.value = serviceNames[requestedService];
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = new FormData(form);
      const subject = `VRL fit check: ${values.get("service")}`;
      const body = [
        `Name: ${values.get("name")}`,
        `Email: ${values.get("email")}`,
        `Evaluation: ${values.get("service")}`,
        `Link: ${values.get("link") || "Not provided"}`,
        "",
        "Result, publication, or decision:",
        values.get("question"),
        "",
        `Desired timing: ${values.get("timing") || "Not specified"}`,
        `Access or confidentiality constraints: ${values.get("constraints") || "None specified"}`
      ].join("\n");
      const address = form.dataset.contactEmail;
      const status = form.querySelector("[data-form-status]");
      if (status) status.textContent = "Opening a draft in your mail app. Review it before sending.";
      window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  });
})();
