const textarea = document.querySelector("textarea");

if (textarea) {
  textarea.value = localStorage.getItem("estadoHoy") || "";

  textarea.addEventListener("input", () => {
    localStorage.setItem("estadoHoy", textarea.value);
  });
}
