---
title: "What a STIG is, without the jargon"
description: "A lockdown checklist with ranked severity — not a secret document, not a virus scanner, not a DoD endorsement of this website."
pubDate: 2026-09-13
source: "Essay 2 of 10"
series: "stig-essays"
seriesOrder: 2
tags: ["STIG", "security", "public interest"]
---

A STIG is a lockdown checklist for a named product. It is written for Department of Defense systems. Many of the same products sit on civilian desks. The guide is public. The language is not.

STIG stands for Security Technical Implementation Guide. The Defense Information Systems Agency (DISA) publishes STIGs as part of its work for the Department of Defense. DISA’s public library is at [public.cyber.mil/stigs](https://public.cyber.mil/stigs/). The download page for the packages themselves is [public.cyber.mil/stigs/downloads](https://public.cyber.mil/stigs/downloads/). If someone tells you a STIG is a secret military document, they have the wrong picture. The ones this project uses are publicly released files. This project does not speak for DISA, and DISA did not write this website.

Think of a STIG as a very thorough owner’s manual for settings, not as a piece of software you install. One guide applies to one product and a stated version — for example Microsoft Windows 11, or Apple macOS 26 (Tahoe). Inside the guide, each rule is a requirement. A typical rule says what must be true on the system, how an inspector would check it, and what to change if the check fails. The official format DISA uses for that structured text is called XCCDF. You do not need to know the acronym to use the idea. You need to know that the rule is specific: it is not “be secure.” It is “this service must be off” or “this encryption feature must be on.”

Severity is built in. DISA ranks findings as CAT I, CAT II, or CAT III. CAT I is the most serious: a miss that can allow a significant breach or bypass of protection. CAT II is important and makes up most of a typical desktop guide. CAT III still matters, but a miss is less severe on its own. This project keeps those labels. It does not invent a friendlier colour system that hides the original rank. When the local scanner later says “Critical remaining risk,” it is because CAT I items failed among the rules that actually produced a yes-or-no answer — not because a marketing meter turned red.

<figure class="essay-figure">
  <figcaption>DISA severity in two guides this project has validated and ships.</figcaption>
  <div class="bars" role="img" aria-label="CAT I, II, and III counts for Apple macOS 26 V1R3 and Windows 11 V2R9.">
    <div class="bar-row"><span class="bar-label">macOS CAT I</span><span class="bar-track"><span class="bar-fill" style="--n: 13; --max: 257;"></span></span><span class="bar-n">13</span></div>
    <div class="bar-row"><span class="bar-label">macOS CAT II</span><span class="bar-track"><span class="bar-fill muted" style="--n: 145; --max: 257;"></span></span><span class="bar-n">145</span></div>
    <div class="bar-row"><span class="bar-label">macOS CAT III</span><span class="bar-track"><span class="bar-fill muted" style="--n: 2; --max: 257;"></span></span><span class="bar-n">2</span></div>
    <div class="bar-row"><span class="bar-label">Win 11 CAT I</span><span class="bar-track"><span class="bar-fill" style="--n: 27; --max: 257;"></span></span><span class="bar-n">27</span></div>
    <div class="bar-row"><span class="bar-label">Win 11 CAT II</span><span class="bar-track"><span class="bar-fill muted" style="--n: 214; --max: 257;"></span></span><span class="bar-n">214</span></div>
    <div class="bar-row"><span class="bar-label">Win 11 CAT III</span><span class="bar-track"><span class="bar-fill muted" style="--n: 16; --max: 257;"></span></span><span class="bar-n">16</span></div>
  </div>
  <p class="figure-note">Apple macOS 26 (Tahoe) V1R3: 160 rules. Microsoft Windows 11 V2R9: 257 rules. Ranks are DISA’s. These are not counts for every STIG DISA publishes.</p>
</figure>

STIGs are written for DoD use, but they describe commercial products. Windows, macOS, Red Hat Enterprise Linux, Ubuntu, and Microsoft SQL Server all have public STIGs in DISA’s library. This repository validates a small set of those guides and ships plain-English notes for them. The website at [stig.hsaxena.com](https://stig.hsaxena.com) only walks a desk Mac or Windows PC. Other systems stay on the command line. That is a product choice, not a claim that only two STIGs exist.

Many STIG rules also carry identifiers that point at the NIST Special Publication 800-53 control catalogue. DISA calls those Control Correlation Identifiers (CCIs). The mapping is DISA’s, not this project’s. For a board or an insurer who already asks about 800-53, that mapping is why a STIG is a recognised baseline rather than one person’s opinion. For a school office manager, the useful fact is simpler: someone already wrote down the settings, ranked them, and published the list.

A STIG is not a malware scanner. It will not tell you that a file is a virus. It will tell you whether the machine’s configuration matches a stated baseline. A machine can be free of known malware and still fail CAT I rules — for example if full-disk encryption is off. The reverse is also true: a well-configured machine can still be harmed by a stolen password or a malicious attachment. Configuration is one layer. It is the layer STIGs address.

| A STIG is | A STIG is not |
| --- | --- |
| A product-specific lockdown checklist from DISA | A secret military document |
| Ranked CAT I, then II, then III | A virus or malware scanner |
| Publicly released for many commercial products | A DoD endorsement of this website |
| One layer: configuration | A score that a machine is “secure” |

A STIG is not a scoring contest. Completing every rule on a shared classroom Mac may be the wrong goal. Some rules need a central configuration profile. Some need a policy decision (who may use Bluetooth; whether SSH should exist at all). Some fixes can lock people out if you apply them in the wrong order. The guide is a reference. A person still decides what to apply, on which machines, and when. This tool’s job is to make that decision informed: here is what the rule asks, here is whether we could check it, here is what failed.

Where do you get the official file? DISA’s public download page is the place to start. Direct package links often live on `dl.dod.cyber.mil`. Many office networks block that host, and web browsers are not allowed to fetch it from a page like this one (the technical name for that browser rule is CORS). That is why the website ships the explanations this project already validated, and why the local scanner — on your machine — is the component that still tries to fetch the official zip and refuse a file that does not match the expected rule count. If the host is blocked, use the public download page and feed the zip to the local tools. Do not harden a system from the tiny sample file in this repository; that sample is for parser tests only.

One more distinction helps. “The Department of Defense publishes STIGs” is accurate. “A consumer security app from the Department of Defense” is not what this site is. STIGs are guidance documents. This website is an independent open-source project under an MIT licence. It explains DISA’s public checklists and builds a scanner you run yourself. It does not scan your browser session. It does not upload your results. It does not claim a DoD seal.

<div class="callout">
<p class="callout-label">Attribution</p>
<p>DISA writes STIGs for the Department of Defense and releases many of them at <a href="https://public.cyber.mil/stigs/">public.cyber.mil/stigs</a>. This series and the STIG Checker tool are independent. They do not speak for DISA or DoD.</p>
</div>

If you remember only three sentences, remember these. A STIG is a product-specific lockdown checklist from DISA. Severity is CAT I, then II, then III. The public can download the files; the hard part is reading them, checking a real machine without changing it, and reporting what was and was not evaluated. The rest of these essays are about that hard part, in plain English.

Next: [When the school or clinic has no security team](/writing/schools-and-clinics-without-security-teams/). Definition diagram: [start page](https://stig.hsaxena.com).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
