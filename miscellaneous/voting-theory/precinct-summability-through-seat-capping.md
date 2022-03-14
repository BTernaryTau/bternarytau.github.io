---
layout: default
title: "Precinct-summability through seat capping"
description: "Many multi-winner voting methods, including most proportional methods, are not precinct-summable, which means that it is often not practical for precincts to generate and publicly publish totals that can be used to independently verify the winner of an election. However, seat capping is a simple approach that can be applied to many (though not all) multi-winner methods to make them precinct-summable, at least to some degree."
---
# {{ site.title }}
## {{ page.title }}
### Introduction

Many multi-winner voting methods, including most proportional methods, are not [precinct-summable](https://electowiki.org/wiki/Summability_criterion), which means that it is often not practical for precincts to generate and publicly publish totals that can be used to independently verify the winner of an election. However, seat capping is a simple approach that can be applied to many (though not all) multi-winner methods to make them precinct-summable, at least to some degree. As the name implies, seat capping works by placing a limit on the maximum number of seats that a voting method can be used to fill.

### Techniques

The generic seat capping technique works for any voting method in which the set of candidates elected depends on only the set of [levels of support](/miscellaneous/voting-theory/unified-levels-of-support) each ballot gives to the candidates in each possible winner set. Examples of such methods include [sequential Monroe voting](https://electowiki.org/wiki/Sequential_Monroe_voting) and [Bucklin transferable vote](https://electowiki.org/wiki/Bucklin_Transferable_Vote).

This type of voting method can be modified to use $$O(\log(V) \cdot \ell^k \cdot c^k)$$ bits for precinct totals, where *V* is the number of voters, *c* is the number of candidates, *k* is the number of seats, and *ℓ* is the total number of levels of support that can be expressed on a ballot. If the number of seats that can be elected is capped at *k*, then a precinct *P* needs to provide, for every possible set of winners $$\{w_1, w_2, \dots, w_k\}$$ and for every list of winners' levels of support $$s$$, the number of ballots that gave those levels of support to those candidates:

$$\vert \{b \in P \mid b(w_1), b(w_2), \dots, b(w_k) = s\} \vert$$

Since $$\vert P \vert \le V$$, this sum has a size of at most $$O(\log(V))$$ bits. There are $$O(c^k)$$ possible sets of winners, and furthermore, there are $$O(\ell^k)$$ lists of levels of support that can be given to the candidates in a possible set of winners. Thus, the total size of all precinct totals is $$O(\log(V) \cdot \ell^k \cdot c^k)$$, and the modified voting method is *k*th-order summable, assuming *ℓ* is fixed. If the voting method uses rankings and does not limit the number of candidates that may be ranked, then *ℓ* = *c* and the modified voting method is instead 2*k*th-order summable.

For many voting methods, it is possible to provide fewer totals than the generic seat capping technique generates.

#### Weighted score selection methods

A weighted score selection method is a sequential multi-winner voting method in which the winner of each round is the candidate with the greatest sum of weighted scores, where each ballot's weight depends on the scores given (by all ballots) to the candidates that were elected in previous rounds. Examples of such methods include [allocated score](https://electowiki.org/wiki/Allocated_Score) and [sequentially spent score](https://electowiki.org/wiki/Sequentially_Spent_Score).

This type of voting method can be modified to use $$O(\log(V) \cdot \ell^{k-1} \cdot c^k)$$ bits for precinct totals. Consider every set of candidates of size *k* - 1 and every set of levels of support that a ballot can give to those candidates. For each of these, provide the number of ballots that give those levels of support to those candidates, as well as the total score given by these ballots to each of the candidates not in the set. These totals are sufficient to allow all *k* winners to be identified.

#### Simple reweighted methods

A simple reweighted method is a sequential multi-winner voting method in which the winner of each round is the candidate with the greatest sum of weighted scores, where each ballot's weight depends only on the scores it gave to the candidates that were elected in previous rounds. Examples of such methods include [reweighted range voting](https://electowiki.org/wiki/Reweighted_Range_Voting) and [sequential threshold average score voting](/miscellaneous/voting-theory/sequential-threshold-average-score-voting).

This type of voting method can be modified to use $$O(\log(V) \cdot c^k)$$ bits for precinct totals. Consider every set of candidates of size *k* - 1 or less (including the empty set). For each set, provide the total score that would be given by all ballots to each of the candidates not in the set if the candidates in the set were already elected. These totals are sufficient to allow all *k* winners to be identified.

#### Approval and KP transform methods

An approval method is a multi-winner voting method that uses approval ballots, and a KP transform method is a multi-winner voting method that uses the [Kotze-Pereira transformation](https://electowiki.org/wiki/Kotze-Pereira_transformation) to convert its ballots into approval ballots before applying an approval method to them. Examples of approval methods include [sequential proportional approval voting](https://en.wikipedia.org/wiki/Sequential_proportional_approval_voting) and [harmonic approval voting](https://en.wikipedia.org/wiki/Proportional_approval_voting). Examples of KP transform methods include [sequential proportional score voting](/miscellaneous/voting-theory/sequential-proportional-score-voting) and [harmonic score voting](https://www.rangevoting.org/QualityMulti.html).

Most such voting methods can be modified to use $$O(\log(V) \cdot c^k)$$ bits for precinct totals. Consider every set of candidates of size *k* or less (including the empty set). For each set, provide the number of approval ballots that approve all of the candidates in the set. For most approval and KP transform methods, these totals are sufficient to allow all *k* winners to be identified. One exception to this is [satisfaction approval voting](https://en.wikipedia.org/wiki/Satisfaction_approval_voting); despite being 1st-order summable, these particular totals aren't enough to find the winners under this method.

### Incompatible methods

The most commonly used party-agnostic proportional method, [single transferable vote](https://electowiki.org/wiki/Single_transferable_vote) (STV), is unfortunately incompatible with seat capping. This conflict arises because STV often eliminates candidates that were never elected in order to free up their votes for transfer. A similar alternative that is compatible with seat capping is the proportional ranked voting method [Bucklin transferable vote](https://electowiki.org/wiki/Bucklin_Transferable_Vote).

### Drawbacks

The primary drawback of seat capping is that it can only give *k*th-order summability by capping the number of seats per election at *k*. This means that capping a voting method at 7 seats, a [commonly-proposed](https://www.aei.org/politics-and-public-opinion/are-our-elections-policies-fueling-toxic-politics-a-qa-with-lee-drutman/) maximum [district size](https://better-count-us.medium.com/a-proportional-representation-primer-be76186861dc), will result in a voting method that is only 7th-order summable. Such a method may technically satisfy the definition of precinct-summability, but in practice it will generate too many totals for summation to be practical. Seat capping is likely most useful with districts composed of 3 seats each, which [are large enough to ensure decent proportionality](https://aceproject.org/ace-en/topics/es/esd/esd02/esd02e/esd02e01) while also being small enough to result in 3rd-order summable voting methods.

One other drawback of seat capping is that it may not be clear how the totals it provides can be used to find the winners under a given voting method. This can be solved on a case-by-case basis by providing modified implementation instructions for voting methods making use of seat capping.
