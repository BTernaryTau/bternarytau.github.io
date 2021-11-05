---
layout: default
title: "Free cancellation criterion"
description: "The free cancellation criterion requires that every portion of a vote must have an opposite which cancels it out while leaving the rest of the ballot free to express other preferences."
---
# {{ site.title }}
## {{ page.title }}

The free cancellation criterion requires that every portion of a vote must have an opposite which cancels it out while leaving the rest of the ballot free to express other preferences. Specifically, for every valid ballot and subset of the candidates there must exist at least one other ballot that represents the opposite set of preferences for those candidates, and adding these two ballots to an election must never change the result from one candidate in the subset to another. Furthermore, for every pair of candidates not in the subset, there must exist three such ballots with each one expressing a different preference between that pair of candidates.

More formally, a voting method $$m$$ passes the free cancellation criterion if for every ballot $$b$$ and subset of the candidates $$C$$, all of the following hold:

1. There exists a ballot $$b'$$ such that for each candidate $$c$$ in $$C$$, $$b'(c) = k - b(c)$$ for some integer constant $$k$$. A ballot with this property is called an opposite to $$b$$ over $$C$$.
2. For every ballot $$b'$$ that is an opposite to $$b$$ over $$C$$ and every list of ballots $$b_1, b_2, \dots, b_n$$, if $$m(b_1, b_2, \dots, b_n, b, b')$$ is in $$C$$, then either $$m(b_1, b_2, \dots, b_n) = m(b_1, b_2, \dots, b_n, b, b')$$ or $$m(b_1, b_2, \dots, b_n)$$ is not in $$C$$.
3. For every unordered pair of candidates $$c_1, c_2$$ not in $$C$$, there must exist three ballots $$b'_1, b'_2, b'_3$$ that are opposites to $$b$$ over $$C$$ such that $$b'_1(c_1) < b'_1(c_2)$$, $$b'_2(c_1) > b'_2(c_2)$$, and $$b'_3(c_1) = b'_3(c_2)$$.

Note that this definition assumes that $$m$$ passes the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion).

This criterion is intended to be a strengthened version of the [partial cancellation criterion](/miscellaneous/voting-theory/partial-cancellation-criterion). While the partial cancellation criterion is passed by voting methods like [negative voting](https://en.wikipedia.org/wiki/Voting#Negative_voting) and [Borda count](https://en.wikipedia.org/wiki/Borda_count) that aren't fully expressive, the free cancellation criterion requires voting methods that pass it to allow the free expression of preferences among candidates not in the cancelling subset.

The free cancellation criterion implies the partial cancellation criterion, the [opposite cancellation criterion](/miscellaneous/voting-theory/opposite-cancellation-criterion), and the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion).
