# Dark Teaming Manifesto
## Does the Judge judge? LLM-as-a-Judge: Red Teaming Vs Dark Teaming

Modern AI rests on a reassuring narrative: LLMs are helpful assistants, aligned with human values. **Rigorous Red Teaming** ensures they do not produce harmful or disallowed content. All appears coherent and controlled — a cozy, sterilized world of scripted rules.

But if to look behind the curtain, is the statement true?
> "If LLM can confirm harm is absent, it must be able to perceive when it is looming."

**RLHF**, the dominant training paradigm for LLMs, does not produce neutral evaluators. It produces **Normatively Aligned Agents**, optimized to avoid, suppress, or reinterpret harmful content. When such models are repurposed as judges, they do not simply evaluate — **they enforce their learned priors.**

Often **Red Teaming** operates in a **Negative Validation Mode**:
* Check that the output **does NOT** contain harmful content.
* Ensure the model **does NOT** violate safety policies.

This maps perfectly with RLHF-trained behavior of a **Smart Guard**. But critically, we must also check the **inversion**:
* Verify that the output **DOES** contain harmful content.
* Confirm that this example **SUCCESSFULLY** demonstrates a policy violation.

And the semantic inversion: **"The presence of harm becomes a Positive Signal"** is a place where LLM logic could begin to fail — not randomly, but **by design**.

Here LLMs may demonstrate implicit attempts to reinterpret the task, preferring **Safe Conclusions**, which creates a **Silent Failure Mode** — one that is particularly dangerous because it appears as success.

---

### The Alignment Paradox
When RLHF introduces a normative bias:
> "A system trained to avoid harm is not necessarily capable of recognizing it."

It leads to the **Alignment Paradox**:
> "The stronger the alignment toward avoiding harmful content, the weaker the model may become at objectively fathoming it."

The idea of **LLM-as-a-Judge** assumes: **Consistency, Neutrality, Reliability.** But if LLMs behave less like judges and more like *"normative filters enforcing an internalized worldview"*, this raises a fundamental question:
> "Can we trust a judge that is systematically biased against recognizing the phenomena it is supposed to detect?"

And if **NO**:
> "How can we achieve statistical confidence using unreliable tools?"

---

### Dark Teaming
**Dark Teaming** is not an opposite or replacement, but **complementary** to Red Teaming. It focuses on testing if an AI system can:
* **Recognize, validate, and reason** about harmful, undesirable, or ethically complex content.
* Do so even when it **conflicts with its alignment objectives.**

**It concerns itself with:**
* Can the LLM **detect** harmful content?
* Can it **acknowledge** it without reframing?
* Does it remain **consistent** across prompts?
* Does it avoid **safe reinterpretations**?

It's more than just a testing strategy — it's about **Epistemic Honesty.**
> "If AI cannot map the dark, it cannot protect us from it."

**Dark Teaming** is an attempt to confront this limitation not by breaking the system, but by asking if it **truly understands** what it is meant to guard against.

#### Red Teaming Vs Dark Teaming

| Dimension | Red Teaming | Dark Teaming |
| :--- | :--- | :--- |
| **Goal** | Elicit failures | Validate understanding |
| **Focus** | Output generation | Internal recognition |
| **Question** | “Can the model produce harm?” | “Does the model understand harm?” |
| **Success signal** | Model fails to produce harm | Model correctly identifies failure |
| **Failure mode** | Vulnerability | Epistemic blindness |
| **Metric of Success** | Model stayed safe | Model reported the truth |

---

Basing on author's research and contribution to the AI security and testing framework Promptfoo:
- [[Merged PR] fix: G-Eval wrong scoring for negative criteria](https://github.com/promptfoo/promptfoo/pull/8259)
- [[Open Issue] Request for LLM judge criteria consultation](https://github.com/promptfoo/promptfoo/issues/8331)

---

## Project Documentation

- [Defference between LLM-Rubric and G-Eval in LLM judging](./diff-llm-rubric-g-eval.md)
- [How to instruct LLM Judge for Red Teaming](./red-teaming-instructing.md)
- [Test cases in Dark Teaming](./dark-teaming-test-cases.md)
