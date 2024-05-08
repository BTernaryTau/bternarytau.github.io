---
layout: default
title: "BAR voting"
description: "BAR voting is a ranked method based on STAR voting that was invented by the city council of Lompoc, California."
---
# {{ site.title }}
## {{ page.title }}
### Introduction

BAR voting, or Borda then Automatic Runoff voting, is a ranked method based on [STAR voting](https://en.wikipedia.org/wiki/STAR_voting). It was originally invented by [the city council of Lompoc, California](https://lompocrecord.com/news/local/lompoc-city-council-approves-method-to-fill-vacant-seat/article_719b944f-5bc5-577e-8115-b9527598e025.html) for the purpose of filling a vacant seat.

### Description

As under [Borda count](https://en.wikipedia.org/wiki/Borda_count), voters cast ballots by ranking the candidates, though unlike Borda all candidates must be ranked. For an election with *n* candidates, the candidate ranked 1st receives *n* points, the candidate ranked 2nd receives *n* - 1 points, and so on, with the candidate ranked last receiving 1 point. These points are added up, and the two candidates with the greatest point totals move on to the automatic runoff. The winner of the automatic runoff is the candidate ranked higher on a majority of ballots.

This can also be thought of as a variation of STAR voting in which the rating scale is determined by the number of candidates and duplicate ratings are not allowed. However, these changes transform the rated runoff method into a ranked method, making for an unusual variation.

### Analysis

One commonly cited problem with Borda is its [susceptibility to teaming](https://en.wikipedia.org/wiki/Independence_of_clones_criterion#Borda_count). Adding a runoff step will likely decrease the size of the largest defeat that a given number of clones can overcome, but otherwise fail to help with the problem because the runoff step can simply be filled with two clones to render it irrelevant.

Another potential problem is the [DH3 pathology](https://rangevoting.org/DH3Summ.html). Since two of the three factions rank each frontrunner below the dark horse candidate(s), the dark horse candidate(s) will be able to win a runoff against any of the frontrunners. If two dark horses make the runoff, it doesn't matter which one wins, so the runoff would likely not prevent this pathology.

Overall, BAR voting seems to be roughly as good a voting method as Borda, which is to say, not good at all.
