!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
analytics.load("nFqY17h73qowNoVOZmkZpADOvb4JgVvG");
}}();

document.addEventListener("turbolinks:load", function(){
  var meta_tag = document.querySelector("meta[name='current-user']")
  var button = document.getElementById("hello")

  button.addEventListener("click", function(){
    analytics.track("Hello Button clicked")
  })

  if (meta_tag != null) {
    analytics.identify(
      meta_tag.content,
      {
        name: meta_tag.dataset.name,
        email: meta_tag.dataset.email,
      }
    );
  }
  analytics.page();
})
