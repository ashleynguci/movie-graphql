import React from 'react';
import {useParams} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MOVIE = gql`
query getMovie($id: Int!){
    movie(id:$id) {
      id,
      title,
      description_intro,
      medium_cover_image
    }
  } 
`
export default () =>{
    const {id} = useParams();
    const {loading, data} = useQuery(GET_MOVIE,{
        variables:{id}
    });
console.log(id,loading, data);
return "detail"
}