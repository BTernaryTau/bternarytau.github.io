---
layout: default
title: "Bogobogosort voting"
description: "Bogobogosort voting is a voting method based on the popular bogobogosort algorithm."
---
# {{ site.title }}
## {{ page.title }}
### Introduction

Bogobogosort voting is a voting method based on the popular [bogobogosort](https://www.dangermouse.net/esoteric/bogobogosort.html) algorithm.

### Description

Voters cast their ballots by marking a single candidate as their favorite. The candidates are then sorted from most to least votes using bogobogosort. The candidate at the top of the sorted list is chosen as the winner.

### Analysis

This method is almost identical to [plurality voting](https://en.wikipedia.org/wiki/Plurality_voting). The primary difference is that while plurality runs in O(*n*) time, bogobogosort voting takes O(*n*!<sup>*n*</sup>) time to run in expectation, making it far slower than even the [Kemeny–Young method](https://en.wikipedia.org/wiki/Kemeny%E2%80%93Young_method). This makes it perfect for incumbents who want to hold on to power as long as possible. All they have to do is convince enough people to run and the results will be delayed for an incredibly long period of time, allowing them to keep their position.