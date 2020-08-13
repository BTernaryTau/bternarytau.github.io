---
layout: default
title: "Sequential proportional score voting"
---
# {{ site.title }}
## {{ page.title }}
### Introduction

Sequential proportional score voting (SPSV) is a rated party-agnostic proportional method based on [sequential proportional approval voting](https://en.wikipedia.org/wiki/Sequential_proportional_approval_voting) (SPAV) and the [Kotze-Pereira transformation](https://electowiki.org/wiki/Kotze-Pereira_transformation) (KP transform). For this reason, it is often referred to as SPAV + KP.

### Description

Voters cast ballots by rating all candidates on a scale such as 0 to 5, where a blank rating is interpreted as the minimum value. Each rated ballot is converted into five virtual approval ballots using the KP transform, as shown below.

![Graphic showing a 0-5 score ballot being converted into 5 approval ballots](/assets/Kotze-Pereira-transformation.png)

Once this is done, SPAV is run on the virtual approval ballots to determine which candidates are elected. Each virtual ballot starts off with a weight of 1. For each seat, the candidate with the most weighted approvals is elected, and every virtual ballot is given a weight of 1/(1 + *m*), where *m* is the number of candidates approved on the ballot who have already been elected.

### Analysis

With the above reweighting formula, SPSV is equivalent to [D'Hondt](https://en.wikipedia.org/wiki/D%27Hondt_method) when voters vote perfectly along party lines. However, if the formula 1/(1 + 2*m*) is used instead, then under such circumstances it becomes equivalent to [Webster/Sainte-Laguë](https://en.wikipedia.org/wiki/Webster/Sainte-Lagu%C3%AB_method).

SPSV is similar to [Reweighted Range Voting](https://electowiki.org/wiki/Reweighted_Range_Voting) (RRV), but it has the additional benefit of passing [scale invariance](https://electowiki.org/wiki/Scale_invariance).

When voters [min-max vote](https://electowiki.org/wiki/Tactical_voting#Definitions), SPSV reduces to SPAV. Equivalently, SPAV and SPSV with a scale of 0 to 1 are mathematically identical and give the same results.