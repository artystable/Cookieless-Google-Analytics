
# Greetings!

## TLDR;
This code snippet creates an annonymous user profile ID via `fingerprint.js` and then triggers an annonymous Google Analytics log with the data. This allows you to collect user level data while respecting your visitor's privacy. Neither you nor any 3rd party vendor (i.e. Google, etc.) are able to identify the visitor yet the visitor can be uniquely differentiated in the analitics tool (i.e. win-win).

---

## Demo

A demo with a basic implementation can be found [right here](https://codepen.io/artystable/full/VwwymXm).

---

## Description

This is a minimalistic implementation of a "cookieless" Google Analytics tracking snippet. Personally, I am very laid back about privacy and aim to focus on acting in such a way as to reduce the amounts of information I feel I need to hide. That being said, today's border-line thuoghtless use of visitor tracking software has much to say. As a developer, I generally get to circunvent or at least make moderatey concious choices when visiting websites that rudely track my information without the smallest sign of concern about the impact in my experience. I always feel sad, however, thinking about the people who do not even get the chance to make an informed choice.

And life is not without a sense of irony. Because seince I recently put up my GitHub pages website, I too wanted to enjoy some degree of vision over visitors to my site. Google Analytics seemed like the best choice for a quick and simple implementation. Specially considering that GitHub pages (while FREE and absolutely awesome in so many different ways!) does not offer server-sided options for basic wevbsite traffic analytics that one could setup - at least not that I am aware of and/or that are easy to implement.

After doing quite some research, I came along a solution that was pleasing to me. The follwoing is the solution in short: The `fingerprint.js` library is loaded into the site's code. The Google Analytics script (including a pre-selected gtag) is loaded into the site's code. Finally, a simple JavaScript snippet calls the fingerpring.js library to create an annonymous user profile everytime a visitor accesses the site and then a gtag log is triggered with this annonymous user profile as well as with the specific request that the request be annonymous.

While I am sure there are better ways of handling this task, I am very pleased with the outcome on several levels. Particularly, I really like the fact that using the fingerprinted user data provides an awesome way to respect my visitor's privacy from both myself as well as any other 3rd party vendor (i.e. Google, etc). But at the same time, I can use individualized user data to analyze my web traffic in a meaningful way. That is because while the fingerprinted user data is annonymous, it is also practically unique, which allows me to analyze my site data at a user level without having to be able to "know" who the user is.

---

## Reference Links

**Fingerprint.js:**
- https://github.com/Valve/fingerprintjs
- https://cdnjs.com/libraries/fingerprintjs

**Google Analytics:**
- https://analytics.google.com/
- https://developers.google.com/analytics/devguides/collection/analyticsjs
- https://developers.google.com/gtagjs
- https://www.googletagmanager.com/gtag/js
- https://www.google-analytics.com/analytics.js
- https://github.com/googleanalytics/

**Other:**
- https://github.com/Foture/cookieless-google-analytics (original inspiration from personal research)
- https://www.webpagetest.org/
