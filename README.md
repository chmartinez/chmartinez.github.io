# chmartinez.github.io
My personal profile page

# TODO:
- [x] Create a dummy page with React Components of my own.
- [x] Fix styles on WorkExperienceItem (date format, `position-at-company` spacing, font size)
- [x] Make the caret to change when clicked
- [x] Change the main header to a React component 
- [x] Refactor `Education/WorkExperience` so that it can work like the work experience items
- [x] Fix the alignment of the dates on the ExpandibleListItem
- [x] Abstract the div bar and the keywords in another (common) components
- [ ] Refactor the entire CSS
- [ ] Fix expand/collapse style issue
- [ ] Create a "dark mode" theme and a theme switcher
- [ ] Include a "download/print" option


# Themes

## General notes
* The goal is to have two base themes (StackOverflow and another one), with the chance to see "dark-mode" in both of them.
* We want to "DO" things. Doesn't make sense to get stuck with stupid stuff!
* I would want to include `a11y`stuff in this (to make it accessible)

### Changes I would have to do no matter what
* I need to revisit my HTML as well: the structure I have is from jsonresume, and might not be suitable to what I want.
* Need to be aware of the to make a difference between "basic styles" and custom-theme styles
* Check https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/ on how to create a `ThemeProvider` to make the theme selection a thing.
    * I would have to revisit `styled-components` OR copy a project setup to make the ThemeProvider to work 
* I would need to define styles for:
    * headers
    * div, span, strong, p, section, header, button, etc.
    * positioning styles
    * width, height, em units, everything!

### Research on themes
* SO's design system: https://stackoverflow.design/product/guidelines/using-stacks/
* Tailwind: https://tailwindcss.com/

#### Examples I found regarding themes applied to portfolios: 
    * https://github.com/flexdinesh/flexdinesh.github.io/tree/dev (check the "components/ThemeSwitcher" part)
    * https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/

#### SO's Stacks Design system analysis.
* Including the styles into the page should be simple (link rel="stylesheet" href="https://unpkg.com/@stackoverflow/stacks/dist/css/stacks.min.css")
    * this will load ALL the css. It's 100% optimizable
        * need to see how to "purge" css
* I would need to "learn" the DS to make this work. There's not only specific component styles but basic ones, and those are the ones that might cause troubles in a future.


#### Tailwind.css analysis
* Has a "react-based" solution:
    * configuration is highly optimized (for example, no need to purge css manually)
    * Need to override "create-react-app" configuration to make it work (https://tailwindcss.com/docs/guides/create-react-app)
* Same as for SO's DS: I would need to "learn" their classes to make this work.
* I don't know if working with both Tailwind and `styled-components` makes sense 🤔.
    * Read https://xpromx.me/blog/tailwinds-vs-styled-components
* The tool is HUGE and will take me quite some time to get used to it

#### An approach on how to do this: https://github.com/cliffhall/iterating-react-design
1. use a lib to get everything in react (in my case, I've built the components on my own) with hard-coded data
    * downside: you get a dependency you don't want (in my case, the css from the stackoverflow theme and the html)
2. refactor the current components, build a `custom component kit` and get rid of the dependency as much as you can (i.e: what I already did).
3. Big refactor:
    1. Fix the HTML and remove the css in each component
        * HTML must be semantically correct (pseudo selector styles will be affected for sure!)
    2. Create global styles
        * read styled-components docs
        * might want to check how to do it using some of the examples I got during the research
    3. Build the theme Provider and use it in each new component
        * need to revisit the "Provider" pattern from React again
    4. Setup a new theme (dark/light)
    5. Include the theme switcher
        * I'll use a toggler and put it somewhere
    6. Make the data come from the BE (not really needed in my case)



## Decision
* Not Tailwind for now. I'm going to *use the style patterns from Stacks's DS to make my css more robust*
* I'm going to follow the approach described above, following the order defined there

## New TODO (to be deleted when style refactor is finished)
- [ ] Fix the HTML and remove the css in each component
        * HTML must be semantically correct (pseudo selector styles will be affected for sure!)
- [ ] Create global styles
        * read styled-components docs
        * might want to check how to do it using some of the examples I got during the research
- [ ] Build the theme Provider and use it in each new component
        * need to revisit the "Provider" pattern from React again
- [ ] Setup a new theme (dark/light)
- [ ] Include the theme switcher
        * I'll use a toggler and put it somewhere
    6. Make the selected theme to be stored in local storage
