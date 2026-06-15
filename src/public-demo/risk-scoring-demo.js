/**
 * LookAgain / BrowseGuard AI - Public Risk Scoring Demo
 *
 * This is a sanitized portfolio example, not the full production extension source.
 * It demonstrates the style of explainable, privacy-conscious scoring used by the prototype.
 *
 * Privacy note:
 * - This demo evaluates URL structure and page-signal metadata.
 * - It does not collect passwords, cookies, form values, query strings, or full page text.
 * - The output is intentionally explainable so a user or reviewer can understand why risk increased.
 */

const RISK_LEVELS = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
};

const SUSPICIOUS_URL_TERMS = [
  "login",
  "account",
  "secure",
  "verify",
  "wallet",
  "billing",
  "password",
  "support",
];

const SENSITIVE_BRAND_TERMS = [
  "paypal",
  "google",
  "microsoft",
  "apple",
  "amazon",
  "facebook",
  "netflix",
  "bank",
];

const LOOKALIKE_PATTERNS = [
  { brand: "paypal", patterns: ["paypa1", "pay-pal", "paypal-secure", "paypal-login"] },
  { brand: "microsoft", patterns: ["micros0ft", "microsoft-login", "office-verify"] },
  { brand: "google", patterns: ["g00gle", "google-account", "google-verify"] },
  { brand: "apple", patterns: ["app1e", "appleid-login", "apple-verify"] },
];

function normalizeUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);

    return {
      hostname: parsed.hostname.toLowerCase(),
      pathname: parsed.pathname.toLowerCase(),
      protocol: parsed.protocol.toLowerCase(),
    };
  } catch {
    return null;
  }
}

function findMatches(text, terms) {
  return terms.filter((term) => text.includes(term));
}

function findLookalikeBrandSignals(hostname, pathname) {
  const combined = `${hostname} ${pathname}`;
  const matches = [];

  for (const entry of LOOKALIKE_PATTERNS) {
    const matchedPatterns = entry.patterns.filter((pattern) => combined.includes(pattern));

    if (matchedPatterns.length > 0) {
      matches.push({
        brand: entry.brand,
        patterns: matchedPatterns,
      });
    }
  }

  return matches;
}

function scorePageRisk(input) {
  const {
    url,
    hasPasswordField = false,
    hasLoginForm = false,
    isUserTrusted = false,
    isKnownLocalTestPage = false,
  } = input;

  const parsed = normalizeUrl(url);

  if (!parsed) {
    return {
      risk: RISK_LEVELS.MEDIUM,
      score: 5,
      reasons: ["URL could not be parsed safely."],
      matchedSignals: {},
    };
  }

  const searchableUrl = `${parsed.hostname} ${parsed.pathname}`;
  const matchedUrlTerms = findMatches(searchableUrl, SUSPICIOUS_URL_TERMS);
  const matchedBrandTerms = findMatches(searchableUrl, SENSITIVE_BRAND_TERMS);
  const lookalikeSignals = findLookalikeBrandSignals(parsed.hostname, parsed.pathname);

  let score = 0;
  const reasons = [];

  if (isUserTrusted) {
    return {
      risk: RISK_LEVELS.LOW,
      score: 0,
      reasons: ["User has marked this page or site as trusted."],
      matchedSignals: {
        matchedUrlTerms,
        matchedBrandTerms,
        lookalikeSignals,
      },
    };
  }

  if (parsed.protocol !== "https:" && !isKnownLocalTestPage) {
    score += 3;
    reasons.push("Page is not using HTTPS.");
  }

  if (matchedUrlTerms.length > 0) {
    score += matchedUrlTerms.length * 2;
    reasons.push(`URL/path contains sensitive flow terms: ${matchedUrlTerms.join(", ")}.`);
  }

  if (matchedBrandTerms.length > 0) {
    score += matchedBrandTerms.length * 3;
    reasons.push(`URL/path references sensitive brand or account terms: ${matchedBrandTerms.join(", ")}.`);
  }

  if (lookalikeSignals.length > 0) {
    score += 6;
    reasons.push("URL/path contains possible brand impersonation or lookalike patterns.");
  }

  if (hasLoginForm) {
    score += 3;
    reasons.push("Page appears to contain a login or account-access form.");
  }

  if (hasPasswordField) {
    score += 5;
    reasons.push("Page contains a password field or credential-entry signal.");
  }

  const risk =
    score >= 12 ? RISK_LEVELS.HIGH :
    score >= 6 ? RISK_LEVELS.MEDIUM :
    RISK_LEVELS.LOW;

  return {
    risk,
    score,
    reasons: reasons.length > 0 ? reasons : ["No significant risk signals were detected."],
    matchedSignals: {
      matchedUrlTerms,
      matchedBrandTerms,
      lookalikeSignals,
    },
  };
}

/**
 * Example: local simulated phishing test page.
 * This is not a live PayPal page.
 */
const demoResult = scorePageRisk({
  url: "http://localhost:3000/paypal-secure-account-login",
  hasPasswordField: true,
  hasLoginForm: true,
  isKnownLocalTestPage: true,
});

console.log(JSON.stringify(demoResult, null, 2));

module.exports = {
  scorePageRisk,
};
