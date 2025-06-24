import { redirect } from "next/navigation"

const Page = () => {
    redirect("/blog/categories/news")
  return (
    <div>Page</div>
  )
}

export default Page