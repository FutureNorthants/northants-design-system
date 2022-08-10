import { gql } from '@apollo/client';

const PostcodeSearchQuery = gql`
  query Postcode($postcode: String!, $page: Number) {
    postcode(postcode: $postcode, page: $page)
      @rest(type: "Postcode", path: "address-search/postcode/{args.postcode}/page/{args.page}") {
      apiversion
      totalrecords
      unitaries {
        name
      }
      sovereigns {
        name
        website
      }
      addresses {
        uprn
        postcode
        single_line_address
      }
    }
  }
`;

export default PostcodeSearchQuery;
