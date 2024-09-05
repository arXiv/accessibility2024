---
title: A demonstration of how the NVDA screen reader approaches math formula in HTML and PDF
description: "A demonstration page for the HTML Papers on arXiv session at the arXiv Accessibility Forum."
og_image: /assets/share/forum-poster-html-landscape.png
og_image_alt: "Session: HTML Papers on arXiv. Thursday September 12 at 8:00 PM Eastern."
---
#Technical demonstration of the NVDA screenreader and a mathematical formula

The video below demonstrates a short mathematical formula being read by the NVDA screen reader. We selected formula 2.17 from the arXiv-hosted paper "KAN: Kolmogorov-Arnold Networks". Here are the [HTML version](https://arxiv.org/html/2404.19756v4) and [PDF version](https://arxiv.org/pdf/2404.19756v4) of the paper.

We use the NVDA screen reader on the same formula across these three scenarios:

1. The formula from the HTML version of the paper
2. The same formula from the PDF version of the paper
3. Back at the HTML version again, demonstrating how NVDA can be used to step through or replay different sections of the formula

## Demonstration video
<iframe style="width:100%; aspect-ratio:16/9; border:2px solid black;" src="https://www.youtube.com/embed/wUvFYwLxFM8?si=pqRDDi2lpwabetbp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

By using the NVDA screen reader to access the math we illuminate key differences in how HTML and PDF are structuring the content. For example, in the PDF version you'll notice that the very first thing that is read is the upper limit of the summation because that is the first visual element when scrolling downwards. For the same reason, the last thing that is read is the lower limit of the summation. By contrast, in the HTML version the formula is read in a logical order that follows how the author wrote it in LaTeX.

Math in PDFs are nearly always inaccessible to screen readers and other assistive technologies. Papers in HTML go a long way towards overcoming some of the barriers posed by PDF and making the sciences more accessible to all.

[Return to the session page](/forum-session-HTML){class="button-reg"}


![No Giscus](){#no-giscus}
