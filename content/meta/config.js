const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Sariputa's BLOG", // <title>
  shortSiteTitle: "Sariputa's Blog", // <title> ending for posts and pages
  siteDescription: "Sariputa's Blog",
  siteUrl: "https://upatisariputa.netlify.com",
  pathPrefix: "",
  siteImage: "",
  siteLanguage: "ko",
  // author
  authorName: "Upati Sariputa",
  authorTwitterAccount: "",
  // info
  infoTitle: "Upati Sariputa",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "upatisariputa@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/upatisariputa" },
    { name: "telegram", url: "https://t.me/upatisariputa" }
  ]
};
