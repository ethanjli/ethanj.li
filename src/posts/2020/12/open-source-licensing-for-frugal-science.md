---
date: 2020-12-15
draft: true
tags:
- open source
- explainer
title: Open-source licensing for frugal science
excerpt: a brief FAQ-style introduction in plain English
coverImage: ''

---
## What is this article?

This is an introduction to the _why_s and _what_s of open-source licensing for hardware projects. This guide is written for you if:

1. you are working on a project involving hardware, especially open science hardware, and you want to share it,
2. you do not know much about open-source, and
3. you want a simplified "just the basics" understanding of what questions to ask when making decisions about how to share your work.

Everything here is based on information from various sources and my interpretation of key points from Github's [The Legal Side of Open Source](https://opensource.guide/legal/) and Kyle E. Mitchell's [Open Source: Theory of Operation](https://oss.kemitchell.com/), which are practical guides written for software programmers. Note that I am not a lawyer, this is not legal advice, the documents which informed this background are not legal advice, and I have not run any of this past any lawyers. If you need to make serious legal decisions, you should talk to a real lawyer or at least do a lot more reading and learning.

If you'd prefer to learn by watching a video rather than reading an article, you can watch the recording of a lecture/discussion I did on this topic, for the Fall 2020 offering of the [Frugal Science](https://www.frugalscience.org/) international online course, [on YouTube](https://www.youtube.com/watch?v=skMvQ9aHbg4). This article covers the main points from that recording but also adds some important things which I did not have time to talk about.

## What are the key points?

Open-source licensing is a kind of tool you can use to help support your project's strategy for your project's goals. It makes sharing your work easier by giving other people various permissions under the law to use your work if they agree not to sue you for various things which they normally could sue you for. Different licenses give different sets of permissions and place different sets of conditions for activating those permissions. There are two important ways to compare licenses:

1. What kinds of work they cover: some licenses (such [Creative Commons](https://creativecommons.org/)) give permission to people to copy and adapt media and data and documents but do not give any permission related to using, adapting, and sharing software or hardware. Some licenses (such as [MIT](https://spdx.org/licenses/MIT.html) and [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)) give permissions related to software but not to hardware. And some licenses (such as [CERN OHL](https://ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)) give permissions related to hardware but not to software.
2. What kinds of conditions they place: some licenses (which we call "reciprocal", but you might also see the terms "copyleft" or "share-alike") require that any adaptations of the released work also need to be shared under the same license or a similar license. Other licenses (which we call "permissive") do not have this condition.

Companies with money for lawyers can try to enforce licenses by suing other companies who have violated the license. Community projects usually don't have the resources. Instead, they may choose a license to express and implement their goals, and they may try to build social and cultural norms in the community to encourage people to respect the license.

You should choose a license to share your work, so that other people know they can use it legally. If a standard open-source license written by a lawyer does what you want, you should use it; otherwise, you should have a good understanding of how past licenses have been written and what are the important things needed to write a license which other people can easily interpret and follow.

## What do licenses do?

Licenses are documents which we can use as legal tools; they give legal permission to do certain things. Open-source gives us legal tools for releasing and sharing our work, in the context of intellectual property law (copyrights and patents) and contract law (warranties, liability, formation).

In the US, the legal defaults specify that others are **not** protected from getting sued by us for many things (e.g. copying our work or using our work) and that we are **not** protected from getting sued by others for many things (e.g. foreseeable damages resulting from our work). Individuals or businesses typically use lawyers to negotiate private licenses and contracts with other individuals or businesses to override those defaults on a case-by-case basis. They may also release the work to the public under a public license which overrides the legal defaults for everyone; the public license may be used as a substitute or supplement for case-by-case private licensing.

## How can licenses affect a project?

Most projects will have most or all of the following goals:

1. Not getting sued
2. Making an impact
3. Sustaining the project
4. Receiving credit for the work

Additionally, many community projects will have the following goals:

1. Building a community to contribute to the work and carry the project forward
2. Encouraging others to build on the work
3. Encouraging others to start their own community projects

Most businesses will have most or all of the following goals:

1. Making ends meet: paying the bills, paying for food, paying for medical care, etc.
2. Satisfying their stakeholders (e.g. investors, customers)
3. Reducing the costs of building a great product

Terms of the license impact how other people interact with a project, what they do with it, and thus what direction the project goes in. Good licenses will give you various legal protections against being sued, which is important if you're giving away your work for free; other licenses will forget to include those protections. Some licenses make it very easy for others to do anything they want by completely giving away the work for free, while other licenses are more selective about what others can do with the work for free. So licenses can have an important effect on how widely a project spreads or how long the project can sustain itself.

## What do open-source licenses do?

Open-source licenses are public licenses which provide a replacement set of legal defaults which, in certain ways, make it easier for others to modify, share, and use our work. We want to choose public licenses which provide a set of "good defaults" to help us accomplish our goals of sharing our work in a way that benefits many people.

For someone else to enjoy the permissions granted by the open-source license, they will have to follow a few license requirements (e.g. attributing our work to us) as specified by the terms of the license. If someone can't meet the terms of our open-source license, which typically would happen if our license has terms requiring them to share things they can't/won't share, they would have to negotiate a separate private license, in which case they wouldn't have to comply with the public license.

## What licensing options are there?

The biggest differences among open-source licenses are in what kinds of work they cover.

The next biggest differences among open-source licenses are in what default requirements they impose for using/sharing/etc. the licensed work.

Some licenses have more requirements, typically ones known as "reciprocal" or "copyleft" terms (e.g. "you also must share your adaptations of our work under the same or a similar license). They have some differences about what situations trigger that condition for sharing, and this is where things get nuanced and complicated very quickly. Examples of licenses:

* For software: [GPL](https://spdx.org/licenses/GPL-3.0-or-later.html), [LGPL](https://spdx.org/licenses/LGPL-3.0-or-later.html), and [MPL](https://spdx.org/licenses/MPL-2.0.html) are common licenses.
* For hardware: [CERN-OHL-S](https://spdx.org/licenses/CERN-OHL-S-2.0.html), [CERN-OHL-W](https://spdx.org/licenses/CERN-OHL-W-2.0.html)
* For media/art/data/etc.: [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/), [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Other licenses have fewer requirements and are called "permissive" (e.g. "do whatever you want, just give us credit and don’t sue us"). For example:

* For software: [Apache](https://spdx.org/licenses/Apache-2.0.html), [BSD](https://spdx.org/licenses/BSD-2-Clause-Patent.html), and [MIT](https://spdx.org/licenses/MIT.html) are common licenses.
* For hardware: [CERN-OHL-P](https://spdx.org/licenses/CERN-OHL-P-2.0.html), [SHL](https://spdx.org/licenses/SHL-2.1.html)
* For media/art/data/etc.: [CC-BY](CC-BY, CC-BY-NC), [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/)

Licenses can be very long and challenging to read, and many use very specific legal terminology so they can try to be as clear to lawyers as possible; unfortunately, this usually means that it's less clear to normal people. Some licenses have a FAQ section or a human-readable summary to help you understand what they are doing (e.g. the Creative Commons licenses). 

## Can we just use Creative Commons for everything?

This might not do what you think it will do.

For people who have seen Creative Commons license used elsewhere (e.g. Wikipedia), it may be tempting to just choose a Creative Commons license and move on. For example, out of 35 projects in the Frugal Science course, 7 projects have listed licenses on their project pages, and all 7 chose a Creative Commons license for releasing their work. I can understand why these projects may have made this decision: most projects have proposed concepts but have not yet reached functional proof-of-concept prototypes with design files to share. However, once projects develop past this stage and want to share full hardware designs, it will be important for them to consider a license which addresses issues specific to sharing hardware designs.

If you are releasing design files for hardware or source code for software under a Creative Commons license, then you are giving other people legal permission/protection to adapt, remix, share, and copy the media you've created (images, text, drawings, documentation, data, etc.), but you are not giving legal permission/protections related to use under patent law and you are not saying anything about source code. This is probably the opposite of what you want. Indeed, Creative Commons [recommends against](https://creativecommons.org/faq/#can-i-apply-a-creative-commons-license-to-software) using a CC license on software.

## How are licenses enforced?

Usually enforcement of licenses is done to gain compliance from license violators rather than to collect legal damages for the license violation. In practice, legal enforcement of open-source licenses can be difficult or infeasible for community projects. Outside the courts, enforcement can be done by naming license violators as a way of raising the stakes on their community goodwill and reputation. Even so, discovery of license violations may be difficult. Thus, for our projects, the open-source license serves less as a legal hammer to wield against others and more as a strong encouragement of the values and practices we want people to follow if they use/share/etc. our work.

## Are there licenses for non-commercial use?

## Can we write our own license?

Licenses are legal documents, which means they need to be clear and they need to do the things they are intended to do. If a standard license will meet your needs, you should probably use it instead of trying to write your own custom license.

If no licenses meet your needs, you may want to consider writing your own license in a way that other projects can also use it, since there are probably also other projects facing the same gap. You should definitely have a good line-by-line (maybe even word-by-word) understanding of what terms existing licenses include, why, and what those terms do or do not achieve; and you should have some understanding of why and how lawyers wrote existing licenses the way they did. As some starting points, refer to:

* Andrew Katz's [Towards a Functional Licence for Open Hardware](https://www.jolts.world/index.php/jolts/article/view/69/131), which explains his motivations for drafting the Solderpad Hardware License.
* Myriam Ayass, Andrew Katz, and Javier Serrano's [introduction and explanation for drafting the CERN-OHL v2 licenses](https://ohwr.org/project/cernohl/wikis/uploads/0be6f561d2b4a686c5765c74be32daf9/CERN_OHL_rationale.pdf)
* Kyle E. Mitchell's breakdowns of the [MIT license](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html), [CERN-OHL-S](https://writing.kemitchell.com/2020/04/01/CERN-OHL-S-2.0.html), [Medtronic's license for its PB560 ventilator](https://writing.kemitchell.com/2020/03/31/Medtronic-Ventilator-License.html), the [Sharetribe Community Public License](https://writing.kemitchell.com/2020/04/04/Sharetribe-1.0.html), and the [Fair Source License](https://writing.kemitchell.com/2016/03/30/First-Read-of-the-Fair-Source-License.html); and his reflections on [writing statements of purpose](https://writing.kemitchell.com/2019/01/10/Discipline-Stated-Purpose.html)
* The Blue Oak Council's [announcement of the Blue Oak Model License](https://blueoakcouncil.org/2019/03/06/model.html)

I would also suggest that your license should be written in plain English so that it is clear and easy for other people to understand. Otherwise, you might end up just adding noise which makes it harder for people to understand how they can use open hardware projects. Because there aren't enough tools to help you write a good license, you should get review from a lawyer if you do write a license or other legal document.

## How do we choose a license?

The first thing you will need to do is look at any third-party works you will be using (e.g. software libraries, or hardware designs) in your work, and look at what licenses they have. The license you choose will need to be compatible with their licenses - so, for example, you cannot use a GPL-licensed software library and release your project under a permissive license like Apache, although you can use an Apache-licensed software library and release your project under a reciprocal license like GPL.

Next, you will need to prioritize your project's goals and values and the situation your project is responding to. Different licenses will make sense for different goals and values and situations. The project's highest-priority goals and values should guide what license you choose. It may be helpful to think through some hypothetical scenarios to see how you feel about them (e.g. "if a company wants to use our work, what do we want to happen?").

### Software

An easy and accessible resource is Github's [Choose a License](https://choosealicense.com/) guide, which recommends licenses by popularity. If popularity isn't your highest priority for choosing a license, you'll need to do a bit of reading about options. If you want to understand your options for permissive licenses. If you want to understand your options for reciprocal licenses, Kyle E. Mitchell's [How to Speak Copyleft](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html) is a must-read because it provides a framework for comparing different licenses.

### Hardware

This where you'll need to dive a bit deeper: unfortunately, there aren't comprehensive resources yet, and open hardware licensing is still a relatively new area. I plan to share some thoughts on specific open hardware licenses in future posts.

## What if we change our minds later?

This gets really complicated really quickly. Refer to Github's [The Legal Side of Open Source](https://opensource.guide/legal/#what-if-i-want-to-change-the-license-of-my-project) for a discussion.