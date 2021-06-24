---
layout: default
title: "Cancellation criterion"
description: "The cancellation criterion, also known as the equality criterion and as Frohnmayer balance, requires that every vote be perfectly cancelled out by some other vote."
---
# {{ site.title }}
## {{ page.title }}

The cancellation criterion, also known as the [equality criterion](https://www.equal.vote/theequalvote) and as Frohnmayer balance, requires that every vote be perfectly cancelled out by some other vote. Specifically, for every legal ballot there must exist some other ballot such that adding both ballots to an election will never change the result.

More formally, a voting method $$m$$ passes the cancellation criterion if for every ballot $$b$$, there exists some (not necessarily distinct) ballot $$b'$$ such that for any list of ballots $$b_1, b_2, \dots, b_n$$, $$m(b_1, b_2, \dots, b_n, b, b') = m(\alpha(b_1, b_2, \dots, b_n))$$ for every permutation $$\alpha$$ of $$b_1, b_2, \dots, b_n$$.

The cancellation criterion implies the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion) and therefore the [identical input options criterion](/miscellaneous/voting-theory/identical-input-options-criterion).