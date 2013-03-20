---
layout: post
title: "凱薩密碼中文版"
date: 2013-03-20 16:33
comments: true
categories: Ruby
---

靈感是受到凱薩密碼的影響，且英文論壇中為了避免髒話或敏感詞彙被擋，有 rot13 的出現（其實就是凱薩加密，key 設定成 13，所以 rot13 兩次會等於原來的句子）。想說中文也可這樣玩，所以決定寫一個全世界最沒用的玩具。

## 安裝

    gem install tj_caesar_cipher

## 使用

``` ruby
    require 'tj_caesar_cipher'
    s1 = TJCaesarCipher.new("tonytonyjan")
    # => "tonytonyjan" 
    s1.rot_en! # 預設就是 rot13
    # => "gbalgbalwna" 
    s1.rot_en! # 再執行一次就會恢復原狀
    # => "tonytonyjan" 
    s1.rot_en(12) # 也可以給不同的 key
    # => "gbalgbalwna" 

    #  s2 = TJCaesarCipher.new("我是厲鬼，不是大神")
    # => "我是厲鬼，不是大神" 
    s2.rot_cjk!
    # => "諸輖粙牕，直輖舎偷" 
    s2.rot_cjk!
    # => "我是厲鬼，不是大神" 
    s2.rot_cjk(1)
    # => "戒昰厳鬽，与昰夨祟"
```
