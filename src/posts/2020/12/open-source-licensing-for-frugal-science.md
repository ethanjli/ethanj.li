---
date: 2020-12-15
draft: true
tags:
- open source
- explainer
title: Open-source licensing for frugal science
excerpt: a brief introduction in plain English
coverImage: ''

---
## What is this article?

This is an introduction to the _why_s and _what_s of open-source licensing for hardware projects. This guide is written for you if:

1. you are working on a project involving hardware, especially open science hardware, and you want to share it,
2. you do not know much about open-source, and
3. you want a simplified "just the basics" understanding of what questions to ask when making decisions about how to share your work.

Everything here is based on information from various sources and my interpretation of key points from [The Legal Side of Open Source](https://opensource.guide/legal/) and [Open Source: Theory of Operation](https://oss.kemitchell.com/), which are practical guides written for software programmers. Note that I am not a lawyer, this is not legal advice, the documents which informed this background are not legal advice, and I have not run any of this past any lawyers. If you need to make serious legal decisions, you should talk to a real lawyer or at least do a lot more reading and learning.

If you'd prefer to learn by watching a video rather than reading an article, you can watch the recording of a lecture/discussion I did on this topic, for the Fall 2020 offering of the [Frugal Science](https://www.frugalscience.org/) international online course, [on YouTube](https://www.youtube.com/watch?v=skMvQ9aHbg4). This article covers the main points from that recording but also adds some important things which I did not have time to talk about.

## What are the key points?

Open-source licensing is a kind of tool you can use to help support your project's strategy for your project's goals. It makes sharing your work easier by giving other people various permissions under the law to use your work if they agree not to sue you for various things they normally could sue you for. Different licenses give different sets of permissions and place different sets of conditions on those permissions. There are two important ways to compare licenses:

1. What kinds of work they cover: some licenses (such [Creative Commons](https://creativecommons.org/)) give permission to people to copy and adapt media and documents but do not give any permission related to using, adapting, and sharing software or hardware. Some licenses (such as [MIT](https://spdx.org/licenses/MIT.html) and [GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)) give permissions related to software but not to hardware. And some licenses (such as [CERN OHL](https://ohwr.org/project/cernohl/wikis/Documents/CERN-OHL-version-2)) give permissions related to hardware but not to software.
2. What kinds of conditions they place: some licenses (which we call "reciprocal", but you might also have heard the terms "copyleft" or "share-alike") require that any adaptations of the released work also need to be shared under the same license or a similar license. Other licenses (which we call "permissive") do not have this condition.

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

Most businesses will have the following goals:

1. Making ends meet: paying the bills, paying for food, paying for medical care, etc.
2. Satisfying their stakeholders (e.g. investors, customers)

Terms of the license impact how other people interact with a project, what they do with it, and thus what direction the project goes in. Some licenses make it very easy for others to do anything they want by completely giving away the work for free, while other licenses are more selective about what others can do with the work for free. This means that licenses can have an important effect on how widely a project spreads or how long the project can sustain itself.

## What do open-source licenses do?

Open-source licenses are public licenses which provide a replacement set of legal defaults which, in certain ways, make it easier for others to modify, share, and use our work. We want to choose public licenses which provide a set of "good defaults" to help us accomplish our goals of sharing our work in a way that benefits many people.

For someone else to enjoy the permissions granted by the open-source license, they will have to follow a few license requirements (e.g. attributing our work to us) as specified by the terms of the license. If someone can't meet the terms of our open-source license, which typically would happen if our license has terms requiring them to share things they can't/won't share, they would have to negotiate a separate private license, in which case they wouldn't have to comply with the public license.

## What licensing options are there?

The biggest differences among open-source licenses are in what kinds of work they cover.

The next biggest differences among open-source licenses are in what default requirements they impose for using/sharing/etc. the licensed work. Some licenses have more requirements, typically ones known as "reciprocal" or, for software, "copyleft" terms (e.g. giving others the same access to our source code or design files, and using similar license terms for work that builds on our work, so that others can enjoy the same permissions from it as they would from our work).

## Can we just use Creative Commons for everything?

In short: this probably doesn't do what you think it will do. and it will probably mislead other people.

For people who have seen Creative Commons license used elsewhere (e.g. Wikipedia), it may be tempting to just choose a Creative Commons license and move on. For example, out of 35 projects in the Frugal Science course, 7 projects have listed licenses on their project pages, and all 7 chose a Creative Commons license for releasing their work. I can understand why these projects may have made this decision: most projects have proposed concepts but have not yet reached functional proof-of-concept prototypes with design files to share. However, once projects progress past this stage and want to share full hardware designs, it will be important to choose a license which actually gives people permission to use the hardware designs.

If you are releasing design files for hardware or source code for software under a Creative Commons license, then you are giving other people legal permission to adapt, remix, share, and copy the media you've created (images, text, drawings, documentation, etc.), but you are not giving them legal permission to do things like making hardware using your design, or to copy or share the source code of your software. This is probably the opposite of what you want.

## How are licenses enforced?

Usually enforcement of licenses is done to gain compliance from license violators rather than to collect legal damages for the license violation. In practice, legal enforcement of open-source licenses can be difficult or infeasible for community projects. Outside the courts, enforcement can be done by naming license violators as a way of raising the stakes on their community goodwill and reputation. Even so, discovery of license violations may be difficult. Thus, for our projects, the open-source license serves less as a legal hammer to wield against others and more as a strong encouragement of the values and practices we want people to follow if they use/share/etc. our work.