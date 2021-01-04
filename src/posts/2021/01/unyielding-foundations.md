---
date: 2021-01-11
draft: true
unlisted: false
tags:
- systems engineering
title: The unyielding foundations rule
excerpt: modularity-in-design for makers and engineers
coverImage: "/uploads/2021/01/octopi-driver-stack-left.jpg"

---
> **The unyielding foundations rule**: It is easier to change a module than to change the modularity.
>
> The reason is that once an interface has been used by another module, changing the interface requires replacing at least two modules. If an interface is used by many modules, changing it requires replacing all of those modules simultaneously. For this reason, it is particularly important to get the modularity right.

from Saltzer & Kaashoek, [_Principles of Computer System Design: An Introduction_](https://dl.acm.org/doi/book/10.5555/1594884), 2009. ([pdf](https://github.com/wangjohn/mit-courses/blob/master/6.033/Principles%20of%20Computer%20System%20Design%20An%20Introduction-2009.pdf))

This post will begin with a review of discussions of modularity by Saltzer & Kaashoek

## Why modularity?

### Systems are complex

When we design things to meet many requirements or to achieve certain very strict requirements, one of the biggest recurring challenges is coping with complexity. The field of systems engineering gives us useful tools to cope with complexity in designing and maintaining systems. Saltzer & Kaashoek give a working definition of a <dfn>system</dfn> as "a set of interconnected components that has an expected behavior observed at the interface with the environment"; depending on our design goals for a system, we may focus on different things as the components, the system, the interface, and the environment.

Saltzer & Kaashoek emphasize system complexity as a subjective feature: systems are complex when they're difficult to understand at the levels we care about. System complexity is associated with having many components, many interactions between components, many irregularities or exceptions, a long description, or a team of people needed to understand or maintain the system. Complexity can come from the number of requirements a system must meet, from interactions between each requirement, and from changes in requirements over the lifetime of a system (such as to account for unforeseen requirements). Saltzer & Kaashoek identify four general categories of common techniques for coping with complexity, used across many different engineering fields: modularity, abstraction, layering, and hierarchy.

### Modularity helps designers manage interactions between components

Modularity is a "divide-and-conquer" strategy of designing and analyzing a system as a collection of interacting subsystems, which we call <dfn>modules</dfn>. This allows us to think about interactions among components of a module without also having to juggle components inside other modules. It's easier to troubleshoot a system by first identifying the faulty module instead of having to look at every single component in the system. It's easier to improve a system by improving and replacing a module instead of completely rebuilding the system, so that a designer can allow for uncertainty or future changes.

<dfn>Abstraction</dfn> is a requirement to separate out the specification of a module from its implementation. Saltzer & Kaashoek introduce abstraction as an additional requirement on modularity: for modularity to be useful, the interactions among modules, and the effects (and problems) which can propagate from one module to another, should be limited. Ideally, any module can treat any other module only on the basis of their external specifications, without needing to know the internal details of the other module. To prevent accidental or hidden interconnections from sneaking around abstractions and causing problems, designers in computer systems can use various techniques to enforce modularity. In practice, most abstractions are "leaky" and can't perfectly hide the implementation inside a module.

<dfn>Layering</dfn> is one way of organizing modules to reduce interconnections by using one complete set of mechanisms (a lower layer) to create a different complete set of mechanisms (an upper layer); each layer may be implemented as several modules. To reduce interconnections, a module of one layer should only interact with other modules in the same layer and with modules in the next higher and lower layers.

<dfn>Hierarchy</dfn> reduces interconnections among modules differently than layering: a small group of modules is assembled into a stable, self-contained subsystem with a well-defined interface; then a small group of subsystems is assembled into a larger subsystem, and so on until subsystems are assembled into the overall system. Hierarchy constrains interactions by only allowing them among the components of a subsystem. This lets the system designer look at each subsystem one-by-one, focusing only on interactions between the interfaces of the components in the subsystem.

In digital systems, modules are connected through their names: one software module names another module it intends to use, or different pieces of electronic hardware communicating over an interconnection may use different addresses as their names. To make it easier to replace modules, a designer may choose to delay choosing which specific module to use for a feature they need. For example, they may use the name of a feature they want rather than the name of a specific module providing that feature. This technique is called <dfn>indirection</dfn>.

## Modularity in computer systems

Saltzer & Kaashoek argue that complexity and techniques for managing complexity in computer systems are different from other systems for two reasons:

1. Because computer systems are controlled by software, physical laws do not limit the complexity of a computer system. While abstraction can help control complexity from combining software modules, and abstraction leakiness accumulates as complexity when the number of software modules grows. It is very easy to make system more complex than its designers can understand.
2. Computer systems technologies change very quickly, which means requirements can also change quickly over the development of a system, which usually calls for major design changes or redesigns. Careful planning is not rewarded the way it is in slower-evolving fields. So computer systems often are delivered with rough edges.

Another thing which is especially feasible in computer systems compared to other fields is the ease of an <dfn>iterative development process</dfn>, where designers start with a simple, working system which meets only a key subset of the requirements and then evolve it in small steps to meet more and more of the requirements. These small steps can help prevent complexity from overwhelming the designers; always having a working system can help designers better understand their system and discover and fix bugs; and adjustments for technology changes during development can be made as part of the iterations.

## Modularity in electronics

## Modularity in mechanical systems

## Modularity for open-source hardware

### Open-source hardware licensing

### Standardization & interoperability