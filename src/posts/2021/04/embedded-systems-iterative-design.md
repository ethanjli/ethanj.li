---
date: 2021-04-30
draft: true
unlisted: false
tags:
- design
- case study
- electronics
title: Design for iteration
excerpt: learning a lesson the hard way
coverImage: ''

---
<blockquote> <b>Design for iteration:</b> You won't get it right the first time, so make it easy to change.

The essence of iteration is to start by building a simple, working system that meets only a modest subset of the requirements and then evolve that system in small steps to gradually encompass more and more of the full set of requirements. \[...\] Having a working system available at all times helps provide assurance that something can be built and provides on-going experience with the current technology ground rules as well as an opportunity to discover and fix bugs. \[...\] Expect not only to modify and replace modules, but also to remodularize as the system and its requirements become better understood.

_Take small steps._ The purpose is to allow discovery of both design mistakes and bad ideas quickly, so that they can be changed or removed with small effort and before other parts of the system in later iterations start to depend on them and they effectively become unchangeable. \[...\]

_Don't rush_. Even though individual steps may be small, they must still be well planned. In most projects, the temptation is to rush to implementation. With iterative design, that temptation can be stronger, and the designer must make sure that the design is ready for the next step.

— Saltzer & Kaashoek, <cite>[Principles of Computer System Design: An Introduction](https://dl.acm.org/doi/book/10.5555/1594884)</cite>, 2009. ([pdf](https://github.com/wangjohn/mit-courses/blob/master/6.033/Principles%20of%20Computer%20System%20Design%20An%20Introduction-2009.pdf)) </blockquote>

In the above excerpt, Saltzer & Kaashoek describe the opposite of how two [projects](https://ethanj.li/projects "Ethan's projects") I've been involved in, Pufferfish and Octopi/Squid, have approached the process of designing circuit board prototypes - the first time as a novice, the second and third times as a victim, and the fourth time as a footgun. In hindsight, both projects have faced frustrating stumbling blocks and timeline delays specifically because the process of designing the electronics was rushed and didn't take small steps. It'll take discipline for me to approach iterative design in the spirit of designing for iteration, but I've seen promising results (i.e. I've made my life easier) from my latest steps in trying to keep these principles in mind.

## We're ready for the production design, right?

## We're ready!

## Now we're actually ready!

## We're not ready.