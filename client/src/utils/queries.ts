import { gql } from '@apollo/client';

export const GET_SINGLE_USER = gql`
query GetSingleUser($getSingleUserId: ID, $username: String) {
  getSingleUser(id: $getSingleUserId, username: $username) {
    username
    email
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}
`