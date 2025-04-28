import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";

import SeoData from "@/components/tools/seo-data";
import MainFeature from "@/components/elements/blog/main-feature";

export default function Page() {
  const blog = getMainPage("/features-blog/main/_index.mdx");
  const blogs = getAllPages("/features-blog/main");

  const { meta_title, meta_description } = blog.data.meta || {};
  console.log(blog);
  return (
    <main>
      <SeoData
        title={blog.data.title || "Blog page"}
        meta_title={meta_title || "Blog page"}
        description={meta_description || "Blog page description"}
      />
      <MainFeature blog={blog} blogs={blogs} />
    </main>
  );
}
