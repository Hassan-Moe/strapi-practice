NEXT

- dynamic pages setup QUERY_PAGE_BY_SLUG

- trigger secondary service refetch (LAYOUT PROPS + FUTURE PAGE PROPS) depending on global states

test

```
  const switchLang = (locale) => {
  router.push(`/${locale}`);
  router.refresh();
};
```
What this does:

✔ Forces server components reload
✔ Keeps SPA feel

This is what next-intl internally recommends when needed.

Use this if you can’t restructure routes.

https://chatgpt.com/share/6984d78f-0fb8-800d-89bd-e9290267ed94


- install zustand

- Remove server .env from .gitignore or find a better way to share project
