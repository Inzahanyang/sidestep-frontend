# SideStep Frontend

## 4. Frontend Setup

#### 4.0 CRA Cleanup and Installation

- npx create-react-app name
- add(apollo-boost, react-apollo-hooks, graphql, react-helmet, react-router-dom, styled-components, react-toastify, styled-reset)
- cleanup files(only need index.js, app.js in src folder)

#### 4.1 GlobalStyles and Theme

- react-reset
- styled-components(createGlobalStyles, ThemeProvider)

#### 4.2 React Router

- react-router-dom(HashROuter, Route, Switch)

#### 4.3 Apollo Client

- LocalState.js change state isLoggedIn
- use ApolloProvider
- easy apollo-boost

#### 4.4 First Hooks Query

- apollo-boost(gql)
- react-apollo-hooks(useQuery)

## 5. Frontend: Authorization Routes

#### 5.0 ~ 5.2 Auth Route UI part

- Auth.js useState()
- styled-components
- add Footer component in App.js

#### 5.3 Auth Form with Hooks

- add Hooks (useInput.js)

#### 5.4 requestSecret Mutation and Refactor

- Auth.js -> AuthContainer.js, AuthPresenter, AuthQueries
- request API requestSecret
