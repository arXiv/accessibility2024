document.addEventListener('DOMContentLoaded', function () {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', (e) => {
      setColorTheme();  
    });

    function setColorTheme() {
      if (darkModeMediaQuery.matches) {
        document.body.setAttribute("data-md-color-scheme", "slate")
      } 
      else {
        document.body.setAttribute("data-md-color-scheme", "default")
      }
    }

    document.onreadystatechange = () => {
      if (document.readyState === "interactive") {
        setColorTheme();
      }
    };

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
  if (document.getElementById('no-giscus') == null) {
    const giscusScript = document.createElement("script");
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    document.getElementsByTagName("article")[0].appendChild(giscusScript);
  }

  // Load some of our css over theirs
  const prims = document.querySelectorAll(".color-text-primary");
  const curColor = getComputedStyle(document.documentElement).getPropertyValue('--md-typeset-color');
  prims.forEach((obj) => {obj.style.color = curColor});
  console.log(curColor);
})