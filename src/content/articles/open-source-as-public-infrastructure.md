---
title: "Open source as public infrastructure"
description: "No account, no key, MIT licence. The safety gate is code you can read. That is how a public baseline should travel."
pubDate: 2026-09-13
source: "Essay 7 of 10"
series: "stig-essays"
seriesOrder: 7
tags: ["STIG", "security", "public interest"]
---

A public checklist locked inside a paid portal is only half public. The last mile — translation, a local check, an honest report — should travel the way other civic infrastructure travels: inspectable, copyable, and free to run without an account.

The Defense Information Systems Agency already releases many STIGs at no charge. That is the upstream public good. Downstream, most small organisations still meet a wall. The files are written for inspectors. The commercial tools that claim to “do STIGs” often want a licence, a cloud tenant, or a professional services engagement. Those arrangements make sense for a large contractor. They are the wrong shape for a clinic with two laptops or a school that cannot send student-adjacent machines to a vendor scanner. If the baseline is public and the only usable applicator is private, the public part was incomplete.

This project is MIT-licensed on purpose. Anyone may run it, read it, fork it, or disagree with a check and file a better one. There is no account on [stig.hsaxena.com](https://stig.hsaxena.com). There is no API key. The hosted page is static GitHub Pages. It lists filed explanations and builds a zip of this repository plus your selection. It does not receive a scan result. It does not need a credit card. A coordinator can use it on a Saturday without asking a procurement office to create a vendor record. That is not a marketing discount. It is the distribution model that matches a public baseline.

<div class="compare">
  <div class="compare-card">
    <h3>A paid portal</h3>
    <p>Licence, cloud tenant, or professional services. Fine for a large contractor. The wrong shape for two clinic laptops.</p>
  </div>
  <div class="compare-card">
    <h3>This toolkit</h3>
    <p>MIT licence. No account. No API key. Static pages explain; a local program looks. Results stay on disk.</p>
  </div>
</div>

Open source also makes the safety story checkable. The approval digest, the read-only allowlist, and the refusal of mutating commands are not slogans on a homepage. They are code in this repository. A specialist can audit them. A classroom of students can read them. A city IT shop can decide the gate is not strict enough and tighten it. Closed tools ask you to trust a brochure. Public infrastructure asks you to trust, then verify. For software that may run on machines that hold education or care records, verify is not optional.

There is a civic analogy that holds if you do not stretch it. Roads are useful because the map is public and the pavement is not a subscription. Building codes are useful because a small contractor can read them. STIGs are closer to a building code than to a consumer app. DISA writes the code for DoD systems. This project is closer to a free, annotated field guide and a measuring tape you carry yourself. It does not replace the inspector of record. It does not issue a certificate. It helps a non-specialist take a first measurement and write down what they could and could not measure.

Dependencies are part of infrastructure too. A tool that needs a paid language-model key to explain a rule will fail the organisations this work claims to help. Filed explanations in `annotations/` travel with the repository. Seven guides and 1,440 rules are already annotated in this tree. You can parse a matching official zip with those notes attached and never call a model. If you do use an assistant, it is the one you already have, offline from the scanner’s execution path. The scanner will not phone home for a verdict. That split — optional AI in authoring, no AI in execution — is an infrastructure choice. Execution has to work on an air-gapped laptop after a flood, a ransomware event, or a simple outage of someone else’s API.

Hosting on GitHub Pages is another such choice. Pages is free for a public repository. The site’s expected address is [https://stig.hsaxena.com](https://stig.hsaxena.com). Anyone can clone the same files and serve them. If this domain ever goes away, the documents and the program remain in git. That is a low bar for permanence, and it is still a higher bar than a startup login that disappears with a funding round. Public-interest software should plan for neglect. Neglect is the normal future of volunteer tools. MIT licence, static files, and no required service make neglect survivable.

Open source is not a halo. Anyone can publish a dangerous script under MIT. The licence does not make a check correct. Review still sits with a named human. The project’s shipped packs are entirely unreviewed for that reason. A fork that auto-approves everything would be easy to write and wrong to run. The public-benefit argument is not “open source is automatically safe.” It is “open source is the only honest way to give a public baseline a last mile that schools and clinics can inspect.” Safety is the gate and the coverage line. Openness is how those controls stay visible.

<div class="callout">
<p class="callout-label">What openness is for</p>
<p>The approval digest, the read-only allowlist, and the refusal of mutating commands are code you can read. The licence is not a safety claim. The gate is.</p>
</div>

National interest follows from reuse. If a municipal library, a tribal clinic, a volunteer-run shelter, and a small manufacturer can all read the same annotated guide and run the same local checker, the country has shared infrastructure rather than ten incompatible vendor stories. Shared identifiers help too: DISA rule IDs, CAT ranks, and CCIs that point at NIST 800-53. Those identifiers already exist. Wrapping them in a private schema would be a step backward. Wrapping them in plain English and a PDF you keep on disk is a step forward.

The invitation is ordinary. Read the code. Read the essays. Try the [example run](https://stig.hsaxena.com/demo.html) without installing anything. If you look after a machine, download a scanner and type your own name. If you find a wrong explanation, correct it and send it back so the next school gets the fix. That is how public infrastructure accumulates. DISA published the checklists. This repository tries to make them carryable. The rest is other people’s copies, other people’s reviews, and other people’s honest reports.

Next: [From auditor language to everyday English](/writing/from-checklist-to-plain-english/).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
