---
layout: default
title: "Partial cancellation criterion"
description: "The partial cancellation criterion requires that every portion of a vote must have an opposite which cancels it out."
---
# {{ site.title }}
## {{ page.title }}

The partial cancellation criterion requires that every portion of a vote must have an opposite which cancels it out. Specifically, for every valid ballot and subset of the candidates there must exist at least one other ballot that represents the opposite set of preferences for those candidates, and adding these two ballots to an election must never change the result from one candidate in the subset to another.

More formally, a voting method $$m$$ passes the partial cancellation criterion if for every ballot $$b$$ and subset of the candidates $$C$$, both of the following hold:

1. There exists at least one ballot $$b'$$ such that for each candidate $$c$$ in $$C$$, $$b'(c) = k - b(c)$$ for some integer constant $$k$$.
2. For every ballot $$b'$$ with the above property and every list of ballots $$b_1, b_2, \dots, b_n$$, if $$m(b_1, b_2, \dots, b_n, b, b')$$ is in $$C$$, then either $$m(b_1, b_2, \dots, b_n) = m(b_1, b_2, \dots, b_n, b, b')$$ or $$m(b_1, b_2, \dots, b_n)$$ is not in $$C$$.

Note that this definition assumes that $$m$$ passes the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion).

This criterion is intended to be a strengthened version of the [opposite cancellation criterion](/miscellaneous/voting-theory/opposite-cancellation-criterion). While the opposite cancellation criterion applies only to full ballots, the partial cancellation criterion extends its requirements to partial ballots as well.

The partial cancellation criterion implies both the opposite cancellation criterion and the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion).
