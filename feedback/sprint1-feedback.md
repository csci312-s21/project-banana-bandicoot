# Feedback for banana-bandicoot

(X) tagged commit on main for sprint1
(-) set of closed user stories
(X) working deployment on Heroku
(X) travis reports build passing
(-) team members have completed reflection
(X) demo

## Checklist notes

User stories have been classified as "done", but are not really "closed".

Missing reflections from Leili and Daniel.

## Discussion

### Functionality

I'm glad to see that you have sort of sketched in the site and made use of material-ui (though I would caution against too much use of background coloring -- modern web design has less of that).

Obviously, you don't have much to look at yet. I think you will want to continue to focus on fleshing out that core functionality in the next sprint.

### User stories

The user stories are looking reasonable. Watch out for user stories like #34 which is clearly just a placeholder for "make a menu". Rather than specifying the interface, get at the goals: in this case it is possibly to be able to quickly access all of the hobbies the user is interested in. In truth, what you are calling a menu isn't actually a menu, it is a panel for managing hobbies. The problem with this current story is that it presupposed the interface and the acceptance criteria then focused on the implementation.

A better approach would be to make a couple of user stories:

- As a user I would like a centralized place in the app where I can access all of my hobbies so I can quickly browse current activities.

- As a chess player I would like to join the group interested in chess because I want to find more people to play with.

- As new user I would like to be able to see what hobbies have been created because I like to try new things and meet new people or because I'm curious if anyone has any interests that are similar to mine.

- As a cigar box guitar builder I would like to be able to create a new hobby group about cigar box guitars because there isn't currently a place for folks interested in building and playing them on campus and I want to connect with others who share my interest.

- As a user, I would like the website adjust for smaller screen because I want to be able to check on hobby activities from my mobile device.

This is just a sampling of potential user stories that you could generate that cover some of the functionality of the current hamburger menu/panel. The use of the panel doesn't appear in any of those, it would be up to the dev team to decide that the panel is the appropriate way to satisfy those needs. This also gives you more granularity on your to do list.

I know that you have some of those in the product backlog already. I see for example #3 "As a user, I want to be able to look at created groups, so I can find groups to join.". This is okay, but lacks a little bit of richness -- it still has a whiff of "I want this feature so that I have this feature". Getting at the different reasons _why_ someone wants to join a group might suggest different interfaces. For example, if it is to find active groups, then maybe the interface should include how many participants, or how many events, or event frequency. Maybe you want to suggest shared hobbies. Maybe you want to ask the user about their interests and suggest groups for them to join rather than having them page through a big list. Maybe groups should have blurbs to help attract new participants.

### Agility/scrum

What happened to the .gitignore file? All the sudden you have `node_modules` and `.next` included in your repository which is... not great. You will need to delete `node_modules` and `.next` from the repository, then add a `.gitignore` file before you run the project again.

Putting that to one side for a moment, I like how your project board is shaping up. I see some clear communication, scoring, and acceptance tests. I would encourage you to assign people to particular tasks (self assign even), and to close issues when they are complete.

As I pointed out in class, your pattern of commits is fairly sparse and bursty. You will want to work on a more even pattern of work in the next sprint.

### Integration

The pull requests suggest that you are still feeling your way around this process. I see a lot of opened and closed pull requests. I also note that Corey and Dan are overly represented here. Make sure that you get more eyes on your changes.

### Implementation

You will probably want to pay attention to the mulit-page practical when it comes out. I suspect it will be useful to you.

I see some dead code in comments, make sure to clean those up. What i would love to see instead is a little bit of documentation about what your components are and what their interfaces are.

The biggest missing piece is, of course, tests. The tests that yuo have in place at the moment are fairly minimal. In fairness, you don't have much to test yet, but I will hope to see more testing in the future.
