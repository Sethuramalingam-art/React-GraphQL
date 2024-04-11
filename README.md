# React-GraphQL

setup express server with graphQL
https://graphql.org/graphql-js/running-an-express-graphql-server/
use GraphiQL tool for backend and apollo client FE
npm i express express-graphql graphql mongoose cors colors
npm install express graphql-http graphql ruru --save

query and mutation queries to list data

Get names of all clients
{
clients {
name
}
}
Get a single client name and email
{
client(id: 1) {
name
email
}
}
Get name and status of all projects
{
projects {
name
status
}
}
Get a single project name, description along with the client name and email
{
project(id: 1) {
name
description,
client {
name
email
}
}
}
Create a new client and return all data
mutation {
addClient(name: "Tony Stark", email: "ironman@gmail.com", phone: "955-365-3376") {
id
name
email
phone
}
}
Delete a client and return id
mutation {
deleteClient(id: 1) {
id
}
}
Create a new project and return name and description
mutation {
addProject(name: "Mobile App", description: "This is the project description", status: new, clientId: "6612c1b24563daf9f3f62c83") {
name
description
}
}
Update a project status and return name and status
mutation {
updateProject(status: "completed") {
name
status
}
}

---

client
npx cra
npm i @apollo/client graphql react-router-dom react-icons

inmemorycache=> without reload get the updated data in the list

reat query and aploot client is mostly same for FROntend

const [addTodo, { data }] = useMutation(ADD_TODO); usemutation returns add/delete/update functions and data

const {loading, error , data } = useQuery(GET_PROJECTS);useQuery returns loading error and data
