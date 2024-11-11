export const template = [
  {
    name: "Instagram caption generator",
    desc: "An AI tool that generates caption for your next instagram post quick",
    category: "instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/1409/1409946.png",
    aiPrompt:
      "Write me 3 suitable instagram caption based on the provided prompt, make them follow different styles, witty and professional",
    slug: "instagram-caption-generator",
    form: [
      {
        label: "whats you post about?",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "describe your post in more details(optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "instagram hashtag generator",
    desc: "An AI tool that generates your instagram hashtag for you",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/5109/5109610.png",
    aiPrompt:
      "Generate 10 hashtags suitable for an instagram post, make sure to generate hashtags for more engagement",
    slug: "generate-blog-title",
    form: [
      {
        label: "whats your post aout",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "describe your post(optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog title based on your blog information",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/8089/8089953.png",
    aiPrompt:
      "Write me 3 blog topic idea in bullet-point form only based on given niche & outline topic and give me the result in rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "what's your blog niche?",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "more details about what you want?",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal log title and content generator",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2593/2593549.png",
    aiPrompt: "Generate log Content based on topic and outline provided",
    slug: "blog-content-generator",
    form: [
      {
        label: "whats your blog topic",
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
    name: "Youtube video Title generator(SEO optimized)",
    desc: "An AI tool that serves as your personal youtube video title generator",
    category: "Youtube tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2504/2504965.png",
    aiPrompt:
      "Write me best SEO optimized high ranked 5 youtube video title ideas based on provided prompt",
    slug: "youtube-seo-title",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description Generator",
    desc: "Generate your youtube video descriptions optimized for SEO using AI",
    category: "Youtube tools",
    icon: "https://cdn-icons-png.flaticon.com/128/10885/10885022.png",
    aiPrompt:
      "Generate a SEO optimized Youtube description for the provided prompt with emoji ",
    slug: "youtube-seo-description",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags Generator",
    desc: "An AI tool that serves as your personal blog post title generator",
    category: "Youtube tools",
    icon: "https://cdn-icons-png.flaticon.com/128/10884/10884882.png",
    aiPrompt:
      "Generate 10 youtube tags based on the provided prompt, make sure al the provided tags are seo optimized",
    slug: "youtube-seo-tags-generator",
    form: [
      {
        label: "Enter your youtube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "content re-write",
    desc: "This handy tool refines your writing , eliminating grammtical errors and mistakes",
    category: "Writing Assistant",
    icon: "https://cdn-icons-png.flaticon.com/128/3079/3079998.png",
    aiPrompt:
      "given textToImprove, re-write the content without any grammatical errors or mistakes, and make sure its plagiarism free and seo optimized",
    slug: "content-rewriter",
    form: [
      {
        label: "paste content you want to re write",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
      {
        label: "more details you might want to provide",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Add Emojis to text",
    desc: "This handy tool refines your writing , eliminating grammatical errors and mistakes",
    category: "Writing Assistant",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    aiPrompt: "Add Emoji to outline text depending on provided prompt",
    slug: "add-emoji-to-text",
    form: [
      {
        label: "Enter you text to add emojis",
        field: "textarea",
        name: "textToImprove",
        required: true,
      },
    ],
  },
  {
    name: "Article/content generator(plagiarism free)",
    desc: "Us thi tool to rewrite existing Article or log post",
    category: "Re-writing Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3208/3208892.png",
    aiPrompt:
      "i want you to generate a professionally written, seo optimized, plagiarism free article/content on the provided prompt",
    slug: "article-generator",
    form: [
      {
        label: "what topic do you have in mind?",
        field: "textarea",
        name: "article",
        required: true,
      },
      {
        label: "more description goes here...(optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Write code",
    desc: "Ai model to generate programming code in any language",
    category: "code-writing-tool",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    aiPrompt: "i want you to write the code based on the prompt provided",
    slug: "write-code-AI",
    form: [
      {
        label: "describe what you want to generate",
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
    icon: "https://cdn-icons-png.flaticon.com/128/868/868786.png",
    aiPrompt:
      "i want you to explain the code provided in details, make it easy to understand and simpler",
    slug: "code-explain",
    form: [
      {
        label: "describe what you want to understand",
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
