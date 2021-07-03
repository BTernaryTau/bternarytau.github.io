---
layout: default
title: "Recursive ranked voting"
description: "Recursive ranked voting is a voting method that chooses a winner using recursion."
---
# {{ site.title }}
## {{ page.title }}

Inspired by [this story](https://electowiki.org/wiki/User:Psephomancy/Voting_for_voting_systems).

### Introduction

Recursive ranked voting is a voting method that chooses a winner recursively, [because as anyone who knows anything at all about computer science knows, recursion is always good and cool](https://www.dangermouse.net/esoteric/bogobogosort.html).

### Description

Under recursive ranked voting, voters cast their ballots by ranking all the candidates. Equal rankings are not allowed. The votes are tallied using every ranked voting method the voters are familiar with (excluding this one). If all of them agree on the winner, that candidate is elected. Otherwise, the voters vote on which of those voting methods to use to choose the winner, using (what else?) recursive ranked voting.

### Analysis

Because the way recursive ranked voting is tallied depends on what ranked voting methods the voters know of, it is actually more of a family of voting methods. As the number of ranked methods the voters are familiar with increases, the expected number of voting rounds before recursive ranked voting terminates also increases. Without making assumptions about human behavior, it is impossible to show that recursive ranked voting always terminates. However, there is a base case, and it is possible to reach it, so it's safe to assume that termination will occur sooner or later.
