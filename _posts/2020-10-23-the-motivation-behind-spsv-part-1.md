---
layout: post
title: "The motivation behind SPSV, part 1"
date: 2020-10-23
---
*This blog post has been adapted from [a series of posts](https://www.reddit.com/r/SimDemocracy/comments/ieogtk/the_motivation_behind_spsv_series/) written for [r/SimDemocracy](https://www.reddit.com/r/SimDemocracy/).*

[Sequential proportional score voting]({% link miscellaneous/voting-theory/sequential-proportional-score-voting.md %}) (SPSV) is a multi-winner voting method and a form of [proportional representation](https://electowiki.org/wiki/Proportional_representation). Like score voting, it uses rated ballots, and it is party-agnostic, meaning it does not take into account which parties the candidates are from. Currently, the only known instance of this method being used is the subreddit r/SimDemocracy, which uses it to elect its legislature.

Before SimDemocracy used SPSV, it used a method known as bloc score. This method was simpler to understand, but it had major issues when it came to electing a senate that represents the voters. This occurred because it was not a proportional method.

<!--break-->

As an example of why proportionally is important, let's consider an election with 3 parties: A, B, and C. A is supported by 50 voters, B by 30 voters, and C by 20 voters. For simplicity, we'll say that there are 10 seats and each party runs 10 candidates. We'll first consider this election under bloc score, and then we'll consider it under closed party-list, a proportional method.

Under bloc score, voters rate each of the candidates, and the candidates with the highest total scores win. Since each voter supports exactly one party, we'll assume that they give all candidates in that party the maximum rating, 5, and all other candidates the minimum rating, 0. This means that the A candidates each have 250 points, the B candidates 150 points, and the C candidates 100 points. Thus, bloc score will elect the 10 A candidates. This is clearly not representative; A has only 50% of the vote, but has total control over the elected body.

Closed party-list works very differently. Instead of rating candidates, voters cast their vote for a single party. Each party wins seats in proportion to how many votes they receive. In this case, A receives 50 votes, B receives 30 votes, and C receives 20 votes. Thus, closed party-list will elect 5 A candidates, 3 B candidates, and 2 C candidates. This results in the elected body having a makeup that closely resembles the makeup of the voters, and so is far more representative.

While closed party-list gives far more representative outcomes than a non-proportional method like bloc score, it also has a lot of disadvantages. One is that voters don't get any say over which candidates from a party are elected; instead, that's determined by party insiders. SPSV is much better, but it's easiest to build up to it rather than diving straight in. Thus, the next part will cover a proportional method very similar to closed party-list that lets voters choose which candidates are elected, and from there we'll keep making small changes until we arrive at SPSV itself.