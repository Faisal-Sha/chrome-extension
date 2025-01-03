# Chrome Extension
This challenge is to build your own Chrome extension. Chrome extensions are a software programs that extends the functionality of the Google Chrome web browser. They are typically written in HTML, CSS, and JavaScript, and they modify or enhance the browser’s functionality in some way.

Chrome extensions can add new features, customise the appearance of websites, improve productivity, block ads, manage passwords, and much more. You can install and manage Chrome extensions through the Chrome Web Store.

The Challenge - Building A Chrome Extension
For this Coding Challenge you’re going to build a Chrome extension that will customise the look and functionality of each new tab you open in Chrome. It’s drawing on inspiration from the popular extension Bonjourr and the more complicated Momentum.

If you’ve never built a Chrome extension before the Chrome for Developer website has a section on getting started building Chrome extensions.

## Step Zero
Before we begin, please set up your IDE etc. as you like it. This challenge is one you’ll be tackling in JavaScript or TypeScript along with HTML and CSS.

## Step 1
In this step your goal is to create the Coding Challenges equivalent to ‘Hello, World’ for Chrome extensions. That is create an extension that:

You can install locally
Sets the background colour of the new tab to Coding Challenges Blue (that’s #04295B)
Displays the text Coding Challenges>_ in the centre of the new tab.

## Step 2
In this step your goal is to add the current time to the tab, and the date in a human friendly format below. You can draw your inspiration from Bonjourr

Don’t forget to include the functionality to update the time!

## Step 3 - Version 1
In this step your goal is to add some dynamic information. For example, Bonjourr provides details of the weather.

We’re doing Coding Challenges so we’ll list the latest coding challenges from the Coding Challenges Substack Feed.

To do this you’ll have to ensure the extension has permission to fetch from Substack. To further complicate things, at the time of writing the Substack RSS feed does’t include CORS headers so you’ll need to find a way to fetch the feed through some sort of proxy. If you haven’t come across it before, you can learn more about CORS here.

## Step 3 - Version 2
In this alternate step your goal is to add some dynamic information without the need for a proxy. As the Coding Challenges Community is doing a great job of sharing solutions I decided to create a version that displays all the open PRs for the Shared Solutions Github Repository.

You can get a list of the PRs by calling Github’s REST API endpoint: https://api.github.com/repos/CodingChallegesFYI/SharedSolutions/pulls you’ll find the full documentation for their REST API here.