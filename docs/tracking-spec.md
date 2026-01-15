# Analytics Tracking Specification

## Overview
This document outlines the tracking implementation for the **AEP Web Tracking Lab** project. It includes the Global Data Layer structure and the semantic tracking attributes used on interactive elements.

## 1. Global Data Layer (`window.digitalData`)

The `window.digitalData` object is initialized on every page load.

### Schema
```javascript
window.digitalData = {
    page: {
        pageInfo: {
            pageName: "String",         // Format: "globalbank:[siteSection]:[pageName]"
            destinationURL: "String",   // Full URL
            siteSection: "String",      // e.g., "products", "account", "general"
            language: "String"          // Default: "en-US"
        }
    },
    user: {
        profile: {
            profileInfo: {
                status: "String",       // Default: "anonymous"
                profileID: "String"     // Empty for anonymous users
            }
        }
    }
};
```

---

## 2. Click Tracking (`data-track`)

Interactive elements (links, buttons) are tagged with `data-track` attributes to capture user intent.

### Attribute Format
`data-track="[region]|[type]|[name]|[action]"`

### Examples

| Element | Location | `data-track` Value | Description |
| :--- | :--- | :--- | :--- |
| **Logo** | Navigation | `nav|home` | Clicking the logo to go home |
| **Credit Cards Link** | Navigation | `nav|credit-cards` | Main nav link to Credit Cards |
| **Hero CTA** | Homepage | `hero|cta|get-started` | "Get Started" button in hero |
| **Apply Button** | Product Card | `body|product|gold-card|apply-now` | "Apply Now" for specific card |
| **Submit Button** | Signup Form | `form|signup|submit-button` | Form submission button |

## 3. Form Tracking

Forms are tracked upon submission.

- **Signup Form**: `data-track="form|signup|submission"`
