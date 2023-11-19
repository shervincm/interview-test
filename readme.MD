## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.   
   * Why do you think that was done, what are the advantages / disadvantages?

I think there were a few reasons why this approach was taken, as when building an app like Tic Tac Toe, that uses multiple functionalities, it makes the app more readable and easier to navigate. Using this structure makes it easier to locate specific components, making it simpler for both the developer and others who may review the code, as well as leads to improved code maintenance, as any necessary changes or updates can be easily identified within this structure. This means it's also a great way to organise and distribute tasks when working as a team as well as avoiding merge conflicts, by allowing different members to work on different components and files simultaneously. It also makes it easier to identify any errors, test individual components, streamline the troubleshooting process and identify bugs in a more targeted approach.

Another reason is that it’s an effective way to break down the app into smaller manageable tasks, which helps minimise the risk of overlooking important steps and details by working backwards and understanding what building blocks are needed to create the full app. This then leads to better time management, because you can allocate your time more effectively and efficiently. This approach allows you to set specific timelines and milestones for each task, enabling better tracking of progress and ensuring timely completion of the overall project. Additionally, breaking down tasks promotes flexibility and adaptability, particularly when adopting an agile approach. It enables you to reprioritise or adjust tasks based on changing requirements or emerging needs, allowing a more dynamic and responsive workflow. 

Another aspect to consider is that it helps to promote reusability. Since the game often involves repetitive displays and functionality (square component), dividing components allows for easier reuse. Each component can focus on a specific function or element that can be used in different parts of the application. This approach reduces redundant code throughout the app, making it more efficient and maintainable.

Although I believe the advantages far outweigh the disadvantages, there are some disadvantages to using this structure, such as creating more chaos. I say this because, you could end up overcomplicating things by breaking down the app into too small components, making it harder to understand the logic of it, as well as creating components for the sake of creating them. Because this app isn’t too complex it may be easier to write the code in a single file as it gets rid of the need for navigating through multiple files, as well as helps simplify the build process, as there is no need to recognise or deal with multiple dependencies or modules. However, the app-original folder does this and at first glance I was a little overwhelmed by the code structure and was much more comfortable looking and understanding the app-standalone codebase.



2. Thinking about a production ready app, what do you think is missing from all the examples? *Hint: the square component in the standalone app has one*

Testing files. Testing is extremely important as it helps to ensure that the app is working as expected and that the code is doing what it’s supposed to do. All components should have their own testing file with end to end testing done to reduce the risk of bugs and errors before deployment. This is particularly important when working in a team, as it helps to ensure that the code is consistent and that everyone is on the same page. It also helps to ensure that the code is maintainable and scalable, as it allows you to easily identify any issues and fix them before they become a bigger problem.

3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?

From my understanding of Redux, it is a library that can be used in React and is a state management tool. In React you can only pass a state down the component tree so usually you would store the state at the highest point necessary and pass them down as props. However, with Redux all of the states and all the data is stored in one state and in one place called ‘Store’ making it a globalised state. The data stored here is immutable meaning that it can’t be changed, however, the way Redux works is that components can get all the necessary data they need from the ‘Store’. This makes it easier to share data between components regardless of their position in the component tree. In order to do this you have ‘Actions’, ‘Reducers’ and ‘Dispatch’. Actions simply put is a function that returns an object. They are dispatched to trigger state changes. Reducers are functions that say how the state will change and takes in the current state and an action as input in order to return a new state. Dispatch is used to dispatch an action to the store which triggers a state change by calling upon the relevant reducer. 

Redux is good for building bigger and more complex projects but not smaller projects as there is a lot of boiler plates and extra steps that would need to be created for simple functions. It is however beneficial for bigger projects. One reason is that you may have multiple components that need to share and update data, so having one centralised state makes it easier to manage and update this data across the entire app. As well, with larger apps managing states becomes more complex so by having a clear structure to handle state logic, it makes it easier to manage and add to the app as well as helps maintain a cleaner codebase. Redux also provides excellent devtools which can be extremely useful for debugging and error handling. You are able to check the state at different points in time and track the order of events leading to a state change. This allows a more accurate overview of where the error would have occurred and can help narrow down the options. 


4. *If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.
    * Thinking of a production application, what issues do you see with this code? *List as many as you like* 

    From what I can see there are currently no error handling measures taken. This is very important as if any errors occur you would be able to identify and send an appropriate response back to the client. As well, it will help with future errors and debugging as you would be able to better identify where the error is coming from. One way to incorporate this would be to include the try and catch block. This would allow the server to try and request the data it wants and provide the correct response depending on if it was successful or failed.


### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





