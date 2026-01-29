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

export const GET_PLANS = gql`
  query GetPlans {
    plans(isActive: true) {
      id
      name
      description
      price
      billablePeriods
      maxCampaigns
      maxReferrals
      maxTeamMembers
      analyticsEnabled
      customBranding
      prioritySupport
      isPopular
    }
  }
`;

export const ALL_WALKTHROUGH_VIDEOS = gql`
  query GetAllWalkthroughVideos {
    walkthroughVideos {
      id
      name
      description
      category
      fileUrl
      thumbnailUrl
      duration
      order
      isFeatured
      viewCount
      createdAt
    }
  }
`;