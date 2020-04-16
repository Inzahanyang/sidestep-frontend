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

#### 5.5 Toastify and createAccount Mutation

- add react-toastify {ToastContainer, toast}
- add CREATE_ACCOUTN query

#### 5.6 ~ 5.7 createAccount Mutation part

- useMutation [requestSecretMutation], [createAccountMutation]
- toast option onClose, autoClose

#### 5.8 confirmSecret + Log In Mutation

- action === confirm
- confirmSecret -> check email, secret if true get token
- logUserIn -> localStorage.setItem('token'), isLoggedIn: true
