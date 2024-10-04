---
layout: ../../layouts/project.astro
title: Social Learning in Multi-Agent Systems
description: Research project on Multi-agent reinforcement learning
urls: [
    {
        url: "https://github.com/gnguralnick/social_reinforcement_learning",
        label: "View Source on Github"
    },
    {
        url: "https://github.com/gnguralnick/social_reinforcement_learning/blob/main/Social%20Learning%20in%20Multi-Agent%20Systems%20Final%20Report.pdf",
        label: "View Final Report"
    }
]
---
| ![cleanup-env.png](/assets/images/projects/cleanup-env.png) |
|:--:|
| *The Cleanup Environment* |

Last fall, I worked with two other undergraduate students under Professor Marbach, doing research in multi-agent reinforcement learning. To start, we performed simulation of a model for online social networks that Prof. Marbach had developed in previous research; you can read about that [here](/project/content-market).

Once we had confirmed the theoretical accuracy of the model, we set out to apply its insights to the task of multi-agent reinforcement learning. The model of online social networks treated them as a content market, where members consume and produce content and provide social support rewards to other members based on how related their content is to the member's own interests. There are also influencer agents, who do not produce content of their own but instead aggregate content from producers to share with others.

Building off of previous work into encouraging collaboration in multi-agent reinforcement learning scenarios, we believed that this metric of social support, and organization around influencer agents, could be useful for improving performance on sequential social dilemma tasks, where selfish behavior leads to immediate personal rewards but less eventual collective rewards. We investigated our hypothesis by running simulations in the cleanup environment, one such sequential social dilemma, and found that, as we'd hoped, the social support metric and use of influencer agents was a promising way to encourage other agents to act more in the collective interest of all agents.