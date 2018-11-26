---
layout: post
title: "Ranked choice voting is worth supporting"
date: 2018-11-26
---
[Ranked choice voting (RCV)](https://ballotpedia.org/Ranked-choice_voting_(RCV)) has [a](https://www.fairvote.org/rcv#where_is_ranked_choice_voting_used) [lot](http://www.rcvmaine.com/) [of](https://www.voterchoicema.org/about_rcv) [supporters](https://act.represent.us/sign/ranked-choice-voting/) in the U.S. voting reform movement. However, the single-winner version, which also goes by the name instant-runoff voting (IRV), does have some detractors, particularly among those who support rated voting methods instead. Most still agree that RCV is an improvement over the single-choice voting method[^1] used in almost every U.S. election, but a few dispute even this. While I believe that RCV is likely not the best single-winner method, I also believe that it is an improvement over single-choice voting. As such, I think you should support RCV even if you agree with many of the arguments made against it.

The first argument I will address is RCV's failure of [the favorite betrayal criterion](https://www.youtube.com/watch?v=JtKAScORevQ). The favorite betrayal criterion requires that a voting method never allows a voter to get a worse result by giving their favorite candidate maximum support. RCV's failure of this criterion means there are situations in which a strategic voter will "betray" their favorite candidate by ranking them lower than another candidate. In other words, a voter's favorite candidate may sometimes act as a spoiler that must be ranked lower than a more viable candidate in order to avoid the voter's least-preferred outcome.

<!--break-->

But wait, doesn't RCV [eliminate the spoiler effect](http://archive3.fairvote.org/reforms/instant-runoff-voting/irv-and-the-status-quo/spoiler-effect/)? Well, it depends on what you count as a spoiler. If you're only concerned with scenarios where a minor candidate with only a few percent of the vote changes which of two major candidates wins, then yes, RCV eliminates spoilers. But if you also want to take into account scenarios where this candidate builds up enough support to beat the most similar major candidate, only to lose to the other major candidate, then RCV fails to eliminate all spoilers.

However, it's important to keep in mind that single-choice voting doesn't eliminate any of these spoilers. So if you're deciding between it and RCV, it's hard to argue that RCV is worse because it fails the favorite betrayal criterion and allows spoilers. After all, single-choice voting also fails the favorite betrayal criterion and allows even more spoilers! Therefore, while this may be relevant when comparing RCV with other voting methods, it cannot serve as a reason why RCV is worse than single-choice voting.

Another argument made against RCV is that it is [non-monotonic](https://electology.org/monotonicity). This means that there exist RCV elections in which it is possible for a winner to become a loser by receiving more support or vice versa. For example, consider these two scenarios involving candidates A, B, and C:

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Number of Voters</th>
        <th>Rankings</th>
        <th>Number of Voters</th>
        <th>Rankings</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>5</td>
        <td>A > B > C</td>
        <td>5</td>
        <td>A > B > C</td>
      </tr>
      <tr>
        <td>6</td>
        <td>B > C > A</td>
        <td>8</td>
        <td>B > C > A</td>
      </tr>
      <tr>
        <td>6</td>
        <td>C > A > B</td>
        <td>4</td>
        <td>C > A > B</td>
      </tr>
    </tbody>
  </table>
</div>

In the first election, A is eliminated in the first round, and B goes on to win 11 to 6. In the second election, two of the voters who ranked B last in the first election have switched to ranking B first, increasing support for B. However, when the results are found, C is eliminated in the first round, and then A wins 9 to 8!

This behavior is a problem because it seems impossible to justify both outcomes. If it is correct for B to win the first election, then if support increases for B but not the other candidates, surely it must be correct for B to win the second election. Likewise, if it is correct for B to lose the second election, then if support decreases for B but not the other candidates, it intuitively must be correct for B to lose the first election. Thus, for every non-monotonic pair of elections, at least one outcome is incorrect. This implies that at least 50% of non-monotonic elections[^2] choose the wrong candidate.

However, to know how much of an effect non-monotonicity has, we also need to know the frequency of non-monotonic elections. [Estimates for this](https://rangevoting.org/IrvParadoxProbabilities.html#SummTable) show anywhere between 5% and 16% of elections to be non-monotonic. Even worse, when elections where RCV gives the same result as single-choice voting are excluded, estimates jump to between 9% and 36% of elections being non-monotonic. Compare this to single-choice voting, which is a monotonic method and therefore has a 0% rate of non-monotonicity. It seems like non-monotonicity succeeds as an argument against replacing single-choice voting with RCV.

But this argument ignores bad election results that arise for reasons other than non-monotonicity. If you really want to assess the accuracy of a voting method, you'll need to be much more thorough. Luckily, there's a way to do this called [Voter Satisfaction Efficiency (VSE)](https://electology.github.io/vse-sim/VSE/). VSE is calculated by running tons of simulated elections and determining how satisfied voters are as a group with each result. A VSE score of 100% means the voting method always picks the candidate that maximizes voter satisfaction, and a VSE score of 0% means the voting method maximizes voter satisfaction as poorly as randomly selecting a candidate would.

RCV earns VSE scores between 79% and 92%, depending on how strategic voters are. However, single-choice voting only earns between 71% and 86%. This means that despite being monotonic, single-choice voting fails to match RCV's performance when it comes to voter satisfaction. RCV is simply a more accurate method.

Perhaps the most concerning argument against RCV is that it risks "poisoning the well" for voting reform. Even though it performs better than single-choice voting, problems like non-monotonicity giving unintuitive results may lead to RCV being repealed. When a method that doesn't have these problems is proposed by a different group of reformers, voters will choose to vote it down since they have no reason to believe this group of reformers has a better proposal than the last one did.

This isn't entirely hypothetical. There have been several instances where RCV [has been repealed](https://electology.org/irv-repealed), and it intuitively seems like it would be bad strategy to try pushing another voting method in any of those cities. However, an important component of why this seems like a bad strategy is that there would be many other places to try this instead. This suggests that the actual damage that RCV would cause to the movement would be minimal, since you can always just go somewhere RCV hasn't been tried.

On the other hand, there is a very real risk that opposing a method as popular among reformers as RCV is could tear apart the voting reform movement. In my opinion, the worst-case scenario for the movement is that it splits into pro-RCV and anti-RCV factions that each actively oppose the method(s) preferred by their counterpart. In this "nightmare scenario", the factions' fights with each other make it easy for those who benefit from single-choice voting to keep it in place, since they can always get help from one faction to fight the other.

This may strike many as an outlandish scenario, and I hope that it is in fact that improbable. But at the very least, I fear that some less extreme scenario could actually occur and make reform that much more difficult. And we desperately need reform right now. So for the sake of ending single-choice voting, I ask that you support RCV, even if, like me, you don't think it's the best option out there.

There's one final point I'd like to make. Most campaigns for voting reform are currently occurring at the local level, and those that aren't are still only at the state level. There's currently plenty of room for multiple methods to coexist. Supporting RCV does not meaningfully decrease the opportunities available to promote your favorite method. As long as this remains the case, maintaining unity is more important than implementing the absolute best method on every occasion.

If you weren't willing to support RCV before, I hope I've convinced you to start doing so, if only grudgingly. Right now our focus needs to be on replacing single-choice voting; the voting reform movement can figure out what the optimal voting method is as we acquire more data on how well these methods behave in actual U.S. elections. In the meantime, continue advocating for your favorite method(s), but be sure to support other reformers' favorite methods at the same time.

[^1]: This method is commonly called [first-past-the-post voting](https://en.wikipedia.org/wiki/First-past-the-post_voting) or [plurality voting](https://en.wikipedia.org/wiki/Plurality_voting), but I'm avoiding those terms because it's generally not obvious what they refer to.

[^2]: Technically, non-monotonicity is a property of voting methods and pairs of elections, but not individual elections. However, the phrase "non-monotonic election" is often used as shorthand for "election in a non-monotonic pair of elections", which is how I'm using it here.
