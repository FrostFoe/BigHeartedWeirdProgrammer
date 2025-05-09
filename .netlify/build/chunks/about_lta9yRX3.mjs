import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-puYO_x.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$ResponsiveImage } from './_astro_assets_CN_SSaD9.mjs';
import 'clsx';

const screenshot = new Proxy({"src":"/_astro/screenshot-astronews.B92DgFEf.png","width":1681,"height":946,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/FrostFoe/astro-news/src/assets/images/screenshot-astronews.png";
							}
							
							return target[name];
						}
					});

const performances = new Proxy({"src":"/_astro/Performances.FXMZItJb.png","width":1001,"height":829,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/workspaces/FrostFoe/astro-news/src/assets/images/Performances.png";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "title": "About",
  "description": "Learn about the author, his background, and his interests.",
  "blocks": [{
    "name": "ABOUT",
    "title": "About us"
  }],
  "minutesRead": "2 min read",
  "lastModified": "2025-05-09T12:38:17.014Z"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "astro-news",
    "text": "Astro News 📰"
  }, {
    "depth": 2,
    "slug": "-demo",
    "text": "🌐 Demo"
  }, {
    "depth": 2,
    "slug": "-installation",
    "text": "🚀 Installation"
  }, {
    "depth": 3,
    "slug": "clone-the-repository",
    "text": "Clone the Repository"
  }, {
    "depth": 3,
    "slug": "install-dependencies",
    "text": "Install Dependencies"
  }, {
    "depth": 3,
    "slug": "run-development-server",
    "text": "Run Development Server"
  }, {
    "depth": 3,
    "slug": "running-keystatic-cms",
    "text": "Running Keystatic CMS"
  }, {
    "depth": 2,
    "slug": "-features",
    "text": "✨ Features"
  }, {
    "depth": 3,
    "slug": "implemented-features",
    "text": "Implemented Features"
  }, {
    "depth": 3,
    "slug": "upcoming-features",
    "text": "Upcoming Features"
  }, {
    "depth": 2,
    "slug": "-technologies",
    "text": "💻 Technologies"
  }, {
    "depth": 2,
    "slug": "-inspirations-and-code-concepts",
    "text": "💡 Inspirations and Code Concepts"
  }, {
    "depth": 3,
    "slug": "designs",
    "text": "Designs"
  }, {
    "depth": 3,
    "slug": "articles",
    "text": "Articles"
  }, {
    "depth": 2,
    "slug": "-license",
    "text": "📄 License"
  }, {
    "depth": 2,
    "slug": "-contributing",
    "text": "🤝 Contributing"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "astro-news",
      children: "Astro News 📰"
    }), "\n", createVNode(_components.p, {
      children: "A news website built with Astro, designed to provide a modern and responsive news reading experience."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "ℹ️ Info"
        }), createVNode(_components.br, {}), "\nAstro news is my first open-source project, so there may be some bugs or issues. I’ll address them as quickly as possible."]
      }), "\n"]
    }), "\n", createVNode($$ResponsiveImage, {
      src: screenshot,
      alt: "Astro News",
      layout: "responsive",
      class: "rounded-lg shadow-xl"
    }), "\n", createVNode($$ResponsiveImage, {
      src: performances,
      alt: "PageSpeed Insights result",
      layout: "responsive",
      class: "rounded-lg shadow-xl"
    }), "\n", createVNode(_components.h2, {
      id: "-demo",
      children: "🌐 Demo"
    }), "\n", createVNode(_components.p, {
      children: ["Explore the live demo here: ", createVNode(_components.a, {
        href: "https://astro-news-six.vercel.app/",
        children: createVNode(_components.strong, {
          children: "Live Demo"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "-installation",
      children: "🚀 Installation"
    }), "\n", createVNode(_components.p, {
      children: "Follow the steps below to set up and run the project locally:"
    }), "\n", createVNode(_components.h3, {
      id: "clone-the-repository",
      children: "Clone the Repository"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " clone"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " https://github.com/Mrahmani71/astro-news.git"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "install-dependencies",
      children: "Install Dependencies"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " install"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "run-development-server",
      children: "Run Development Server"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " dev"
          })]
        })
      })
    }), "\n", createVNode(_components.h3, {
      id: "running-keystatic-cms",
      children: "Running Keystatic CMS"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Rename ", createVNode(_components.code, {
            children: ".env.example"
          }), " to ", createVNode(_components.code, {
            children: ".env"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: ["Set ", createVNode(_components.code, {
            children: "RUN_KEYSTATIC=true"
          }), "."]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Start the development server:"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "bun"
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: " dev"
          })]
        })
      })
    }), "\n", createVNode(_components.ol, {
      start: "4",
      children: ["\n", createVNode(_components.li, {
        children: ["Open ", createVNode(_components.code, {
          children: "http://localhost:4321/keystatic"
        }), " in your browser."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-features",
      children: "✨ Features"
    }), "\n", createVNode(_components.h3, {
      id: "implemented-features",
      children: "Implemented Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Content Layer"
      }), "\n", createVNode(_components.li, {
        children: "Keystatic CMS"
      }), "\n", createVNode(_components.li, {
        children: "Navigation"
      }), "\n", createVNode(_components.li, {
        children: "Responsive Design"
      }), "\n", createVNode(_components.li, {
        children: "Pagination"
      }), "\n", createVNode(_components.li, {
        children: "Search Functionality"
      }), "\n", createVNode(_components.li, {
        children: "RSS Feed"
      }), "\n", createVNode(_components.li, {
        children: "Sitemap"
      }), "\n", createVNode(_components.li, {
        children: "Dark Mode"
      }), "\n", createVNode(_components.li, {
        children: "SEO Optimization (~)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "upcoming-features",
      children: "Upcoming Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Open Graph (OG) Image Generation"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-technologies",
      children: "💻 Technologies"
    }), "\n", createVNode(_components.p, {
      children: "This project leverages cutting-edge web technologies:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://astro.build",
          children: "Astro V5.7"
        }), " - Modern static site builder"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://keystatic.com",
          children: "KeyStatic"
        }), " - Headless content-management system"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://tailwindcss.com",
          children: "Tailwind CSS"
        }), " - Utility-first CSS framework"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://daisyui.com/",
          children: "DaisyUI"
        }), " - Tailwind CSS component library"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://typescriptlang.org",
          children: "TypeScript"
        }), " - Typed JavaScript"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://mdxjs.com",
          children: "MDX"
        }), " - Markdown with JSX support"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://bun.sh",
          children: "Bun V1.2.10"
        }), " - Fast JavaScript runtime"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://vercel.com",
          children: "Vercel"
        }), " - Deployment platform"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.a, {
          href: "https://hugeicons.com",
          children: "HugeIcons"
        }), " - Icon library"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-inspirations-and-code-concepts",
      children: "💡 Inspirations and Code Concepts"
    }), "\n", createVNode(_components.p, {
      children: "This project draws inspiration from the following sources:"
    }), "\n", createVNode(_components.h3, {
      id: "designs",
      children: "Designs"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.bbc.com",
          children: "BBC News"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://dribbble.com/shots/21678041-NewsHub-News-Website",
          children: "NewsHub - News Website"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://dribbble.com/shots/24675325-Let-sread-News-Landing-Page",
          children: "Let’sread - News Landing Page"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "articles",
      children: "Articles"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://rimdev.io/creating-a-pagination-component-with-astro",
          children: "Creating A Pagination Component With Astro"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://website-thomas-astro.vercel.app/blog/search-static-astro-website",
          children: "Adding search to static Astro sites"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-license",
      children: "📄 License"
    }), "\n", createVNode(_components.p, {
      children: ["Open sourced under the ", createVNode(_components.a, {
        href: "https://github.com/Mrahmani71/astro-news/blob/master/LICENSE.md",
        children: "MIT license"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "-contributing",
      children: "🤝 Contributing"
    }), "\n", createVNode(_components.p, {
      children: ["Contributions, issues, and feature requests are welcome! Feel free to check the ", createVNode(_components.a, {
        href: "https://github.com/Mrahmani71/astro-news/issues",
        children: "issues page"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/views/about.mdx";
const file = "/workspaces/FrostFoe/astro-news/src/content/views/about.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/FrostFoe/astro-news/src/content/views/about.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
