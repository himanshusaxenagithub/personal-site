---
title: "A first CAT I scan, for someone new"
description: "Start with DISA’s highest severity. Do not confuse a short first pass with a complete baseline."
pubDate: 2026-09-13
source: "Essay 9 of 10"
series: "stig-essays"
seriesOrder: 9
tags: ["STIG", "security", "public interest"]
---

You do not need to finish a 200-rule guide to start. You need DISA’s highest severity, a machine you are allowed to inspect, a name you are willing to type, and a report that admits what you did not check.

CAT I is the Defense Information Systems Agency’s most serious rank on a STIG. A miss at that rank is the kind of gap most likely to be exploited: encryption off, automatic login on, an unused service listening, an operating system the vendor no longer supports. Starting there is not a claim that CAT II is optional. It is a work order for a first afternoon. The [example run](https://stig.hsaxena.com/demo.html) shows the same cut with invented clinic data so you can see the screens without downloading. This essay is the same path in words, for a real machine that belongs to you or to an organisation that asked you to look.

Step one is to pick the computer on the [start page](https://stig.hsaxena.com). MacBook loads the filed Apple macOS 26 (Tahoe) V1R3 list — 160 rules in the validated set this project ships. Windows PC loads Microsoft Windows 11 V2R9 — 257 rules. If you look after a server or a Linux box, this website is not the entry point; the command-line tools in the repository are. If you are not sure you are allowed to scan a machine, stop. Inspection is still inspection. Do it on hardware you own or on hardware whose owner said yes.

<figure class="essay-figure">
  <figcaption>A first CAT I pass is a slice of a validated guide, not the whole baseline.</figcaption>
  <div class="bars" role="img" aria-label="Full validated guides versus CAT I counts for macOS 26 V1R3 and Windows 11 V2R9.">
    <div class="bar-row"><span class="bar-label">macOS, all</span><span class="bar-track"><span class="bar-fill muted" style="--n: 160; --max: 257;"></span></span><span class="bar-n">160</span></div>
    <div class="bar-row"><span class="bar-label">macOS CAT I</span><span class="bar-track"><span class="bar-fill" style="--n: 13; --max: 257;"></span></span><span class="bar-n">13</span></div>
    <div class="bar-row"><span class="bar-label">Win 11, all</span><span class="bar-track"><span class="bar-fill muted" style="--n: 257; --max: 257;"></span></span><span class="bar-n">257</span></div>
    <div class="bar-row"><span class="bar-label">Win 11 CAT I</span><span class="bar-track"><span class="bar-fill" style="--n: 27; --max: 257;"></span></span><span class="bar-n">27</span></div>
  </div>
  <p class="figure-note">Counts are from this project’s validated copies of DISA’s Apple macOS 26 (Tahoe) V1R3 and Microsoft Windows 11 V2R9. Ticking CAT I still does not approve a check.</p>
</figure>

Step two is to press CAT I only rather than “select everything.” You will still see plenty of work. Some items need a configuration profile you do not have. Some need a policy decision. Some are machine-checkable and some are not. Read the summaries. Leave a rule unticked if you know you cannot interpret the result. Ticking a rule only puts it in the zip. It does not approve it and does not make a skipped check look like a pass later.

Step three is to download the scanner and unzip it on that computer. Delete any previous unzipped scanner folder first. Windows users double-click `STIG Checker.bat`. Mac users right-click `STIG Checker.command`, choose Open, then Open again. If Windows shows “Windows protected your PC,” use More info and Run anyway once — that is the ordinary SmartScreen path for an unsigned script from a zip you just built. If Python is missing, the program may offer a private copy from python.org. That copy is not a system-wide install and is not a DISA package.

Step four is the part beginners want to skip and should not. Open Checks. Read each command. Confirm it is a look, not a change. Type your name. Approve only what you read. If a command is unclear, leave it unreviewed. Unreviewed checks do not run. The report will list them as not evaluated. That is the correct outcome. It is better than a confident pass you cannot defend. The program will also refuse anything that looks like a write, a network client, or a destructive verb. If it refuses, do not look for a hidden “force” switch on a first pass.

Step five is to run the approved checks and read the story from the top. Coverage first: how many rules in this pack produced a yes or a no? Then findings: which identifiers failed, and at which CAT? If any CAT I item failed among the judged rules, the remaining-risk headline will be Critical. That word is sharp on purpose. It is still not a score of the whole laptop. If FileVault is off, turn on encryption and escrow the recovery key before you chase smaller settings. If automatic login is on, turn it off. If updates are stale, schedule them. Then scan again with the same approved pack so the PDF is a before-and-after, not a memory.

<ol class="steps">
  <li><span class="step-n">1</span> Pick the computer you are allowed to inspect</li>
  <li><span class="step-n">2</span> Select CAT I only — a first afternoon, not the whole guide</li>
  <li><span class="step-n">3</span> Download and unzip the scanner on that machine</li>
  <li><span class="step-n">4</span> Read each command and type your name</li>
  <li><span class="step-n">5</span> Read coverage first, then the CAT I failures</li>
</ol>

What you should not expect from a first CAT I pass:

- A complete STIG. The macOS guide in this repository has 160 rules. Twelve CAT I checks are a slice.
- A DoD certificate, a badge, or an official seal. DISA published the guide. This tool is independent open source.
- A malware verdict. You are checking configuration against a public baseline.
- Automatic repair. This release does not change settings for you. Planned later modules still need a human gate before any fix script would run.
- A pretty percentage of “how secure we are.” You will get coverage, pass/fail among judged rules, and a next step.

Common beginner mistakes are predictable. Running the scan on the wrong computer (the one you use to read the website, rather than the one you meant to inspect). Unzipping a new download on top of an old folder and double-clicking the old launcher. Approving a command you did not read because the title sounded familiar. Treating “not evaluated” as “fine.” Emailing the PDF to a vendor cloud you have not thought about — the report may describe a real machine. Keep it with the other local files unless you have a reason and permission to share it.

A first pass is still worth doing. Schools and clinics without a security team often need proof that work has a starting point. A dated PDF that says “we judged these CAT I rules; three failed; two were not evaluated” is that starting point. It is something a director can fund time for. It is something you can repeat after a holiday break or a major system update. It is also how you learn the vocabulary — CAT I, approved, coverage — without waiting for a course.

If you want the pictures before the clicks, read the [example run](https://stig.hsaxena.com/demo.html). If you want the reason CAT I exists, read [what a STIG is](/writing/what-a-stig-is/). If you are ready, pick the computer on the start page and keep the first selection small. Small and honest beats large and silent. That is the whole beginner method.

Next: [After the scan: assessment and safe remediation](/writing/after-the-scan-assessment-and-remediation/).

The free STIG Checker tool — pick a computer, read the rules, download a local scanner — lives at [stig.hsaxena.com](https://stig.hsaxena.com).
