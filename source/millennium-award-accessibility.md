#Planning a Millennium Award for accessibility

This public (but hidden) page is for kicking off a brainstorm around this idea: A Hilbert's List or Millennium Award for accessibility, focused on the needs of scientists. There is a table of contents in the right sidebar.

## Goals for this accessibility list
- Capture the public imagination: Hilbert's Problems were very influential in mathematics; Similarly, the Millennium Award has brought a lot of attention to the challenges it highlights.
- Set the agenda: Scientists who are hitting up against access barriers at all stages of the research process should set the agenda for the discussion, and it should be centered from their point of view.
- Facilitate collaboration: There is a lack of communication channels among people working on accessibility solutions. A focal point like this list could help.
- What else? This list, as well as everything else on this page, is open to discussion.

## Possible next steps
1. Invite a group of scientists with different disabilities, from different fields, and from around the world, to contribute to the discussion. arXiv's global platform is very helpful for goals like this one.
1. Reach out to funding organizations. A lack of funding would not invalidate this direction, but it would certainly help.
1. Prepare a presentation and discussion for the September accessibility forum, and possibly other venues.

## A starting list
The wonderful Patrick Smyth has shared this list of ideas he wants for blind people. Please find it below.

### AI Interface Detection

There should be a tool that uses a fast neural net (like YOLO) to detect interface elements onscreen. It would use what it sees on the screen to create and update an overlay that would allow for accessible interaction.

i.e. you start the tool. You have two windows on the screen, one is Chrome and one is a system menu. The interface detects that you have two windows and that there are X number of interface elements on those two windows. For the menu window, it creates a hierarchical list of menu items based on their association by placement, just as sighted people associate items by placement.

The system produces an overlay. The overlay corresponds to the items on the screen and their associations. For example, you might be able to tab between the windows, and then navigate between different lists, then navigate list items, etc.

Functionally, this tool would try to do exactly what sighted people do to navigate the interface, then take that understanding and create a semantic overlay that could be navigated accessibly.

More advanced features or later stages in development could have the tool remember the layout of menus and play back actions to quickly perform tasks. It could also receive user-submitted screenshots for further training, or have an AIRA-like interface that would summon a human to label the data.

### Reliable Sound Substrate

I've noticed that a large number of projects founder on delivering different types of sound across operating systems and environments.

I'd like to see a tool (ideally a library but possibly something more heavyweight like a framework) that has the following qualities:

-   Can play sound in a variety of formats
-   Can synthesize speech natively (i.e. not using OS-provided speech synthesis by default)
-   Uses a server model (i.e. can put sounds in a queue to play one after another when appropriate, have a sound supersede another in some contexts, or play multiple sounds in parallel if appropriate)
-   Has an API that allows for building other language-specific and easily usable API, either a HTTP serer running locally, sockets, and/or C, but would writing Python, Javascript, etc. wrappers that most users would use
-   Has many fallbacks in the case of sound not playing. Sound should play under any reasonable set of circumstances. Not dependent on one stupid process on the host OS that will inevitably fall over. Can do things like open a browser and try to play sound from there if needed, just really thinking outside the box to make sure sound actually plays without conventional troubleshooting, using the CLI, etc.

This tool would be pretty boring to write and would require a large amount of testing, but if created would allow a thousand flowers to bloom. So many projects have foundered on these shoals. Major areas of application would include sonification, audiogames, and domain-specific screen readers (like tdsr, fenrir, emacspeak).

Would replace janky and underdocumented but frequently used libraries such as [speech dispatcher](https://wiki.archlinux.org/title/Speech_dispatcher%0A)

### Audiogame Engine

A lot of people are interested in creating audiogames, but there is no engine for it. Almost all game dev these days is engine-driven (Unreal, Unity, and Godot are the engines in town). There used to be a tool, BGT, that was used to create a lot of audiogames, but it was technically kind of janky and eventually Windows flagged everything it made as malware. Someone started developing one called Sable but canceled the project.

The audio substrate project above would solve like 60% of this issue if created, they're somewhat overlapping problem domains.

I'm doing a little work with a client who is creating an audiogame and it's a huge pain, requires a lot of reinventing the wheel, and the engine they're using (Godot) isn't accessible, so the way they're building it couldn't be done by a blind person.

### Working Screen Reader in Linux

Orca really isn't a reliable day-to-day screen reader for Linux. A major effort to improve Orca might start by providing some actual documentation, currently the docs don't even say what desktop environments are supported and I don't think the docs have been touched since I learned Linux ten years ago.

Currently, Orca is unstable and crashes in many environments. I've also noticed that it leaks memory and after it crashes, it often won't come back up, even when processes are killed manually, etc. And of course the main issue is that it doesn't really work for many (most) programs.

A big push on this would create a modern repo, modern docs, modern developer infrastructure that encourages contributions, a rewrite of the code for stability and performance, and a push on other major Linux projects (especially desktop environments, big frameworks, and the two browsers). A pretty big undertaking, probably a well-administered $1.5 million to actually start things moving. Not trivial.

### Non-GUI Interface System

The idea here would be to create an interface system or library that doesn't have to create any GUI for interaction to happen. A blind user could press a hotkey and a sound-only interface could pop up, applications could be things like text editors that would then copy the text to the clipboard for pasting or quick information storage and retrieval systems.

This is actually pretty feasible, I created a basic prototype with a Python keylogger library as the basis, the application being an information retreival system. You can press a key, press a button for a specific mode (storage or retrieval), then hit a key or keys that act a as a location for the information to be stored in. This allows for tasks to be done faster, as info like email addresses, boilerplate, passwords, etc. can be quickly stored and pulled with minimal interaction and without the slowness and focus issues that come with a GUI.

### Accessible BIOS

This one is pretty simple in concept, but the stripped environment makes it hard. BIOS is the comptuer's configuration pre-boot, determining things like which devices are recognized and the media from which to boot. Derek Davis (VI ex-Googler) is interested in working on this.

### Accessible Jupyter Notebooks

In theory, creating a new program that reads and writes the simple file format that Jupyter data science notebooks are based on is pretty straightforward. Tony Fast is working on a prototype of this, but he really needs grant support and that's not his area. Much less technically challenging to create something from scratch than to fix current Jupyter Notebooks, but the downside is that it doesn't fully fix the social problem (i.e., blind students will still be told use Jupyter Notebooks in class, and the class will give instructions specific to normal notebooks, not weird accessible alternative notebooks).

### Accessibility Courses

There are a number of technical tools that make sense for blind folks to use that don't have good courses or fully introductory materials. A persistent student might figure out how to use these things, but there's no "royal road," and there should be.

These include:

-   Writing an NVDA plugin course
-   Emacspeak intro course
-   Emacspeak full documentation
-   Linux for low vision course
-   Blind command line course (there are a few resources on this one)
-   Intro to coding in Python for blind/VI
-   Intro to HTML/CSS for blind/VI
-   Using VS Code for blind/VI
-   Setting up a Raspberry Pi for blind/VI (there's a list, but intro resources out of date by half a decade)

Honestly, even beyond this, there is a lack of resources. I don't know of comprehensive resources on these basic things:

-   A "hey, you're going blind" guide that explains screen readers, magnification, canes, dogs, braille, etc. Should be a short book or something, if it exists I don't know about it. There are plenty of crappy 500-word pages on this, but they're thin gruel. Just something modern and high level, I'm always reexplaining the basics to folks. Should be called something like DON'T PANIC.
-   Blind FAQS that goes into some detail on legal systems, SSI and equivalents, mental health resources, regional governmental agencies. Would be a pain to maintain, probably never happen.
- There is actually a pretty good book /page on canes, but no one can find it, it's called Care and Feeding of the White Cane and it's like 60 years old or something. Gets shared on Reddit every 3-6 months or so. Note from Shamsi: [Is this the book?](https://nfb.org/images/nfb/publications/fr/fr15/issue1/f1501tc2.html)? I found it on the National Federation of the Blind website.

### Blind Search Engine / Web Portal

A big issue with blindness is how hard it is to find all the stuff that is out there. Most searches with blindness return random other results. There is a site with good SEO called Blind (it's like a chat app for tech bros or something) and it has good SEO. You get stuff on Venetian blinds. If you search for NVDA, Google corrects it to NIVIDIA half the time, and NVDA has just one giant page of a manual that is kind of useless for specific questions, so you see the same three hotkey lists and that manual page for 90% of NVDA searches. All the actual info is in mailing lists that are badly or not indexed, that's how this information is shared, but a newly blind person doesn't know about any of these lists until they're told about them, because they, too, are impossible to find using Google.

Basically, there should be a blindness search engine and/or web portal that has all the sites that do blindness stuff and you can poke around and discover things, or do a search. Me and a physicist guy created a prototype for this last year, but never got around to promoting it. [It's here](http://blindfind.io/), guess it still works.

### Sound Cone

This would be a physical device that would use either sonar or lidar, probably lidar. It would shoot a large number of beams out in a cone shape. Each beam would map to a hum or other continuous tone heard through headphones. Based on the distance of an object, the hums would change in sound quality, probably pitch volume.

This would let you point this thing and you'd get an idea if you were pointing at flat ground, a slope, and whether the path was obstructed. Unlike current devices that try to do things like this, it would focus more on responsivity, a lot of current stuff like this has a wierdly slow refresh rate that makes it useless. Basically this would be like a blind flashlight that would let you get a general sense of obstructions, medium-size and up objects, and the dimensions of the space. In my mind I'd call this the Synope, after Diogenes who carried a lantern during the day (in search of an honest man but w/e).

### Site for blind coders

Kind of working on this one, might be on simmer for the time being.

### Read Subtitles in Videos

If you're a blind person watching a video with subtitles, that's a problem, because you won't be able to hear them. Setting audio description aside as a higher bar, there should be facility to read subtitles in text format with a screen reader using normal video tools like VLC.

Someone created a feature in VLC to do this, but it's currently broken (reads subtitles multiple times, gets stuck). There was a weird malwarey video program that did this, but it broke after a certain version (and the program was dubious anyway). I wrote some jank that does this in a bad and brittle way, got me through a couple shows back in the day, but, yeah, bad.

Some apps, like Hulu, do this pretty OK currently, but the feature is underdocumented and people don't seem to know about it. Only works with iPhones, I think. (Maybe iPads, etc.)

Pretty [comprehensive post by me on this here](https://www.applevis.com/forum/ios-ipados/reading-subtitles-aloud).


***
## Discussion board
Learn about participating in the discussion board below with our [getting started](getting-started.md) guide.
