---
layout: default
title: "Non-deterministic criterion extension"
description: "Non-deterministic criterion extension is a means of taking a criterion meant only for deterministic voting methods and creating a new version of it that can also apply to non-deterministic voting methods."
---
# {{ site.title }}
## {{ page.title }}

Non-deterministic criterion extension is a means of taking a criterion meant only for deterministic voting methods and creating a new version of it that can also apply to non-deterministic voting methods. This may be useful for making criteria robust to otherwise-deterministic voting methods that must occasionally resort to breaking ties randomly, as is standard behavior for many real-world elections. It is unclear to what extent this technique is useful for extending criteria that assume determinism to voting methods designed around randomness, such as [random ballot](https://electowiki.org/wiki/Random_ballot).

Before this extension can be defined, some notation needs to be specified. In the following definition, $$\{0, 1\}^\infty$$ refers to the set of all possible infinite bitstrings, $$E$$ refers to the set of all elections (where an election is just a list of ballots), and $$C$$ refers to the set of all candidates.

For a given criterion, a voting method $$m$$ passes the extended version of that criterion if there exists a function $$f : \{0, 1\}^\infty \times E \rightarrow C$$ such that both of the following hold:

1. For $$r \in \{0, 1\}^\infty$$ chosen uniformly at random, $$\Pr[f(r, e) = c] = \Pr[m(e) = c]$$ for all $$e \in E$$ and $$c \in C$$.
2. For all $$r \in \{0, 1\}^\infty$$, the deterministic voting method $$m_r = f(r, \cdot)$$ passes the original criterion.

The idea here is that $$f$$ is essentially the same as $$m$$ except with the randomness isolated to a single variable $$r$$. This makes it possible to ignore that randomness and compare the original criterion to $$f$$ via $$m_r$$. At the same time, the extension only requires some function $$f$$ with the right properties to exist in order to prevent the extended criterion from [being dependent on the internal workings of the voting method](https://www.votingtheory.org/forum/topic/122/handling-non-deterministic-tie-breaking-in-voting-criteria/5), specifically how it uses its randomness.

The input $$r$$ is chosen from the set of infinite bitstrings in order to ensure that $$f$$ has an arbitrarily large number of random bits at its disposal. If for some reason this is insufficient, $$r$$ could instead be drawn from a set with a greater cardinality, such as the [power set](https://en.wikipedia.org/wiki/Power_set) of $$\{0, 1\}^\infty$$.

### Validity

It is trivial to show that any deterministic method $$m_d$$ that passes the original criterion will also pass the extended version. Consider the function $$f_d(r, e) = m_d(e)$$. It is clear that $$\Pr[f_d(r, e) = c] = \Pr[m_d(e) = c]$$ for all values of $$e$$ and $$c$$, and it is also clear that for all values of $$r$$, the voting method $$m_r = f_d(r, \cdot) = m_d$$ will pass any criterion that $$m_d$$ passes. Thus, $$f_d$$ meets both conditions and $$m_d$$ passes the extended criterion.
