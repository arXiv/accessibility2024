document.addEventListener('DOMContentLoaded', function () {
    const giscusAttributes = {
      "src": "https://giscus.app/client.js",
      "data-repo": "arXiv/accessibility2024",
      "data-repo-id": "R_kgDOLTbgeQ",
      "data-category": "General",
      "data-category-id": "DIC_kwDOLTbgec4CeaHJ",
      "data-mapping": "pathname",
      "data-strict": "0",
      "data-reactions-enabled": "1",
      "data-emit-metadata": "0",
      "data-input-position": "bottom",
      "data-lang": "en",
      "data-theme": "themes/preferred_color_scheme.css",
      "crossorigin": "anonymous",
      "async": "",
  };

  console.log("Running load-giscus");
  console.log(document.getElementById('no-giscus'));
  // Dynamically create script tag
  const giscusScript = document.createElement("script");
  if (document.getElementById('no-giscus') == null) {
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    document.getElementsByTagName("article")[0].appendChild(giscusScript);
  }

  var palette = __md_get("__palette")
  if (palette && typeof palette.color === "object") {
    var theme = palette.color.scheme === "slate" ? "dark" : "light"
    giscusScript.setAttribute("data-theme", theme)
  }

  var ref = document.querySelector("[data-md-component=palette]")
  ref.addEventListener("change", function() {
    var palette = __md_get("__palette")
    if (palette && typeof palette.color === "object") {
      var theme = palette.color.scheme === "slate" ? "dark" : "light"

      /* Instruct Giscus to change theme */
      var frame = document.querySelector(".giscus-frame")
      frame.contentWindow.postMessage(
        { giscus: { setConfig: { theme } } },
        "https://giscus.app"
      )
    }
  })
})