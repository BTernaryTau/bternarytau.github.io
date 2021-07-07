---
layout: default
title: "Sequential cancellation criterion"
description: "The sequential cancellation criterion is an extension of the cancellation criterion to sequential multi-winner voting methods."
---
# {{ site.title }}
## {{ page.title }}

The sequential cancellation criterion is an extension of the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion) to sequential multi-winner voting methods. While the cancellation criterion itself can be applied to multi-winner methods, it is incompatible with proportional representation which arguably makes it a bad criterion to pass in multi-winner contexts. The sequential cancellation criterion fixes this by only requiring cancellation when two voters have given the same amount of support to all candidates elected so far.


To give a more formal definition of the sequential cancellation criterion, some terms and notation will need to be defined first. An incomplete list of winners is a (possibly empty) list of candidates that is smaller than the number of seats $$k$$ in the election. The notation $$m(b_1, b_2, \dots, b_n)[1:i]$$ refers to the list of the first $$i$$ winners produced by the voting method $$m$$ given the list of ballots $$b_1, b_2, \dots, b_n$$. The notation $$b(c)$$ refers to the [level of support](/miscellaneous/voting-theory/unified-levels-of-support) that candidate $$c$$ receives from ballot $$b$$.

A sequential voting method $$m$$ passes the sequential cancellation criterion if for every ballot $$b$$ and incomplete list of winners $$W$$, there exists some ballot $$b'$$ such that both of the following hold:

1. For every candidate $$c$$ in $$W$$, $$b(c) = b'(c)$$.
2. For any list of ballots $$b_1, b_2, \dots, b_n$$, if $$m(b_1, b_2, \dots, b_n)[1:\vert W \vert] = W$$ and $$m(b_1, b_2, \dots, b_n, b, b')[1:\vert W \vert] = W$$, then $$m(b_1, b_2, \dots, b_n, b, b')[1:\vert W \vert+1] = m(b_1, b_2, \dots, b_n)[1:\vert W \vert+1]$$.

Note that this definition assumes that $$m$$ passes the [anonymity criterion](/miscellaneous/voting-theory/anonymity-criterion).

The sequential cancellation criterion is implied by the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion).
