# Feedback for banana-bandicoot

(X) project repository with all team members
(X) package.json updated
(X) `npm test` and `npm run lint` run without errors
(X) travis reports build passing
(X) project deployed to heroku
(X) README.md is updated
(X) one pull request
(X) commit tagged sprint0
(X) backlog populated with epic user stories
( ) lo-fi storyboards created
( ) CRC cards created

## Checklist notes

- I don't see designs or CRC cards

## Design notes

You have made some good progress cranking out a collection of user stories. I didn't go through every one of them though I have a couple comments from the first few:

#28: Where did the map come from? Is it really necessary? It isn't justified in the story.

#24: You want to be able to chat individually so you can communicate separately from a group? This is the kind of circular formulation you want to avoid. You are justifying the story with itself. What is the real motivation for supporting direct messaging? I might work a little more on the acceptance test. Surely it should include something along the lines of a message being successfully sent that can be read by the other user. If it is a conversation, both user should be able to see it.

#25: This is still pretty high level. The acceptance criteria don't quite seem testable.

These follow a general theme. Many of the user stories are still closer to epics in scope. Get a little bit more specific, remember that you need to justify everything, and your acceptance criteria should be something you could actually write a test for. A number are so vague that it will not be easy to tell if you succeed.

You really want to avoid the circular justifications. Even something like I want to see things on a map so I can visualize my plans is circular. This is basically saying I want to see it on a map so I can see it on a map. Why? Think about what maps facilitate. Are you trying to judge if events are close together? Trying to figure out if you have time to reach an event? need directions on how to get there?

In terms of the actual design itself. I would focus in on one piece of the functionality. Perhaps start with the message boards or the hobby clustering. You will not have time to implement everything so make sure the essentials are done first.
