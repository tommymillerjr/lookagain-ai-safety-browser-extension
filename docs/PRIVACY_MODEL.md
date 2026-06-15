# Privacy Model

LookAgain is designed around a privacy-first safety model.

## Goals

- Reduce user exposure to scams, phishing, impersonation, and deceptive login flows
- Avoid unnecessary collection of personal browsing data
- Keep risk evaluation explainable
- Avoid an advertising or data-resale business model

## Data Minimization

The prototype is designed to focus on risk signals rather than full user browsing content.

Examples of risk signals include:

- Suspicious hostname or path patterns
- Login or credential collection context
- Risky page structure
- User interaction with potentially deceptive flows
- Known warning-trigger conditions

## Design Boundaries

The project is intentionally cautious about:

- Sending sensitive page content to external services
- Storing unnecessary browsing history
- Treating AI output as authoritative
- Creating surveillance-style monitoring
- Using fear-based warnings for low-confidence cases

## User Trust

Safety tools should earn user trust through restraint, clarity, and transparency. LookAgain is designed to warn when it matters, explain why, and avoid overwhelming users with constant low-value alerts.
