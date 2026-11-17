// Matches the per-response style nonce supplied by the FastAPI HTML entry point.
export const styleNonce = document.querySelector<HTMLMetaElement>(
  'meta[name="csp-nonce"]',
)?.content;
(
  globalThis as typeof globalThis & { __weiboStyleNonce?: string }
).__weiboStyleNonce = styleNonce;
