# Internationalization (i18n) Setup

This project uses `next-intl` for internationalization, supporting English (EN) and Mongolian (MN) languages.

## Setup Overview

1. **Package**: `next-intl` is installed and configured
2. **Locales**: English (`en`) and Mongolian (`mn`)
3. **Default Locale**: English (`en`)

## File Structure

- `i18n.js` - i18n configuration file
- `middleware.js` - Handles locale routing
- `messages/en.json` - English translations
- `messages/mn.json` - Mongolian translations
- `app/[locale]/layout.js` - Locale-specific layout wrapper

## Usage

### In Client Components

```jsx
"use client";

import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("footer");
  
  return <h1>{t("subscribeNow")}</h1>;
}
```

### In Server Components

```jsx
import { useTranslations } from "next-intl";

export default async function MyServerComponent() {
  const t = await useTranslations("footer");
  
  return <h1>{t("subscribeNow")}</h1>;
}
```

### Language Switcher

A `LanguageSwitcher` component is available at `components/LanguageSwitcher.js`. You can add it to your header:

```jsx
import LanguageSwitcher from "@/components/LanguageSwitcher";

// In your header component
<LanguageSwitcher />
```

## Adding New Translations

1. Add the translation key to both `messages/en.json` and `messages/mn.json`
2. Use the key in your components with `useTranslations`

Example:
```json
// messages/en.json
{
  "footer": {
    "newKey": "New Text"
  }
}

// messages/mn.json
{
  "footer": {
    "newKey": "Шинэ Текст"
  }
}
```

## Routing

- All routes should be under `app/[locale]/` directory
- The middleware automatically redirects `/` to `/en` (default locale)
- URLs will be: `/en/about`, `/mn/about`, etc.

## Notes

- The Footer component has been updated to use translations
- Make sure all pages are moved to `app/[locale]/` directory for i18n to work
- The `lang` attribute on the `<html>` tag should be set dynamically based on locale (currently set to "en" in root layout)






