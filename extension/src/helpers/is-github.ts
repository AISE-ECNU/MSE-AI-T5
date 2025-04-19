const isGithub = (): boolean => {
  console.log(window.location.href.startsWith("https://github.com/"));
  return window.location.href.startsWith("https://github.com/");
};

export default isGithub;
