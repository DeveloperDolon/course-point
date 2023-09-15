# Add at least 3 Project features
**Answer:-**  Below are the three features of my project

**1. Responsive User Interface:** One of the standout features of my project is its highly responsive user interface. Thanks to the combination of React.js and Tailwind CSS, we've created a visually appealing and adaptable interface that looks great on various devices and screen sizes. Users can enjoy a seamless experience whether they're on a desktop, tablet, or mobile device.

**2. Efficient Component Development:** In this project, we've leveraged React.js to build a modular and maintainable codebase. Our components are well-structured and reusable, making it easy to add new features or make updates without causing code bloat. This not only saves development time but also ensures the application remains scalable as requirements evolve.

**3. Streamlined UI Design with DaisyUI:** DaisyUI has been instrumental in simplifying our UI design process. It provides a rich set of ready-to-use UI components and utility classes, which has accelerated our development cycle. We can quickly create stylish and functional elements like buttons, forms, and navigation bars without the need for extensive custom CSS.

# Discuss how you managed the state in your assignment project.
**Answer:-** When a course button is clicked, it triggers a function defined in the onclick property.
This function takes an object parameter representing the selected course.
I then use the setState function to update the state variables:
I add the selected course object to the array of selected courses.
Then I used the useState hook in React to initialize the necessary state variables. Specifically, I created state variables for:

An array to store the selected courses, where each course is represented as an object with properties like name, price, and credit hours.
An state to keep track of the total course price.
An integer to calculate the total credit hours.