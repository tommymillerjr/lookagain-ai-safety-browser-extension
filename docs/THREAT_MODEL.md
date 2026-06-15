# Threat Model

LookAgain focuses on user-facing online deception risks.

## Primary Threats

The prototype is designed around risks such as:

- Phishing pages
- Fake login flows
- Credential collection scams
- Impersonation websites
- Suspicious redirect or landing-page behavior
- Social engineering pages using urgency or trust manipulation
- AI-assisted scam content

## User Risk

The project assumes that many users are not security experts and may be targeted through:

- Urgency
- Fear
- Familiar branding
- Fake support flows
- Account recovery prompts
- Payment or gift-card scams
- Credential harvesting

## Security Goal

The goal is not to perfectly classify every website. The goal is to provide timely, understandable friction when risk signals suggest the user should slow down and review before trusting the page.

## Out of Scope

This prototype is not designed to replace:

- Enterprise endpoint detection
- Network security monitoring
- Browser vendor safe-browsing systems
- Full malware analysis
- Law enforcement investigation
- Professional fraud recovery services

## Important Principle

A safety system should be honest about uncertainty. A low score does not guarantee safety, and a high score should explain the risk signals that caused the warning.
