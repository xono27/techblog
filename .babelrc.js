module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "prismjs",
      {
        languages: ["javascript", "css", "html", "bash"],
        plugins: ["line-numbers", "show-language"],
        theme: "okaidia",
        css: true,
      },
    ],
  ],
};
