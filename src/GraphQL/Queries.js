import { gql } from "@apollo/client";

export const ROUTES = gql`
query MainMenuQuery {
  menu(id: "dGVybTo1NA==") {
    menuItems(where: {parentDatabaseId: 0}) {
      nodes {
        label
        path
        childItems {
          nodes {
            label
            path
          }
        }
      }
    }
    contacts {
      email
      phone
    }
  }
}`

export const LOAD = gql`
  query BlogQuery {
    posts {
      edges {
        node {
          id
          link
          uri
          title
        }
      }
    }
  }
`;

export const MAIN = gql`
  query MainPage {
    page(id: "cG9zdDoxMjE4Mw==") {
      content(format: RENDERED)
      title
      content_on_main {
        service1 {
          description
          title
          image {
            sourceUrl
          }
        }
        service2 {
          description
          title
          image {
            sourceUrl
          }
        }
        service3 {
          description
          title
          image {
            sourceUrl
          }
        }
        service4 {
          description
          title
          image {
            sourceUrl
          }
        }
        service5 {
          description
          title
          image {
            sourceUrl
          }
        }
        service6 {
          title
          description
          image {
            sourceUrl
          }
        }
        service7 {
          description
          title
          image {
            sourceUrl
          }
        }
        service8 {
          title
          description
          image {
            sourceUrl
          }
        }
        block1 {
          paragraph1
          paragraph2
          paragraph3
          subtitle
          title
          image {
            sourceUrl
          }
        }
        block2 {
          paragraph1
          paragraph2
          list
          paragraph3
          image {
            sourceUrl
          }
        }
        block3 {
          title
          paragraph1
          paragraph2
        }
      }
    }
  }
`;

export const ANALITIKA = gql`
  query AnaliticsPage {
    page(id: "cG9zdDoxMjI5Mw==") {
      analytics_content {
        block1 {
          title
          subtitle
          image {
            sourceUrl
          }
          slider {
            slide1
            slide2
            slide3
            slide4
            slide5
            slide6
          }
        }
        form {
          title
          checkbox1
          checkbox2
          checkbox3
          checkbox4
          checkbox5
          checkbox6
          checkbox7
          checkbox8
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const EARTH = gql`
query EarthPage {
  page(id: "cG9zdDoxMjMxOA==") {
    earth_content {
      form {
        checkbox1
        checkbox2
        checkbox3
      }
      image {
          sourceUrl
        }
    }
  }
}`

export const PODKLYUCH = gql`
query TurnKeyPage {
  page(id: "cG9zdDoxMjMzOQ==") {
    turnkey_services_content {
      block1 {
        title
        list
        image {
          sourceUrl
        }
      }
      block2 {
        title
        paragraph1
        paragraph2
        paragraph3
        paragraph4
        list
      }
      block3 {
        title
        paragraph1
        form {
          title
        }
      }
    }
  }
}`

export const STRATEGII= gql`
query StrategyPage {
  page(id: "cG9zdDoxMjM2Mw==") {
    strategy_content {
      block1 {
        title
        paragraph1
        image {
          sourceUrl
        }
      }
      block2 {
        list
        title
        paragraph1
        form {
          title
        }
      }
      block3 {
        paragraph1
        title
        paragraph2
        paragraph3
        paragraph4
      }
      block4 {
        title
        paragraph1
        paragraph2
        form {
          title
        }
      }
      block5 {
        title
        paragraph1
        paragraph2
        paragraph3
        paragraph4
        paragraph5
        paragraph6
      }
      block6 {
        title
        list
        paragraph1
        paragraph2
      }
      block7 {
        title
        paragraph1
        paragraph2
        form {
          title
        }
      }
    }
  }
}`

export const STAFF= gql`
query StaffPage {
  page(id: "cG9zdDoxMjQxMw==") {
    staff_content {
      block1 {
        title
        subtitle
        image {
          sourceUrl
        }
      }
      block2 {
        list
        title
        paragraph1
        form {
          title
        }
      }
      block3 {
        title
        list
      }
      block4 {
        title
        paragraph1
        paragraph2
        form {
          title
        }
      }
      block5 {
        list
        title
        paragraph1
        form {
          title
        }
      }
      block6 {
        list
        title
        form {
          title
        }
      }
      block7 {
        list
        title
        form {
          title
        }
      }
    }
  }
}`

export const AUTOMATIZATION= gql`
query AutomatizationPage {
  page(id: "cG9zdDoxMjQ1NA==") {
    automatization_content {
      block1 {
        title
        subtitle
        image {
          sourceUrl
        }
      }
      block2 {
        title
        list1
        list2
        link {
          text
          url
        }
      }
      block3 {
        title
        list1
        paragraph1
        list2
        paragraph2
        paragraph3
      }
    }
  }
}`

export const PRODUCT= gql`
query ProductPage {
  page(id: "cG9zdDoxMjQ3OQ==") {
    product_creation_content {
      block1 {
        title
        subtitle
        list
        image {
          sourceUrl
        }
      }
      block2 {
        list
        title
        image {
          sourceUrl
        }
        form {
          title
        }
      }
      block3 {
        list
        title
        form {
          title
        }
        image {
          sourceUrl
        }
      }
      block4 {
        list
        title
        image {
          sourceUrl
        }
        form {
          title
        }
      }
    }
  }
}`

export const PARTNER = gql`
query PartnershipPage {
  page(id: "cG9zdDoxMjUxMQ==") {
    partnership_content {
      block1 {
        title
        subtitle
        image {
          sourceUrl
        }
        form {
          title
        }
      }
    }
  }
}`

export const TEAM = gql`
query TeamPageQuery {
  page(id: "cG9zdDoxMjU5NQ==") {
    team_content {
      title
      sliderTitle
      perfomancesTitle
    }
  }
  teamMembers {
    nodes {
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
    }
  }
  performances {
    nodes {
      id
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}`

export const BLOG = gql`
query BlogPageQuery {
  page(id: "cG9zdDoxMjgwMQ==") {
    blogs_content {
      title
      link {
        text
        url
      }
    }
  }
  posts {
    edges {
      node {
        id
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`

export const POST = gql`
query SingleBlogQuery($id: ID = ""){
  post(id: $id) {
    title
    date
    content
    author {
      node {
        firstName
        lastName
      }
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
    tags {
      nodes {
        name
      }
    }
  }
}`

