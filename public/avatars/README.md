# Add player avatars here

Each entrant in `public/data/entrants.json` can reference a file in this folder via the `avatar` field.

**Example**

```json
{ "id": "p01", "displayName": "Alex Morgan", "avatar": "alex.webp" }
```

Place `alex.webp` in this directory (`public/avatars/alex.webp`). Use square images (at least 256×256) for best results.

If `avatar` is `null` or the file is missing, initials are shown instead.
