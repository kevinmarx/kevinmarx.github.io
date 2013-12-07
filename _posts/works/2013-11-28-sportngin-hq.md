---
layout: post
title: Sport Ngin HQ
cutline: A powerful new application for managing tournaments and leagues.
roles: Front-End Development, UI/UX, Architecture
technologies: Javascript, NodeJS, BackboneJS, UnderscoreJS, Ruby on Rails, MongoDB, SQL, HTML5, CSS3
key: hq
categories: works
---

Sport Ngin HQ allows organizations to seemlessly run their tournaments and leagues.
HQ is a front end application built on NodeJS with BackboneJS running on the client. It integrates with many
Ruby on Rails back end services to bring the user the content. One of the challenges with this appication was that
we rendered the templates server side when a user initally enters the app and then initialized backbone to make the app
a "single-page" application. We utilized HTML5 PushState to achieve the single page app feel so we could update the urls
without a full page reload.

![](/images/works/hq/1.png)
![](/images/works/hq/2.png)
![](/images/works/hq/3.png)
My tasks on this project was building out the scheduling and seeding portions of the application. This came with a set of challenges
both in rendering views and formatting data. To schedule a game you needed to know what division a game was for, the teams, the venues
you can play the game at, the status of the game, game time, game duration, who's the home team and the scores. This resulted in a rather large
payload of data being sent to the client from multiple services which then had to be formatted so that it could be efficiently rendered.

![](/images/works/hq/4.png)
One of the more difficult challenges I had on this project was rendering the grid view for assigning games to venues. This view allowed
users to visually assign games to venues at specified game times. I had to devise an algorithm to sort the games by time and venue so I could render them.
Then I wanted to be able to render the y-axis of the table independently since the user could filter which venues they were looking at any given time or change the time interval
they were viewing requiring the view to re-render. I had to devise a way to render a table with columns as the priority instead of rows
and as many would know that's not how HTML normally works.

![](/images/works/hq/6.png)
![](/images/works/hq/5.png)
![](/images/works/hq/9.png)
Since this application was utilizing such a large data set our challenge was then providing an api for our mobile applications to be
able to consume this data pre-filtered and pre-processed so the device itself would have to do as little work as possible.

![](/images/works/hq/mobile.png "mobile")
