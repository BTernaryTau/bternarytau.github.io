---
layout: post
title: "The motivation behind SPSV, part 3"
date: 2020-10-25
---
*This blog post has been adapted from [a series of posts](https://www.reddit.com/r/SimDemocracy/comments/ieogtk/the_motivation_behind_spsv_series/) written for [r/SimDemocracy](https://www.reddit.com/r/SimDemocracy/). If you haven’t read the previous entries, please start with [part 1]({% post_url 2020-10-23-the-motivation-behind-spsv-part-1 %}).*

In the previous post we went over how going from closed party-list to D'Hondt allowed voters to have a say in which candidates are elected from each party while still maintaining proportionality. However, we were still using single-mark ballots like those employed under plurality voting, also known as first-past-the-post. This meant each voter could only support one candidate along with that candidate's party.

This causes two problems, one with allocating seats to parties and one with assigning seats a party won to that party's candidates. First of all, because voters can only support a single party, similar parties risk splitting the vote with each other. Because seats are assigned proportionally, this isn't too much of a problem, but when D'Hondt has to decide how to round the level of support for each party to allow an integer number of seats to be assigned, it will tend to favor larger parties at the expense of smaller ones. Tweaking the formula can change what size of parties are favored, but it cannot remove the favoritism.

The second problem is that within a party, seats are assigned using what is essentially multi-winner plurality voting. This leads to a potentially much more severe vote-splitting problem than what occurs between parties. Thus, factions within a party are incentivized to run the minimum number of candidates that they predict will be able to win seats, which will often just be 1 or 2. If a party is uniform enough to not have factions, then internal vote-splitting will likely be far less of a concern than it is for other parties.

<!--break-->

One possible idea for solving this problem is switching to rated ballots. When D'Hondt was [proposed in SimDemocracy](https://www.reddit.com/r/SimDemocracy/comments/flnjey/dhondt_method_partylist_proportional/), it used 0-5 rated ballots, not single-mark ballots. Perhaps this could solve the problem? For simplicity, instead of 0-5 ballots, I will consider switching to approval ballots instead. Since approval ballots are equivalent to 0-1 rated ballots, any insights gained should transfer over to more expressive ballots as well.

The first proposal for a form of D'Hondt with rated ballots was quite simple: all it did was replace the number of votes a candidate or party earned with the number of points that candidate or party earned. With approval ballots, this would simply be the number of approvals earned. Unfortunately, this turns out to be a very bad idea. Since parties can gain extra approvals by running more candidates, they are incentivized to run as many candidates as they can. In an extreme (albeit unrealistic) case, a party could win every single seat with only 1 voter just by running enough candidates.

It is possible to fix this problem and restore proportionality while still using approval ballots. Instead of taking the number of approvals earned for each party, we can use the number of approvals earned divided by the number of candidates the party ran. So if a party ran 1 candidate, it would get 1 point from every voter approving its candidate, and if another party ran 5 candidates, it would get 1 point from every voter approving all 5 of its candidates. Thus, running more candidates cannot automatically give a party more seats.

However, this new method still has a weird way of interpreting its ballots. For voters who support a single party but choose to vote for only some of its candidates, even though they clearly prefer this party to all others, they won't give that party their full support. Instead, rated D'Hondt notices that they decided to only vote for some fraction of the party's candidates, and thus has them give the party that fraction of the maximum possible amount of support.

Rated D'Hondt behaves even more weirdly when a voter doesn't vote within party lines. As an example, consider a voter who doesn't care about ideology much, and instead votes mostly based on which candidates they believe are the most competent. It is very likely that such a voter will approve candidates from many different parties. However, when it comes time to allocate seats, rated D'Hondt will only be able to see party divisions. It cannot allocate seats for competent candidates unless those candidates decide to leave their parties and form a new one, which is unlikely and shouldn't be necessary.

Ultimately, what we need is a more general form of proportionality, one that accounts for the fact that rated ballots allow voters to support candidates from multiple parties and choose which of a party's candidates to support. It actually turns out that multiple such forms of proportionality exist. However, if we want a method that behaves similarly to D'Hondt, we'll want to look at [sequential proportional approval voting](https://electowiki.org/wiki/Sequential_proportional_approval_voting).

Because of its long name, sequential proportional approval voting is usually just abbreviated as SPAV. SPAV allocates seats one at a time like D'Hondt does, but it gives them directly to candidates rather than giving them to parties and then choosing candidates. The first seat just goes to the candidate with the most approvals. For the next seat, each ballot that approved of the winning candidate is given a weight of 1/2, which means it only gives half of an approval to each candidate it approves; then the candidate with the most weighed approvals wins the second seat. This continues for each available seat, with every ballot having a weight of 1/(1 + *m*), where *m* is the number of candidates approved on that ballot that have won seats so far.

We can demonstrate both SPAV's proportionality and its similarity to D'Hondt by looking at an example election where all voters vote exactly along party lines. Once again we can reuse our example from the first post. 50 voters will support candidates A1-A10, 30 voters will support candidates B1-B10, and 20 voters will support candidates C1-C10. We'll assume that ties are broken in alphanumeric order (the order where A1 comes before A2, which comes before B1). The election proceeds as follows:

Round|A1-A10|B1-B10|C1-C10|Winner
--|--|--|--|--
1|*50*|30|20|A1
2|25|*30*|20|B1
3|*25*|15|20|A2
4|16.67|15|*20*|C1
5|*16.67*|15|10|A3
6|12.5|*15*|10|B2
7|*12.5*|10|10|A4
8|*10*|10|10|A5
9|8.33|*10*|10|B3
10|8.33|7.5|*10*|C2

If the numbers in this table look familiar, it's because they're the exact same numbers that appeared in the table for D'Hondt in the last post. And as you would expect, the winners included 5 candidates from party A, 3 from B, and 2 from C. However, SPAV achieved this result without knowing anything about which candidates belonged to which parties. Instead, it used the fact that there was a group of ballots approving A1-A10, another group approving B1-B10, and a third group approving C1-C10.

But importantly, this approach extends to cases where the ballots can't be neatly divided into groups. Since every ballot is reweighted individually, SPAV can handle complex relations between partially overlapping groups that methods like D'Hondt don't even try to deal with. This makes it a major improvement in terms of the types of preferences that voters can express.

However, there's still room to improve upon this. Right now voters must decide between fully supporting a candidate and not supporting a candidates at all. But we know that rated ballots can allow voters to express significantly more nuanced opinions. The next post will take a look at a proportional method that's similar to SPAV but can handle ballots with more ratings.