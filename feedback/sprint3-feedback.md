# Feedback for banana-bandicoot

(X) tagged commit on main for sprint3
(-) set of closed user stories
(X) working deployment on Heroku
(X) travis reports build passing
( ) handoff instructions

## Checklist notes

I see closed user stories, but they aren't labeled by sprint in any way.

There are no handoff instructions other than the generic ones that I provided initially. I really wanted to see precise instructions on how to set up the environment, provision the database for your project specifically, etc...

## Discussion

### Functionality

In terms of the functionality, you have achieved your basic aim. The site looks good, and there are no obvious broken pieces. It has sufficiently complex behavior to satisfy all requirements, and could actually turn into something useful.

I'm not sure what the mechanics or use-case is for the notifications. it displays event that I created, but only for a short period of time. I would think it would be more useful if it was events created by other people, and the time it was active was longer. It would also be good if it was categorized by Group (same for My Events for that matter).

Any other questions I might raise about it are at the design level.

- You obviously wanted to have something that would support communication, which didn't pan out.

- The "add a hobby page" looks unfinished compared to the rest of the site. It could use a touch up with styling.

- It would be good if events had real dates on them so you could order them (and clear them when they are over).

- Scaling and adminstration are also open issues, which I know where stretch goals

### User stories

It is unfortunate that the first user story I saw was "As a software developer....". This is just a todo item and it doesn't help any to pretend it is something else. There is a user justification, but in reality the justification is "for testing" because you wouldn't deploy the system that way. It is okay to sometimes write down to-do items and put them in the backlog.

I also see a user story (#15) that sort of addresses my questions about the notifications (maybe?). This is marked as completed and says something specifically about "events that have been posted since the last time I checked". The acceptance tests don't seem to match the story. They say nothing about time and do list the events the user has already joined.

Another one that caught my eye was the to-do item for "Server and database". It is fine to create a to-do item for these items, BUT... They should be included under an umbrella user story about data persistence and what needs to persist. They should still have acceptance criteria. They should also be broken up. It is so broad as to be almost as useless as having a to-do item "Make HobbyBuddy site".

So, I'd say overall, there was some room for improvement in the writing of user stories and other backlog items.

### Agility/scrum

It looks like you were relatively consistent in doing commits, though there was clearly a large spike at the end.

### Integration

It looks like pull requests were being accepted by someone other than the initiator in most cases. That said, I don't see much in the way of comments, so I have to wonder how much actual review was taking place.

### Implementation

Looking at the components you have created, I find myself a little confused by the naming schemes. It would be better if the file name matched the contents. For example, `MyEvents.js` contains `MyEvent` and `Notify` is contained in `notifications.js`. The names are clearly related, but this makes it that much harder to find a component. The choice of plural s singular is also important. `MyEvent` actually displays a whole list of events. `Notify` sounds like an action, and I certainly would expect it to display a list of events.

These two examples also highlight something else. What is the difference between what is shown in on the notifications page vs the events page? The title and the lists themselves. So, why are there two different components (with duplicated functions for handling joining/leaving/deleting)? DRY it out!

The tests are, well, pretty marginal, but I think you already knew that as all of the interesting ones were skipped. I took another look at `routes.test.js` and one of the big problem you were having is that you were reading in the JSON files directly, but you never actually parsed the data as JSON (there are others, but that is one that I could see with a quick inspection). Your tests were yielding 500 responses, so I suspect that you would have benefited from installing the error handler that I provided into your routes so you could see what was causing the errors.

## Final Thoughts

I would say that overall you had a successful experience. The site is simple, but it works. Under the covers, there is certainly a little room for improvement, primarily on the process side, but there are some opportunities to DRY out your code, and the testing was pretty minimal.
