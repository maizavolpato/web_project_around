# Tripleten web_project_around

Sprint 7 - Basic JavaScript and working with DOM

In this project, the website was designed to resemble a social media platform where users can add their profile photo, name, job title, some pictures they like, and a brief
In this first part of the project, I focused on the website's design and created a modal that asks the user for their name and job title, which are updated on the page after clicking “Submit.”
The requirements included: using camelCase for vari open , close , and submit the form using addE , and if condit to handle case
It was a bit challenging at first, but through this project, I was able to better understand how JavaScri works.

Sprint 8 - JavaScript Programming Logic and Methods

In this part, I implemented a feature that allows users to create a new custom card, allowing them to add an image and descriptive text. Users can also like each card if they wish.
It was both a rewarding and challenging part for me, because the majority parte was about functions and helped me better understand how to handle forms, especially in JavaScript.

Sprint 9 - Objects and Event Handling in JavaScript

In this part the goals was to crated a validation to the form. The "Profile form" had some rules that should be follow in the input, such as the minimun and maximun number of letters. The "Elements form" (the form responsible to add more pictures) should have the standards validations from HTML, but in JavaScrit. Another thing, bouth should have the submit button diable when the form are just opened and when the input have some "error message".
Some aditional in this project was a little bit less trick than the first one, but was good to practice and remenber how to do it, as to close bouth form, when the user click outside the form or when he press "escape" in his keyboard.

Sprint 10 - Introduction to Object-Oriented Programming

This part of the project focused on code refactoring, meaning it was necessary to rewrite some parts of the code, specifically the element and validation sections.
The base to achieve this was Object-Oriented Programming (OOP), part studied in this sprint, so two new classes were created: one Card (form elements) and two FormValidator (form validation). After creating them, it was necessary just to use export and import techniques.

Sprint 11 - Object-Oriented Programming Advanced

In this part of the project, the following classes were created and encapsulated, each performing specific tasks:
Section – a class responsible for rendering a list of elements on the page according to certain requirements.
Popup – a class that handles opening and closing pop-up windows, whether by clicking the close button, clicking outside the modal window, or pressing the Escape key.
PopupWithForm – a subclass of Popup that includes specific modifications related to form handling.
PopupWithImage – also a subclass of Popup, containing specific methods since it is responsible for enlarging an image when the user clicks on it.
UserInfo – a class responsible for rendering user information on the page.

Sprint 12 - Java Script Asincrono e Trabalho com Api

In this part of the project, the website was connected to the TripleTen server. This means that all the information a user adds is now saved on the server, and anyone can load the updated data. The user profile section was updated so that the name, description, and profile picture are all stored on the server. The card creation feature was also improved — new cards can now be added, deleted, and liked, with all these actions connected directly to the server.
