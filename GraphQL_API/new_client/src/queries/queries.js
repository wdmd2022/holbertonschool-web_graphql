import { gql } from 'apollo-boost';

const getTasksQuery = gql`
query {
  tasks {
    id
    title
  }
}`;

const getProjectsQuery = gql`
{
  projects {
    title
    id
  }
}
`;

const getTaskDetailQuery = gql`
   query($id: ID){
     task(id: $id){
     id
     title
     weight
     description
     project{
       id
       title
       weight
       description
       tasks{
        title
        weight
        id
       }
     }
   }}
 `;

const addTaskMutation = gql`
mutation($title: String!, $weight:Int!, $description: String!, $projectId: ID!) {
  addTask(title: $title, weight: $weight, description: $description, projectId: $p
rojectId){
title id
}
} `;

const addProjectMutation = gql`
 mutation($title: String!, $weight: Int!, $description: String!) {
   addProject(title: $title, weight: $weight, description: $description){
     title
     id
     }
  }
  `;

export {getProjectsQuery, getTasksQuery, getTaskDetailQuery, addTaskMutation, addProjectMutation}
