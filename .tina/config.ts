import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Intro",
        name: "intro",
        path: "_content/intro",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "headline",
            label: "Headline",
            required: true,
          },
          {
            type: "string",
            name: "linkedin_link",
            label: "LinkedIn link",
            required: true,
          },
          {
            type: "string",
            name: "github_link",
            label: "GitHub Link",
            required: true,
          },
          {
            type: "image",
            name: "profile_photo",
            label: "Profile photo",
          },
        ],
      },
      {
        label: "Posts",
        name: "posts",
        path: "_content/posts",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "title",
            label: "Post Title",
          },
          {
            type: "string",
            name: "sub_head",
            label: "Post Sub-Head",
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "caption",
            label: "Featured image caption",
          },
          {
            type: "string",
            name: "additional_images",
            label: "Additional Images",
          },
          {
            type: "datetime",
            name: "date_created",
            label: "Date created",
            required: true,
          },
          {
            type: "datetime",
            name: "date_updated",
            label: "Date updated",
          },
          {
            type: "boolean",
            name: "highlighted",
            label: "Highlighted post",
          },
        ],
      },
      {
        label: "Projects",
        name: "projects",
        path: "_content/projects",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "tags",
            label: "tags",
            list: true,
          },
          {
            type: "string",
            name: "title",
            label: "Project Title",
          },
          {
            type: "string",
            name: "sub_head",
            label: "Project Sub-Head",
          },
          {
            type: "image",
            name: "featured_image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "caption",
            label: "Featured image caption",
          },
          {
            type: "string",
            name: "project_web_link",
            label: "Project Web Link",
          },
          {
            type: "string",
            name: "project_repo_link",
            label: "Project Repo Link",
          },
          {
            type: "string",
            name: "additional_images",
            label: "additional_images",
            list: true,
          },
          {
            type: "boolean",
            name: "highlighted",
            label: "Highlighted project",
          },
          {
            type: "datetime",
            name: "date_created",
            label: "Date created",
            required: true,
          },
          {
            type: "datetime",
            name: "date_updated",
            label: "Date updated",
          },
        ],
      },
      {
        label: "Jobs",
        name: "jobs",
        path: "_content/jobs",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Job title",
            required: true,
          },
          {
            type: "string",
            name: "company",
            label: "Company",
            required: true,
          },
          {
            type: "string",
            name: "company_link",
            label: "Company link",
            required: true,
          },
          {
            type: "datetime",
            name: "start_date",
            label: "Start date",
            required: true,
          },
          {
            type: "datetime",
            name: "end_date",
            label: "End date",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "logo",
            label: "Company logo",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
        ],
      },
      {
        label: "Skills",
        name: "skills",
        path: "_content/skills",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "name",
            label: "Name",
            required: true,
          },
          {
            type: "number",
            name: "years",
            label: "Years' experience",
            required: true,
          },
          {
            type: "boolean",
            name: "keySkill",
            label: "Key Skill",
          },
          {
            type: "image",
            name: "logo",
            label: "Logo",
          },
        ],
      },
    ],
  },
});
