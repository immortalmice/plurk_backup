BackupData = {
  pin: {
      "id": 1486381136,
      "base_id": "okyb0w",
      "qualifier": ":",
      "translate_qualifier": "",
      "content": "<img class=\"emoticon_my\" src=\"https://emos.plurk.com/6d811c076c285e4680170323040fdf98_w15_h15.gif\" width=\"15\" height=\"15\"> 絵夢置頂自介 <img class=\"emoticon_my\" src=\"https://emos.plurk.com/6d811c076c285e4680170323040fdf98_w15_h15.gif\" width=\"15\" height=\"15\">",
      "content_raw": "[emo77]絵夢置頂自介[emo77]",
      "posted": "Sat, 02 Oct 2021 14:53:17 GMT",
      "favorite_count": 0,
      "replurkers_count": 0,
      "response_count": 9,
      "anonymous": false,
      "limited_to": null,
      "porn": false,
      "pin": true
  },
  info: {},
  user: {},
  indexes: {},
  plurks: {},
  responses: {},
  current: []
},
function() {
  var a, n, e, t, i, s = function(a, n, e) {
          return e = e || "small", null !== n && n >= 0 && a ? "https://avatars.plurk.com/" + a + "-" + e + (n || "") + "." + ("big" == e ? "jpg" : "gif") : "https://www.plurk.com/static/default_big.jpg"
      },
      r = function(a) {
          return new Date(a).toLocaleString(void 0, {
              hour12: !1
          })
      },
      o = function(e, t) {
          var i = e + "_" + (t < 10 ? "0" : "") + t;
          a.find(".month.current").removeClass("current"), a.find(".month[data-year=" + e + "][data-month=" + t + "]").addClass("current"), n.empty();
          var s = document.createElement("script");
          s.onload = function() {
              var a = BackupData.plurks[i].sort(function(a, n) {
                  return n.id - a.id
              });
              a.unshift(BackupData.pin)
              BackupData.current = [...BackupData.plurks[i]]
              setTimeout(function() {
                  p(a)
              }, 200), $(s).remove(), delete BackupData.plurks[i]
          }, s.src = "data/plurks/" + i + ".js", document.head.appendChild(s)
      },
      c = function(a) {
          return a = (a = a.replace(/<a /g, '<a target="_blank" ')).replace(/src="\/static\/emoticons\//g, 'src="https://www.plurk.com/static/emoticons/')
      },
      p = function(a) {
          var e = BackupData.user,
              t = '<div class="avatar"><a target="_blank" href="https://www.plurk.com/' + e.nick_name + '"><img src="' + s(e.id, e.avatar, "medium") + '"></a></div>',
              i = '<a target="_blank" href="https://www.plurk.com/' + e.nick_name + '" class="name"' + (e.name_color ? ' style="color:#' + e.name_color + '"' : "") + ">" + e.display_name + "</a>";
          for (var o in a) {
              var p = a[o],
                  l = '<div class="plurk' + (p.pin ? ' plurk-pin' : '') + ' clearfix" data-pid="' + p.id + '" data-basepid="' + p.base_id + '">' + t + '<div class="user"><span>' + i + (p.qualifier ? '<span class="qualifier q_' + p.qualifier + '">' + p.translate_qualifier + "</span>" : "") + (p.porn ? '<span class="cmp-porn pif-porn"></span>' : "") + '</span></div><div class="content">' + c(p.content) + '</div><div class="manager"><span class="response-count"><i class="cmp-response"></i><span>' + p.response_count + '</span></span><a href="https://www.plurk.com/p/' + p.base_id + '" target="_blank" class="open-plink"><i class="cmp-outlink"></i><span></span></a></div><div class="info">' + (p.private || p.limited_to ? '<span class="private cmp-privacy"></span>' : "") + '<span class="time">' + r(p.posted) + "</span></div></div>";
              n.append(l)
          }
      },
      l = function(a) {
          t.html(a[0].outerHTML), i.empty(), m(e), v();
          var n = a.data("basepid");
          if ("0" != a.find(".response-count span").text()) {
              var s = document.createElement("script");
              s.onload = function() {
                  var a = BackupData.responses[n];
                  setTimeout(function() {
                      d(a)
                  }, 200), $(s).remove(), delete BackupData.responses[n]
              }, s.src = "data/responses/" + n + ".js", document.head.appendChild(s)
          }
      },
      popupWithPID = function({content, pid}) {
        var e = BackupData.user,
            td = '<div class="avatar"><a target="_blank" href="https://www.plurk.com/' + e.nick_name + '"><img src="' + s(e.id, e.avatar, "medium") + '"></a></div>',
            il = '<a target="_blank" href="https://www.plurk.com/' + e.nick_name + '" class="name"' + (e.name_color ? ' style="color:#' + e.name_color + '"' : "") + ">" + e.display_name + "</a>";
        var sr = document.createElement("script");
        sr.onload = function() {
            var a = BackupData.responses[pid];
            
            var p = { content, response_count: a.length, base_id: pid },
            l = '<div class="plurk' + (p.pin ? ' plurk-pin' : '') + ' clearfix" data-pid="' + p.id + '" data-basepid="' + p.base_id + '">' + td + '<div class="user"><span>' + il + (p.qualifier ? '<span class="qualifier q_' + p.qualifier + '">' + p.translate_qualifier + "</span>" : "") + (p.porn ? '<span class="cmp-porn pif-porn"></span>' : "") + '</span></div><div class="content">' + c(p.content) + '</div><div class="manager"><span class="response-count"><i class="cmp-response"></i><span>' + p.response_count + '</span></span><a href="https://www.plurk.com/p/' + p.base_id + '" target="_blank" class="open-plink"><i class="cmp-outlink"></i><span></span></a></div><div class="info">' + (p.private || p.limited_to ? '<span class="private cmp-privacy"></span>' : "") + '<span class="time">' + r(p.posted) + "</span></div></div>";
            t.html(l), i.empty(), m($("#popplurk")), v();

            setTimeout(function() {
                d(a)
            }, 200), $(s).remove(), delete BackupData.responses[pid]
        }, sr.src = "data/responses/" + pid + ".js", document.head.appendChild(sr)
      },
      d = function(a) {
          for (var n in a) {
              var e = a[n],
                  t = e.user,
                  o = '<div class="plurk response clearfix" data-rid="' + e.id + '"><div class="avatar"><a target="_blank" href="https://www.plurk.com/' + t.nick_name + '"><img src="' + s(t.id, t.avatar, "small") + '"></a></div><div class="user"><span><a href="https://www.plurk.com/' + t.nick_name + '" class="name"' + (t.name_color ? ' style="color:#' + t.name_color + '"' : "") + ">" + t.display_name + "</a>" + (e.qualifier ? '<span class="qualifier q_' + e.qualifier + '">' + e.translate_qualifier + "</span>" : "") + '</span></div><div class="content">' + c(e.content) + '</div><div class="info"><span class="time">' + r(e.posted) + "</span></div></div>";
              i.append(o)
          }
      },
      u = function() {
          var a = $(this).attr("href");
          return $("#popimage-img").attr("src", a), m($("#popimage")), !1
      },
      m = function(a) {
          if (0 == $(".popwindow:visible").length) {
              var n = $(window).scrollTop();
              $("html").css({
                  "overflow-y": "scroll"
              }), $("body").data("st", n).css({
                  top: -n,
                  overflow: "visible",
                  position: "fixed"
              })
          }
          a.show()
      },
      f = function(a) {
          a.hide(), 0 == $(".popwindow:visible").length && ($("html").css({
              "overflow-y": ""
          }), $("body").css({
              overflow: "",
              position: "",
              top: ""
          }), $(window).scrollTop($("body").data("st")))
      },
      v = function() {
          i.css("height", e.find(".popwindow-holder").height() - t.height())
      },
      sort = function() {
        var a = BackupData.current
        var pin = a.shift()
        a.reverse()
        a.unshift(pin)
        n.empty()
        p(a)
      };
  $(document).ready(function() {
      ! function() {
          a = $("#calendar"), n = $("#plurks"), e = $("#popplurk"), t = $("#popplurk-plurk-holder"), i = $("#popplurk-responses-holder"), $("#backup-info").html("Backup at " + r(BackupData.info.backup_date));
          var c = BackupData.user;
          $("#account-avatar").css("background-image", "url(" + s(c.id, c.avatar, "big") + ")"), $("#account-info .displayname").text(c.display_name), $("#account-info .nickname").text("@" + c.nick_name);
          var p = ["Karma " + c.karma],
              d = new Date(c.date_of_birth);
          if (d && (1970 != d.getUTCFullYear() || 0 != d.getUTCMinutes()) && (d.getUTCFullYear() > 1904 || 1 != d.getUTCSeconds())) {
              var m = new Date(Date.now() - d.getTime()).getUTCFullYear() - 1970;
              p.push(m.toString() + " years old")
          }
          c.gender < 2 && p.push(0 == c.gender ? "Female" : "Male"), c.location && p.push(c.location), $("#account-info .other-info").html(p.join("<br>"));
          BackupData.indexes;
          var v = {};
          $.each(BackupData.indexes, function(a, n) {
              v[n.year] || (v[n.year] = {}), v[n.year][n.month] = n.plurks_count
          }), $.each($.map(v, function(a, n) {
              return n
          }).sort(function(a, n) {
              return n - a
          }), function(n, e) {
              var t = $('<div class="year-holder"></div>');
              t.append('<div class="year">' + e + "</div>");
              var i = $('<div class="month-holder clearfix"></div>').appendTo(t);
              $.each($.map(v[e], function(a, n) {
                  return n
              }).sort(function(a, n) {
                  return n - a
              }), function(a, n) {
                  i.append('<div class="month" data-year="' + e + '" data-month="' + n + '">' + n + '<span class="plurks-count">' + v[e][n] + "</span></div>")
              }), a.append(t)
          }), a.on("click", ".month", function() {
              var a = $(this);
              o(a.data("year"), a.data("month"))
          }), a.find(".month").first().trigger("click"), n.on("click", ".plurk", function(a) {
              $(a.target).is("a") || 0 != $(a.target).parent("a").length || l($(this))
          }), $("body").on("click", "a.pictureservices", u), $(".popwindow-overlay, #popimage .popwindow-holder").on("click", function() {
              f($(this).parent(".popwindow"))
          })
      }(),
      $(window).on('resize', v), v()
      document.body.addEventListener("click", function(e) {
        // e.target was the clicked element
        if(e.target && e.target.nodeName == "A") {
            const href = e.target.href
            // console.log(href)
            const idRegex = /https:\/\/www.plurk.com\/p\/(\w+)/
            const result = href.match(idRegex)
            // console.log(result)
            if (result && result[1]) {
                const basePID = result[1]
                const plurkData = BackupData.userPlurked.find(plurk => basePID === plurk.pid)
                if (plurkData) {
                    // console.log(plurkData)
                    popupWithPID(plurkData)
                    e.preventDefault()
                }
            }
        }
      });
      document.getElementsByClassName('sort-btn')[0].addEventListener("click", sort)
  })
}();