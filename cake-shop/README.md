# Cake shop

Entities
Shop - Stores cakes on a shelf
Shopkeeper - at the front of the store
Customer - At the store entrance

Activities
Customer - Buy a cake
Shopkeeper - Remove a cake from the shelf

| Cake shop scenario    | Redux   | Purpose                             |
| --------------------- | ------- | ----------------------------------- |
| Shop                  | store   | Holds the state of your applicaiton |
| Intention to BUY_CAKE | Action  | Describes what happened             |
| Shopkeeper            | Reducer | Ties the store and actions together |

A store that holds the state of your application
An action that describes the changes tin the state of the application
A reducer which actually carries out the state transion depending on the action

## Three Principles

1. The state of your whole application is stored in an object tree within a single store

{
numberOfCakes : 10
}

2.The only way to change the state is to dispatch an action, an object describing what happened. NOT allowed to directly update the state object

{
type: BUY_CAKE
}

3.To specify how the state tree is transformed by actions, you write pure reducers.
Reducer - (previousState, action) => newState