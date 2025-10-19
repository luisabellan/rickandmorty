[![Netlify Status](https://api.netlify.com/api/v1/badges/55ebbbbd-f097-4c59-9df9-407100085bce/deploy-status)](https://app.netlify.com/sites/rickandmorty-squarerobin/deploys)

# Rick and Morty Fan Site

This is a fan site for the Rick and Morty universe built as a Next.js 15 application with TypeScript and Tailwind CSS. The project is maintained to be compatible with Spanish unemployment benefits (prestación contributiva de desempleo) regulations.

----

## Compliance with Spanish Unemployment Benefits

This project is designed to maintain compatibility with Spanish unemployment benefits (prestación contributiva de desempleo) through:

- **No profit motive (no ánimo de lucro)**: All operations are non-commercial
- **No habitual income (habitualidad de ingresos)**: Donations are voluntary with no recurring payments
- **Transparent financial reporting**: All donations are used exclusively for hosting and domain expenses
- **Open source licensing**: MIT license ensures community ownership
- **Community-focused purpose**: Site exists solely as a fan resource

For more details on our compliance measures, see our policies:
- [Anti-Habitual Income Policy](./ANTI-HABITUALIDAD-POLICY.md)
- [No Profit Motive Policy](./NO-ANIMO-DE-LUCRO-POLICY.md)
- [Financial Transparency Report](./apps/rickandmorty/app/financial-report/page.tsx)
- [Legal Review](./Legal-Review.md)
- [Ko-fi Donation Implementation](./KO-FI-SETUP.md)

## Donations

This project uses Ko-fi for donations to cover hosting and domain expenses. During the autónomo period, donations are temporarily accepted. After the autónomo period ends, donation functionality may be disabled to maintain compliance with unemployment benefit regulations.

## Environment Configuration

The project uses the following environment variables:

- `NEXT_PUBLIC_KOFI_USERNAME`: Your Ko-fi username (optional)
- `NEXT_PUBLIC_KOFI_ENABLED`: Whether to enable the Ko-fi donation button (default: false)
- `NEXT_PUBLIC_BASE_URL`: The base URL for metadata

To configure these, copy `.env.example` to `.env.local` and update the values as needed. The `.env.local` file is git-ignored and safe for local development.

## Copyright Compliance

This project uses images and content from the Rick and Morty television series for educational and fan appreciation purposes only. All content remains the property of Adult Swim and Williams Street. For more details, see [Copyright Compliance](./COPYRIGHT-COMPLIANCE.md).

# Sprint Challenge: Single Page Applications 

## Rick & Morty Edition

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Single Page Applications, React Router I - II, and React Forms.

**Deployed here:** https://rickandmorty-squarerobin.netlify.com/ and https://rickandmorty-nu.now.sh/

## Instructions

**Read these instructions carefully. Understand exactly what is expected *before* starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate with students during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support by reaching out through DM to your TL.
You have **three hours to complete** this challenge. **Plan your time accordingly.**

## Commits

In case you ever need to return to old code. Remember your **ABC: Always Be Committing!**

## Description

In this challenge, you will create a Single Page Application complete with Client-Side Routing. It must consume a 3rd party API service (based on the TV show [Rick and Morty](https://rickandmortyapi.com/documentation).)

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question.

- [x] Explain benefit(s) using `client-side routing`?

> Answer: 
> Full page reload is not required
> Lazy loading of elements on pages (saves bandwith and 
> Rich interactions
> Hosting is cheaper than server-side technologies like PHP (serving static files is cheap and sometimes free like Github Pages, Netlify, etc)
> Use of CDNs
> Easy to Deploy (with surge you can simply type "now" in the terminal!)
> Separation of Concerns is enforced (data access and business logic are out of the user interface)
> ..



## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on GitHub.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: `git checkout -b <firstName-lastName>`.
- [x] Implement the project on this branch, committing changes regularly.
- [x] Push commits: `git push origin <firstName-lastName>`.
- [x] **LOOK** at your project directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [x] **RUN** `yarn install` or `npm install` to retrieve the client-side dependencies.
- [x] **RUN** `yarn start` or `npm start` to fire up your React application.

### Exceeded rate limits?

<details>
<summary>⚠️ Expand for alternate API URL</summary>


If the [main API service](https://rickandmortyapi.com/documentation) goes down, or you exceed rate limits, try the following URL:

**[Backup URL:](https://rick-api.herokuapp.com/api/)** `https://rick-api.herokuapp.com/api/`

You can still be locked out - watch your [chrome devtools' network panel](https://developers.google.com/web/tools/chrome-devtools/network/reference) to make sure you aren't making too many requests.
</details>


## Minimum Viable Product (MVP)

> The MVP of this project is broken up between a couple parts.
> Construct a Single Page Application with React.

**Your finished project must include all of the following requirements:**

_Display Data from a Server API_

- [x] Fetch a list of characters from the Rick and Morty API's Characters endpoint *`https://rickandmortyapi.com/api/character/`* and render them to the screen.
- [x] You must display at least one element for each character.

_Add a Router to this application using [React Router](https://reacttraining.com/react-router/web/guides/quick-start)._

- [x] Hook up the Welcome page(Home page) and a Characters page with React Router.
- [x] Use a styling or component library for part of or all of your application. (Pick at least 1 of: [s](https://react-bootstrap.github.io/)tyled-components or Reactstrap).

_Add 'Search by Name' feature._

- [x] Add the `<SearchForm />` component (see `./components/SearchForm.js`).
- [x] Create a search form that will filter through the data displayed in the character list.

### **Required best practices:**

- [x] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [x] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [x] Consistent quotation usage.
- [x] Spell-check.
- [x] Schedule time to review, refine and reassess your work.

It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

---

> 🚀 Pro Tip: Complete as many stretch goals as possible! Even after the Sprint Challenge! You'll get a head start on important upcoming concepts!

## STRETCH GOALS 💪

There's a range of difficulty in the options below. 😈

*Note:* The most difficult stretch goal(s) could take an expert an hour or more.

Start with the most *familiar (or fun) sounding* stretch goal.
Complete search component to your list views.

- [ ] Try adding 2 more components and display data from the episodes and locations end point.
- [ ] https://rickandmortyapi.com/api/location/ - docs
- [ ] https://rickandmortyapi.com/api/episode/ - docs

- [x] Wire up the `onSearch(name)` callback prop to support [querying the API](https://rickandmortyapi.com/documentation/#filter-characters). (To search for `rick`, you would request `/api/character/?name=rick`.)
- [ ] Animate page transition and/or card loading.
- [x] Persist search form field(s) by using the custom hook `useLocalStorage`.
- [x] Add error handling for all async (axios/AJAX) calls. (Including some styled UI.)
- [ ] Add a "details view" and route to show more details for each type of record. (Hint: Look into route parameters or nested routes.)
  - [x] Similar to the "details view" now with a UI twist: use a [modal](https://react.semantic-ui.com/modules/modal/#variations-size) component to show item view. (If you can, build [modal with routes](https://codesandbox.io/s/react-router-modal-gallery-classes-example-z98l5).)
- [x] Add [paging support](https://react.semantic-ui.com/addons/pagination/#types-pagination) (next/previous links.)
- [ ] Refactor to use as few Components as possible - while still readable to a React Dev. (Hint: research these patterns: HoC, render props, FaaC.)
- [ ] Add additional fields to search form. They are unique for each endpoint. See **[Available parameters**.](https://rickandmortyapi.com/documentation/#filter-characters), etc..
- [ ] Use the [GraphQL Endpoint](https://rickandmortyapi.com/documentation/#graphql) with multiple search fields.

### Benefits of Using GraphQL over REST API

The current implementation uses the Rick and Morty REST API, but switching to GraphQL would provide several advantages:

- **Efficient Data Fetching**: GraphQL allows requesting only the specific fields needed, reducing over-fetching of data compared to REST endpoints that return fixed data structures.

- **Single Request for Related Data**: Complex data requirements can be fulfilled with a single GraphQL query, while REST might require multiple requests to different endpoints.

- **Better Type Safety**: GraphQL has a strong type system that provides better documentation and catches errors at development time.

- **Reduced Network Requests**: GraphQL can handle complex queries in fewer requests, improving performance and reducing network overhead.

- **Frontend Flexibility**: The frontend can request exactly what it needs without requiring changes on the backend, providing more flexibility in UI development.

- **Built-in Documentation**: GraphQL schemas provide clear documentation about what data is available and how to access it.

> 💡Reminder: git commit -am 'Stretch Progress 💪'

## Completing

> Follow these steps to complete your project:

- [x] Submit a Pull Request to merge `<firstName-lastName>` branch into master (student's repo).
- [x] Add your TL as a Reviewer on the Pull Request.
- [x] TL then will count the HW as done by merging the branch into master.

<!-- TLs: NOTE: use resources to coach, or share over zoom - avoid sharing entire solution folder. Share preview links if available. -->

> Note: AFTER Sprint Challenge: Solutions to many stretch goals (and live demo URLs) are available from TLs (or GitHub admins.)

There are many ways to implement each of these requirements!
