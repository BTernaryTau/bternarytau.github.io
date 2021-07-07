---
layout: default
title: "Anonymity criterion"
description: "The anonymity criterion requires that a given ballot must be counted the same way regardless of who cast it."
---
# {{ site.title }}
## {{ page.title }}

The anonymity criterion requires that a given ballot must be counted in the same way regardless of who cast it. If there exists an election for which it is possible to change the outcome by keeping the ballots cast the same while changing which voters cast which of those ballots, then this criterion is not met.

More formally, a voting method $$m$$ passes the anonymity criterion if for every list of ballots $$B$$ in the domain of $$m$$ and every permutation $$\alpha$$ of that list, $$\alpha(B)$$ is also in the domain of $$m$$ and $$m(B) = m(\alpha(B))$$.

The anonymity criterion implies the [identical input options criterion](/miscellaneous/voting-theory/identical-input-options-criterion) and is implied by the [cancellation criterion](/miscellaneous/voting-theory/cancellation-criterion).
