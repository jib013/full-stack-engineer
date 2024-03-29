# Software Testing Methodologies

Learn about software testing methodologies and some specific strategies that use a test-first approach to software development.

Imagine this scenario: you’ve written some code for a new feature and it’s time to test it. You deploy your development version of the code and interact with all of the features of your application that were impacted. This could include features you built in the past and anything new. You repeat that process for different browsers and devices, and a few hours later, you’re confident that it’s ready to go. But then you deploy it to production and the error reports start to come in!

This scenario describes the process of manual testing, which is time-consuming, can result in errors being overlooked, and can’t be repeated easily. To get around the issues related to manual testing, organizations generally use software to automate their testing processes to validate code.
What is a software testing methodology?

Testing methodologies are specific strategies for testing all of the pieces of your software to make sure it behaves as expected. These strategies include many ways to test software, such as unit testing, integration testing, performance testing, and more. In this article, we’ll take a closer look at testing practices that use a test-first approach to software development.
Why Use Software Testing Methodologies?

There are many reasons that organizations adopt software testing methodologies:

    Software errors can cost companies resources such as money and users.
    Testing results in better reliability.
    Testing can provide a better end-user experience.
    Failing tests help indicate which part of the software is not working when bugs occur

Overall, the primary goal of testing is to make software development more efficient, reliable, and future-proof.
Different types of methodologies

Some software testing methodologies prioritize writing test cases before writing the code those test cases will validate. Those types include:

    Test-driven Development (TDD)
    Behavior-driven Development (BDD)
    Specification by Example (SBE)
    Acceptance Test-driven Development (ATDD)

These methodologies are particularly relevant for teams that use an agile, or iterative, approach to software development. Teams don’t have to pick one testing solution and stop there — several approaches can be used by the same team at different stages of development. The following sections take a closer look at TDD and BDD and where they fit into the development cycle to give some more context on testing methodologies in practice.
Test-driven development

Testing doesn’t necessarily have to occur after code has been written. Test-driven development is a methodology that flips the order, where tests are written before the functioning code is written. By writing tests in this order, test cases can start with the definition of their purpose, or use case.

Those use cases define the specification and documentation on what actions are to be supported by new code. TDD tests look at the components of code, like functions and classes, as the smallest unit to test.

In practice, TDD can accelerate software development since it dictates short development cycles with direct test cases. There are many other benefits of test-driven development:

    Developers can better understand the requirements of code, before writing the code.
    Code that will never be executed won’t be added to the codebase.
    The scope of development is reduced.
    Code is written with testability in mind.

TDD is not the only testing methodology that takes a test-first approach to software development.
Behavior-driven development

Another testing methodology that uses the strategy of writing test cases before code is behavior-driven development, or BDD. It is extremely similar to TDD in terms of process. Where these two methodologies differ is in why or when tests are written, what an individual unit is considered to be, and how the language of the test is composed.

Since BDD tests are driven by behavior, the language of the test cases are simplified and written via collaboration between engineers, product owners, and other stakeholders, to ensure the specified behaviors make sense from a user perspective.

It can be said that BDD is more specific than TDD. Changes to the code base, such as changing the design of the code, will not occur unless there is a relevant change in the product. Since those changes are feature-related, the unit of tests is called a “feature.” Test cases are related to whether or not the feature works, rather than if the individual functions or classes you are writing to develop features work. Altogether, the tests are about how the product behaves — not the nitty-gritty technical details.
Review

Nice work, you now know more about software testing methodologies! Let’s quickly recap the main ideas:

    Automated testing makes code production more reliable thanks to the ease of running frequent tests on all new and old code in a software application.
    Software companies don’t need to pick a singular software testing methodology — they can be combined and used at various stages during software development.
    Some organizations take a test-first approach to software development, with testing methodologies such as TDD and BDD being the first step of code production.
    Since software errors can cost businesses money and customer trust, testing is an integral part of the development process and used in some flavor by every software company.

As you continue with testing content, you’ll see TDD as the main methodology we teach (such as this course). Now you have some insight into what TDD is and how it can be used as an example of how to guide the software development process!
