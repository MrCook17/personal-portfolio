import BuildingGoRestApiPost from "@/content/blog/building-a-go-rest-api.mdx";
import BuildingPortfolioPost from "@/content/blog/building-my-portfolio-nextjs-typescript.mdx";
import EcommerceSeoLessonsPost from "@/content/blog/ecommerce-seo-lessons-real-cms.mdx";
import type { BlogPostComponent } from "@/types/blog";

export const blogPostComponents: Record<string, BlogPostComponent> = {
  "building-my-portfolio-nextjs-typescript": BuildingPortfolioPost,
  "building-a-go-rest-api": BuildingGoRestApiPost,
  "ecommerce-seo-lessons-real-cms": EcommerceSeoLessonsPost,
};
