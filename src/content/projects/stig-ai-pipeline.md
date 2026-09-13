---
title: "stig-ai-pipeline"
description: "Author and maintainer. MIT-licensed STIG parse/annotate pipeline and stig-scan with a human approval gate. 84 tests; 1,440 explained rules across seven official DISA STIGs."
tags: ["DISA STIG", "security", "Python", "AI", "open source"]
github: "https://github.com/himanshusaxenagithub/stig-ai-pipeline"
featured: true
order: 1
---

Vendor-neutral tooling that turns DISA STIG XCCDF into structured, severity-ranked remediation (Markdown, JSON, and CSV), and can check a machine under a human approval gate. MIT licensed, free to run, no API key required.

## At a glance

- MIT licensed; free; no API key required
- Two modules: a STIG parse/annotate pipeline, and **stig-scan** (human-approval gate; a safety gate refuses commands that change the system)
- Five published skills, including stig-to-tracker, stig-explain, and scan-related skills
- **84 tests**
- Platform profiles for **macOS**, **Linux**, and **Windows**
- **Seven** official DISA STIGs parsed; **1,440** rules with plain-English explanations committed in-repo (stig-explain work dated **5–6 September 2026**)
- Additional validation runs / tracker files dated **5 September 2026**
- stig-scan work captured **6 September 2026** ([commit 82b3057](https://github.com/himanshusaxenagithub/stig-ai-pipeline/commit/82b3057)); includes a recorded scan of the author’s Mac against the **macOS 26 STIG**
- [v0.4.0](https://github.com/himanshusaxenagithub/stig-ai-pipeline/releases) adds a Windows extractor/checkpacks and a stig-scan-windows skill

Windows profiles and extractors are built and unit tested. A live Windows host scan has not been run.

## Published validation (August 2026)

The HackerNoon article [Building a Reusable AI Skill for STIG-to-Excel Conversion](https://hackernoon.com/building-a-reusable-ai-skill-for-stig-to-excel-conversion) records validation across three system classes totaling **522 rules** (Windows Server 2019, SQL Server 2022 Instance, Apple macOS 26) with no parsing anomalies.

## Links

- [Repository](https://github.com/himanshusaxenagithub/stig-ai-pipeline)
- [Releases](https://github.com/himanshusaxenagithub/stig-ai-pipeline/releases)
- [Commit 82b3057](https://github.com/himanshusaxenagithub/stig-ai-pipeline/commit/82b3057)
