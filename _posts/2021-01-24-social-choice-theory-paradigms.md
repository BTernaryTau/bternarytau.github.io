---
layout: post
title: "Social choice theory paradigms"
date: 2021-01-24
---
Within social choice theory, there are two major approaches to evaluating voting methods: pass/fail analysis and probabilistic analysis. Pass/fail analysis primarily consists of defining mathematical criteria that seem desirable to have, then proving which methods pass them and which methods fail them. It also has other aspects like proving that certain sets of criteria cannot all be satisfied by the same voting method; this is where the famous [Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem) comes from. On the other hand, probabilistic analysis does away with this and instead assesses voting method performance using simulations and, where possible, data from real-world elections. This approach has its downsides, but overall I think it is by far the superior evaluation method.

As a simple example of the limitations of pass/fail analysis, I'd like to consider [reversal symmetry](https://en.wikipedia.org/wiki/Reversal_symmetry). Reversal symmetry is passed if reversing the preferences of every voter will always result in a different winner when there are at least two candidates running. The idea behind this criterion is that voting methods should not consider the best candidate to also be the worst candidate. [Single-choice plurality](https://en.wikipedia.org/wiki/Plurality_voting) fails reversal symmetry, since it is possible for one candidate to have both a plurality of first-choice support and a plurality of last-choice "support", which becomes first-choice support if preferences are inverted. On the other hand, [approval voting](https://en.wikipedia.org/wiki/Approval_voting) passes reversal symmetry, since the candidate with the most approvals cannot also be the candidate with the least approvals.[^1]

<!--break-->

But what about a method that almost never violates reversal symmetry, but can do so in a very specific type of scenario? Enter [STAR voting](https://en.wikipedia.org/wiki/STAR_voting). For elections with fewer than 3 candidates, STAR voting will never fail reversal symmetry, and the same holds for elections with more than 3 candidates. However, there is one type of 3 candidate election that causes STAR to fail reversal symmetry.

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Number of Voters</th>
        <th>Candidate A</th>
        <th>Candidate B</th>
        <th>Candidate C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>5</td>
        <td>3</td>
        <td>0</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</div>

Here, Candidate A receives 10 points, Candidate B receives 9 points, and Candidate C receives 6 points, so A and B are the finalists. A is favored over B on 2 ballots while B is favored over A on 3 ballots, so B is the winner under STAR. What happens if we then invert these voters' preferences?

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Number of Voters</th>
        <th>Candidate A</th>
        <th>Candidate B</th>
        <th>Candidate C</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2</td>
        <td>0</td>
        <td>2</td>
        <td>5</td>
      </tr>
      <tr>
        <td>3</td>
        <td>5</td>
        <td>4</td>
        <td>3</td>
      </tr>
    </tbody>
  </table>
</div>

Now Candidate A receives 15 points, Candidate B receives 16 points, and Candidate C receives 19 points, so B and C are the finalists. B is favored over C on 3 ballots while C is favored over B on 2 ballots, so B is again the winner under STAR.

This failure only happens in elections with 3 candidates A, B, and C, where scorewise A>B>C, but pairwise C>B>A. In any other election, STAR will pass reversal symmetry. But in pass/fail analysis, STAR is just considered to fail the criterion, with no consideration as to how often this failure might occur.

This brings us to the first big problem with pass/fail analysis; it doesn't consider how frequently a method fails a given criterion. Proving that a method passes a criterion is useful, as that tells us that the method fails it 0% of the time. Constructing an example election where a method fails a criterion is much less useful, as we have no idea whether the method fails it 1% of the time or 99% of the time. In contrast, probabilistic analysis is specifically geared toward figuring out criterion failure rates.

The other big problem with pass/fail analysis is that it ignores the severity of failures. This is especially important when it comes to strategic voting. There is a big difference between incentivizing semi-honest voting, where voters may have to rank or rate A equal to B when they really prefer A to B, and incentivizing voters to reverse their preferences, ranking or rating B above A when they prefer A to B. Likewise, there is a big difference between strategic voting leading to a slightly less popular candidate being elected, and strategic voting leading to [the least popular candidate being elected](https://electowiki.org/wiki/Dark_horse_plus_3_rivals). Probabilistic analysis can capture these details in a way that pass/fail analysis cannot.

As an example of this, I'd like to introduce the concept of [Voter Satisfaction Efficiency](http://electionscience.github.io/vse-sim/VSEbasic/) (VSE). VSE is a measure of the accuracy of voting methods that is obtained using simulations. The highest possible VSE is 100%, which corresponds to always choosing the best available candidate. A VSE of 0% corresponds to choosing a candidate uniformly at random, and a negative VSE corresponds to performing worse than chance.

To calculate the Voter Satisfaction Efficiency for a given voting method, you first simulate thousands of elections under that method. You then calculate how well-liked each candidate is by the electorate, and use those values along with the knowledge of which candidate the voting method chose in each election to obtain a final value for that method's VSE. Importantly, this cannot be done using elections in real life because we have no reliable way of determining how satisfied with each candidate each voter would be. Using simulated voters eliminates this problem, and it also allows us to use a greater number of elections for the calculation.

In addition to comparing VSE across different voting methods, we can also compare VSE across different voter behaviors. This allows us to capture details and nuances that pass/fail analysis usually misses. One great example of this is present in [Jameson Quinn's VSE simulations](http://electionscience.github.io/vse-sim/VSE/). In these simulations, Quinn compares a number of voting methods under several different behaviors, including all honest voters and all strategic voters. If we only focus on [Borda count](https://electowiki.org/wiki/Borda_count) and [score voting](https://electowiki.org/wiki/Score_voting) with a 0-10 ballot, we can see that under honesty, both have a VSE of around 97%, which is really good. However, if we switch to considering their behavior under strategic voting, we find that score now has a VSE of 96%, which is a little lower, but not much. On the other hand, Borda's VSE drops all the way to -11%! It turns out that rather than being a mere hypothetical, it is actually possible for strategic voting to cause one of the worst possible candidates to be elected so often that the voting method underperforms *selecting a candidate completely at random*. This is the sort of detail that the usage of pass/fail analysis risks overlooking.

Ultimately, the issue with pass/fail analysis lies in the "fail" part. If a method passes a criterion, then we know both the frequency and severity of failures, which is very useful. It's when a method fails a criterion that we find ourselves knowing that the method isn't perfect, but almost nothing else.

[^1]: For simplicity, we ignore all elections in which ties occur, as is common in pass/fail analysis.