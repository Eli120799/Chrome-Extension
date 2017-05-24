//part 1
alert("Hello from your Chrome extension!")

//Log url link- part2
var firstHref = $("a[href^='http']").eq(0).attr("href");

console.log(firstHref);

//part 3 
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = $("a[href^='http']").eq(0).attr("href");

      console.log(firstHref);
    }
  }
);

//part 4
 chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  }
);