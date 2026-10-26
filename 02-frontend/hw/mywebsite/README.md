# My personal website

A simple homework website built with Next.js, TypeScript, and Tailwind CSS.

## Change my information

Open **app/profile.ts**. Change the text inside quotation marks:

- **name** and **bio** update the home page and page metadata.
- **github** sets the social link.
- **interest** changes the navigation label and interest title.
- **interestTitle**, **interestIntro**, and **interestStory** change the second page.
- **factOne**, **factTwo**, and **factThree** change its list.
- **interestLink** and **interestLinkText** change its external link.

The route stays `/interest` when you change topics, so you do not need to rename folders or fix links. Robotics is draft content based on the original starter; replace it with your own interest if you prefer.

The existing experience section can be edited directly in **app/page.tsx**.

## Run the website

From this directory:

```sh
npm install
npm run dev
```

Open the Local URL printed by Next.js (usually http://localhost:3000).

## Where things live

- `app/page.tsx`: home page.
- `app/interest/page.tsx`: interest page.
- `app/layout.tsx`: shared navigation, footer, and page metadata.
- `app/globals.css`: background, font, and keyboard focus styling.
- `app/profile.ts`: editable text and links.
- `../submission.md`: draft reflection and screenshots.

## Heading weights

The main title uses `font-black`, main sections use `font-bold`, smaller headings use `font-semibold`, and quieter sections use `font-medium`. Most styling is directly in Tailwind classes. `sm:` applies a style on wider screens. `children` in the layout is the current page.

## Before submitting

Review the draft profile and reflection. If you change the pages, update the screenshots. Commit the homework files and push to your fork. Do not add `node_modules` or `.next`.

## Base colors

Edit the named colors in app/globals.css: Porcelain (#FDFFFC), Pale Sky (#C7D5E0), Glaucous (#677697), Dusty Lavender (#746B88), Rosewood (#8E556A), and Soft Rosewood (#986478). Dark ink keeps body text readable on the light backgrounds.

