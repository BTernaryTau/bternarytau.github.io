---
layout: post
title: "The motivation behind SPSV, part 2"
date: 2020-10-24
---
*This blog post has been adapted from [a series of posts](https://www.reddit.com/r/SimDemocracy/comments/ieogtk/the_motivation_behind_spsv_series/) written for [r/SimDemocracy](https://www.reddit.com/r/SimDemocracy/). If you haven't read [the previous entry]({% post_url 2020-10-23-the-motivation-behind-spsv-part-1 %}), please do so.*

We've seen that closed party-list gives more representative outcomes than non-proportional methods like bloc score. However, it also failed to give voters a say in which candidates from a given party would be elected. In the previous post's example election, this didn't matter since the voters didn't have opinions on the individual candidates anyway. But what happens when they do have such opinions, as is the case in real elections?

If the parties all share their voters' preferences, then this isn't a problem since the party can just choose the candidates the voters want. But if party insiders prefer a different set of candidates, then the voters could feel cheated out of their say in which candidates get elected. Needless to say, this should not happen in a legitimate election.

<!--break-->

One way of fixing this problem is to switch to the [D’Hondt method](https://en.wikipedia.org/wiki/D%27Hondt_method). This method is named after Belgian mathematician Victor D'Hondt, who came up with it in 1878. However, it was actually first proposed by Thomas Jefferson in 1792, so it is sometimes referred to as Jefferson's method instead. Instead of casting a vote for a single party, voters cast their vote for a single candidate, as is done under single-choice plurality voting. These votes are then used to determine both how many seats each party gets and which candidates from each party are elected.

To allocate seats, every party is assigned the votes received by each of its candidates. The first seat is given to the party with the most votes. For the next seat, the party that won the first seat has its total number of votes halved, and then the party with the most votes remaining wins. This continues for each available seat, with every party having 1/(1 + *m*) of their original vote count, where *m* is the number of seats that party has won so far.

This can be thought of as splitting that party's votes between the seats they've already won and the seat they're trying to win each round. If a party already has 3 seats, then it only has 1/(1 + 3) = 1/4 of its votes remaining since if it won another seat, it would have to split its votes among the 4 seats to justify having all of them. Thus, it can only afford to put 1/4 of its votes toward winning a new seat. This ensures that each seat has approximately the same number of votes allocated to it, as a party that wins 4 seats will have needed about 4 times as many votes to do so as a party that wins 1 seat.

Once all seats have been allocated, it is simple to assign candidates to them. For each party, assign the first seat that party won to the candidate from that party with the most votes, assign the second seat to the candidate with the second-most votes, and so on. This allows the voters supporting each party to have a say in what candidates from that party get elected.

In the last post, we went over an example election where the parties A, B, and C ran for 10 seats, and A was supported by 50 voters, B by 30 voters, and C by 20 voters. Closed party-list elected 5 A candidates, 3 B candidates, and 2 C candidates, thus giving a proportional outcome. Using D'Hondt will also result in this outcome, as is demonstrated by the table of vote counts below.

Round|A|B|C
--|--|--|--
1|*50*|30|20
2|25|*30*|20
3|*25*|15|20
4|16.67|15|*20*
5|*16.67*|15|10
6|12.5|*15*|10
7|*12.5*|10|10
8|*10*|10|10
9|8.33|*10*|10
10|8.33|7.5|*10*

While the party proportions are the same, the difference is that D'Hondt will ensure that the elected A candidates are the 5 A candidates with the most votes, and same for the other parties. D'Hondt also specifies how to deal with scenarios where perfect party proportionally is impossible without fractional seats.

Overall, this method gives voters strictly more choice than closed party-list did. However, it still limits voters to supporting a single candidate and a single party. In the next part, we'll look at some proposals for altering this method to resolve this issue.