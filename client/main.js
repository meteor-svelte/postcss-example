import App from "./App.svelte";

Meteor.startup(() => {
  new App({
    target: document.querySelector("#root")
  });
});
