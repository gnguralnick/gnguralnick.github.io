---
layout: ../../layouts/project.astro
title: Fine-Tuning Stable Diffusion
description: Evaluating the efficacy of several methods for introducing new concepts to diffusion image generators
urls: [
    {
        url: "https://github.com/gnguralnick/stable-diffusion-fine-tuning",
        label: "View Source on Github"
    },
    {
        url: "https://github.com/gnguralnick/stable-diffusion-fine-tuning/blob/main/report.pdf",
        label: "View Final Report"
    }
]
---
![stable-diffusion.png](/assets/images/projects/stable-diffusion.png)

Large pre-trained diffusion models have recently become the by far preferred choice for image generation tasks as they can render high-fidelity images that align closely to textual prompts. Stable Diffusion is one such model, famous in addition for being open source with freely usable weights. However, given a specific object, such as an unpublished piece of artwork, it's unlikely that a diffusion model could generate a matching image, as no textual prompt could possibly convey the level of detail necessary. I and two other students investigated several methods for fine-tuning diffusion image generators to be able to generate such specific images by introducing new concepts to the models' knowledge.

Specifically, we evaluated the efficacy of textual inversion, Dreambooth, and low-rank adaptation (LoRA):
 - Textual Inversion (TI), unlike typical fine-tuning methods, does not actually add or update model weights. Instead, it attempts to learn the best possible caption embedding vector to cause the model to produce an image matching the desired output. Put simply, a new pseudo-word is added to the model's vocabulary to represent the target object, and gradient descent is used to optimize this pseudo-word such that the model's output when prompted with the pseudo-word matches the target images as closely as possible. This method can also be used for style transfer. By using a new embedding rather than actually updating model weights, TI hopes to be more efficient than traditional fine-tuning methods while still achieving high accuracy.
 - Dreambooth similarly introduces a new pseudo-word to the model's vocabulary. However, it also conditions this pseudo-word on a next-closest descriptor (e.g "dog") for the object. It then fine-tunes specifically the model's representation of that next-closest descriptor, treating the pseudo-word as an adjective, to encourage the model to output images matching the target examples. So, after training, prompts may be of the form "a \[V\] dog", where \[V\] is the pseudo-word.
 - Low Rank Adaptation (LoRA) is a more general fine-tuning method that uses matrix decomposition on the weight matrices of a neural network to make fine-tuning more efficient. By decomposing the weight matrices into lower-dimensional forms, the fine-tuning process is more constrained and gradient-based updates are much simpler. Theoretically, this should achieve results equivalent or comparable to full fine-tuning of the weight layers.

We evaluated the results of these fine-tuning methods using CLIP cosine similarity and Fréchet Inception Distance and found that while Dreambooth was most accurate at simply reproducing the target images, LoRA was the best at enabling the model to produce images involving the target object in more complex settings.