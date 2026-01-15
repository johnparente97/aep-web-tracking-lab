# 🚀 AEP Web Tracking Lab

A zero-friction sandbox for mastering **Adobe Experience Platform (AEP)** web tracking. No fluff, no heavy build tools—just pure implementation practice.

---

## 💡 The Mission

Legacy tracking is dead. Modern data collection is about **The Edge**. This lab helps you master the **AEP Web SDK (`alloy.js`)**, moving you from fragmented "spaghetti" tags to a single, high-performance data stream.

**Why this matters:**

* **Speed:** One SDK instead of five. Better SEO, happier users.
* **Brain Power:** Learn **XDM (Experience Data Model)**—the universal language for Adobe data.
* **Future-Proof:** First-party data collection that actually works in a cookieless world.

---

## 📂 The Blueprint

The repo is lean by design to keep you focused on the tracking:

* **`/site`** – **The Playground.** A static site where user actions happen.
* **`/data-layer`** – **The Engine.** Logic that captures clicks and views before they hit the cloud.
* **`/docs`** – **The Map.** Tracking specs and SDRs (Solution Design References).

---

## ⚙️ How It Works

1. **Trigger:** A user clicks something cool in `/site`.
2. **Capture:** The `/data-layer` picks up the signal.
3. **Standardize:** The Web SDK wraps that signal into an **XDM object**.
4. **Blast Off:** One request hits the **Adobe Edge Network**, routing data to Analytics, Target, and AEP simultaneously.

---

## 🛠️ Let's Go

1. **Launch:** Serve the `/site` folder (or just double-click the HTML files).
2. **Deploy:** Link your Adobe Tag (Launch) property.
3. **Validate:** Open the **AEP Debugger** and watch the XDM events fire in real-time.

**Ready to see it live?** [**Live Demo**](https://johnparente97.github.io/aep-web-tracking-lab/site/)

---

**Want me to help you write a "Quick Start" script to initialize the SDK in this lab?**
