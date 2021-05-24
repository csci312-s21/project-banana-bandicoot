# Feedback for banana-bandicoot

(X) tagged commit on main for sprint2
(X) set of closed user stories
(X) working deployment on Heroku
(X) travis reports build passing
(-) team members have completed reflection
(X) demo

## Checklist notes

- Missing reflection from Leili

## Discussion

### Functionality

You have a lot of good functionality going on. I appreciate the touches like the icons and the reactive design of the menu bar. The background colors and the big gray boxes for the events are perhaps less successful. They give the site a dated, home-brewed look, though ultimately that doesn't matter over much if you are happy with it.

As I expressed in class, it feels like perhaps some of the choices weren't well motivated. I'm not sure why you have a profile. I am always suspicious of an app that asks for personal information without a good reason to do it.

I think you want to work a little more on adding events as well. It seems that you can create groups at the moment by just typing in something new for the group, which could rapidly get out of control. It also seems like you will need a way to edit and delete events.

I am a little concerned that you left all of the server and db stuff until the final sprint. I think that leaves you with a lot to do in a short period of time.

### User stories

The user stories generally are looking pretty good. I see scores, acceptance tests, and assignees.

I note that two of the user stories that are still in the backlog have to do with the profile. I'm a little concerned that these are fairly vague. The implementation of the profile doesn't seem to lend itself towards actually supporting the desired outcome for the user.

I also see a couple of user stories that are in the form of "as a developer..." There is no need to write stories like this. For things like creating the seed data, just make a to-do item. It is okay if some of your work items are not user stories. For the one about the server, this can be turned around fairly easily to talk about the user's desire for persistence and for others to see their posts. I would also not have given this a "4" -- this is an epic, and should be broken down into a collection of smaller pieces.

### Agility/scrum

You are still looking a bit bursty when I look at the commits. I see something like one commit a day most days and then a big spike in the middle of the week. Admittedly this isn't really a measure of when work is done, but it could be that you just need to be committing changes more often.

I see a collection of stories still in the backlog. This isn't in and of itself too worrying, but it does suggest that you over-estimated what you could accomplish this sprint.

### Integration

I see a lot of pull requests, which is promising. I'm a little concerned about how prevalent Corey and Daniel are in the process, however. Others should make sure that they are getting involved issuing pull requests and checking off on them. I note that there seems to be very few instances (if any) where someone has actually commented on the PRs, and it mostly just seems to be someone else on the team accepts the PR. The process is meant to be a little more reflective.

I also see a lot of closed pull requests that are reopened as new ones shortly after. There is no need for this. If you don't want to accept a PR, you can make edits and push again and it will show up in the same PR.

### Implementation

- Event: I'm not sure why you have `numPeople` state. It looks like you are violating our "single source of truth" rule.

- ButtonBar: I'm all for modularization, but it isn't clear why this is not just part of `Event`. There are so many props that it is not clear that you have an gains here or opportunities for reuse.

- I don't see any PropTypes

- Testing is clearly a place for you to improve. I see _one_ test that isn't a smoke test, and all it does is make sure that the name of the event is displayed. I had a conversation about testing that is relevant here. I will let him share it with the group.
