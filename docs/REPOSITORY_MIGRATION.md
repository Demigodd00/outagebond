# Dedicated repository provenance

- Dedicated repository: https://github.com/Demigodd00/outagebond
- Original public repository: https://github.com/Demigodd00/demigodd00-genlayer-apps
- Extracted release commit: `3c810f92225a00db0c9624d009afd48eb7eaf920`
- Original deployed runtime code commit: `c5b092f3f357c9592ae8e3f44f5a2f1e9ac8c237`
- Extraction date: 2026-09-25
- Contract version: `0.2.0-studionet`
- Contract address: `0x2893BfB51B80A3ABEE168732f1B3bF86Cde08082`
- Normalized contract SHA-256: `6531a9750c6800c200091c63055943f1fb6b7a0bddbc41e1d8baf54f9210fa72`

The standalone repository was assembled from an allowlist of tracked OutageBond release paths, not a copy of the entire working directory or portfolio Git history. It includes the intelligent contract, complete frontend and lockfile, direct and frontend tests, required runner helper, deployment/acceptance tools, public evidence, historical deployment record, documentation and existing license. The newly created submission logo and its generation prompts are included separately.

No other applications, node_modules, .env.local files, Vercel credentials, Git credentials or private wallet files are included. `.outagebond-private/.gitignore` is a placeholder only, not a wallet backup. The original repository and private test-wallet files remain untouched.

Documentation, root dependency scope and CI triggers were adapted for a single-project repository. The deployable contract and frontend runtime source were not changed or redeployed. The original public deployment and acceptance JSON files are retained byte-for-byte so the provenance of real StudioNet transactions is not rewritten. Historical commit hashes and CI links in those records intentionally refer to the original repository.

The current live Vercel deployment remains the previously verified release. Its Git integration has not been switched as part of publishing this repository. Future deployments should use `apps/outagebond-web` as their project root, with the documented public StudioNet environment values.

## Verification

The standalone CI workflow runs GenVM lint and the 18 direct tests, plus the 10 frontend tests, TypeScript, production build and production dependency audit. Check [this repository's workflow runs](https://github.com/Demigodd00/outagebond/actions/workflows/outagebond.yml) for the current extraction checks. These are distinct from the original release CI run retained in the historical verification manifest.

The published live acceptance journal is historical execution evidence, not a new claim that a second live acceptance run or deployment occurred during extraction. Its synthetic-source disclosure and inconclusive first fixture remain applicable.
