# Postcoders

This is the take-home tech test for the R2 Factory / Northcoders Dev Incubator 2023 Front-end Software Engineer role.

The test is to fix some bugs and build some new features for the react app - Postcoders.

## The App - Postcoders

Postcoders is a react app that provides users with information about UK postcodes, by fetching data from the Zippopotamus API (https://api.zippopotam.us).

## Local Setup

-   You'll need node version 16 or above
-   Install dependencies (`npm install`)
-   Run locally (`npm run dev`)


## Tasks ##

### Firstly, two bugs:

1. The app doesn’t load properly, a pesky alert keeps popping up. Find out why and fix the root cause.

2. Once the above is fixed, the app should display the number of areas/places per postcode but it’s stuck at 0. Debug it and find a fix.

### Then two features:

3. The app is pretty useless as it’s hard-coded to always return search results for “BB8”. Create a way for the user to provide the postcode they want results for. Only the “outcode” part of the postcode needs to be provided (e.g. “M1” rather than the full “M1 7ED”).

4. In addition to displaying the number of areas/places for a given outcode, display the data for each area/place and render it in a MUI Card (https://mui.com/material-ui/react-card/). You'll need to install a new npm package for this.

### And one performance improvement:

5. Reduce the number of API calls being made by using a cache. If the user queries “BB10” twice, couldn’t the user just be presented with the data from the first request when they make the second one?

## Submitting Your Tech Test

Reviewers will also clone your repo to check it works ok. They should only have to check out the “tech_test” branch and run “npm install” and “npm run dev” to start using the app.
