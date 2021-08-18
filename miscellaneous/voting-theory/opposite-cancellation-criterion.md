---
layout: default
title: "Opposite cancellation criterion"
description: "The opposite cancellation criterion requires that every vote must have an opposite vote which cancels it out."
---
# {{ site.title }}
## {{ page.title }}

The opposite cancellation criterion requires that every vote must have an opposite vote which cancels it out. Specifically, for every valid ballot there must exist some other ballot that represents the opposite set of preferences, and adding these two ballots to an election must never change the result.

More formally, a voting method $$m$$ passes the opposite cancellation criterion if for every ballot $$b$$, both of the following hold:

1. There exists at least one [opposite ballot](/miscellaneous/voting-theory/unified-levels-of-support#opposite-ballots) for $$b$$.
2. For every opposite ballot $$b'$$ and list of ballots $$b_1, b_2, \dots, b_n$$, $$m(b_1, b_2, \dots, b_n, b, b') = m(\alpha(b_1, b_2, \dots, b_n))$$ for every permutation $$\alpha$$ of $$b_1, b_2, \dots, b_n$$.

Note that some restrictions on the domain of $$m$$ are left implied.

This criterion is intended to be a formalization of the [equal vote criterion](https://electowiki.org/wiki/Equal_Vote_Criterion), which is sometimes called Frohnmayer balance in reference to its creator, Mark Frohnmayer. Because the informal equal vote criterion can be interpreted in multiple ways, the opposite cancellation criterion is not the only possibility here; the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion) is another plausible formalization of the equal vote criterion.

The opposite cancellation criterion implies the cancellation criterion, the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion), and the [identical input options criterion](/miscellaneous/voting-theory/identical-input-options-criterion).

### Comparison to the cancellation criterion

The opposite cancellation criterion has 3 major advantages over the cancellation criterion:

1. The cancellations it requires are intuitive. The cancellation criterion can be satisfied by a method that pairs cancelling ballots seemingly at random, but the opposite cancellation criterion is only satisfied when pairs of opposite ballots cancel.
2. Because of the above, there are intuitive restrictions on possible ballot formats. Specifically, voting methods can only pass this criterion if they use a ballot format where every ballot has at least one opposite ballot. This lines up nicely with the idea that there are some ballot formats that are equal and others that aren't. One example of a similar (but not the same) idea is the [equal vote component](https://electowiki.org/wiki/Vote_unitarity#Failure_to_allow_voters_to_cast_an_Equal_Vote:) of vote unitarity.
3. It is often easier to work with. To prove that a method fails the opposite cancellation criterion, all that is necessary is to find an election and a pair of opposite ballots such that adding the pair to the election changes the result. To prove that a method fails the cancellation criterion, it can be necessary to consider multiple elections and all potential cancelling pairs containing a given ballot.

The opposite cancellation criterion also has 2 major disadvantages compared to the cancellation criterion:

1. It isn't ballot-agnostic. Instead, it only applies to voting methods that use ballot formats which can be incorporated into the [unified levels of support framework](/miscellaneous/voting-theory/unified-levels-of-support).
2. As a result of the above, it's more complicated than the cancellation criterion. Its use of unified levels of support means that it has to define separate mappings for every ballot format it applies to, which adds a lot of complexity.
