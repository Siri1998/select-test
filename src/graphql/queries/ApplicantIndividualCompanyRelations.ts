import { gql } from "@apollo/client";

export const GET_ALL_AIC_RELATIONS = gql`
  query ApplicantIndividualCompanyRelations(
    $page: Int
    $first: Int
    $filter: QueryApplicantIndividualCompanyRelationsFilterFilterConditions
    $orderBy: [QueryApplicantIndividualCompanyRelationsOrderByOrderByClause!]
  ) {
    result: applicantIndividualCompanyRelations(
      page: $page
      first: $first
      filter: $filter
      orderBy: $orderBy
    ) {
      data {
        id
        name
      }
      paginatorInfo {
        hasMorePages
        currentPage
      }
    }
  }
`;
