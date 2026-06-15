# LookAgain / BrowseGuard AI

LookAgain is a privacy-first browser safety prototype designed to help users slow down before trusting potentially deceptive websites, login pages, scam flows, or AI-generated manipulation.

The project began as BrowseGuard AI and is being developed toward the broader LookAgain concept: helping people pause, review risk signals, and make safer decisions online.

## Why I Built This

Modern scams increasingly combine phishing, impersonation, urgency, fake login pages, and AI-generated persuasion. Many users do not need more fear-based security tools; they need clear, calm, explainable warnings at the moment of risk.

LookAgain explores how browser-based safety tooling can help users recognize suspicious patterns without sending unnecessary personal browsing data to a backend service.

## What It Does

The prototype focuses on browser-level risk awareness, including:

- Detecting potentially suspicious login, form, link, and page patterns
- Producing simple Low / Medium / High risk outcomes
- Showing stronger warnings only for high-risk cases
- Avoiding unnecessary interruption for low-risk browsing
- Supporting user trust decisions such as proceed, review, or trust a page/site
- Providing explainable page reports instead of black-box warnings

## Safety Philosophy

LookAgain is designed around these principles:

- Privacy-first by default
- No sale of user data
- No advertising-based safety model
- Clear uncertainty instead of pretending AI is perfect
- Explainable warnings users can understand
- Minimize alert fatigue
- Escalate only when risk is meaningful

## Privacy Model

The current prototype is designed to minimize unnecessary data exposure. Detection is focused on local page signals and risk indicators rather than collecting full browsing histories or personal content.

See [Privacy Model](docs/PRIVACY_MODEL.md).

## Threat Model

The project focuses on user-facing deception risks such as phishing, impersonation, fake login flows, scam landing pages, and suspicious credential collection patterns.

See [Threat Model](docs/THREAT_MODEL.md).

## Safety Design

LookAgain uses risk-based intervention rather than warning on everything. Medium-risk signals can be logged or surfaced in reports, while high-risk signals receive stronger user-facing warnings.

See [Safety Design](docs/SAFETY_DESIGN.md).

## Current Status

This is an independent prototype and portfolio project. It is not affiliated with Anthropic, Google, or any browser vendor.

The public version is intentionally curated to show the safety concept, privacy model, and technical direction without exposing private tester information, secrets, or development artifacts.

## Relevance to Trust & Safety and Cyber Threat Investigation

This project reflects practical work at the intersection of cybersecurity, fraud/scam prevention, AI safety, user trust, and online deception detection.

It is especially relevant to roles involving:

- Cyber threat investigation
- AI misuse analysis
- Scam and phishing prevention
- Trust & safety policy
- Abuse detection workflows
- User-facing safety interventions

## Public Demo Code

This repository includes a small sanitized detection-logic demo in [`src/public-demo/risk-scoring-demo.js`](src/public-demo/risk-scoring-demo.js).

It is not the full extension source code. It is a curated portfolio slice that demonstrates the prototype's scoring style, explainable reasons, and privacy-first approach without exposing private implementation details, tester information, secrets, or release artifacts.
