---
layout: post
title: "STAR voting in an interstate compact"
date: 2018-10-14
---
Jameson Quinn [lays out a proposal](https://wiki.electorama.com/wiki/3-2-1_voting#For_US_presidential_elections) for an interstate compact that links the result of the US presidential election to the national popular vote, similar to the [National Popular Vote Interstate Compact](https://www.nationalpopularvote.com/). However, unlike the NPVIC, this compact is designed to support not just [plurality voting](https://en.wikipedia.org/wiki/Plurality_voting), but other voting methods as well. Specifically, [approval](https://en.wikipedia.org/wiki/Approval_voting), [score](https://en.wikipedia.org/wiki/Score_voting), and [3-2-1](https://wiki.electorama.com/wiki/3-2-1_voting) are all compatible.[^1] Two notable methods are missing from this list: [instant-runoff voting](https://en.wikipedia.org/wiki/Instant-runoff_voting), supported by [FairVote](https://www.fairvote.org/) (though under the name ranked choice voting), and [STAR voting](https://en.wikipedia.org/wiki/STAR_voting), supported by [The Equal Vote Coalition](https://www.equal.vote/).

<!--break-->

For reasons I won't go into here, I am more interested in STAR. Thus, I chose to work on extending the proposal to work with it. Since STAR and 3-2-1 are both rated runoff methods, I decided that it made sense to start with the procedure for 3-2-1 and modify it to fit STAR. The procedure I came up with is simply an addition to step 3 of the proposal, and works as follows:

Step 3: Possibly looking at the raw totals of other states, each state publishes its final totals. For a state using STAR, two finalists are first found by converting the raw totals into scores from 0 to 1 and selecting the two candidates with the highest average scores. Raw totals are converted as follows:

* Plurality – the candidate voted for receives 1 point, and all others receive 0
* Approval – approved candidates receive 1 point, and all others receive 0
* Score – the minimum score is subtracted from all scores, which are then divided by the new maximum score
* STAR – same process as score
* 3-2-1 – "good" ratings are 1 point, "OK" ratings are 0.5 points, and "bad" ratings are 0 points

Once the finalists are selected, final local totals are generated for each candidate. For each STAR ballot, 1 point is awarded to the highest-rated finalist (or both if tied) as well as any higher-rated candidates. Other candidates rated the same or lower (including the lower-rated finalist, if there is one) receive 0 points.

While step 3 was the only one to require any alterations, it was the longest step by far even before the STAR-specific instructions are added. It's also the step that's hardest to get right. Quinn gave a list of 4 criteria that the final local totals and the procedure that generates them should meet:

* Each individual local ballot contributes between 0 and 1 points to each candidate's final local tally.
* A ballot will always contribute 1 point to its most-preferred candidate and 0 points to its least-preferred candidate.
* A ballot will never contribute more points to a less-preferred candidate than to a more-preferred one.
* If all states used the same final local tally procedure, the winner would be the STAR winner.[^2]

The first criterion is obviously met since every candidate receives exactly 0 points or 1 point. The second criterion is met so long as it does not require all most-preferred and least-preferred candidates to receive the same number of points in the event of ties. The third criterion is met because all candidates receiving a score above that of the highest-rated finalist earn 1 point, and all candidates receiving a score below that of the highest-rated finalist earn 0 points. Unfortunately, the fourth criterion is not met by this procedure, as shown by this counterexample:

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
        <td>5</td>
        <td>0</td>
      </tr>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>4</td>
        <td>0</td>
      </tr>
      <tr>
        <td>2</td>
        <td>4</td>
        <td>5</td>
        <td>0</td>
      </tr>
      <tr>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>4</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</div>

Candidate A receives 22 points, Candidate B receives 23 points, and Candidate C receives 16 points, so A and B are the finalists. A is favored over B on 5 ballots while B is favored over A on 6 ballots, so B is the winner under STAR. However, the procedure I specified assigns 6 points to A, 7 points to B, and 8 points to C, so C ends up being the winner.

One thing that makes this example weird is that half the voters only rated candidates 0, 1, or 2, and thus only employed half of the available range of scores. Unfortunately, assuming all voters use the full range of their ballot does not prevent this problem:

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th>Number of Voters</th>
        <th>Candidate A</th>
        <th>Candidate B</th>
        <th>Candidate C</th>
        <th>Candidate D</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>5</td>
        <td>5</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>5</td>
        <td>0</td>
      </tr>
      <tr>
        <td>5</td>
        <td>5</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>6</td>
        <td>4</td>
        <td>5</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td>5</td>
        <td>2</td>
      </tr>
      <tr>
        <td>8</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
</div>

In this example, every voter rates at least one candidate 0 and at least one candidate 5. Candidate A receives 62 points, Candidate B receives 63 points, Candidate C receives 56 points, and Candidate D receives 55 points, so A and B are still the finalists. A is favored over B on 13 ballots while B is favored over A on 14 ballots, so B is the STAR winner. My procedure assigns 14 points to A, 15 points to B, 16 points to C, and 15 points to D, so under it C is the winner.

Under what circumstances does this procedure deviate from simple STAR voting? Well, the first step will select the same finalists since the ratings are altered in a way that preserves the relative differences between their sums, then added and compared as in STAR. For the second step, STAR effectively awards points to the finalists in the same way that my procedure does.[^3] However, unlike my procedure, STAR never awards any points to non-finalists.

Since finalists are awarded points in the same way, the finalist that loses under STAR will never win under this procedure. However, a non-finalist might win if they are higher-rated than both finalists on over half the ballots. This is because every ballot assigns a point to at least one finalist, so at least one finalist will earn points from half the ballots or more. Thus, to beat this finalist, the non-finalist will have to be rated higher than both finalists on over half the ballots, since this is the only way the non-finalist can earn points from over half the ballots. This implies that failure to choose the STAR winner is rare, since this situation should not arise often.

We can derive a couple interesting properties from this information. First of all, a non-finalist winner will necessarily beat both finalists in pairwise matchups. Since a finalist winner necessarily beats the other finalist in a pairwise matchup, this means that my procedure never elects the Condorcet loser. It also means that for 3 candidate elections, the winner under my procedure will always be either the STAR winner or the Condorcet winner. This does not hold for 4 or more candidates; in the second example I gave, D is the Condorcet winner, not C.

Of course, all of this assumes that every state is using this procedure, which implies that all states have chosen to use STAR voting. In that case, it should be easy to amend the interstate compact to simply calculate the national STAR vote if that is desirable. What's more relevant is what happens when this procedure is used alongside the procedures for other voting methods, which is what the first three criteria cover. Thus, I chose to prioritize meeting them over the last criterion.

Overall, I feel this is reasonable for a first version of an extension of Quinn's proposal to STAR voting. Given the assessment I was able to provide, I see no reason why this procedure would behave badly. It converts STAR ballots to scores of 0 or 1 in a way similar to how 3-2-1 ballots are converted, and while it can't guarantee the STAR result within the states that use it, it can only fail to give the STAR result when another candidate is rated higher than the two finalists on over half the ballots, an event which should be rare.

[^1]: It also works with [borda count](https://en.wikipedia.org/wiki/Borda_count), but because borda is (at least arguably) worse than plurality, I have chosen to omit it.
[^2]: Since Quinn was applying the criteria to the tally procedure for 3-2-1 voting, this originally said "the 3-2-1 winner".
[^3]: It's probably more accurate to say that STAR awards 0 points to both finalists for ballots where they are tied, but saying it awards 1 point to both like my procedure does will never change the outcome, so I ignore this for simplicity.
