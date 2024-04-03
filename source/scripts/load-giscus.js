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
  if (document.getElementById('no-giscus') == null) {
    const giscusScript = document.createElement("script");
    Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));
    document.getElementsByTagName("article")[0].appendChild(giscusScript);
  }

  function changeGiscusTheme () {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ?  'dark' : 'light'

    function sendMessage(message) {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
      setConfig: {
        theme: theme
      }
    });
  }

  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  darkModePreference.addEventListener("change", (e) => {
    console.log("Changing giscus theme");
    changeGiscusTheme()
  });
})