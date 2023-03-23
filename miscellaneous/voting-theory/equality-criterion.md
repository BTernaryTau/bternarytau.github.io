---
layout: default
title: "Equality criterion"
description: "The equality criterion requires that every vote must have an opposite vote which cancels it out."
---
# {{ site.title }}
## {{ page.title }}

The equality criterion requires that every vote must have an opposite vote which cancels it out. Specifically, for every valid ballot there must exist some other ballot that represents the opposite set of preferences, and adding these two ballots to an election must never change the result.

More formally, a voting method $$m$$ passes the equality criterion if for every ballot $$b$$, both of the following hold:

1. There exists at least one [opposite ballot](/miscellaneous/voting-theory/unified-levels-of-support#opposite-ballots) for $$b$$.
2. For every opposite ballot $$b'$$ and list of ballots $$b_1, b_2, \dots, b_n$$, $$m(b_1, b_2, \dots, b_n, b, b') = m(\alpha(b_1, b_2, \dots, b_n))$$ for every permutation $$\alpha$$ of $$b_1, b_2, \dots, b_n$$.

Note that some restrictions on the domain of $$m$$ are left implied.

This criterion is intended to be a formalization of the [equal vote criterion](https://electowiki.org/wiki/Equal_Vote_Criterion), which is sometimes called Frohnmayer balance in reference to its creator, Mark Frohnmayer.

The equality criterion implies the cancellation criterion, the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion), and the [identical input options criterion](/miscellaneous/voting-theory/identical-input-options-criterion).
