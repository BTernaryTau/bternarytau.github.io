---
layout: post
title: "Why I like STAR voting: simplicity and familiarity"
date: 2021-04-25
---
I am a big supporter of STAR voting as a practical reform for single-winner elections in the United States. Under STAR voting, voters rate each candidate on a scale from 0 to 5, the two candidates with the highest total scores become finalists, and whichever finalist is rated higher on the most ballots wins. This is where the full name—Score Then Automatic Runoff—comes from; the first round of tallying chooses the finalists based on their score totals, and then the second round of tallying is an automatic runoff with each ballot counting for the finalist that voter preferred (or counting as an abstention if the voter liked both finalists equally).

There are a lot of reasons that I like this method, but one important reason is how simple it is. As you saw above, I can describe the entire method in a single sentence. Many other competing reforms like [single-winner ranked choice voting](https://en.wikipedia.org/wiki/Instant-runoff_voting) can only be partially explained in a single sentence.[^1] STAR isn't *the* simplest voting reform out there—that honor goes to approval voting—but I think a lot of people overestimate its complexity. Ranked choice voting, the most popular reform option in the U.S., is much more complex than STAR. If ranked choice voting can make as much progress as it has, then STAR is more than simple enough to be a viable reform, and anyone dismissing it on complexity grounds is doing it a disservice.

<!--break-->

But STAR's simplicity doesn't even have to stand on its own, as it has a level of familiarity that's rather surprising. Consider how easy it is to compare it to the familiar primary-followed-by-general election structure. The first round of STAR corresponds to a nonpartisan blanket primary, only it uses score voting rather than [single-choice plurality voting](https://en.wikipedia.org/wiki/Plurality_voting). The second round then corresponds to the general election that only has the two candidates who advanced past the primary. This means that the top two runoff is the perfect jumping-off point for explaining how STAR voting improves on current voting methods. It's easy to explain how using score for the first round prevents the vote-splitting that occurs under plurality nonpartisan primaries, and how holding an automatic runoff instead of a manual one avoids problems like inconsistent turnout and increased election costs.

Another familiar aspect of STAR is the ballot. Pretty much everyone is familiar with 5-star ratings and how to fill them out. This means that when voters encounter a STAR ballot, they'll already understand how to use the interface. STAR voting takes advantage of this to reduce its apparent complexity even further while also reassuring voters that the ballot is collecting useful information about their preferences.[^2]

This is all well and good as far as voter understanding is concerned, but what about actually administering elections? It turns out STAR's simplicity extends to its implementation as well. Tabulating STAR ballots using computers is of course easy, but [counting ballots by hand](https://docs.google.com/document/d/1Esq0okk_bNSM8qPmSQQb1PePaKktkAoZqaXdAL_1Npg/edit#bookmark=kix.bp7fpg2fjneh) is also straightforward. STAR is precinct-summable, which means that tabulation only requires individual precincts to report the score totals for each candidate and the head-to-head totals for each pair of candidates, rather than reporting entire ballots as is necessary for ranked choice voting.[^3] STAR is also simple enough to be [compatible with risk-limiting audits](https://docs.google.com/document/d/1Esq0okk_bNSM8qPmSQQb1PePaKktkAoZqaXdAL_1Npg/edit#bookmark=id.ee6pv3sl5jls), so implementing it won't compromise election security.

STAR voting isn't the simplest method, nor is it the most familiar. If these were the only traits it had going for it, it would be an altogether unremarkable method. But we've only scratched the surface of what makes STAR voting a great method. In the next post I plan to elaborate more on the 5-star ballot and what makes it superior to nearly all other ballot formats. But for now, I hope you have a deeper appreciation of how simple STAR is, how it relates to concepts voters are familiar with, how easy it is to implement, and why those properties make it a viable reform.

[^1]: Unless you cheat and use a run-on sentence. And I don't mean the type of run-on sentence that's just two sentences fused together, it has to be a really bad run-on sentence.

[^2]: STAR ballots actually collect better information than 5-star ratings since each voter is rating the same set of candidates instead of only rating the products/apps/whatever they happened to try out. I'll talk more about the quality of the information that STAR collects in the next post.

[^3]: Alternatively, tabulation can be done in two rounds, which eliminates the need to report head-to-head totals for all pairs of candidates besides the pair of finalists (except possibly in the case of ties).