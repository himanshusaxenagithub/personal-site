---
title: "When the school or clinic has no security team"
description: "The same commercial operating systems, the same lost-laptop risk, and no specialist to translate a 200-rule guide."
pubDate: 2026-09-13
source: "Essay 3 of 10"
series: "stig-essays"
seriesOrder: 3
tags: ["STIG", "security", "public interest"]
---

A school and a clinic are not military bases. They still run the same commercial operating systems, hold records other people trusted them with, and often have no one whose job title includes “security.” That is exactly the gap a public checklist is meant to close — if someone translates it.

Walk into a typical small clinic and you will see a front-desk PC, a few laptops in exam rooms, a printer, and a shared drive. Walk into a typical elementary school and you will see a cart of tablets, a teacher MacBook, an office machine that prints report cards, and a wireless network that has to work on open-house night. In both places the person who “does computers” is usually also the person who orders toner, resets passwords, and gets called when the projector fails. There is no Security Operations Center. There is no full-time assessor. There may not even be a written configuration standard.

<div class="compare">
  <div class="compare-card">
    <h3>A compliance shop</h3>
    <p>Specialists, a written standard, and time to map each DISA rule to a setting. That is who most STIG tools assume.</p>
  </div>
  <div class="compare-card">
    <h3>A school or clinic</h3>
    <p>The same commercial OS, the same lost-laptop risk, and one person who also orders toner. They need a first CAT I pass, not an accreditation package.</p>
  </div>
</div>

Those machines still fail in ordinary ways. A staff laptop left in a car is a records problem if the disk is not encrypted. An automatic login that skips the password is a records problem if a visitor sits down at the desk. An operating system that no longer receives vendor fixes is a records problem even if the building alarm works. None of those failures require a sophisticated attacker. They require a lost bag, a curious student, or a commodity ransomware kit. The Defense Information Systems Agency already wrote rules about encryption, automatic login, supported versions, and unused services in the STIGs it publishes for the Department of Defense. The products named in those guides are the products on the desk.

| Everyday failure | Why it matters | DISA already ranked a setting |
| --- | --- | --- |
| Laptop left in a car | Records walk out with the disk | Full-disk encryption (FileVault / BitLocker) |
| Automatic login | Anyone who can touch the keyboard is in | Disable unattended or automatic login |
| OS no longer patched | New holes stay open | Vendor-supported version |

Why would a clinic look at a DoD document? Not because the clinic is becoming a defense contractor. Because the document is a public, ranked baseline for a product the clinic already bought. The alternative is a stack of blog posts, a vendor checkbox labelled “recommended,” and hope. Hope is not a baseline. A STIG is not magic either, but it is specific, versioned, and severity-ranked. CAT I items are the ones to face first. A small organisation can do a first CAT I pass on one machine without pretending to complete an accreditation package.

The obstacle is language and labour, not permission. DISA’s public download page does not ask a school for a clearance. It asks for the patience to open a package written for an inspector. Each rule has check text and fix text. The check text is prose. Turning that prose into a command that only reads the system — and refusing any command that would change the system — is skilled work. Explaining the rule so an office manager knows whether they are looking at a quick setting or a policy that needs the director’s signature is also skilled work. Most schools and clinics cannot buy that skill by the hour for every operating-system release.

This project’s public-benefit claim is narrow and practical. Take the guides this repository has validated. Attach a plain-English summary, a triage label (quick win, needs a profile, needs a decision, can break things), and a caution. Let a person pick CAT I or a short list. Download a scanner that runs on the machine, not in a browser. Require a typed name before any check executes. Write a report that states coverage first. That is a first tool for an organisation that has no security team. It is not a managed security service. It is not a promise that student or patient data is safe. It is a way to stop being unable to start.

There are good reasons a school or clinic will not apply every rule. A classroom Mac that must talk to a document camera may need a setting a locked-down baseline would remove. A clinic that uses a vendor-supported medical device on the same subnet has constraints a general STIG does not know about. Those exceptions belong in a written note, not in a silent skip. An honest report that says “we evaluated 10 of 12 selected CAT I rules; FileVault failed; two profile-based rules were not judged” is something a director can act on. A green badge that hides the skips is not.

Privacy laws and professional duties already tell these organisations that records matter. They do not always tell a tired coordinator which laptop setting to check on Tuesday. Aligning everyday configuration with a public DoD baseline is one way to make those duties concrete. It also creates a paper trail: a dated PDF, a named approver, a list of rule identifiers. If an insurer, an auditor, or a parent later asks “what did you actually look at?”, the answer can be a file rather than a memory.

None of this outsources judgment to a website. [stig.hsaxena.com](https://stig.hsaxena.com) never sees the clinic’s disk and never will. Scanning stays on the computer the coordinator downloaded the program to. Approval stays a human act. If a later module ever drafts a fix, that fix should face the same gate. Schools and clinics are right to be suspicious of tools that want their data in exchange for a score. They should also be suspicious of tools that claim a complete harden in one click. The appropriate tool for an organisation without a security team is one that makes the public checklist smaller, clearer, and locally checkable — then stops.

National interest, here, is not a slogan about weapons. It is the observation that education and care in the United States run on ordinary computers, that those computers can be configured more carefully than they often are, and that the country already published a careful list. Leaving that list usable only inside large compliance programs wastes a public asset. Making a first CAT I pass possible for a school or clinic is a modest, concrete use of that asset.

Next: [Settings gaps are not Hollywood hacking](/writing/configuration-gaps-not-hacking/). Worked numbers: [example run](https://stig.hsaxena.com/demo.html).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
