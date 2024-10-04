---
layout: ../../layouts/project.astro
title: Content Market Model of Online Social Networks
description: Research project on online social networks
urls: [
    {
        url: "https://github.com/gnguralnick/content-market-experiment",
        label: "View Source on Github"
    },
    {
        url: "https://github.com/gnguralnick/content-market-experiment/blob/main/Content%20Market%20Report.pdf",
        label: "View Final Report"
    }
]
---
![A social network represented as a graph](/assets/images/projects/graph-social-network.jpeg)

Last fall, I worked with two other undergraduate students under Professor Marbach, doing research in multi-agent reinforcement learning. To start, we performed simulation of a model for online social networks that Prof. Marbach had developed in previous research.

The idea was to represent online social media networks as content markets. Members of the network produce and consume content related to their own interests; consumption occurs by members allocating following rate to producers, up to a fixed attention bound. Members receive a reward signal based on how much other members are consuming their content. There are also influencer agents, who do not produce content but instead aggregate popular content for redistribution. Users can then consume content through the influencer rather than seeking out individual producers; this is presumably more efficient from the users' perspective, as they can receive a wider variety of content without satiating their attention capacity.

Prof. Marbach's previous work defined the formal theoretical model of the optimization problems that each member of the network performs to determine what content they consume and produce. To evaluate the accuracy of this model, we implemented a simulation program that takes in parameters such as the number of members of the community and their interests and successfully optimizes for content produced and consumed until the network converges to equilibrium, where collective rewards are maximized. We used `scipy.optimize` to perform this optimization. We then compared this ending state of the network to the state predicted by the model.

Overall, we found a strong alignment of the simulation results with the predictions of the theoretical model. Over the course of parameter testing, I found that many of the theorems of the original paper could be seen clearly in graphs generated of the types of content that was being produced and consumed and the following rates being allocated towards the various producers and to the influencer. Mainly, we found that the influencer tended to repost content towards the center of the topic space, and users whose interests were closer to this center point benefitted the most from following the influencer; on the other hand, users with more niche interests tended to instead directly follow producers who shared their interests. We also performed some investigation into the possibility of influencer agents emerging naturally as part of the optimization process rather than them being pre-assigned.