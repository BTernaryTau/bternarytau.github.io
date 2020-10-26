---
layout: post
title: "The motivation behind SPSV, part 4"
date: 2020-10-26
---
*This blog post has been adapted from [a series of posts](https://www.reddit.com/r/SimDemocracy/comments/ieogtk/the_motivation_behind_spsv_series/) written for [r/SimDemocracy](https://www.reddit.com/r/SimDemocracy/). If you haven’t read the previous entries, please start with [part 1]({% post_url 2020-10-23-the-motivation-behind-spsv-part-1 %}).*

In the last post, we considered how to improve upon the strange behavior that D'Hondt has when dealing with voters that have preferences which don't match up with party lines. We went over how SPAV modifies the approach that D'Hondt used by reweighting individual ballots instead of a party's full set of votes, and how this allows it to handle more complex voter groups in a sensible manner. This gave voters more freedom to express their preferences, but they still had to either fully support or not at all support each candidate.

Can SPAV be adapted to use 0-*n* rated ballots instead of approval ballots? As it turns out, this is fairly straightforward to do. Instead of using the formula 1/(1 + *m*), we can use 1/(1 + *s*/*n*), where *s* is the sum of all the scores given to candidates who have already been elected. This method is known as [Reweighted Range Voting](https://electowiki.org/wiki/Reweighted_Range_Voting) (RRV), where range voting is used as a synonym for score voting.

<!--break-->

If *n* is 1, then *s* will simply be the number of already elected candidates who were given a score of 1, which means it will have the same value as *m*. Thus, RRV behaves exactly the same as SPAV when *n* = 1. In fact, this occurs in any instance where it is guaranteed that *s*/*n* = *m*, which corresponds to voters choosing to use only the minimum and maximum scores, not any intermediate scores. This parallels how score voting behaves like approval voting when voters don't use intermediate scores.

Now that we know how RRV can behave similarly to SPAV, let's consider how it can behave differently. Under SPAV, when a candidate a voter liked was elected, the ballot weight would change to the next number in the sequence 1, 1/2, 1/3, 1/4, etc. However, under RRV the next weight always depends on how much the voter liked the candidate. As an example, let's consider a single 0-5 ballot in a 7 candidate election under RRV. The ballot has been cast as follows:

Candidate|Rating
--|--
A|5
B|1
C|2
D|5
E|4
F|0
G|2

Here's a table showing how the weight of the ballot changes after the election of each candidate.

Candidate Elected|Rating|New Ballot Weight
--|--|--
None|N/A|1
A|5|1/2
C|2|5/12
F|0|5/12
E|4|5/16
B|1|5/17
D|5|5/22
G|2|5/24

This reveals a rather interesting pattern. If we rewrite 1 as 5/5 and 1/2 as 5/10, then the denominator always increases by the score given to the elected candidate. And looking back at our formula, if we multiply both the numerator and the denominator by *n*, we find that it is equivalent to *n*/(*n* + *s*), which in this case is 5/(5 + *s*). Since *s* is  the sum of all the scores given to candidates who have already been elected, it will start at 0 and increase by the score given to the elected candidate each round, and thus we have our pattern. While this isn't the standard way to write this formula, I find that it gives more intuition for how the weights of the ballots change as candidates are elected.

While this is a pretty nice method of extending SPAV to 0-_n_ rated ballots, it isn't the only way of doing so. In the next post, I'll explain the alternate method that SPSV uses and compare it to this one.