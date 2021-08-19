---
layout: default
title: "Cancellation criterion"
description: "The cancellation criterion requires that every vote be perfectly cancelled out by some other vote."
---
# {{ site.title }}
## {{ page.title }}

The cancellation criterion requires that every vote be perfectly cancelled out by some other vote. Specifically, for every valid ballot there must exist some other ballot such that adding both ballots to an election will never change the result.

More formally, a voting method $$m$$ passes the cancellation criterion if for every ballot $$b$$, there exists some (not necessarily distinct) ballot $$b'$$ such that for any list of ballots $$b_1, b_2, \dots, b_n$$, $$m(b_1, b_2, \dots, b_n, b, b') = m(\alpha(b_1, b_2, \dots, b_n))$$ for every permutation $$\alpha$$ of $$b_1, b_2, \dots, b_n$$. Note that restrictions on the domain of $$m$$ are left implied.

This criterion is intended to be a formalization of the [equal vote criterion](https://electowiki.org/wiki/Equal_Vote_Criterion), which is sometimes called Frohnmayer balance in reference to its creator, Mark Frohnmayer. Because the informal equal vote criterion can be interpreted in multiple ways, it is possible that the cancellation criterion does not quite capture the intent behind it. An alternative formalization is the [opposite cancellation criterion](/miscellaneous/voting-theory/opposite-cancellation-criterion).

The cancellation criterion implies the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion) and therefore the [identical input options criterion](/miscellaneous/voting-theory/identical-input-options-criterion), and it is implied by the opposite cancellation criterion.
