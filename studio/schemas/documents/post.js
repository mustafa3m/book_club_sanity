export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Year",
      name: "year",
      type: "number",
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    },
    {
      title: "About",
      name: "about",
      type: "reference",
      to: [{ type: "about" }],
    },
    {
      title: "Intro",
      name: "intro",
      type: "reference",
      to: [{ type: "intro" }],
    },

    {
      title: "Quantity",
      name: "quantity",
      type: "number",
    },
    {
      title: "Categorys",
      name: "categorys",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "categorys" }],
        },
      ],
    },
  ],
};
