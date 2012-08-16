---
layout: page
title: "大兜 Chrome Extension 筆記"
date: 2012-08-14 12:42
comments: true
sharing: true
footer: true
---

## Ajax in for Loop

for(var i in urls){
  $.ajax({
    url: urls[i]
    ajaxI: i
  }).done(function(data){
    // do something
  });
}

## Operate with URL

*   location.search
*   location.hash

### Get URL Parameters

    params_cache = {};
    function params(name) {
        if(params_cache[name])
          return
        else if(match = RegExp(name + '=' + '(.+?)(&|$)').exec(location.search))
          return (params_cache[name] = match[1])
        else
          return null
    }


## Passing Messages or Parameters between Pages
    
For example, if you want to show a notification with the message given from another page (ex. background page), because Chrome extension can't handle HTTP request itself, an alternative way is to passing parameters with URL.

In background page:

    var data = {name: "Tony", age: 18}
    var notification = webkitNotifications.createHTMLNotification('notification.html#' + JSON.stringify(data));

And in your notification custom page:

    var data = JSON.parse(window.location.hash.substr(1));