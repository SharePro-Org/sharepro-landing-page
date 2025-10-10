import { gql } from "@apollo/client";

export const GET_FAQS_BY_CATEGORY = gql`
  query GetFaqsByCategory($category: String!) {
    faqsByCategory(category: $category) {
      question
      answer
      category
    }
  }
`;

export const CREATE_SUPPORT_REQUEST = gql`
  mutation CreateSupportRequest(
    $contactEmail: String!
    $description: String!
    $issueType: String!
    $subject: String!
  ) {
    createSupportRequest(
      contactEmail: $contactEmail
      description: $description
      issueType: $issueType
      subject: $subject
    ) {
      success
      message
      errors
    }
  }
`;
