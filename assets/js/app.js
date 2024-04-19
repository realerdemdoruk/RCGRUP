/*! /*! ABAY - v1.0.0 - 2022
 * Copyright (c) 2022 - designerAgency: Diverseffect.com;
 */
$(function () {
  $.main = {
    PageLoad: function () {
      $.main.headerMenu();
      $.main.mobileMenu();
      $.main.fancybox();

      if ($("#homeSlider").length) {
        $.main.promoSlider();
      }
      if ($("#customerSlider").length) {
        $.main.customerSlider();
      }
      if ($("#projectSlider").length) {
        $.main.projectSlider();
      }
      if ($(".leftMenu").length) {
        $.main.leftMenu();
      }
      if ($(".accardion").length) {
        $.main.accardionMenu();
      }
      if ($(".servicesPage").length) {
        $.main.heightFix(".servicesPage", ".p-item");
      }
    },
    //fancybox
    fancybox: function () {
      $("[data-fancybox]").fancybox({
        margin: [0, 0],
      });
      $.fancybox.defaults.hash = false;
    },
    heightFix: function (capsule, content) {
      if ($(capsule).length) {
        $(capsule).each(function () {
          $(this).find(content).matchHeight({
            byRow: true,
            property: "min-height",
            target: null,
            remove: false,
          });
        });
      }
    },
    //sidebarMenu
    headerMenu: function () {
      $(".has-sub")
        .on("mouseenter", function () {
          $(this).find(".mega-menu").toggleClass("show");
          $(this).find("a").toggleClass("active");
          return false;
        })
        .on("mouseleave", function () {
          $(".nav .mega-menu").removeClass("show");
          $(".nav a").removeClass("active");
          return false;
        });
      $("a.has-search").on("click", function (event) {
        event.preventDefault();
        $(".mUser .mega-menu").removeClass("show");
        $(".nav .mega-menu").removeClass("show");
        $("header .searchCps").toggleClass("show");
        $("header").toggleClass("search-open");
        return false;
      });
      $("a.searchClose").on("click", function (event) {
        event.preventDefault();
        $("header .searchCps").removeClass("show");
        $("header").removeClass("search-open");
        return false;
      });

      window.onclick = function (event) {
        if (!event.target.matches(".has-sub")) {
          var dropdowns = document.getElementsByClassName("mega-menu");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
              openDropdown.classList.remove("show");
              $(".nav a.has-sub").removeClass("active");
            }
          }
        }
      };
    },
    mobileMenu: function () {
      var device =
        $(window).innerWidth() > 600
          ? window.innerWidth / 1.4
          : window.innerWidth / 1.1;
      var mobileMenu = new MobileSwipeMenu("#menu", {
        mode: "right",
        width: device,
        enableBodyHook: false,
        events: {
          opened: function () {},
          closed: function () {},
          drag: function (swipe) {},
        },
      });
      document
        .getElementById("openMenu")
        .addEventListener("click", function () {
          mobileMenu.openMenu();
        });
      document
        .getElementById("closeMenu")
        .addEventListener("click", function () {
          mobileMenu.closeMenu();
        });

      //Mobile SubMenu Olusturma
      var menu = $(".nav").html();
      var search = $(".SearchBar").html();
      var miniMenu = $("header .miniMenu").html();
      var social = $("header .social").html();

      $(".MobilMenu .mMiniMenu").append(miniMenu);
      $(".MobilMenu .wrapper").append(
        '<ul class="nav">' +
          menu +
          '</ul><div class="mSearch">' +
          search +
          '</div><div class="mSocial">' +
          social +
          "</div>"
      );

      $(".MobilMenu ul.nav li").each(function () {
        $(this).removeClass("");
        var mSubMenu = $(this).find("ul");
        if (mSubMenu.length) {
          $(this).addClass("has-sub");
          $(this).append('<a href="javascript:;" class="MobileSub">+</a>');
        } else {
          $(this).removeClass("sub");
        }
      });

      $("a.MobileSub").on("click", function () {
        if ($(this).closest("li").attr("class") == "has-sub push") {
          $(".MobilMenu ul li a.MobileSub").empty();
          $(".MobilMenu ul li a.MobileSub").html("+").removeClass("open");
          $(".MobilMenu ul.nav li").removeClass("push");
          $(this).closest("li").removeClass("push");
          $(this).empty();
          $(this).html("+").removeClass("open");
        } else {
          $(".MobilMenu ul li a.MobileSub").empty();
          $(".MobilMenu ul li a.MobileSub").html("+").removeClass("open");
          $(".MobilMenu ul.nav li").removeClass("push");
          $(this).closest("li").addClass("push");
          $(this).empty();
          $(this).html("x").addClass("open");
        }
      });
    },
    //Ana Sayfa Slider
    promoSlider: function () {
      $("#homeSlider").owlCarousel({
        items: 1,
        navigation: false,
        singleItem: true,
        pagination: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: true,
        navText: [
          '<i class="icon-left-open"></i>',
          '<i class="icon-right-open"></i>',
        ],
        dots: false,
      });
    },
    //müşteri Slider
    customerSlider: function () {
      $("#customerSlider").owlCarousel({
        items: 1,
        navigation: false,
        singleItem: true,
        pagination: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        nav: true,
        navText: [
          '<i class="icon-left-open-big"></i>',
          '<i class="icon-right-open-big"></i>',
        ],
        dots: false,

        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: false,
            loop: true,
          },
          600: {
            items: 2,
            nav: true,
            dots: false,
          },
          800: {
            items: 3,
            nav: true,
            dots: false,
            loop: true,
          },
          1500: {
            items: 4,
            nav: true,
            dots: false,
            loop: true,
          },
          1700: {
            items: 5,
            nav: true,
            dots: false,
            loop: true,
          },
        },
      });
    },
    //proje Slider
    projectSlider: function () {
      $("#projectSlider").owlCarousel({
        margin: 30,
        loop: false,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        mergeFit: true,
        nav: true,
        dots: false,

        responsive: {
          0: {
            items: 1,
            nav: false,
            dots: true,
          },
          600: {
            items: 2,
            nav: true,
            dots: false,
          },
          800: {
            items: 3,
            nav: true,
            dots: false,
            loop: false,
          },
          1500: {
            items: 4,
            nav: true,
            dots: false,
            loop: false,
          },
        },
      });
    },
    //left menu
    leftMenu: function () {
      $(".leftMenuBt").on("click", function () {
        $(this).closest(".leftMenu").toggleClass("left--open");
        return false;
      });
    },
    //sıkça Sorulan Sorular
    accardionMenu: function () {
      $(".accardion li .acButton").on("click", function (e) {
        e.preventDefault();
        var replyElement = $(this).closest("li").find(".Capsule");
        if (replyElement.is(":visible")) {
          replyElement.slideUp(400, function () {
            $(this).css("display", "none");
          });
          $(this).closest("li").removeClass("push");
        } else {
          $(".accardion li .Capsule").slideUp(400, function () {
            $(this).css("display", "none");
          });
          $(".accardion li").removeClass("push");
          replyElement.slideDown(200, function () {
            $(this).css("display", "inline-block");
          });
          $(this).closest("li").addClass("push");
        }
      });
    },

    boxStretch: function () {
      var device = $(window).innerWidth() > 768 ? "desktop" : "mobile";
      $("#homeSlider .owl-slide").each(function () {
        if (device == "mobile") {
          $(this)
            .find(".cropcontainer")
            .attr(
              "style",
              "background-image: url(" + $(this).data(device) + ")"
            );
        } else {
          $(this)
            .find(".cropcontainer")
            .attr(
              "style",
              "background-image: url(" + $(this).data(device) + ")"
            );
        }
      });
    },
  };
});
function counter(event) {
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  $(".slider-counter").text(
    "0" +
      (slides.relative(slides.current()) + 1) +
      " / " +
      "0" +
      slides.items().length
  );
}
$(document).ready(function ($) {
  $.main.PageLoad();
  $.main.boxStretch();

  if (!$(window).scrollTop() == 0) {
    $("body").addClass("sticky");
  }
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 2) {
      $("body").addClass("sticky");
    } else {
      $("body").removeClass("sticky");
    }
  });
  $(".wecallyouForm").css("display", "none");
  $(window).resize(function () {
    $.main.boxStretch();
  });
});
