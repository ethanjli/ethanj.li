---
date: 2021-01-11
draft: true
unlisted: false
tags:
- systems engineering
title: The unyielding foundations rule
excerpt: practicing modular design
coverImage: "/uploads/2021/01/octopi-driver-stack-left.jpg"

---
> **The unyielding foundations rule:** It is easier to change a module than to change the modularity.
>
> The reason is that once an interface has been used by another module, changing the interface requires replacing at least two modules. If an interface is used by many modules, changing it requires replacing all of those modules simultaneously. For this reason, it is particularly important to get the modularity right.
>
> — Saltzer & Kaashoek, [_Principles of Computer System Design: An Introduction_](https://dl.acm.org/doi/book/10.5555/1594884), 2009. ([pdf](https://github.com/wangjohn/mit-courses/blob/master/6.033/Principles%20of%20Computer%20System%20Design%20An%20Introduction-2009.pdf))

As makers and engineers, the first things we built were probably small and simple. Early activities might have looked like a "hello world" program, a simple webpage, an Arduino sketch to blink the built-in LED, or a basic shape on a 3-D printer or laser cutter. We keep learning and improving our building skills, and we start realizing just how useful our creations can become. But as we apply our initial skills to larger and more interesting problems, we start hitting up against unexpected limits where it _should_ be easy to add just one more small feature to a project, but in practice it's a whole ordeal:

* It could look like [a circuit board](https://github.com/prakashlab/octopi-driver-board/blob/ODMv0.1.1/Board/Layout.pdf) where you can't implement the features which your collaborator has recently added to their wishlist, because you've used up too many of the pins on your 60-pin Arduino board. 😐
* It could look like [a mechanical design](https://cad.onshape.com/documents/6f3ff9e60612f07463807b51/w/7c9831bb106114d48918156b/e/a9da1141e808ee4cb8c5dd81) which uses so many dimensional constraints and parameters that your CAD software freezes for a full minute whenever you make changes which force it to rebuild the whole model. 😬
* It could look like a [2000-line single-file Arduino sketch](https://github.com/deepakkrishnamurthy/gravitymachine-research/blob/55c388bb2cd5719427131d440dd91720b3f6768f/firmware/GravityMachine_Firmware_ArduinoIDE/GravityMachine_Firmware_ArduinoIDE.ino) where you've gradually added pieces of code and now you have 150 global constants and 150 global variables and 40 functions, with each function possibly interacting with up to all 300 of those global constants and variables. 😱
* It could look like a [multithreaded+asyncio Python program](https://github.com/ethanjli/liquid-handling-robotics) which quits normally 99% of the time when you press Ctrl+C but which rarely throws exceptions or hangs in ways you can't consistently reproduce, and it happens because of how you used asyncio, [which you never fully understood anyways](https://vorpus.org/blog/some-thoughts-on-asynchronous-api-design-in-a-post-asyncawait-world/). 😨

Maintaining the project becomes painful and difficult because we let our designs become complex without responding appropriately to that complexity. But it doesn't have to be like this.

## Ignoring complexity will make it harder.

When we design things to meet many requirements or to achieve a few ambitious requirements, technical complexity becomes a big challenge. We can face it from the start, or we can risk doing a lot of work to get exciting early results but needing to redesign everything from scratch at an inconvenient future moment in order to be able to add our next feature to get more results. In academic science labs, I usually see the latter approach, because a rough prototype used as a proof-of-concept ended up being extended far beyond what its initial design was good for: the designer did not deal with how complex the system was becoming, so their subsequent development made the system even more complex. Even when we do plan ways to manage complexity, we'll still eventually need to do a redesign - but hopefully we'll at least have a faster way forward or a better starting point.

Fortunately, the field of systems engineering gives us useful tools to cope with complexity in designing and maintaining systems. In _Principles of Computer System Design_, Saltzer & Kaashoek give a working definition of a <dfn>system</dfn> as "a set of interconnected components that has an expected behavior observed at the interface with the environment".

Depending on our design goals for a system, different things may be relevant to us as the components, the system, the interface, and the environment. For example, here is my functional block diagram describing the [Pufferfish ventilator](https://www.pez-globo.org/) at a high level, where the mechanical enclosure defines the boundary between the system and environment, the grey blocks are high-level components, and the arrows show the interconnections between components and the interface with the environment:

![Functional block diagram of the overall system architecture of the Pufferfish ventilator](/uploads/2021/01/pufferfish-overall-architecture.png)

While here is my functional block diagram describing the software for the Pufferfish ventilator at a high level, which breaks the "User Interfacing" and "Control" blocks from the previous diagram down into many smaller components. This high-level design has been stable for the past 6 months, even as the design within each individual block has changed. From the number of boxes and arrows in this diagram, you can tell that there's a lot going on in the software of this ventilator, but most components have interconnections with only a few other components:

![Functional block diagram of the software architecture of the Pufferfish ventilator](/uploads/2021/01/pufferfish-software-architecture.png)

Saltzer & Kaashoek emphasize complexity as a practical, subjective property of systems: systems are complex when they're difficult for us to understand at the levels we care about. System complexity is associated with having many components, having many interactions between components, having many irregularities or exceptions, requiring many words to describe what the system does, or being impossible for one person to fully understand or maintain. Complexity can come from the number of requirements a system must meet, from non-obvious interactions between each requirement, and from changes in the stated requirements over the lifetime of a system (such as to account for unforeseen requirements).

These sources of complexity are why many systems designed by scientists-who-don't-consider-themselves-engineers (especially data analysis or computational modeling software) end up becoming too difficult to understand by anyone other than the initial designers: as the designers add more requirements to support more and more interesting experiments, in the short term it's faster for them tack on features in an improvised way without dedicating time to revisit the system's underlying design. This matters because these scientists prioritize getting scientific results quickly over than making a system easy to improve and extend for future experiments - after all, scientific funding agencies and journals care more about interesting scientific results. And so technical debt accumulates at the foundations of the design of these systems, ironically making it harder for future people to build on the previous work used to generate these exciting results. As scientists, engineers, and makers, we all need ways to reduce complexity in the systems we build so that we - and other people - can understand what we did in order to carry our work forward.

## Modular design helps manage complexity.

Saltzer & Kaashoek identify four general categories of common techniques for coping with complexity, used across many different engineering fields: modularity, abstraction, layering, and hierarchy.

🧩 <dfn>Modularity</dfn> is a strategy of dividing a system into interacting subsystems, which we call <dfn>modules</dfn>, in a way that we can consider each one separately. We can think about interactions among components of a module without also having to juggle components inside other modules. It's easier to troubleshoot a system by first identifying the faulty module instead of having to look at every single component in the system. And it's easier to improve a system by improving and replacing a module instead of completely rebuilding the system. Modularity helps a designer allow for uncertainty, experimentation, and future changes: as long as the design rules for a system's modularity are followed, the system can be improved later, potentially in unforeseen ways.

🗳️ <dfn>Abstraction</dfn> is a requirement to separate out the interface of a module from its implementation so that any module can interact other modules only through their interfaces, ignoring their internal implementations. Saltzer & Kaashoek introduce abstraction as an additional requirement on modularity: for a modular design to be useful, it should limit the interactions among modules, and the effects (and problems) which can propagate from one module to another. To prevent accidental or hidden interconnections from sneaking through/around interfaces and causing problems, designers in computer systems can use various techniques to enforce modularity. In practice, most abstractions are "leaky" and can't perfectly hide the implementation under the interface.

🥞 <dfn>Layering</dfn> is one way of organizing modules to reduce interconnections by using one complete set of mechanisms (a lower layer) to create a different complete set of mechanisms (an upper layer); each layer may be implemented as several modules. To reduce interconnections, a module of one layer should only interact with other modules in the same layer and with modules in the next higher and lower layers.

🍱 <dfn>Hierarchy</dfn> reduces interconnections among modules differently than layering: a small group of modules is combined into a stable, self-contained subsystem with a well-defined interface; then a small group of subsystems is combined into a larger subsystem with a well-defined interface, and so on until large subsystems are combined to form the overall system. Hierarchy constrains interactions by only allowing them among the components of a subsystem. This lets the system designer design each subsystem one-at-a-time, focusing only on interactions between the interfaces of the components in the subsystem.

In the Pufferfish software architecture diagram from the previous section, you can see each of these techniques at work. Every block is a module. Hierarchical design keeps the modules within each of the Microcontroller Firmware, GUI Backend Server, and GUI Frontend Client subsystems separated, except by two arrows which correspond to the interfaces between the three subsystems. Those interfaces allow us to keep those subsystems running on entirely separate processes/processors, so that enforced modularity allows us to keep the Microcontroller Firmware running even if the GUI Backend Server crashes; because of the abstraction provided by this interface, the Microcontroller Firmware can completely ignore the implementation details of the software on the GUI computer. Layered design within each of these three subsystems allows modules for higher-level logic to be separated from modules for low-level I/O or hardware operations by modules for drivers and protocols in intermediate layers. All four techniques are also applied in recursively the design within each software module shown in the diagram. Thus, while the Pufferfish software is doing a lot of things, we've been able to keep complexity at a manageable level - at least for now.

## Computer systems are a special case...

Saltzer & Kaashoek argue that complexity and techniques for managing complexity in computer systems are different than in other kinds of systems (e.g. mechanical systems) for two reasons:

1. Because computer systems are controlled by software, physical laws don't limit the complexity of a computer system. Abstraction can help control complexity from combining software modules, allowing huge numbers of software modules to be combined. But abstraction leakiness accumulates in the form of complexity as the number of software modules grows. So it's very easy to combine software modules into a system which is more complex than its designers can understand. If you've spent hours debugging software, then you've experienced this.
2. Computer systems technologies change very quickly, which means requirements can also change quickly over the development of a system, which usually calls for major design changes or redesigns. Careful planning isn't rewarded as much as in slower-evolving fields. So computer systems are often delivered with rough edges.

Another thing which is especially feasible in computer systems compared to other fields is an <dfn>iterative development process</dfn>, where designers start with a simple, working system, which meets only a key subset of the requirements, and then evolve it in small steps to progressively meet more and more of the requirements:

* These small steps can help prevent complexity from overwhelming the designers all at once.
* Always having a working system can help designers better understand their system and discover and fix bugs.
* Adjustments for technology changes during development can be made as part of the development iterations.

## ...but their lessons are useful elsewhere.

## Case study: modularity guides redesign of the Octopi microscope electronics.

## Learn design through practice.

I hope the concepts and case study discussed in this post have helped you think about modularity from more perspectives and about how modularity can help you design systems which are more maintainable and upgradable in projects where that's important. But really understanding at a deeper level how to design such systems requires trying to design them well, paying attention to what works and what doesn't, and learning from the mistakes you will make. Here's what I've been practicing, due to lessons learned from my past mistakes:

* Each time you start designing a system or hit some limit in what you've design, first pause and do some brainstorming to figure out what requirements your system will need to meet, what future requirements might arise, and what areas you don't understand well enough to identify clear requirements.
* Design for iteration. Unless you are planning to stop developing or using your system, you will need to redesign modules or the modularity as your system, its requirements, and your understanding evolve, and as you get feedback from other people. So make sure your timelines and your modularity leave room for this.
* Aggressively remove requirements from what you will support in your next iteration and save them for a later iteration, but also make a plan for how your later iterations will be technically feasible from your design.
* Identify things you'll probably need to change in the foreseeable future, before your next planned redesign of the whole system. Look for ways modularity can give you an easier path from what you'll have in your upcoming design to what you'll need to have later.
* Identify requirements which aren't clear enough that you can design features for them yet. Look for ways modularity and abstraction can let you delay your design work on them until the requirements become clearer.
* Identify problem areas or failures you've found in your previous design, and map out how different designs might have different implications for your system.
* Using what you've learned from your earlier prototypes or system designs, plan out how you will break down your system into different modules and how you will keep their interfaces and interactions as simple as possible for other people to understand and maintain.
* Document your current assumptions and how they inform your design, so that as your understanding evolves you can more easily understand how your design needs to evolve.

## Acknowledgements