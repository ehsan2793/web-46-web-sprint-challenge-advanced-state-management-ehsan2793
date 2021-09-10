# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve? 

    context api help us to share a state (data) selectively between children and help us to have a cleaner code by preventing props drilling 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

store is known as single source of truth in a redux application because all of put data is stored in a single files were it can be passed on to all the components that need those data

action describes the event and tells the reducer what event just happened in the app and how it should update the state

reducers : take the listen ti the action and depending on the type of action that happened they will update the state tree and there for the view on the screen changes 


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
      `redux-thunk` allows us to async action and change the view based on the result of our action for example calling for data from api and at the same time showing loading page for the users 

      `action-creators` will return a function and that function will take dispatch as parameter 




4. What is your favorite state management system you've learned and this sprint? Please explain why!

      100% useReducers : because they  are easy to understanding and easy to use i mean when it comes to use and efficiency for big application redux is the best however in small application like what i have been doing useReducers and useState are the best 
