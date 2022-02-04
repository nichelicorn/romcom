# RomCom

Have you ever wanted to write a romance novel, but didn't know where to start? Find your inspiration with RomCom! Generate your romance novel cover image, title, and tagline, and get your steamy story started!

## To do

### Project development
* 1: Show random cover
  * Every time the user clicks the Show New Random Cover button, a new random cover is created
  * hint: you may need to update the value of the provided currentCover variable
  * hint: use that Cover class!
  * Every time the user clicks the Show New Random Cover button, the random cover is displayed 
  * hint: you may need to create a function that displays information on the DOM
* 2: Switching views
  * NOTE: in this iteration, you are not worrying about making the form WORK, and you are not worrying about saving or displaying covers. You simply want to make sure the views can be switched when you click the appropriate buttons.
  * When a user clicks the “Make Your Own Cover” button, we should see the form, and the homepage view should be hidden
  * When the Form view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden
  * When the Form view is visible, the “Home” button should be visible
  * When a user clicks the “View Saved Covers” button, we should see the saved covers section, and the homepage view should be hidden
  * When the Saved Covers view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden
  * When the Saved Covers view is visible, the “Home” button should be visible
  * For both the Make New Cover form section and the Saved Covers section:
  * In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks
  * When a user clicks the “Home” button, we should only see the Home section
  * When a user clicks the “Home” button, the home button should be hidden
  * When a user clicks the “Home” button, the “Show New Random Cover” and “Save Cover” buttons should be visible again
  * Hint: go check out the HTML and CSS files to see how the form and saved covers sections are being hidden in the first place
* 3: Creating a new cover
  * In the new cover form view, users should be able to fill out the four input fields and then hit the Make My Book button
  * When the Make My Book button is clicked, several things will happen: 
  * Save the submitted data into the respective arrays (cover URL into the covers array, title string into the titles array, etc) so that future random covers can use the user-created data
  * Use the values from the inputs to create a new instance of the Cover class
  * Change back to the main home view (hiding the form view again)
  * Display the newly created cover image, title, and descriptors in the main cover
* 4: Saving & viewing covers
  * When a user clicks the “Save Cover” button, the current cover will be added to the savedCovers array
  * If a user clicks the “Save Cover” more than once on a single cover, it will still only be saved once (no duplicates)
  * When a user clicks the “View Saved Covers” button, we should see the saved covers section
  * All the covers in the savedCovers array should be displayed in the saved covers section
  * Note: None of this needs to persist on page load
* 5: Deleting Saved Covers
  * From the saved covers view, if a user double clicks a saved poster, it will be deleted
  * Hint: How will you update the data model to achieve this? Hint: Look into this user event Note: None of this needs to persist on page load (https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
* 6: Extensions
  * Here’s a list of possible extensions to implement - but ONLY IF your team has completed all the previous iterations AND have cleaned up your code to make it DRYer and more readable.
  * You are welcome to add your own extensions. Be sure they are thoughtful in terms of UX/UI, and that they do not break any prior functionality.
  * Implement data validation and error handling into the form (disable the button until all fields are filled, provide error messages if data entered is not correct, etc)
  * When a user single clicks a saved cover, create a modal to view it larger
  * Allow users to drag and drop saved posters into whatever order they want them to appear

### Refactoring
* refactor CSS to create responsive layout
* deploy to GitHub
* launch GitHub pages

#### Credits and Resources
* Created by nichelicorn, based on (this)[https://frontend.turing.edu/projects/module-1/romcom-pair.html] project by (Turing School)[https://turing.edu/]