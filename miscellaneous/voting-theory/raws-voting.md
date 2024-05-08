---
layout: default
title: "RAWS voting"
description: "RAWS voting, or Runoff Alternating With Score voting, is a rated runoff method similar to STAR voting."
---
# {{ site.title }}
## {{ page.title }}
### Introduction

RAWS voting, or Runoff Alternating With Score voting, is a rated runoff method similar to [STAR voting](https://en.wikipedia.org/wiki/STAR_voting).

### Description

Voters cast ballots by rating all candidates on a scale such as 0 to 5, where a blank rating is interpreted as the minimum value. A series of elimination rounds is used to reduce the candidate pool to a single winner, with the method of elimination alternating every round.

For rounds with an odd number of candidates remaining, the candidates' scores are added up, and the candidate with the smallest total is eliminated.

For rounds with an even number of candidates remaining, each candidate gets a point for every ballot that rates them highest out of all remaining candidates. If a ballot rates multiple remaining candidates highest, then each of the *n* highest-rated candidates receives 1/*n* points. The candidate with the smallest total is eliminated.

### Analysis

Rounds with odd numbers of candidates remaining can be considered to be eliminating a candidate using [score voting](https://en.wikipedia.org/wiki/Score_voting). Rounds with even numbers of candidates remaining can be considered to be eliminating a candidate using a round of [Tom Ruen's IRV variant](https://rangevoting.org/rangeVirv.html#SanF), which unlike standard [instant-runoff voting](https://en.wikipedia.org/wiki/Instant-runoff_voting) can handle equal rankings.

In elections with 3 candidates or less, RAWS voting is equivalent to STAR voting. Eliminating the candidate with the lowest score is equivalent to picking the two candidates with the highest scores, and the IRV variant step is equivalent to an automatic runoff.

In elections with 4 or more candidates, RAWS voting is equivalent to STAR voting if the two highest-rated candidates are never eliminated in the rounds with odd numbers of candidates. If only one of those two candidates is eliminated, it is possible for the STAR winner to still be selected.
