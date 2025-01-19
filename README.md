# SE - Summative Assignment 1
Software Engineering Summative Assignment 1

## Context and Purpose 
Agile Scrum teams rely on daily stand-ups to share progress, address blockers, and plan immediate next steps. Traditionally, a Scrum Master or consistent facilitator leads these quick sessions. However, our managers and Scrum leaders believe in rotating this responsibility amongst each product team memeber. This model is being implemented in order to :
* Foster a culture of shared responsibility and ownership.
* Improve communication skills across all team roles.
* Develop leadership competencies for future Scrum Masters or project leads.
* Encourage more balanced participation, as people who lead one day are more likely to actively support others on subsequent days.

Until now, we’ve been choosing a facilitator informally—often deciding at the last minute. This spontaneous approach can catch team members off guard or unfairly shift the burden onto a few individuals. Our application provides a simple, efficient solution: it generates a random schedule for the entire week, ensuring each person on the product team knows in advance which day they’ll be leading the stand-up. In the future, the application could be enhanced to integrate with existing project management tools—such as Jira or Slack—to post daily reminders. However, currently the website produced is a minimum viable product.

## Planning

### Empathy Map
This empathy map was created by analysing the daily experiences of Agile product team members who participate in frequent Scrum stand-ups. I first established who the primary user is (the team member tasked with leading stand-ups) and considered what they typically say, think, do, and feel in a scenario where roles are unclear or randomly assigned at the last minute. By interviewing in office (and through Microsoft Teams) or observing team members—and drawing on my own and the experiences of close colleagues—common themes such as anxiety, uneven rotation, and a desire for advance notice emerged. These insights were then organised into clear categories that reveal unmet needs (“Pains”) and potential benefits (“Gains”).

These findings informed the user stories created for this project.

### User Stories
"As a product team member, I want to enter a list of names so that they appear in on an-screen table, allowing me to visually confirm who is included in the daily stand-up rotation"

"As a product team member, I want to generate a random rota for the week, so that each day has a designated person to lead stand-up"

"As a developer (and indirectly as a product team member), I want an automated testing setup so that I can confidently add and modify features without breaking existing functionality."

Each user story had individual sub-tasks, that related to fulfilling the respective user story. 


## Prototype
Made with Figma

## Technical Documentation

## User Documentation

## Project Management
Using GitHub Projects

### Scrum Methodology
As key aspect of this was regular reviews to inform decisions that improve the workflow process for the rest of the project. This is part of the Scrum methodology in which the product team has reviews at the end of each "Sprint" (a set period). As I am the only member of the team and due to the time available for this project, I was only able to perform sprints of 2/3 days, in which I would review if anything could be done to improve my work. As an example of where this had helped was during my first sprint in which I noticed that GitHub, upon trying to merge my branches, informed me that I should setup "GitHub Actions"

![image](https://github.com/user-attachments/assets/7d490f44-b336-4026-ac39-74ab66197b97)

This was noted to be looked at during one of my sprint reviews. I discovered that GitHub Actions is a Continious Integration and Continous Delivery platform built into GitHub, which automates specific tasks, such as running tests whenever new code is pushed. This stood out as a very useful and applicable tool for this project, so I created another ticket to look at implementing GitHub Actions as part of the next sprint.

![image](https://github.com/user-attachments/assets/f6a6d5d6-b0c7-41c2-8eac-b99a6395733e)

Repeated evaluation is a core part of Scrum. For one of my sprint reviews, I decided to break down my generic "Implement Unit Tests" ticket into a more specific one and I also 

## Coding Practice
In order to maintain strong code, I followed a standard to name my GitHub branches, my JavaScript functions and my JavaScript variables which were :

- Branches : type/#-short-description (e.g.)
- Functions : myFunction() (camelCase)
- Variables : variable_name (snake_case)


## Testing

### Experimenting with Test Driven Development (TDD)
Part of this project involved learning about the usage of test-driven development, and more importantly, how one would incorporate it into their workflow. In order to understand it better, I decided to choose one ticket that would be developed via TDD.

I first had to define tests for what I would expect to be returned from functions

![image](https://github.com/user-attachments/assets/7daed43b-cdca-4238-809e-22921f25b7aa)

Then, running the tests would guarantee that they fail :

![image](https://github.com/user-attachments/assets/7af415ab-e592-4b42-8d09-f99eeccacc5a)

These tests were merged with the main branch and I began developing a new branch dedicated to actually creating these theoretical functions :

![image](https://github.com/user-attachments/assets/c5fa1062-4c5a-454c-b0a2-8de5c5e25d12)

After developing the function, I then made sure the tests had passed 

![image](https://github.com/user-attachments/assets/e9d74d16-892f-4c07-b807-3885f2f8e596)


## Accessibility
