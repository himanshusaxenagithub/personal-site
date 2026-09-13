---
title: "The checklists already exist. Everyday computers rarely see them."
description: "Why a free DoD baseline is a public good for an ordinary laptop, and why availability is not the same as use."
pubDate: 2026-09-13
source: "Essay 1 of 10"
series: "stig-essays"
seriesOrder: 1
tags: ["STIG", "security", "public interest"]
---

The United States already paid to write detailed security checklists for the computers most of us use. Those checklists are public. The missing piece is not another secret standard. It is a way for a non-specialist to read the list, check a machine, and tell the truth about what was judged.

Every ordinary laptop holds something worth protecting. A school MacBook may hold student records and staff email. A clinic Windows PC may hold appointment notes and scanned insurance cards. A small-office machine may hold payroll, contracts, or a backup of the only copy of a client file. The operating systems on those desks are the same commercial products used on much larger networks: Windows, macOS, and common Linux distributions. The settings that make those systems safer — disk encryption, automatic login turned off, unused file-transfer services disabled, security updates installed — do not belong only to a military network.

| Desk | What a lost machine may hold | Same commercial OS |
| --- | --- | --- |
| School | Student records, staff email | macOS or Windows |
| Clinic | Appointment notes, insurance scans | Windows, often |
| Small office | Payroll, contracts, the only backup | Windows, macOS, or Linux |

The Defense Information Systems Agency (DISA) writes Security Technical Implementation Guides, or STIGs, for the Department of Defense. DISA is a DoD combat support agency. The guides tell an administrator how to configure a named product so it meets DoD security requirements. DISA releases many of those guides to the public through [public.cyber.mil](https://public.cyber.mil/stigs/downloads/). Anyone may download them. They are not a consumer product and not a virus scanner. They are configuration baselines: long, ranked lists of settings and practices.

That public release is easy to miss if you do not already work in federal information security. The files arrive as large packages written for an auditor. Each guide for a desk operating system in this project’s validated set has on the order of one or two hundred rules. Windows 11 V2R9, as this repository ships it, has 257. Apple macOS 26 (Tahoe) V1R3 has 160. Those counts are specific releases, not a claim about every STIG that exists. Reading one guide end to end is a specialist’s week, not a volunteer’s evening.

<figure class="essay-figure">
  <figcaption>Illustration, not a time study. The essay’s contrast is labour, not a measured hour count.</figcaption>
  <div class="bars" role="img" aria-label="Illustration: reading a full guide is a specialist week; a first CAT I pass is an afternoon work order.">
    <div class="bar-row"><span class="bar-label">Read every rule</span><span class="bar-track"><span class="bar-fill" style="--n: 10; --max: 10;"></span></span><span class="bar-n">week</span></div>
    <div class="bar-row"><span class="bar-label">First CAT I pass</span><span class="bar-track"><span class="bar-fill muted" style="--n: 3; --max: 10;"></span></span><span class="bar-n">afternoon</span></div>
  </div>
  <p class="figure-note">The bars are a picture of the claim above. They are not billed hours or a productivity metric.</p>
</figure>

So the checklists sit unused in the places that could benefit from a first pass. A district technology coordinator can install the operating system and join the machine to a classroom wireless network. They can turn on the vendor’s default “protect my device” switch. They usually cannot, in the same afternoon, map every DISA requirement to a real setting, decide which ones are safe to change on a shared teacher laptop, and produce a report a principal can read. The public good is incomplete if the only people who can apply it already have a compliance shop.

This is a national-interest problem in the ordinary sense. The United States has a large civilian inventory of the same products DISA already documented. Schools, clinics, municipal counters, and small firms are part of that inventory. They are also part of the country’s care, education, and local commerce. When those machines are left on factory defaults — encryption off, a guest account on, a remote service listening — the harm is local first: a stolen backpack, a ransomware lock screen, a week of paper records. The harm can also travel. A compromised clinic PC can become a foothold into a billing network. A compromised school account can become a path into parent email. Raising the configuration floor on everyday computers is hygiene, not theatre.

Hygiene is unglamorous, which is why it is often skipped. Incident response gets attention after a breach. Configuration work happens before anyone has a story to tell. STIGs are almost entirely about that earlier work. They ask whether FileVault or BitLocker is on, whether the machine still allows automatic login, whether an old file-transfer service is running, whether the operating system is still a version the vendor supports. Those questions are not “hacking.” They are the same questions a careful technician would ask if they had time and a list. DISA already wrote the list.

Availability is not the same as use. A PDF on a government site is available. A usable plan is something else. A usable plan says, in short sentences, what the rule wants you to do, how serious a miss would be, whether a machine can check it without changing anything, and what might break if you later decide to fix it. A usable check then runs only after a person has read the command and put their name on it. A usable report says how many rules were actually evaluated, and refuses to treat silence as a pass. Those three last-mile pieces — translation, human approval, honest coverage — are what this project tries to add. They do not replace DISA’s text. They sit on top of a validated copy of it.

<div class="compare">
  <div class="compare-card">
    <h3>Available</h3>
    <p>A DISA package on <a href="https://public.cyber.mil/stigs/downloads/">public.cyber.mil</a>. Anyone may download it. The language is for an inspector.</p>
  </div>
  <div class="compare-card">
    <h3>Usable</h3>
    <p>Plain-English rules, a named approval before any check, and a report that writes blanks instead of inventing a pass.</p>
  </div>
</div>

<ol class="steps">
  <li><span class="step-n">1</span> DISA publishes the checklist</li>
  <li><span class="step-n">2</span> Translate without changing the rank</li>
  <li><span class="step-n">3</span> A person approves each look</li>
  <li><span class="step-n">4</span> Report what was and was not judged</li>
</ol>

None of this requires a new federal mandate on schools or clinics. It requires that the baseline already paid for by the public be reachable by the public. Open source is the natural way to carry that last mile. The code can be inspected. There is no account to create and no key to buy. The website at [stig.hsaxena.com](https://stig.hsaxena.com) does not scan visitors. Scanning stays on the machine someone chose to download a program to. That split is itself a public-interest design: a hosted explainer, a local checker, and no reason to send school or clinic data to a vendor cloud.

It is also important to say what a free DoD checklist is not. It is not a promise that a machine is “secure” after one evening. It is not an official Department of Defense endorsement of this website or of any particular school district. It is not a substitute for backups, staff training, or the vendor’s own security updates. It is a public reference that ranks configuration work so a small organisation can start with the most serious items — CAT I in DISA’s language — and tell the truth about the rest.

Everyday computers will keep running Windows and macOS whether or not anyone opens a STIG. The question is whether the people who look after those computers get a fair chance to use work the country already did. A free download is the start of that chance. A plain-English plan, a named approval, and an honest report are what make the download matter.

Next: [What a STIG is, without the jargon](/writing/what-a-stig-is/). Or see the [example run](https://stig.hsaxena.com/demo.html).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
