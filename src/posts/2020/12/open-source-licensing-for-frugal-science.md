---
date: 2020-12-18
draft: true
tags:
- open source
- licensing
- explainer
title: Open-source licensing for frugal science
excerpt: a practical FAQ-style introduction in plain English
coverImage: ''

---
## Table of Contents

```toc
to-heading: 2
```

## What is this article?

This is an introduction to the _why_s and _what_s of open-source licensing for hardware projects. This guide is written for you if:

1. you're working on a project involving hardware, especially frugal science hardware, and you want to share it,
2. you don't know much about open-source, and
3. you want a simplified "just the basics" understanding of what questions to ask when making decisions about how to share your work.

Everything here is based on information from various sources and my interpretation of key points from Github's [The Legal Side of Open Source](https://opensource.guide/legal/) and Kyle E. Mitchell's [Open Source: Theory of Operation](https://oss.kemitchell.com/), which are practical guides written for software programmers. Note that I am not a lawyer, this is not legal advice, the documents which informed this background are not legal advice, and I have not run any of this past any lawyers. If you need to make serious legal decisions, you should talk to a real lawyer or at least do a lot more reading and learning.

If you'd prefer to learn by watching a video rather than reading an article, you can watch the recording of a lecture/discussion I did on this topic, for the Fall 2020 offering of the [Frugal Science](https://www.frugalscience.org/) international online course, [on YouTube](https://www.youtube.com/watch?v=skMvQ9aHbg4). This article covers the main points from that recording but also adds some important things which I did not have time to talk about, so after watching the video I recommend coming back to this post and skipping to any sections which look relevant to you.

## What are the key points?

Open-source licensing is a kind of tool you can use to help support your project's strategy for your project's goals. It makes sharing your work easier by giving other people various permissions under the law to use your work if they agree not to sue you for various things which they normally could sue you for. Different licenses give different sets of permissions and place different sets of conditions for activating those permissions. There are two important ways to compare licenses:

1. What kinds of work they cover: some licenses (such [Creative Commons](https://creativecommons.org/)) give permission to people to copy and adapt media and data and documents but do not give any permission related to using, adapting, and sharing software or hardware. Some licenses (such as [MIT](https://spdx.org/licenses/MIT.html) and [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)) give permissions related to software but not to hardware. And some licenses (such as [CERN OHL](https://ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)) give permissions related to hardware but not to software.
2. What kinds of conditions they place: some licenses (which we call "reciprocal", but you might also see the terms "copyleft" or "share-alike") require that any adaptations of the released work also need to be shared under the same license or a similar license. Other licenses (which we call "permissive") do not have this condition.

Companies with money for lawyers can try to enforce licenses by suing other companies who have violated the license. Community projects usually don't have the resources to do that. Instead, they may choose a license to express and implement their goals, and they may try to build social and cultural norms in the community to encourage people to respect the license.

You should choose a license to share your work, so that other people know they can use it legally. If a standard open-source license written by a lawyer does what you want, you should use it; otherwise, you should have a good understanding of how past licenses have been written and what are the important things needed to write a license which other people can easily interpret and follow.

## What do licenses do?

Licenses are documents which we can use as legal tools; they give legal permission to do certain things. Open-source gives us legal tools for releasing and sharing our work, in the context of intellectual property law (copyrights and patents) and contract law (warranties, liability, formation).

In the US, the legal defaults specify that others are **not** protected from getting sued by us for many things (e.g. copying our work or using our work) and that we are **not** protected from getting sued by others for many things (e.g. foreseeable damages resulting from our work). Individuals or businesses typically use lawyers to negotiate private licenses and contracts with other individuals or businesses to override those defaults on a case-by-case basis. They may also release the work to the public under a public license which overrides the legal defaults for everyone; the public license may be used as a substitute or supplement for case-by-case private licensing.

## Why should we care?

Most projects will have most or all of the following goals:

1. Not getting sued
2. Making an impact
3. Keeping the project
4. Receiving credit for the work

Additionally, many community projects will have the following goals:

1. Building a community to contribute to the work and carry the project forward
2. Encouraging others to build on the work
3. Encouraging others to start their own community projects

Most business projects will have some or all of the following goals:

1. Making ends meet: paying the bills, paying for food, paying for medical care, etc.
2. Satisfying their stakeholders (e.g. investors, customers)
3. Reducing the costs of building a great product

Terms of the license impact how other people interact with a project, what they do with it, and thus what direction the project goes in. Good licenses will give you various legal protections against being sued, which is important if you're giving away your work for free; other licenses will forget to include those protections. Some licenses make it very easy for others to do anything they want by completely giving away the work for free, while other licenses are more selective about what others can do with the work for free. So licenses can have an important effect on how widely a project spreads or how the project can sustain itself.

## What do open-source licenses do?

Open-source licenses are public licenses which provide a replacement set of legal defaults which, in certain ways, make it easier for others to modify, share, and use our work. We want to choose public licenses which provide a set of "good defaults" to help us accomplish our goals of sharing our work in a way that benefits many people.

For someone else to enjoy the permissions granted by the open-source license, they will have to follow a few license requirements (e.g. attributing our work to us) as specified by the terms of the license. If someone can't meet the terms of our license, which typically would happen if our license has terms requiring them to share things they can't/won't share, they would have to negotiate a separate private license, in which case they wouldn't have to comply with the public license.

## What options are there?

The biggest differences among open-source licenses are in what kinds of work they cover.

The next biggest differences among open-source licenses are in what default requirements they impose for using/sharing/etc. the licensed work.

Some licenses require that work derived from the licensed work must be shared under the same license or a similar license. These are typically known as "reciprocal" or "copyleft" terms. Reciprocal licenses have some differences about what situations trigger that condition for sharing, and this is where things get nuanced and complicated very quickly. Examples of well-established standard licenses in this category:

* For software: [GPL](https://spdx.org/licenses/GPL-3.0-or-later.html), [LGPL](https://spdx.org/licenses/LGPL-3.0-or-later.html), and [MPL](https://spdx.org/licenses/MPL-2.0.html) are common licenses.
* For hardware: [CERN-OHL-S](https://spdx.org/licenses/CERN-OHL-S-2.0.html), [CERN-OHL-W](https://spdx.org/licenses/CERN-OHL-W-2.0.html)
* For media/art/data/etc.: [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/), [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Other licenses have fewer requirements and are called "permissive" (e.g. "do whatever you want, just give us credit and don’t sue us"). For example:

* For software: [Apache](https://spdx.org/licenses/Apache-2.0.html), [BSD](https://spdx.org/licenses/BSD-2-Clause-Patent.html), and [MIT](https://spdx.org/licenses/MIT.html) are common licenses.
* For hardware: [CERN-OHL-P](https://spdx.org/licenses/CERN-OHL-P-2.0.html), [SHL](https://spdx.org/licenses/SHL-2.1.html)
* For media/art/data/etc.: [CC-BY](CC-BY, CC-BY-NC), [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/)

## Why is it so hard to read these licenses?

Some licenses can be very long. Most licenses are written for lawyers and use very technical legal words. Unfortunately, this usually means that it's harder to understand for normal people. This is still an unsolved problem.

Some licenses have a FAQ section or a human-readable summary to help you understand what they are doing (e.g. the Creative Commons licenses). There are also some very new, somewhat experimental software licenses written in plain English for everyday people (e.g. the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0)), but they are not widely used; and I am not aware of similar licenses for hardware. I think we need more plain-English licenses if we want to have good licensing options for frugal science projects, and we also need licenses which would be easy to translate across a variety of languages and countries.

## How are licenses enforced?

Usually enforcement of licenses is done to gain compliance from license violators rather than to collect legal damages for the license violation. In practice, legal enforcement of open-source licenses can be difficult or out-of-reach for community projects. Outside the courts, enforcement can be done by naming license violators to point out the risks for their community goodwill and reputation. But for small projects, it may be hard to discover license violations in the first place. So for our projects, the open-source license is useful less as a legal hammer to wield against others and more as a strong encouragement of the values and practices we want people to follow if they use/share/etc. our work.

## Can we just use Creative Commons for everything?

This might not do what you think it will do.

For people who have seen Creative Commons license used elsewhere (e.g. Wikipedia), it may be tempting to just choose a Creative Commons license and move on. For example, out of 35 projects in the Frugal Science course, 7 projects have listed licenses on their project pages, and all 7 are CC-BY-NC-SA for releasing their work so far. I can understand why these projects may have made this decision: most projects have proposed concepts but have not yet reached functional proof-of-concept prototypes with design files to share. However, once projects develop past this stage and want to share full hardware designs, it will be important for them to consider a license which addresses issues specific to sharing hardware designs.

If you are releasing design files for hardware or source code for software under a Creative Commons license, then you are giving other people legal permission/protection to adapt, remix, share, and copy the media you've created (images, text, drawings, documentation, data, etc.), but you are not giving legal permission/protections related to use of the work under patent law, and you are not saying anything about source code. This is probably not what you want. Indeed, Creative Commons [recommends against](https://creativecommons.org/faq/#can-i-apply-a-creative-commons-license-to-software) using a CC license on software.

## How do we choose a license?

The first thing you'll need to do is look at any third-party works you will use (e.g. software libraries, or hardware designs) in your work, and look at what licenses they have. The license you choose will need to be compatible with their licenses - so, for example, you cannot use a GPL-licensed software library and release your project under a permissive license like Apache, although you can use an Apache-licensed software library and release your project under a reciprocal license like GPL.

Next, you'll need to prioritize your project's goals and values for the problem your project is trying to solve. Different licenses will make sense for different goals and values and situations. The project's highest-priority goals and values should guide what license you choose. It may be helpful to think through some hypothetical scenarios to see how you feel about them (e.g. "if a company wants to use our work, what is fine for them to do, and do we want them to ask for special permission?"), as well as to write out the purpose of your licensing strategy, independent of whichever license(s) you choose.

Then you'll need to look at the available choices to see which ones fit with your priorities. There probably won't be a perfect fit, but hopefully there is one which meets most of your top priorities and some of your lower priorities. You might find useful [this comparison I did of hardware and software licenses](https://www.notion.so/pufferfish/Comparison-of-Licenses-34384fe79a1e4ee3a72f630b73c5edec), where I tabulated all the messy details about what makes each license different; I created this to identify a set of choices of license combinations for the [Pufferfish ventilator project](https://www.pez-globo.org/) to choose between as a replacement for a temporary custom license our project was using. You will need to choose different licenses for any hardware in your project vs. any software in your project vs. any art, media, documentation, data, etc. in your project.

### Software

An easy and accessible resource is Github's [Choose a License](https://choosealicense.com/) guide, which recommends licenses by popularity and reputation. If those factors aren't your highest priority for choosing a license, then you'll need to do a bit of reading about options, and you should read and understand any license you're considering. Permissive licenses are the simplest and most common, so you may want to start there to develop a feel for what different licenses do differently. If you want to understand your options for reciprocal licenses, Kyle E. Mitchell's [How to Speak Copyleft](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html) is a must-read because it provides a framework for comparing different reciprocal licenses, which tend to be longer and more complicated.

### Hardware

This where you'll need to dive a bit deeper: unfortunately, I haven't found comprehensive resources which I like yet, and open hardware licensing is still a young area. There are fewer license options, which can be good because it means you don't have to evaluate so many options, or it can be bad if no license does what you want.

## What about medical devices?

This is a complicated topic which deserves its own post, and the answer will be different for different kinds of medical devices. What I'll say here is that if you're sharing a medical device, you absolutely need a license which includes a good warranty disclaimer so that, if something goes wrong, other people or companies don't sue you for their decision to use your work - the license should make them take all responsibility themselves as a condition for using your work. You should also be aware that there are other things to be careful about outside of licenses and warranty disclaimers.

## How long can we wait before choosing a license?

Choosing a license can feel like a commitment, and you already have so many other important things to do for your project. If any of the following apply, then you should choose a license as soon as possible:

* Your project uses somebody else's work which was released under a reciprocal license. Then you will need to look at whether you have to release your work under the same license, and whether you want to do that or whether you want to switch away replace that work with something else.
* You are ready to share your work with other people so that they can use it, share it, adapt it, etc.

However, starting a conversation with your team about licensing is a great way to start a broader conversation about your team's values and goals, and what strategies you want to use for building a community around your project. So I recommend at least starting this conversation as early as you can, even if you don't choose a license soon.

## Can we change our minds about licenses later?

Changing licenses for a project can get complicated quickly, but it really depends on your project, how much progress it has made, what license you were using, and what license you want to use. Refer to Github's [The Legal Side of Open Source](https://opensource.guide/legal/#what-if-i-want-to-change-the-license-of-my-project) for a discussion.

## Can we just not use a license?

If your frugal science project starts small and obscure and stays small and obscure, in practice nobody will really care about your lack of a license. And in countries with a different attitude to intellectual property law than the US and Europe, or communities where intellectual property isn't a relevant everyday concept, choosing a license might not be practically important if there's already a good culture of sharing work (for example, consider the [Jaipur Foot](https://en.wikipedia.org/wiki/Jaipur_leg)).

But be aware that if you share your work for others to use without a warranty disclaimer (which is something all good licenses have), then people may be legally allowed to sue you for problems with the work. And know that people who take intellectual property seriously (e.g. companies, open-source projects, and people who are very involved in open source as a community) will avoid unlicensed work, or if they are in the open source community they may ask you about your license.

Dealing with licenses may feel like a lot of trouble. If it helps, you can make some basic decisions now and do the bare minimum effort (e.g. adding a license notice, making sure your license is compatible with the licenses of any work you are using from other people, and being careful about contributions to your project from companies) to save headaches later, and delay making further decisions until your project begins growing more.

## What are noncommercial licenses?

If you've seen Creative Commons licenses, you may have seen its "noncommercial" versions [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/) and [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/), which state that "You may not use the material for commercial purposes", where a "commercial purpose" is defined as one "primarily intended for or directed towards commercial advantage or monetary compensation". The word "primarily" was [intentionally included](https://wiki.creativecommons.org/wiki/NonCommercial_interpretation) to make the licenses flexible, but it also feels a bit ambiguous to me when we're talking about open hardware.

For example, if a person with a 3-D printer prints a face shield for a hospital and accepts money just to cover production costs but not to make a profit, is that primarily intended for monetary compensation, or is it primarily intended for COVID-19 response? I think there's some legal ambiguity here and I personally would argue that this scenario is allowed by the license; but as [Andre Maia Chagas](https://amchagas.github.io/) described to me in an email discussion, the [Glia project](https://glia.org/) faced barriers to distributing noncommercial-licensed [Prusa face shields](https://www.prusaprinters.org/prints/25857-prusa-face-shield) to hospitals in Canada for this exact issue, and they had to create a new design as a workaround, which wasted precious time. So it's important to think about what your priorities are for licensing, and also to be aware of how ambiguous license text (whether intentional or unintentional) may help or hinder your goals. And if you use a standard license which is more ambiguous than you want, I recommend that you add some comments giving people clarification about your intentions and how you want to enforce licenses. For example, now Prusa says:

> We share these files under noncommercial licence. It would be great if you donated these shields to those in need for free. If you need to cover your production costs, we are ok with you selling the shields for production cost. However, we do not want to see these shields on eBay for $50.

If your concern is about a corporation taking and using your project's work without giving back to the community, you could consider using a reciprocal license instead of a noncommercial license, e.g. the Mozilla Foundation's use of the [Mozilla Public License](https://www.mozilla.org/en-US/MPL/), Qt's use of [dual-licensing under GPL and commercial licenses](https://www.qt.io/licensing/), or MongoDB's use of the [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license). Companies would still be able to profit off your work, as long as they share back all changes they make to your work - or, for some reciprocal licenses, as long as they share back all software source files or all hardware designs they make based on your work. For some areas, this might be a barrier against companies using your project's work at all. But depending on your project, it might not be a great fit for what you want to do.

## Are noncommercial licenses open-source?

Many people in the open-source software world have decided that open-source cannot include noncommercial licenses, and that open source cannot include licenses with conditions against unethical use of software; this is loudly policed by the [Open Source Initiative](https://opensource.org/osd), which calls those licenses discriminatory. Their definition of "open source" is also the basis for the Open Source Hardware Association's [definition of open-source hardware](https://www.oshwa.org/definition/), because open-source hardware has taken a lot of inspiration from open-source software. If you use a noncommercial license for your work and call it open-source, you will probably receive strong criticism for not respecting those definitions. Note that noncommercial software licenses don't call themselves open-source, but rather "source-available" or "noncommercial" (e.g. [PolyForm](https://polyformproject.org/what-is-polyform/)).

If you're doing a frugal science project and your values around commercial uses or unethical uses are different from what I've described above, you can choose to use the phrase "open source" in a way that builds a different meaning for frugal science. Or you can choose to use the phrase "frugal science" instead of "open source" and help define it as something different from what the software world has decided about "open source". Ultimately, the only way "frugal science" or "open source" can be meaningful is from how the communities of people who do "frugal science" or "open source" projects decide to use those terms, not from top-down rules commanded by me or you or an industry association.

## Can we write our own license?

Licenses are legal documents, which means they need to be clear to other people and they need to do the things you want them to do. If a standard license will meet your needs, you should probably use it instead of trying to write your own custom license.

If no licenses meet your needs, you may want to consider writing your own license in a way that other projects can also use it, since there are probably also other projects facing the same gap. You should definitely have a good line-by-line or even word-by-word understanding of what terms existing licenses include, why, and what those terms do or do not achieve; and you should have some understanding of why and how lawyers wrote existing licenses the way they did. As some starting points, refer to:

* Andrew Katz's [Towards a Functional Licence for Open Hardware](https://www.jolts.world/index.php/jolts/article/view/69/131), which explains his motivations for drafting the Solderpad Hardware License.
* Myriam Ayass, Andrew Katz, and Javier Serrano's [introduction and explanation for drafting the CERN-OHL v2 licenses](https://ohwr.org/project/cernohl/wikis/uploads/0be6f561d2b4a686c5765c74be32daf9/CERN_OHL_rationale.pdf)
* Kyle E. Mitchell's breakdowns of the [MIT license](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html), [CERN-OHL-S](https://writing.kemitchell.com/2020/04/01/CERN-OHL-S-2.0.html), [Medtronic's license for its PB560 ventilator](https://writing.kemitchell.com/2020/03/31/Medtronic-Ventilator-License.html), the [Sharetribe Community Public License](https://writing.kemitchell.com/2020/04/04/Sharetribe-1.0.html), and the [Fair Source License](https://writing.kemitchell.com/2016/03/30/First-Read-of-the-Fair-Source-License.html); and his reflections on [writing statements of purpose in legal drafting](https://writing.kemitchell.com/2019/01/10/Discipline-Stated-Purpose.html).
* The Blue Oak Council's [announcement of the Blue Oak Model License](https://blueoakcouncil.org/2019/03/06/model.html).

I'd also suggest that your license should be written in plain English so that it is clear and easy for other people to understand without having to rely on a lawyer. Otherwise, you might end up just adding noise into the licensing landscape which makes it harder for people to understand how they can use open hardware projects. Because there aren't enough tools to help you write a good license on your own, you should get review from a lawyer if you write a license or other legal document.

## What about (question not listed here)?

Please ask me this question in the comments box below, or by reaching out to me on Mastodon (details below)! If I can write a general answer, I will add it to this post. But remember that I'm not a lawyer.

Note that posting a comment below requires you to register or log in on a Github account, because this blog's comments are stored there. If you don't already have a Github account, I recommend getting one because it's the largest platform for sharing and working together on open-source projects (especially software and electronics, but also some other hardware).

## Acknowledgements

Thanks to the [Fall 2020 Frugal Science](https://www.frugalscience.org/) class for a great discussion which helped me think about what to include in this post! Thanks also to [Andre Maia Chagas](https://amchagas.github.io/) for valuable information about noncommercial licenses and problems people have encountered with them.