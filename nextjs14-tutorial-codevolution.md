# Next.js 14 Tutorial
by `Codevolution`

YouTube: `https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=1`

Source: 'https://github.com/gopinav/Next.js-14-Tutorials'

1.  Introduction
2.  Hello World
3.  Project Structure
4.  Before We Start
5.  Routing
6.  Nested Routes
7.  Dynamic Routes
8.  Nested Dynamic Routes
9.  Catch all Segments
10. Not Found Page
11. File Colocation
12. Private Folders
13. Route Groups
14. Layouts
15. Nested Layouts
16. Route Group Layout
17. Routing Metadata
18. title Metadata
19. Link Component Navigation
20. Active Links
21. Navigating Programmatically
22. Templates
23. Loading UI
24. Error Handling
25. Recovering from Errors
26. Handling Errors in Nested Routes
27. Handling Errors in Layouts
28.
29.
30.
31.
32.
33.
34.
35.
36.
37.
38.
39.
40.

## Notes

### Create NextJS App

`$ npx create-next-app@latest .`

### Components

* Page file - page.tsx
* Layout file - layout.tsx
* Template file - template.tsx
* Not Found file - not-found.tsx
* Loading file - loading.tsx
* Error handling - error.tsx

#### Hierarchy

1. layout.tsx
2. template.tsx
3. error.tsx
4. loading.tsx
5. not-found.tsx
6. page.tsx

### Components

RSC - React Server Components

- Server Components - Can: run tasks; read files, fetch data from DB, Cannot: use hooks or handle user interaction
- Client Components - Cannot: read files, Can: use hooks, mange interactions
