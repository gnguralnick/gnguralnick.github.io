---
layout: ../../layouts/project.astro
title: LLM Playground
description: Full-Stack application for interacting with large language models
urls: [{
    url: "https://github.com/gnguralnick/llm-playground",
    label: "View Source on Github"
}]
---
![Website Screenshot](/assets/images/projects/llm-playground.png)
Recently, I've been working on my own interface for interacting with large language models. It started as an exercise to get back into building sites, as it had been some time since I had been doing web development. I built the site with a React frontend on Vite and a FastAPI backend, using SQLAlchemy for the ORM layer.

I wanted to have a chat interface that gives all the details about system prompt and model configuration, unlike the interfaces provided by the model providers like ChatGPT where no configuration is possible. By using model APIs, I also ensure that chats aren't used for model training.

Currently, the site supports conversations with OpenAI and Anthropic models by connecting to their APIs. Users provide their own API keys that are linked to their accounts; right now, the site isn't deployed, but this functionality would allow it to be deployed without having everyone just using my own API keys. The connections with the model APIs are implemented with strong polymorphism so that adding support for new model providers is quite easy. In the future, I also plan to add support for tool use, with tools able to be defined in the frontend. 