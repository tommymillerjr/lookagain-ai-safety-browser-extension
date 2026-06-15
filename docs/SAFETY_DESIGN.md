# Safety Design

LookAgain uses a risk-based intervention model.

## Risk Levels

The prototype organizes page risk into simple user-facing outcomes:

- Low: minimal interruption
- Medium: visible in reports or history, but not necessarily disruptive
- High: stronger user-facing warning and additional friction

## Why Not Warn on Everything?

Constant warnings create alert fatigue. If users are interrupted too often, they may stop trusting the tool or blindly click through.

LookAgain is designed to reserve the strongest warnings for cases where risk is meaningful.

## Explainability

Warnings should help users understand the concern. Instead of only saying "dangerous," a good warning should explain what looked suspicious, such as:

- The page appears to request credentials
- The hostname or path looks unusual
- The flow resembles a deceptive login or impersonation pattern
- The page includes scam-like urgency or trust signals

## User Control

Users should be able to proceed, review more details, or trust a page/site when appropriate. Safety tools should inform decisions, not remove agency without explanation.

## Design Principle

The goal is calm, useful friction: enough to help a user pause before a mistake, but not so much that normal browsing becomes frustrating.
