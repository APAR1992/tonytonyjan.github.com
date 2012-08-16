---
layout: page
title: "大兜 Ruby 筆記"
date: 2012-08-11 22:19
comments: true
sharing: true
footer: true
---

## Hash

1.8 Style

    {:name => "Tony", :age => 18}

1.9 Style

    {name: "Tony", age: 18}

## super

Calling `super` without any parameters and parentheses will automatically pass on any parameters a method received to the superclass's method of the same name. If you call `super()` instaed of `super`, it will call the superclass's method of the same name with an empty parameter list.

使用 `super`（無括號、參數）會呼叫父類別的同名方法，同時會自動傳遞所有在子類別收到的參數列。如果使用 `super()` 則會傳遞空的參數列給父類別的同名方法。

如果想要透過繼承來擴充某類別的方法，不想動到傳遞的參數，也希望未來父類別如果改變了傳入參數數目或名稱，也能不更改子類別，可以這樣做：

``` ruby
class Sub < Base
  def initialize *args
    super # equals to `super(*args)`
    # do something
  end
end
```