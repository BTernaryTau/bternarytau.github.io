---
layout: post
title: "Cooperation in the one-shot prisoner's dilemma"
date: 2024-04-14
---
One of the most important scenarios in [game theory](https://en.wikipedia.org/wiki/Game_theory) is the [prisoner's dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma). In this scenario, two criminals are arrested after working together. The police don't have enough evidence to get the criminals convicted of every charge, but there is a charge for which they do have enough evidence to get a conviction. Thus, the police decide to offer the prisoners a choice. They can either confess to their crimes or remain silent. If both confess, they each receive 2 years in jail. If one confesses and one remains silent, the confessor receives no jail time and the silent prisoner receives 3 years in jail. If both prisoners remain silent, they each receive 1 year in jail. You can see this displayed in the table below.

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Prisoner B remains silent</th>
        <th>Prisoner B confesses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Prisoner A remains silent</b></td>
        <td>A: 1 year<br>B: 1 year</td>
        <td>A: 3 years<br>B: 0 years</td>
      </tr>
      <tr>
        <td><b>Prisoner A confesses</b></td>
        <td>A: 0 years<br>B: 3 years</td>
        <td>A: 2 years<br>B: 2 years</td>
      </tr>
    </tbody>
  </table>
</div>

<!--break-->

We can abstract this scenario by converting the years served in jail into [utilities](https://en.wikipedia.org/wiki/Utility)[^1], replacing confessing with the action "cooperate" and remaining silent with the action "defect", and replacing the prisoners with agents A and B.

<div style="overflow-x:auto;">
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Agent B cooperates</th>
        <th>Agent B defects</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Agent A cooperates</b></td>
        <td>A: 2<br>B: 2</td>
        <td>A: 0<br>B: 3</td>
      </tr>
      <tr>
        <td><b>Agent A defects</b></td>
        <td>A: 3<br>B: 0</td>
        <td>A: 1<br>B: 1</td>
      </tr>
    </tbody>
  </table>
</div>

There are two important facts about this table. The first important fact is that mutual cooperation is better for both agents than mutual defection. The second important fact is that, regardless of what agent B chooses, agent A is always better off defecting, and vice versa. If one agent chooses to cooperate, the other gains 3 utils by defecting and only 2 utils by cooperating. If the first agent instead chooses to defect, the other agent gains 1 util by defecting and 0 utils by cooperating. Thus, it seems like a rational agent playing this game should always defect.

The decision theory used to justify this reasoning is called [causal decision theory](https://en.wikipedia.org/wiki/Causal_decision_theory) (CDT), and it is the widely-accepted standard for rational decision-making. CDT states that an agent should choose the action that will cause the best outcome [in expectation](https://en.wikipedia.org/wiki/Expected_value), which sounds very reasonable. But CDT has some problems. In the case of the prisoner's dilemma, a pair of CDT agents will predictably do worse than a pair of agents that manages to achieve mutual cooperation. Thus, an interesting problem is to figure out what strategies agents can use, if any, to achieve mutual cooperation.

Unsurprisingly, a lot has been written on how to obtain mutual cooperation in the prisoner's dilemma. A popular approach is to consider the [iterated prisoner's dilemma](https://en.wikipedia.org/wiki/Prisoner%27s_dilemma#The_iterated_prisoner's_dilemma), where agents play each other multiple times in a row with knowledge of the actions taken in previous rounds. However, this post will only consider instances of the one-shot prisoner's dilemma, where two agents play each other once and never interact again. One instance of the one-shot prisoner's dilemma is the [psychological twin prisoner's dilemma](https://en.wikipedia.org/wiki/Functional_Decision_Theory#Psychological_Twin_Prisoner's_Dilemma). This scenario is designed to make mutual cooperation in the one-shot prisoner's dilemma as easy and tempting as possible, as it specifies that the agents are psychological twins in identical scenarios that will therefore always behave exactly the same. It also specifies that both agents know this, so they can take it into account when making their decision.

There are only two possible outcomes in this scenario; either both agents cooperate or both agents defect. It seems like this change should make cooperation the rational answer, but there's a catch. There is no causal link between the agents' decisions. Instead, their identical behavior arises from a logical dependency. Because of this, CDT continues to recommend defection in this scenario. Fortunately, there are alternatives that recommend cooperation instead, though to understand the differences between them we will have to look at more scenarios than just the prisoner's dilemma.

One of these proposed alternatives is the notion of [superrationality](https://en.wikipedia.org/wiki/Superrationality). A superrational agent mostly reasons the same way as a CDT agent, but they also recognize that other superrational agents will reason the same way as they themself will. Thus, a superrational agent will take into account the logical dependency introduced in the psychological twin prisoner's dilemma and choose to cooperate with their twin. However, superrationality does not take into account all logical dependencies.

Consider the case of [Newcomb's problem](https://en.wikipedia.org/wiki/Newcomb%27s_problem). In this scenario, a trustworthy and accurate predictor known as Omega sets up a game with two boxes. Box A is transparent and contains $1,000. Box B is opaque and contains either $1 million or nothing. An agent is given the option to take both boxes (two-box) or to just take box B (one-box). The trick is that before the agent chooses, Omega predicts their decision and fills box B if and only if the agent will one-box. Thus, an agent that two-boxes will end up with only $1,000, while an agent that one-boxes will end up with $1 million. However, the presence or absence of the $1 million is not caused by the agent's decision, but rather by Omega's prediction of the agent's decision. This means that CDT recommends two-boxing. Superrationality will do the same, even if Omega is known to be superrational. This occurs because Newcomb's problem is asymmetric; Omega is faced with a completely different decision (whether or not to fill box B) than the agent is (whether or not to take box A in addition to box B).

Superrationality is not the only alternative to CDT, nor is it the most prominent. CDT's main rival is actually something called [evidential decision theory](https://en.wikipedia.org/wiki/Evidential_decision_theory) (EDT). EDT states that an agent should choose the action that will, upon the agent learning that they have taken that action, be evidence of receiving the best outcome in expectation. In other words, an EDT agent considers whether or not it would be good news to learn that they had taken a particular action.

This way of reasoning allows the EDT agent to take into account logical dependencies like those introduced in the psychological twin prisoner's dilemma and Newcomb's problem. Thus, an EDT agent in those scenarios will choose to cooperate with their twin and one-box, respectively. Unfortunately, this nice behavior comes at a cost. EDT agents take into account all statistical correlations, and not all correlations correspond to causal dependencies or logical dependencies.

An example that demonstrates this is the [XOR blackmail](https://arxiv.org/pdf/1710.05060.pdf#page=24) scenario. In this scenario, an agent learns of a rumor that their house might be infested with termites. If this is true, then they will have to pay $1 million in order to remove the infestation and repair the house. A trustworthy and accurate predictor has investigated whether or not this claim is true. This predictor then decides whether or not to send a letter to the agent asking for $1,000, but they make this decision in a unique way. Specifically, the predictor sends the letter if and only if one of the following is true.

1. The agent's house has termites, and the predictor predicts that the agent won't send them $1,000 upon receiving the letter.
2. The agent's house does not have termites, and the predictor predicts that the agent will send them $1,000 upon receiving the letter.

The letter also contains an explanation of the above, so the agent knows that either 1 or 2 is true. Upon receiving the letter, a CDT agent notices that choosing to pay the $1,000 will not cause a termite infestation to disappear, and therefore decides not to pay the $1,000. A superrational agent will reason the same way, even if they believe the predictor to also be a superrational agent. However, an EDT agent will reason that it would be good news to learn that they had paid the $1,000, since this would indicate that there is no termite infestation and they don't have to pay $1 million to remove it. Thus, an EDT agent does decide to pay the $1,000. This makes the EDT agent a target for any blackmailer who can set up a similar scenario.

Is there a decision theory that can generalize the behavior of superrationality by taking into account logical dependencies like those in the psychological twin prisoner's dilemma and Newcomb's problem, but not purely statistical dependencies like the one in XOR blackmail? [Logical decision theories](https://arbital.com/p/logical_dt/) are a family of decision theories that attempt to do so.

One example of a logical decision theory is [proof-based decision theory](https://web.archive.org/web/20150507152718/https://agentfoundations.org/item?id=50), which arose from work done in [Robust Cooperation in the Prisoner's Dilemma: Program Equilibrium via Provability Logic](https://arxiv.org/abs/1401.5577). This paper constructed an agent called FairBot, which when given the source code of the bot that it is playing against, cooperates if it can prove that its opponent cooperates when given FairBot's source code. Thanks to the existence of [Löb's theorem](https://en.wikipedia.org/wiki/L%C3%B6b%27s_theorem)[^2], FairBot actually will cooperate with itself without getting stuck in a loop of self-reference! At the same time, FairBot will never allow itself to be exploited by cooperating with an opponent that will defect against it.

The same paper went on to construct a second agent that will cooperate with itself called PrudentBot. PrudentBot behaves similarly to FairBot and will always defect when its opponent defects. In addition, it will choose to defect when up against an agent that always cooperates[^3], unlike FairBot which cooperates in that scenario and thus loses utility. Even more impressively, FairBot and PrudentBot will actually cooperate with each other, indicating that mutual cooperation can go beyond situations in which the agents reason identically. Proof-based decision theory does come with some serious limitations, the most obvious being that it can only reason about agents properly when it has access to and can prove statements about their source code.

A logical decision theory that lacks this limitation is [functional decision theory](https://arxiv.org/abs/1710.05060) (FDT). FDT states that an agent should choose the action that, when output by all instances of their decision function, causes the best outcome in expectation. An FDT agent will thus consider not just the effects of themself making a decision, but also the effects of other agents that reason like them making the same decision (like their psychological twin), the effects of other agents predicting that they will make the same decision (like Omega and the XOR blackmail predictor)[^4], and the effects of their decision in any other situation in which an instance of that decision occurs.

In the psychological twin prisoner's dilemma, an FDT agent recognizes that their twin uses the same decision function as themself and thus cooperates, knowing that their twin will also cooperate. In Newcomb's problem, an FDT agent recognizes that their decision function controls whether or not box B is filled via Omega's prediction, and thus one-boxes in order to receive $1 million. In XOR blackmail, an FDT agent recognizes that their decision function is one of the factors controlling the predictor's decision, but the agent also recognizes that their decision function has no influence over whether or not termites are present, and thus does not send $1,000 upon receiving the letter.

Not only can FDT outperform CDT in some scenarios and EDT in others, it can sometimes outperform both in the same scenario. [Parfit's hitchhiker](https://arbital.com/p/parfits_hitchhiker/) falls into this category. In this scenario, a selfish driver comes across an agent stranded in the desert. The driver offers to take the agent to the nearest city, but only if the agent will pay them $1,000. The agent does not have $1,000 on them, but they can withdraw $1,000 from an ATM in the city. The driver is an expert at using facial microexpressions to detect lies, and so they ask the agent whether or not they will pay $1,000 upon arriving in the city. If the agent refuses or lies, the driver leaves them to die in the desert. Otherwise, the driver brings them to the nearest city.

In this scenario, the decision is whether or not to pay the $1,000 once in the city. A CDT agent reasons that paying the $1,000 will not cause them to be rescued because they already have been rescued, and thus refuses to pay. A superrational agent reasons similarly, even if the driver is also superrational. An EDT agent reasons that since they have already been rescued, learning that they had paid $1,000 would be bad news since that just means they have lost $1,000. Thus, all of these agents end up dead in the desert.

An FDT agent that values their own life more than $1,000 reasons differently. They recognize that their decision function controls not just their actual decision, but also their own prediction of their decision. They also know that this prediction will affect their microexpressions in a way that determines whether the driver will believe them if they say they will pay. Thus, the agent will decide to pay up once in the city, ensuring that they are rescued.

FDT is very good at achieving the best possible outcomes in various scenarios. However, it does have a major shortcoming at the time of writing. It relies on a model of logical and causal dependencies in order to make its decisions, but as of now there is no fully general method for producing these models. In contrast, [there is a known method for producing the purely causal model](https://ftp.cs.ucla.edu/pub/stat_ser/r485.pdf) used by CDT. Whether or not an analogous method is found for FDT could be the difference between it eventually replacing CDT as the standard for rational decision-making or fading into obscurity.

[^1]: For this example, I used $$u = 3 - y$$ for the conversion, but this is somewhat arbitrary.

[^2]: If you're interested in learning about Löb's theorem and hate mathematical notation, I highly recommend reading [The Cartoon Guide to Löb's Theorem](https://www.scribd.com/embeds/4844564/content).

[^3]: It is arguably the case that an agent which always cooperates is less like an actual agent and more like a sign with the word "cooperate" written on it. Thus, there is no advantage to rewarding it with cooperation.

[^4]: This post will assume that all predictions are made based on the agent's decision function and its consequences. It is possible to create scenarios in which predictions can be made with high accuracy based on factors not influenced by the agent's decision function, such as an agent's date of birth. In this case, the prediction takes advantage of an existing statistical correlation without creating a logical dependency, which can change the behavior of logical decision theories.
