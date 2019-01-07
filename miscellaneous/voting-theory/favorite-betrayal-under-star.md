---
layout: default
title: "Favorite betrayal under STAR"
---
# {{ site.title }}
## {{ page.title }}

STAR voting is known to fail the [favorite betrayal criterion](https://en.wikipedia.org/wiki/Comparison_of_electoral_systems#Strategy_criteria), but it is unclear under what situations favorite betrayal is incentivized. In [A Farewell to Pass/Fail:
Why We Ditched Later No Harm](https://www.starvoting.us/farewell_to_pass_fail), Emily Dempsey says:

> Specifically, STAR Voting only incentivizes Favorite Betrayal when there is a Condorcet Cycle.  Not much is known about how likely Condorcet Cycles are in real-world elections, but they are certainly less likely (and, I would wager, much more difficult for a voter to predict) than other problematic phenomena such as Vote Splitting and Center Squeeze Scenarios, in which many other voting systems incentivize Favorite Betrayal and STAR Voting does not.

On the other hand, Wikipedia [states the following](https://en.wikipedia.org/wiki/Comparison_of_electoral_systems#cite_note-starFB-33):

> In STAR voting, in order for favorite betrayal to be strategically advantageous, four separate things must be true: the favorite candidate X must be in the runoff under an honest vote, X must lose the runoff under an honest vote, the betrayal beneficiary Y must not be in the runoff under an honest vote, and the Y must win the runoff under a strategic vote.

Given that these situations are not identical but merely partially overlap, there seems to be disagreement on this issue. To help resolve this, here is an example where favorite betrayal is incentivized:

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
        <td>1</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
</div>

In this election, Candidate A receives 36 points, Candidate B receives 31 points, and Candidate C receives 36 points, so A and C are the finalists. A is favored over C on 2 ballots while C is favored over A on 8 ballots, so C is the winner. However, the voter in the first row can change this outcome by betraying their favorite candidate:

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
        <td>1</td>
        <td>1</td>
        <td>5</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
</div>

Now Candidate A receives 32 points, Candidate B receives 35 points, and Candidate C receives 36 points, so B and C are the finalists. B is favored over C on 7 ballots while C is favored over B on 3 ballots, so B wins the election. Notice that this voter cannot achieve this result by simply rating A and B the same; A will still have more points than B, preventing B from reaching the runoff.

Importantly, this example lacks a Condorcet cycle. Instead, B is the Condorcet winner, and will always win in the runoff. The only reason B originally loses is because they have too low a score to make the runoff. After looking more closely at how favorite betrayal was induced in this scenario, there seem to be four requirements:

1. C must beat A pairwise
2. B must beat C pairwise
3. A must beat B (and anyone else besides C) scorewise
4. C must beat B (and anyone else besides A) scorewise

where A is the favorite, B is less preferred than A, and C is less preferred than both A and B. Notably, the first three requirements *almost* force a Condorcet cycle. The only reason they don't is because A can beat B scorewise but lose to B pairwise, as in the example given above.

These requirements seem to match the requirements Wikipedia specified. However, Wikipedia does not indicate how common such situations are likely to be. While determining that is beyond the scope of this page, it is worth noting that it seems likely to be uncommon. First of all, B must beat C pairwise while C beats B scorewise. Second, either B must beat A pairwise while A beats B scorewise, or A, B, and C must form a Condorcet cycle. Two reversals between pairwise and scorewise outcomes is probably a rare situation, as is one such reversal and a Condorcet cycle.