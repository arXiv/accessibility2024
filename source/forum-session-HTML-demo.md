---
title: A demonstration of how the NVDA screen reader approaches math formula in HTML and PDF
description: "A demonstration page for the HTML Papers on arXiv session at the arXiv Accessibility Forum."
og_image: /assets/share/forum-poster-html-landscape.png
og_image_alt: "Session: HTML Papers on arXiv. Thursday September 12 at 8:00 PM Eastern."
---
#HTML Papers On arXiv demonstration page

The video below demonstrates a short mathematical formula being read by the NVDA screen reader. We selected formula 2.17 from the arXiv-hosted paper "KAN: Kolmogorov-Arnold Networks". Here are the [HTML version](https://arxiv.org/html/2404.19756v4) and [PDF version](https://arxiv.org/pdf/2404.19756v4) of the paper.

We use the NVDA screen reader on the same formula across these three scenarios:

1. The formula from the HTML version of the paper
2. The same formula from the PDF version of the paper
3. Back at the HTML version again, demonstrating how NVDA can step through sections of the formula

## Demonstration video
<iframe style="width:100%; aspect-ratio:16/9; border:2px solid black;" src="https://www.youtube.com/embed/YC_r_Lk17_U?si=qxIkbdN54JPQCKHN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

By using the NVDA screen reader to access the math we illuminate key differences in how HTML and PDF are structuring the content. For example, in the PDF version you'll notice that the very first thing that is read is the upper limit of the summation because that is the first visual element when scrolling downwards. For the same reason, the last thing that is read is the lower limit of the summation. By contrast, in the HTML version the formula is read in a logical order that follows how the author wrote it in LaTeX.

Math in PDFs are nearly always inaccessible to screen readers and other assistive technologies. Papers in HTML go a long way towards overcoming some of the barriers posed by PDF and making the sciences more accessible to all.

## More about the forum
Join [this forum session](forum-session-HTML.md) in September; it is free and open to all.

| Session Date | Time | Link |
|---|---|---|
| Thursday, September 12, 2024 | 8:00 pm ET | [Sign up](https://cornell.ca1.qualtrics.com/jfe/form/SV_eEZ1d27LF2fVM7Y) |
*(This event is optimal for Asia-Pacific and PST time zones. All are welcome!)*

## Get ready:
<ul class="forum-actions">
  <li class="col">
    <div class="col-num shadow" role="presentation">1</div>
    <h3>Sign Up</h3>
    <p><a href="https://cornell.ca1.qualtrics.com/jfe/form/SV_eEZ1d27LF2fVM7Y" target="_blank">Sign up</a> for free. The forum is open to everyone.</p>
    <a class="button-reg" href="https://cornell.ca1.qualtrics.com/jfe/form/SV_eEZ1d27LF2fVM7Y" target="_blank">Sign up</a>
  </li>
  <li class="col">
    <div class="col-num shadow" role="presentation">2</div>
    <h3>Watch videos</h3>
    <p>Watch the <a href="https://youtu.be/PYBgeITZhL4?feature=shared" target="blank">welcome video</a>, the <a href="">demo video</a>, and <a href="https://www.youtube.com/playlist?list=PLYgeAMJvRZ6ZRuNQGoekx0FdjXqEG0bzM" target="blank">more</a>.</p>
    <a class="button-reg" href="https://youtu.be/PYBgeITZhL4?feature=shared" target="blank">Watch</a>
  </li>
  <li class="col">
    <div class="col-num shadow" role="presentation">3</div>
    <h3>Ask Questions!</h3>
    <p><a href="https://cornell.ca1.qualtrics.com/jfe/form/SV_bBqisDGVGcrzQeq" target="_blank">Submit your questions</a> in advance. The presenters will love you!</p>
    <a class="button-reg" href="https://cornell.ca1.qualtrics.com/jfe/form/SV_bBqisDGVGcrzQeq" target="_blank">Ask</a>
  </li>
</ul>

Then help get the word out by sharing this free and important event with your colleagues and other academic networks. Session posters and links are available on [the share page](/share).

## Presenters

### Michael Curran

![Michael Curran](../assets/profile/michael.jpg){.mkd-img-left .mkd-img-profile alt='Headshot of Michael wearing a blue striped shirt standing against a dark background'}

**Co-Founder and Lead Developer, NV Access Limited.**

Mick is the creator of NVDA, the world's only open-source screen reading software. NVDA has enabled more than 200,000 blind and vision impaired people worldwide to independently use computers. He brings expertise in accessibility for the web, international standards, software APIs, and best practice approaches to functional usability. [Mick's LinkedIn profile](https://au.linkedin.com/in/mdcurran){target="_blank"}

---

### Deyan Ginev

![Deyan Ginev](../assets/profile/deyan.jpg){.mkd-img-left .mkd-img-profile alt='Headshot of Deyan outdoors with a river in the background'}

**Creator of ar5iv.org and lead developer at LaTeXML; W3C Math Working Group Member; Ph.D. candidate in hiding (do not disturb).**

Deyan's main focus is to enhance the representation of mathematical expressions in rendered research papers, improving their accessibility, computational semantics, and enabling further reuse in a broader class of applications. [Deyan's KWARC profile](https://kwarc.info/people/dginev/){target="_blank"}

---

### Tony Malykh

![Tony Malykh](../assets/profile/tony.jpg){.mkd-img-left .mkd-img-profile alt='Headshot of Tony Malykh wearing dark sunglasses against a tan background'}

**Software Engineer, Meta.**

Tony is a researcher in Machine Learning at Meta, an active contributor to the NVDA open-source screen reader codebase, as well as a consultant to arXiv's accessibility research project. [Tony's GitHub profile](https://github.com/mltony){target="_blank"}

---

### Dr. Norbert Preining

![Norbert Preining](../assets/profile/norbert.jpg){.mkd-img-left .mkd-img-profile alt='Headshot of Norbert in a blue shirt and blazer smiling against a grey background'}

**Principal Software Engineer, arXiv.**

As the author of TeXLive (and though he objects to this characterization) Norbert is one of the world's leading experts on TeX. He joined arXiv in 2023 and is actively engaged in ongoing efforts to improve arXiv submission and HTML formatted papers. [Norbert's Homepage](https://www.preining.info/){target="_blank"}

[See all Forum presenters](presenters){class="button-reg"}

<!-- ## Session materials shared in advance -->


## Discussion
Use this discussion board to continue the conversation, ask questions, and share more resources around HTML conversions and making research accessible. See these [instructions](discussion-board.md) for setting up a free GitHub account.
