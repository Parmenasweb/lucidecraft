export const template = [
  {
    name: "Blog Title",
    desc: "An AI tool that generates log title based on your blog information",
    category: "blog",
    icon: "",
    aiPrompt:
      "Write me 5 blog topic idea in bullet wise form only based on given niche & outline topic and give me the result in rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter log outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal log title and content generator",
    category: "blog",
    icon: "",
    aiPrompt: "Generate log Content ased on topic and outline provided",
    slug: "blog-content-generator",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title generator",
    category: "blog",
    icon: "",
    aiPrompt:
      "Generate 5 blog topic ideas in ullet points ased on the niche provided",
    slug: "blog-topic-idea",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtue SEO Title",
    desc: "An AI tool that serves as your personal blog post title generator",
    category: "Youtue tools",
    icon: "",
    aiPrompt:
      "Write me est SEO optimized high ranked 5 youtue title ideas ased on provided propt",
    slug: "youtue-seo-title",
    form: [
      {
        label: "Enter your youtue video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtue description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtue Desription Generator",
    desc: "An AI tool that serves as your personal blog post title generator",
    category: "Youtue tools",
    icon: "",
    aiPrompt: "Generate Youtue description with emoji under 4-5",
    slug: "youtue-seo-title",
    form: [
      {
        label: "Enter your youtue video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtue description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtue Tags Generator",
    desc: "An AI tool that serves as your personal blog post title generator",
    category: "Youtue tools",
    icon: "",
    aiPrompt: "Generate 10 youtue tags ased on provided propmpt",
    slug: "youtue-seo-title",
    form: [
      {
        label: "Enter your youtue video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtue description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "content re-write",
    desc: "This handy tool refines your writing , eliminating grammtical errors and mistakes",
    category: "Writing Assistant",
    icon: "",
    aiPrompt:
      "given textToImprove, re-write the content withut any grammatical errors or mistakes",
    slug: "content-rewriter",
    form: [
      {
        label: "paste content you want to re write",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
      {
        label: "Enter youtue description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Add Emojis to text",
    desc: "This handy tool refines your writing , eliminating grammtical errors and mistakes",
    category: "Writing Assistant",
    icon: "",
    aiPrompt: "Add Emoji to utline text depends on outline",
    slug: "add-emoji-to-text",
    form: [
      {
        label: "Enter you text to add emojis",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
      {
        label: "Enter youtue description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article",
    desc: "Us thi tool to rewrite existing Article or log post",
    category: "Re-writing Tool",
    icon: "",
    aiPrompt: "Add Emoji to utline text depends on outline",
    slug: "re-write-article",
    form: [
      {
        label: "Paste the article you want to rewrite",
        field: "textarea",
        name: "article",
        required: true,
      },
      {
        label: "Enter youtue description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Write code",
    desc: "Ai model to generate programming code in any language",
    category: "code-writing-tool",
    icon: "",
    aiPrompt: "i want you to write the code ased on the prompt",
    slug: "re-write-article",
    form: [
      {
        label: "descrie what you want to generate",
        field: "textarea",
        name: "code-topic",
        required: true,
      },
      {
        label: "more detailed description (optional) ",
        field: "textarea",
        name: "description",
      },
    ],
  },
  {
    name: "Explain code",
    desc: "Ai model to explain programming code in any language",
    category: "code-explain",
    icon: "",
    aiPrompt: "i want you to exlain the code provided in details",
    slug: "re-write-article",
    form: [
      {
        label: "descrie what you want to generate",
        field: "textarea",
        name: "code-topic",
        required: true,
      },
      {
        label: "more detailed description (optional) ",
        field: "textarea",
        name: "description",
      },
    ],
  },
];
