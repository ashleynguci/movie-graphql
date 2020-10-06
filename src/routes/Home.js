/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Movie from '../components/Movie';

const GET_MOVIES = gql `{
    movies {
      id,
      medium_cover_image
    }
  } `;
export default () => {
const {loading, data} = useQuery(GET_MOVIES);

return <>
    {loading && <h3>Loading...</h3>}
    {!loading && data.movies && data.movies.map(m=><Movie id={m.id}></Movie>)}
</>;
};