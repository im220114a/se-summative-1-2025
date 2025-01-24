# Stand-Up Scheduler
A simple web application for product teams to manage daily stand-up rotas. It allows users to input team member names, select which weekdays to hold stand-ups, randomly assign a leader for each day, and export the final schedule as a CSV file. The application is built with vanilla HTML, CSS, and JavaScript, and uses Jest for basic testing. Created By: Ibrahim Malik (@im220114a).

## Table of Contents
1. [Context and Purpose](#context-and-purpose)
2. [User Documentation](#user-documentation)
3. [Technical Documentation](#technical-documentation)
4. [Development and Design Process](#development-and-design-process)
   - [Planning](#planning)
   - [Non-Functional Design Prototype](#non-functional-design-prototype)

## Context and Purpose 
Agile Scrum teams rely on daily stand-ups to share progress, address blockers, and plan immediate next steps. Traditionally, a Scrum Master or consistent facilitator leads these quick sessions. However, our managers and Scrum leaders believe in rotating this responsibility amongst each product team memeber. This model is being implemented in order to :
* Foster a culture of shared responsibility and ownership.
* Develop leadership competencies for future Scrum Masters or project leads.
* Encourage balanced participation, as people who lead one day are more likely to actively support others on subsequent days.

Until now, we’ve been choosing a facilitator informally—often deciding at the last minute. This spontaneous approach can catch team members off guard or unfairly shift the burden onto a few individuals. Our application provides a simple, efficient solution: it generates a random schedule for the entire week, ensuring each person on the product team knows in advance which day they’ll be leading the stand-up. In the future, the application could be enhanced to integrate with existing project management tools—such as Jira or Slack—to post daily reminders. However, currently the website produced is a minimum viable product.

## User Documentation
This application is a three-step tool :

**1. Add Team Members**
   - Under the **Enter Names** box (left side), type a name in the input field
   - Press **Add** or hit Enter to confirm
   - The new name appears in a list below
   - **Duplicate Check** - If you try to add the same name twice, an error will appear
   - Remove a name by clicking the **X** button next to it
     
**2. Choose Days & Generate Rota**
   - In the **Day Selection** box (middle box), each weekday is listed with a checkbox.
   - By default, all weekdays are checked. Uncheck any day you don’t want in the rota.
   - Click **Generate Rota**.
   - If no attendees or no days are selected, an error prompts you to correct it.
     
**3. View & Export**
   - The right-hand box displays the randomly assigned schedule in a table.
   - Each day is listed in one column, with a randomly selected leader in the next.
   - **Export Rota** downloads the table as a `standup_rota.csv` file. You can share or archive this file for reference.
  
**Resetting Attendees**
- Click **Clear All** in the left box to remove all names. You’ll be asked to confirm.
- After clearing, you can add new names for a fresh start.

**Example Usage**
1. Add the following names : “Alice”, “Bob”, “Charlie" and “Diana”.
2. Uncheck Friday if your team doesn’t do stand-ups on Friday.
3. Generate Rota by clicking the button. A table appears in the right box, showing each day with a randomly assigned leader.
4. If you want to export or share it, click “Export Rota.”

## Technical Documentation


| File/Folder          | Purpose                                                         |
|----------------------|-----------------------------------------------------------------|
| **index.html**       | Main HTML page, containing three “boxes” for names, days, rota. |
| **style.css**        | Core CSS styling.                                               |
| **script.js**        | Main client-side logic for DOM events, form submissions, etc.   |
| **functions.js**     | Core logic functions (add, remove, shuffle, etc.). Kept in a seperate .js file for jest testing|
| **\_\_tests\_\_/**   | Jest test files held in this folder                             |
| **package.json**     | (Optional) Lists dev dependencies, for Jest.                    |
| **package-lock.json**|                    |
| **.github/**         | Contains issue templates and GitHub Actions code                |

### Local Installation & Setup
1. Clone this repository:

   ```bash
   git clone https://github.com/im220114a/se-summative-1-2025.git
   cd se-summative-1-2025
   ```

2. **(Optional)** Install dev dependencies for testing:

   ```bash
   npm install
   ```
3. Open `index.html` in your preferred browser to run the application locally.

### Testing
We use **Jest** for testing the logic in `functions.js`. Basic tests live in `__tests__`:
1. Install Jest (if not done):

   ```bash
   npm install --save-dev jest
   ```

2. Run Tests:

   ```bash
   npm test
   ```

Sample Test - `displayRemoveReset.test.js` demonstrates the expected format for testing the addition and removal of attendees in the list.

### Known Limitations
- Currently no persistent storage. When the page reloads, the attendee list resets.
- Limited error handling (e.g. quickly re-adding a name)

## Development and Design Process

### Planning
To create a structured roadmap for development, a planning phase was implemented to capture user needs and map them to the application design and functionality.

#### Empathy Map
This empathy map analyses the experiences of Agile product team members participating in Scrum stand-ups. By identifying the primary user (the team member tasked with leading stand-ups) and considering what they typically say, think, do, and feel in scenarios where roles are unclear or randomly assigned at the last minute, common themes of anxiety, uneven role rotation, and a desire for advance notice emerged. These insights were gathered through interviews (in-person and via Microsoft Teams), observations, and personal experience, then categorised into unmet needs ("Pains") and potential benefits ("Gains").

![EmpathyMap (1)](https://github.com/user-attachments/assets/686c192c-7f20-4fb5-9247-db190337db60)

These findings, in turn, informed the user stories created for this project.

#### User Stories
The following user stories formed the foundation of the MVP:

- "As a product team member, I want to enter a list of names so that they appear in on an-screen table, allowing me to visually confirm who is included in the daily stand-up rotation"
- "As a product team member, I want to generate a random rota for the week, so that each day has a designated person to lead stand-up"
- "As a developer (and indirectly as a product team member), I want an automated testing setup so that I can confidently add and modify features without breaking existing functionality."

Each story was further broken down into subtasks. For example, the first user story was divided into:
- Create & Validate HTML Form
- Display, Remove Names & Reset List

### Non-Functional Design Prototype
The initial design prototype was created using Figma to visualise the interface layout and functionality.
![image](https://github.com/user-attachments/assets/be49a106-7c30-4b75-b891-80e1a8b8ffa7)


### Project Management
After having completed the design stage of the project, the next step was to organise the development pipeline. This invovled using GitHub and GitHub Projects to ensure effective workflow and task tracking.

### Ticketing System
GitHub Projects’ Kanban board functionality was used to manage tasks, linking issues and branches to ensure  alignment.

Before starting development, I utilised GitHub's [ticket template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository) feature to define two types : "Features" and "Bugs". Feature tickets required an associated user story, a description, acceptance criteria and optional additional notes. Bug tickets required a description, steps to reproduce, the expected result, images if applicable and optional additional notes. I then created sub-task tickets linked to the 3 user stories created previously. This link was only established by copying the user story in the sub-task ticket, however I discovered near the end of development that "Sub-issues" are a built-in feature of GitHub Projects. I could theoretically create a ticket for each user story and create sub-task tickets directly from them, which would be easier to track and manage. For future GitHub projects, I'll aim to utilise this functionality where applicable.
![image](https://github.com/user-attachments/assets/45932511-727b-4111-aae4-4befeeced2e2)

### Branching Strategy
Each ticket was associated with a dedicated branch, ensuring changes were incrementally merged into the main codebase. This approach enabled controlled versioning and reduced the risk of introducing bugs.

### Scrum Methodology
A key aspect of this was regular reviews to inform decisions that improve the workflow process for the rest of the project. This is part of the Scrum methodology in which the product team has reviews at the end of each "Sprint" (a set period). As I am the only member of the team and due to the time available for this project, I was only able to perform sprints of 2/3 days, in which I would review if anything could be done to improve [insert here]. As an example of where this had helped was during my first sprint in which I noticed that GitHub, upon trying to merge my branches, informed me that I should setup "GitHub Actions"

![image](https://github.com/user-attachments/assets/7d490f44-b336-4026-ac39-74ab66197b97)

This was noted to be looked at during one of my sprint reviews. I discovered that [GitHub Actions](https://docs.github.com/en/actions/writing-workflows/quickstart) is a Continious Integration and Continous Delivery platform built into GitHub, which automates specific tasks, such as running tests whenever new code is pushed. This stood out as a very useful and applicable tool for this project, so I created another ticket to look at implementing GitHub Actions as part of the next sprint.

![image](https://github.com/user-attachments/assets/f6a6d5d6-b0c7-41c2-8eac-b99a6395733e)

Repeated evaluation is a core part of Scrum. For example, in one of my sprint reviews, I decided to break down my generic "Implement Unit Tests" ticket into a more specific "Create Tests for ..." tickets. This was easier to track as I could focus on completing the functionality of one aspect of the product as well as the testing, before moving on to the next.

### Coding Practice
In order to maintain strong code, I followed a standard to name my GitHub branches, my JavaScript functions and my JavaScript variables which were :

- Branches (v1) : `type/short-description` (e.g. feature/display-remove-reset)
- Branches (v2) : `type/#-short-description` (where # is ticket number)
- Functions : `myFunction()` (camelCase)
- Variables : `variable` or `secondVariable` (camelCase)

Comments are used regularly throughout my code to clarify what is occuring and why, without overloading the reader with information for each line of code. Additionally, JavaScript descriptions are used to explain functions (similar to Python's docstrings).


### Testing
For testing my application, I used the testing framework [Jest](https://jestjs.io/). [insert reasoning on why Jest is a good framework to use for this simple project]. After enabling GitHub Actions, the tests I defined would automatically run whenever attempting to create pull requests to the main branch, ensuring that any additions to the codebase would not be breaking any existing functionality. This is incredibly important where bugs may slip through manual testing.

#### Experimenting with Test Driven Development (TDD)
Part of this project involved learning about the usage of test-driven development, and more importantly, how one would incorporate it into their workflow. In order to understand it better, I decided to choose one ticket ("Display, Remove Names & Reset List") that would be developed via TDD.

I first had to define tests for what I would expect to be returned from functions

![image](https://github.com/user-attachments/assets/7daed43b-cdca-4238-809e-22921f25b7aa)

Then, running the tests would guarantee that they fail :

![image](https://github.com/user-attachments/assets/7af415ab-e592-4b42-8d09-f99eeccacc5a)

These tests were merged with the main branch and I began developing a new branch dedicated to actually creating these theoretical functions :

![image](https://github.com/user-attachments/assets/c5fa1062-4c5a-454c-b0a2-8de5c5e25d12)

After developing the function, I then made sure the tests had passed 

![image](https://github.com/user-attachments/assets/e9d74d16-892f-4c07-b807-3885f2f8e596)


### Accessibility

## Evaluation
