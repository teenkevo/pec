export const CLIENTS_HERO_PROJECTS = `
{
  "earliest": *[_type == "project" && defined(mainImage) && defined(startDate)] | order(startDate asc)[0] {
    _id,
    title,
    slug,
    mainImage,
    startDate,
    endDate,
    isCompleted,
    valueOfService,
    client-> { name },
    industry-> { title, slug },
    description
  },
  
  "latestTransport": *[_type == "project" && defined(mainImage) && industry->slug.current == "transport"] | order(startDate desc)[0] {
    _id,
    title,
    slug,
    mainImage,
    startDate,
    endDate,
    isCompleted,
    valueOfService,
    client-> { name },
    industry-> { title, slug },
    description
  },
  
  "latestWater": *[_type == "project" && defined(mainImage) && industry->slug.current == "water"] | order(startDate desc)[0] {
    _id,
    title,
    slug,
    mainImage,
    startDate,
    endDate,
    isCompleted,
    valueOfService,
    client-> { name },
    industry-> { title, slug },
    description
  },
  
  "biggestBudget": *[_type == "project" && defined(mainImage) && defined(valueOfService.value) && isCompleted == false] | order(valueOfService.value desc)[0] {
    _id,
    title,
    slug,
    mainImage,
    startDate,
    endDate,
    isCompleted,
    valueOfService,
    client-> { name },
    industry-> { title, slug },
    description
  },
  
  "latestOngoing": *[_type == "project" && defined(mainImage) && isCompleted == false] | order(startDate desc)[0] {
    _id,
    title,
    slug,
    mainImage,
    startDate,
    endDate,
    isCompleted,
    valueOfService,
    client-> { name },
    industry-> { title, slug },
    description
  }
}`;


export const FEATURED_CLIENTS_QUERY = `
*[_type == "client" && count(*[_type == "project" && references(^._id)]) > 0] {
  name,
  "projects": *[_type == "project" && references(^._id) && defined(mainImage)] {
    _id,
    title,
    "slug":slug.current,
    mainImage,
    startDate,
    endDate,
    isCompleted,
    valueOfService,
    industry-> { title, slug },
    description
  },
  "count": count(*[_type == "project" && references(^._id) && defined(mainImage)])
} | order(count desc)`;