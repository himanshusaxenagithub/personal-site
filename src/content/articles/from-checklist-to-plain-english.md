---
title: "From auditor language to everyday English"
description: "What the rule asks, how serious it is, whether a machine can check it, and what could go wrong if you change it."
pubDate: 2026-09-13
source: "Essay 8 of 10"
series: "stig-essays"
seriesOrder: 8
tags: ["STIG", "security", "public interest"]
---

A STIG rule is precise and hard to approach. The last mile is not another standard. It is four short fields: what the rule asks, how to treat it, whether a machine can check it, and what might go wrong.

Open an official STIG and you will see identifiers, group numbers, check text, and fix text. The Defense Information Systems Agency (DISA) writes that check text so an inspector can verify the requirement. It may name a pane in System Settings, a registry area, or a command-line tool. It is doing its job for its intended reader. That reader is not an office manager at a clinic and not a volunteer who keeps a school lab alive. If those people are going to use a public Department of Defense baseline, someone has to translate without watering down the rank or inventing a new requirement.

This project attaches four fields to each rule. Summary is one or two sentences in ordinary English: what you would actually do or verify. Triage is one of four buckets: a quick win, a change that needs a configuration profile pushed out, a decision a person must make, or a change that can break things. Automation says whether the check looks scriptable. Caution is the one-line “if you later fix this, watch for…” note — lockouts, broken peripherals, lost recovery keys. None of those fields replace DISA’s text. They sit beside it so a non-specialist can sort a 200-rule list before they drown in it.

| Field | What it answers | What it must not do |
| --- | --- | --- |
| Summary | What you would actually do or verify | Add a requirement DISA did not write |
| Triage | Quick win, profile, judgment, or can break things | Lower DISA’s CAT rank |
| Automation | Whether a machine can check it | Pretend a GUI interview is a script |
| Caution | What might go wrong if you later fix it | Invent a statistic |

Take FileVault. The official title in the Apple macOS 26 (Tahoe) V1R3 STIG is that the system must enforce FileVault. The filed summary in this repository says, in substance: turn on full-disk encryption and prevent users from switching it off, so data on a lost or stolen Mac cannot be read. The triage is “config-profile.” The caution is about escrowing the recovery key and following DISA’s FileVault supplemental. A coordinator who has never heard the word STIG can still understand “lost laptop plus encryption off is a records problem,” and they can see that a profile and a recovery-key plan come before a casual toggle.

Take TFTP. The title says the system must disable the Trivial File Transfer Protocol service. The summary says: stop and disable an unauthenticated, unencrypted file-transfer service that has no place on a workstation. The triage is “quick-win.” The caution notes that a restart may be needed. That is enough to put the rule in a first-afternoon pile. It is also enough to stop someone from thinking they have found a rare exploit. They have found an unused door.

<div class="compare">
  <div class="compare-card">
    <h3>FileVault</h3>
    <p><strong>Triage:</strong> config-profile. Encryption off is a records problem. Escrow the recovery key before you enforce it. Follow DISA’s FileVault supplemental.</p>
  </div>
  <div class="compare-card">
    <h3>TFTP</h3>
    <p><strong>Triage:</strong> quick-win. An unused, unauthenticated file-transfer door. A restart may be needed. Not a rare exploit.</p>
  </div>
</div>

Translation can go wrong. A summary that adds a requirement DISA did not write is a new, unofficial rule. A summary that drops the severity is a lie. A caution that invents a statistic is noise. The filed notes in `annotations/` are therefore treated as data this project validated for specific releases, not as a second STIG. When the website loads a guide, it loads those notes. When the local scanner fetches an official zip, it still checks the rule count — and a pinned digest when one is recorded — so a mismatched package is refused. The English is a lens. The identifiers stay DISA’s.

Why file the English in git instead of generating it on each visit? Because a school should not depend on a model being reachable, paid for, or in a cooperative mood. Because two coordinators in two towns should see the same summary for `APPL-26-005020`. Because a wrong sentence can be corrected once and then travel. This repository already ships complete explanation sets for seven STIGs — 1,440 rules — including Windows 11, Windows Server 2019, RHEL 9, Ubuntu 24.04, macOS 26, and two SQL Server guides. Those counts are inventory, not a claim that every STIG DISA publishes is done. The `stig-explain` skill exists to produce more, in small batches, with a helper that rejects a batch if a rating is invalid or a command appears that is not in the rule’s own text.

Plain English is also how triage becomes a work plan. “Quick win” means a careful person might do it on one machine this week. “Config-profile” means the real work is central management, not a one-off click. “Needs-judgment” means stop and ask who this setting is for. “Risky-change” means test, keep a second session, or do not do this on the only administrative laptop. A CAT I risky change is still CAT I. The bucket does not lower DISA’s rank. It tells you about the path, not the importance. Mixing those two ideas is how people either freeze (everything is dangerous) or click through (everything is a win).

The website table on [stig.hsaxena.com](https://stig.hsaxena.com) is this translation made visible. Each row is an identifier, a CAT chip, the title, the summary, and the kind. You can filter to CAT I, to machine checks, or to quick wins. You can tick a subset and download a scanner pointed at that subset. You are not asked to learn XCCDF. You are asked to read sentences and decide what belongs in a first pass. That is the public last mile: not dumbing down, not adding secret sauce, just putting the inspector’s list into the language of the people who actually touch the computers.

National interest shows up as reuse of language. If clinics, schools, and small offices share the same filed summaries, they can call each other and mean the same rule. If each vendor invents its own paraphrase, they cannot. Shared English on top of shared DISA identifiers is civic infrastructure of a quiet kind. It is also unfinished work. Explanations can be improved. New STIG releases will need new notes. The right response is to keep the fields small and the licence open, so correction is cheaper than a rewrite of a 300-page PDF.

If a sentence in these notes is unclear, that is a defect in the translation, not a defect in the reader. The original guide remains the authority. DISA published it for the Department of Defense. This project’s job is to make a first reading possible. After that reading comes a named approval and a scan. After the scan comes a report that still uses the same words: met the requirement, did not, or was not evaluated. Everyday English, all the way through, is how a public checklist becomes a public tool.

Next: [A first CAT I scan, for someone new](/writing/a-first-cati-scan-for-beginners/).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
