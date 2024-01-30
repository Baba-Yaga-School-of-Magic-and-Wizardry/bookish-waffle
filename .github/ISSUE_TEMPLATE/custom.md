---
name: Basic Issue
about: All purpose issue template
title: 'Open an issue'
---

# Context

Explain in a small chapter (the one liner is for the title) the why/what/when/where of this issue.
More context is available in the milestone this issue belongs to.

# Estimates and Dependencies

Timeline for the Task to be done
List the dependencies, what are the other tasks outside of Front-End
Detail their timeline for each if possible
Finish with the task timeline and other details in the Project section

## Contact

- Put the name of anyone who is supposed to be able to help you
- Mostly back end guys who owns the part of the service involved in the issue
- But also anyone you came across during your work and appear to be knowledgeable

## Documents

- any link to conf page
- or wiki (mostly wiki please)
- or webpage relevant to the issue at hand
  If this is not obvious, do detail why the document is usefull.

# Questions

For when there are some points that remains unclear.

## Question 1

Detail the question, give it context and why this is blocking you.
Most of them will probably lead to documentation update.

## Question 2

Sometime it can be some ideas to improve on the task, and you want
to look for validation on it and decide for next step improvement

## Question 3

No issue should be complete without having all the questions being answered

# Acceptance Criteria

checklist all the steps needed to solve the issue
associate a ticket to some of them if they seem to be candidadte for a good PR

- [ ] Make sure all the metadata is set
  - [ ] Assignee is set
  - [ ] Relevant labels are set
  - [ ] The project is the right one
  - [ ] The milestone is set
- [ ] Tests have been created gh-?
- [ ] All the tests run green
- [ ] Component in storybook gh-?

`gh-?` act as a reminder that you need to create a ticket for that point and paste the number here.
Issue can not be closed until the whole checklist have been checked.
