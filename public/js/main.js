/**
 * Select Image
 * Go Top
 * Header Sticky
 * Auto Popup Newsletter
 * Total Price Variant
 * Change Value Dropdown
 * Footer Accordion
 * Parallax Image
 * Infinite Slide
 * Button Quatity
 * Delete File
 * Click Control
 * Add Wishlist Handle
 * Sidebar Filter Handle
 * Cookie
 * Sidebar Mobile Append
 * Select Custom
 * Click Active
 * Format Card Number
 * Change Bg Image
 * Change Value
 * Switch Layout
 * Update Price Minicart
 * Update Mini Compare
 * Update Table Wishlist
 * Update Compare Empt
 * Parallaxie
 * Stagger Wrap
 * Height Modal Menu
 * Preloader
 */

(function ($) {
  "use strict";

  /* Select Image
    -------------------------------------------------------------------------*/
  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");

      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            `<img src="${imgURL}" /> ${selectOption.text()}`
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  /* Go Top
    -------------------------------------------------------------------------*/
  var goTop = function () {
    var $goTop = $("#goTop");
    var $borderProgress = $(".border-progress");

    $(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      var docHeight = $(document).height() - $(window).height();
      var scrollPercent = (scrollTop / docHeight) * 100;
      var progressAngle = (scrollPercent / 100) * 360;

      $borderProgress.css("--progress-angle", progressAngle + "deg");

      if (scrollTop > 100) {
        $goTop.addClass("show");
      } else {
        $goTop.removeClass("show");
      }
    });

    $goTop.on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 0);
    });
  };

  /* Header Sticky
    -------------------------------------------------------------------------*/
  var headerSticky = function () {
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $("header").outerHeight();
    let didScroll = false;

    $(window).scroll(function () {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        let st = $(window).scrollTop();
        navbarHeight = $("header").outerHeight();

        if (st > navbarHeight) {
          if (st > lastScrollTop + delta) {
            $("header").css("top", `-${navbarHeight}px`);
          } else if (st < lastScrollTop - delta) {
            $("header").css("top", "0");
            $("header").addClass("header-type-stc");
          }
        } else {
          $("header").css("top", "unset");
          $("header").removeClass("header-type-stc");
        }
        lastScrollTop = st;
        didScroll = false;
      }
    }, 250);
  };

  /* Auto Popup Newsletter
    -------------------------------------------------------------------------*/
  var autoPopup = function () {
    if ($(".auto-popup").length > 0) {
      let showPopup = sessionStorage.getItem("showPopup");
      if (!JSON.parse(showPopup)) {
        setTimeout(function () {
          $(".auto-popup").modal("show");
        }, 3000);
      }
    }
    $(".btn-hide-popup").on("click", function () {
      sessionStorage.setItem("showPopup", true);
    });
  };

  /* Total Price Variant
    -------------------------------------------------------------------------*/
  var totalPriceVariant = function () {
    $(".tf-product-info-list,.tf-cart-item").each(function () {
      var productItem = $(this);
      var basePrice =
        parseFloat(productItem.find(".price-on-sale").data("base-price")) ||
        parseFloat(productItem.find(".price-on-sale").text().replace("₹", ""));
      var quantityInput = productItem.find(".quantity-product");

      function updateTotalPrice(price, scope) {
        var currentPrice =
          price ||
          parseFloat(scope.find(".price-on-sale").text().replace("₹", ""));
        var quantity = parseInt(scope.find(".quantity-product").val());
        var totalPrice = currentPrice * quantity;
        scope
          .find(".total-price")
          .text("₹" + totalPrice.toFixed(2).toLocaleString());
      }

      updateTotalPrice(null, productItem);

      productItem.find(".color-btn, .size-btn").on("click", function () {
        var newPrice = parseFloat($(this).data("price")) || basePrice;
        quantityInput.val(1);
        productItem
          .find(".price-on-sale")
          .text("₹" + newPrice.toFixed(2).toLocaleString());
        updateTotalPrice(newPrice, productItem);
        updateCartTotal();
      });

      productItem.find(".btn-increase").on("click", function () {
        var currentQuantity = parseInt(quantityInput.val());
        quantityInput.val(currentQuantity + 1);
        updateTotalPrice(null, productItem);
        updateCartTotal();
      });

      productItem.find(".btn-decrease").on("click", function () {
        var currentQuantity = parseInt(quantityInput.val());
        if (currentQuantity > 1) {
          quantityInput.val(currentQuantity - 1);
          updateTotalPrice(null, productItem);
          updateCartTotal();
        }
      });
    });

    function updateCartTotal() {
      let total = 0;
      $(".total-price").each(function () {
        let price = parseFloat(
          $(this).text().replace("₹", "").replace(/,/g, "")
        );
        if (!isNaN(price)) {
          total += price;
        }
      });
      $(".last-total-price").text(
        `Total: ₹${total.toFixed(2).toLocaleString()}`
      );
    }

    updateCartTotal();

    $(".remove-cart").on("click", function () {
      $(this).closest(".tf-cart-item").remove();
      updateCartTotal();
    });
  };

  /* Change Value Dropdown
    -------------------------------------------------------------------------*/
  var changeValueDropdown = function () {
    $(".tf-control-sort .select-item").on("click", function () {
      let selectedValue = $(this).find(".text-value-item").text();
      $(".tf-control-sort .body-text-3").text(selectedValue);
    });

    $(".tf-dropdown-sort .select-item").on("click", function () {
      let selectedValue = $(this).find(".text-value-item").text();
      $(".tf-dropdown-sort .text-sort-value").text(selectedValue);
    });
  };

  /* Footer Accordion
    -------------------------------------------------------------------------*/
  var handleFooter = function () {
    var footerAccordion = function () {
      var args = { duration: 250 };
      $(".footer-heading-mobile").on("click", function () {
        $(this).parent(".footer-col-block").toggleClass("open");
        if (!$(this).parent(".footer-col-block").is(".open")) {
          $(this).next().slideUp(args);
        } else {
          $(this).next().slideDown(args);
        }
      });
    };
    function handleAccordion() {
      if (matchMedia("only screen and (max-width: 767px)").matches) {
        if (!$(".footer-heading-mobile").data("accordion-initialized")) {
          footerAccordion();
          $(".footer-heading-mobile").data("accordion-initialized", true);
        }
      } else {
        $(".footer-heading-mobile").off("click");
        $(".footer-heading-mobile")
          .parent(".footer-col-block")
          .removeClass("open");
        $(".footer-heading-mobile").next().removeAttr("style");
        $(".footer-heading-mobile").data("accordion-initialized", false);
      }
    }
    handleAccordion();
    window.addEventListener("resize", function () {
      handleAccordion();
    });
  };

  /* Parallax Image 
    -------------------------------------------------------------------------*/
  var efectparalax = function () {
    if ($(".effect-paralax").length > 0) {
      $(".effect-paralax").each(function () {
        new SimpleParallax(this, {
          delay: 0.5,
          orientation: "up",
          scale: 1.3,
          transition: "cubic-bezier(0.2, 0.8, 1, 1)",
          customContainer: "",
          customWrapper: "",
        });
      });
    }
  };

  /* Infinite Slide 
    -------------------------------------------------------------------------*/
  var infiniteSlide = function () {
    if ($(".infiniteslide").length > 0) {
      $(".infiniteslide").each(function () {
        var $this = $(this);
        var style = $this.data("style") || "left";
        var clone = $this.data("clone") || 2;
        var speed = $this.data("speed") || 100;
        $this.infiniteslide({
          speed: speed,
          direction: style,
          clone: clone,
        });
      });
    }
  };

  /* Button Quatity
    -------------------------------------------------------------------------*/
  var btnQuantity = function () {
    $(".minus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > 1) {
        value = value - 1;
      }
      $input.val(value);
    });

    $(".plus-btn").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.closest("div").find("input");
      var value = parseInt($input.val());

      if (value > -1) {
        value = value + 1;
      }
      $input.val(value);
    });
  };

  /* Delete File 
    -------------------------------------------------------------------------*/
  var deleteFile = function (e) {
    $(".remove").on("click", function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest(".file-delete").remove();
    });
    $(".clear-file-delete").on("click", function (e) {
      e.preventDefault();
      $(this).closest(".list-file-delete").find(".file-delete").remove();
    });
  };

  /* Click Control 
    -------------------------------------------------------------------------*/
  var clickControl = function () {
    $(".btn-add-address").click(function () {
      $(".show-form-address").toggle();
    });
    $(".btn-hide-address").click(function () {
      $(".show-form-address").hide();
    });
    $(".btn-delete-address").click(function () {
      $(this).closest(".account-address-item").remove();
      var item = $(this).closest(".account-address-item");
      if (item.hasClass("editing")) {
        $(".edit-form-address").toggle();
        $(".edit-form-address").toggleClass("show");
      }
    });

    $(".btn-edit-address").click(function (e) {
      var item = $(this).closest(".account-address-item");
      if ($(".edit-form-address").hasClass("show")) {
        if (item.hasClass("editing")) {
          $(".edit-form-address").toggle();
          $(".edit-form-address").toggleClass("show");
          $(".account-address-item").removeClass("editing");
        } else {
          $(".account-address-item").removeClass("editing");
          item.addClass("editing");
        }
      } else {
        $(".edit-form-address").toggle();
        $(".edit-form-address").toggleClass("show");
        $(this).closest(".account-address-item").toggleClass("editing");
      }
    });
    $(".btn-hide-edit-address").click(function () {
      $(".edit-form-address").hide();
      $(".edit-form-address").removeClass("show");
      $(".account-address-item").removeClass("editing");
    });
  };

  /* Add Wishlist Handle
    -------------------------------------------------------------------------*/
  var wishlist = function () {
    $(".btn-add-wishlist").on("click", function () {
      $(this).toggleClass("added-wishlist");
    });
    $(".card-product .wishlist").on("click", function () {
      $(this).toggleClass("addwishlist");

      let icon = $(this).find(".icon");
      let tooltip = $(this).find(".tooltip");

      if ($(this).hasClass("addwishlist")) {
        icon.removeClass("icon-heart2").addClass("icon-trash");
        tooltip.text("Remove Wishlist");
      } else {
        icon.removeClass("icon-trash").addClass("icon-heart2");
        tooltip.text("Add to Wishlist");
      }
    });
  };

  /* Sidebar Filter Handle 
    -------------------------------------------------------------------------*/
  var handleSidebarFilter = function () {
    $("#filterShop, .sidebar-btn").on("click", function () {
      if ($(window).width() <= 1200) {
        $(".sidebar-filter,.overlay-filter").addClass("show");
        $("body").toggleClass("no-scroll");
      }
    });
    $(".close-filter, .overlay-filter").on("click", function () {
      $(".sidebar-filter,.overlay-filter").removeClass("show");
      $("body").toggleClass("no-scroll");
    });
  };

  /* Sidebar Mobile Append 
    -------------------------------------------------------------------------*/
  var sidebarMobile = function () {
    if ($(".sidebar-content-wrap, .content-append").length > 0) {
      var sidebar = $(".sidebar-content-wrap, .content-append").html();
      $(".sidebar-mobile-append, .content-mobile-append").append(sidebar);
    }
  };

  /* Select Custom 
    -------------------------------------------------------------------------*/
  var customSelect = function () {
    $("select#product_cat").each(function () {
      var $this = $(this),
        selectOptions = $(this).children("option").length;

      $this.addClass("hide-select");
      $this.after('<div class="tf-select-custom"></div>');

      var $customSelect = $this.next("div.tf-select-custom");
      $customSelect.text($this.children("option").eq(0).text());

      var $optionlist = $(
        '<ul class="select-options" /><div class="header-select-option"><span>Select Categories</span><span class="close-option"><i class="icon-close"></i></div>'
      ).insertAfter($customSelect);

      for (var i = 0; i < selectOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($optionlist);
      }

      var $optionlistItems = $optionlist.children("li");

      $customSelect.click(function (e) {
        e.stopPropagation();
        $("div.tf-select-custom.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("ul.select-options").hide();
          });
        $(this).toggleClass("active").next("ul.select-options").slideToggle();
      });

      $optionlistItems.click(function (e) {
        e.stopPropagation();
        $customSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel"));
        $optionlist.hide();
      });

      $(document).click(function () {
        $customSelect.removeClass("active");
        $optionlist.hide();
      });

      $(".close-option").click(function () {
        $customSelect.removeClass("active");
        $optionlist.hide();
      });
    });
  };

  /* Click Active 
    -------------------------------------------------------------------------*/
  var clickActive = function () {
    $(".btn-active").click(function (event) {
      event.stopPropagation();
      let container = $(this).closest(".active-container");
      let activeItem = container.find(".active-item");

      $(this).toggleClass("active");
      activeItem.toggleClass("active");
    });

    $(document).click(function (event) {
      if (!$(event.target).closest(".active-container").length) {
        $(".btn-active, .active-item").removeClass("active");
      }
    });
  };

  /* Format Card Number 
    -------------------------------------------------------------------------*/
  var formatCardNumber = function () {
    $(".number-credit-card").on("input", function () {
      var value = $(this).val().replace(/\D/g, "");
      if (value.length > 16) {
        value = value.slice(0, 16);
      }
      $(this).val(value.replace(/(\d{4})(?=\d)/g, "$1 "));
    });
  };

  /* Change Bg Image 
    -------------------------------------------------------------------------*/
  var changeBgImg = function () {
    $(".has-bg-img").each(function () {
      var bgImage = $(this).data("bg-img");
      var bgPosition = $(this).data("bg-position") || "left";

      if (bgImage) {
        $(this).css({
          "background-image": "url(" + bgImage + ")",
          "background-position": bgPosition,
        });
      }
    });
  };
  /* Switch Layout 
    -------------------------------------------------------------------------*/
  var switchLayout = function () {
    $(".tf-view-layout-switch").on("click", function (e) {
      e.preventDefault();

      var tabClass = $(this).data("tab");
      var gridLayout = $(".tf-grid-layout");
      var gridLayoutWrapper = $(".gridLayout-wrapper");
      var cardProduct = $(".tf-grid-layout .card-product");
      var viewSwitch = $(this);

      gridLayoutWrapper.addClass("loading");
      gridLayout.addClass("d-none");

      setTimeout(function () {
        gridLayout.removeClass(function (index, className) {
          return (className.match(/layout-\S+/g) || []).join(" ");
        });

        gridLayout.addClass("layout-" + tabClass);

        $(".tf-view-layout-switch").removeClass("active");
        viewSwitch.addClass("active");

        cardProduct.attr("class", "card-product");

        if (tabClass === "tablist-1") {
          cardProduct.addClass("style-row");
        } else if (tabClass === "tablist-2") {
          cardProduct.addClass("style-row type-row-2 row-small flex-sm-row");
        }

        gridLayoutWrapper.removeClass("loading");
        gridLayout.removeClass("d-none");
      }, 300);
    });
    $(".select-item").on("click", function (e) {
      e.preventDefault();
      var gridLayout = $(".tf-grid-layout");
      var gridLayoutWrapper = $(".gridLayout-wrapper");
      gridLayoutWrapper.addClass("loading");
      gridLayout.addClass("d-none");

      setTimeout(function () {
        gridLayoutWrapper.removeClass("loading");
        gridLayout.removeClass("d-none");
      }, 300);
    });
  };
  /* Preloader 
    -------------------------------------------------------------------------*/
  const preloader = function () {
    $("#preload").fadeOut("slow", function () {
      $(this).remove();
    });
  };

  /* Update Price Minicart 
    -------------------------------------------------------------------------*/
  var updatePriceMinicart = function () {
    function updateTotal() {
      let total = 0;
      $(".popup-shopping-cart .new-price").each(function () {
        let price = parseFloat($(this).text().replace(/[$,]/g, ""));
        if (!isNaN(price)) {
          total += price;
        }
      });
      $(".popup-shopping-cart .price-amount").text(`$${total.toFixed(3)}`);
    }

    function checkCartEmpty() {
      if ($(".popup-shopping-cart .file-delete").length === 0) {
        $(".minicart-empty").show();
        $(".popup-shopping-cart .product-list-wrap").hide();
        $(".popup-shopping-cart .popup-footer").hide();
      } else {
        $(".minicart-empty").hide();
      }
    }

    updateTotal();
    checkCartEmpty();

    $(".remove").on("click", function () {
      $(this).closest(".file-delete").remove();
      updateTotal();
      checkCartEmpty();
    });
  };

  /* Update Mini Compare  
    -------------------------------------------------------------------------*/
  var compareEmpy = function () {
    function updateCompareUI() {
      let compareItems = $(".offcanvas-compare .tf-compare-item");
      let emptyState = $(".mini-compare-empty");
      let compareWrap = $(".tf-compare-wrap");

      if (compareItems.length === 0) {
        emptyState.show();
        compareWrap.hide();
      } else {
        emptyState.hide();
        compareWrap.show();
      }
    }

    updateCompareUI();

    $(".tf-compare-item .remove").on("click", function () {
      $(this).closest(".tf-compare-item").remove();
      updateCompareUI();
    });

    $(".tf-compapre-button-clear-all").on("click", function () {
      $(".offcanvas-compare .tf-compare-item").remove();
      updateCompareUI();
    });
    $(".tf-compare-wrap").on("wheel", function (event) {
      event.preventDefault();
      this.scrollLeft += event.originalEvent.deltaY;
    });
  };

  /* Update Table Wishlist 
    -------------------------------------------------------------------------*/
  var wishlistTable = function () {
    function updateWishlistUI() {
      let wishlistItems = $(".tf-table-wishlist tbody tr");
      let wishlistFooter = $(".tf-table-wishlist tfoot");

      if (wishlistItems.length === 0) {
        wishlistFooter.removeClass("d-none");
      } else {
        wishlistFooter.addClass("d-none");
      }
    }

    updateWishlistUI();

    $(".wishlist-item_remove .remove").on("click", function () {
      $(this).closest(".wishlist-item").remove();
      updateWishlistUI();
    });
  };

  /* Update Compare Empt
    -------------------------------------------------------------------------*/
  var tableCompareRemove = function () {
    $(".remove").on("click", function () {
      let $clickedCol = $(this).closest(".tf-compare-col");
      let colIndex = $clickedCol.index();
      let $rows = $(".tf-compare-row");
      let visibleCols = $(
        ".tf-compare-row:first .tf-compare-col:visible"
      ).length;

      if (visibleCols > 4) {
        $rows.each(function () {
          $(this).find(".tf-compare-col").eq(colIndex).fadeOut(300);
        });
      } else {
        $rows.each(function () {
          let $cols = $(this).find(".tf-compare-col");
          let $colToMove = $cols.eq(colIndex);

          $colToMove.children().fadeOut(300, function () {
            let $parentRow = $(this).closest(".tf-compare-row");
            $colToMove.appendTo($parentRow);
          });
        });
      }
    });
  };

  /* Parallaxie 
    -------------------------------------------------------------------------*/
  var parallaxie = function () {
    var $window = $(window);
    if ($(".parallaxie").length && $window.width() > 991) {
      console.log("zo");
      if ($window.width() > 768) {
        $(".parallaxie").parallaxie({
          speed: 0.55,
          offset: 0,
        });
      }
    }
  };

  /* Stagger Wrap 
    -------------------------------------------------------------------------*/
  var staggerWrap = function () {
    if ($(".stagger-wrap").length) {
      var count = $(".stagger-item").length;
      for (var i = 1, time = 0.2; i <= count; i++) {
        $(".stagger-item:nth-child(" + i + ")")
          .css("transition-delay", time * i + "s")
          .addClass("stagger-finished");
      }
    }
  };

  /* Height Modal Menu 
    -------------------------------------------------------------------------*/
  var heightModalMenu = function () {
    function height() {
      var height = $("header .row-demo .demo-item").first().outerHeight();
      $("header .mega-menu .row-demo").height(height * 2 + 22);
    }
    height();
    $(window).resize(function () {
      height();
    });
  };
  /* Image Swap Product
    -------------------------------------------------------------------------*/
  var swapImage = function () {
    if ($(".card-product").length > 0) {
      $(".list-image-product").on("wheel touchmove", function (event) {
        event.stopPropagation();
      });

      $(".list-image-product").on("wheel", function (event) {
        event.preventDefault();
        this.scrollLeft += event.originalEvent.deltaY;
      });

      $(".image-swap").on("click mouseover", function () {
        var swapImage = $(this).find("img").attr("src");
        var imgProduct = $(this).closest(".card-product").find(".img-product");
        imgProduct.attr("src", swapImage);
        $(this)
          .closest(".card-product")
          .find(".image-swap.active")
          .removeClass("active");
        $(this).addClass("active");
      });
    }
  };
  // Dom Ready
  $(function () {
    selectImages();
    btnQuantity();
    deleteFile();
    goTop();
    sidebarMobile();
    changeValueDropdown();
    staggerWrap();
    headerSticky();
    autoPopup();
    clickControl();
    totalPriceVariant();
    handleFooter();
    infiniteSlide();
    efectparalax();
    wishlist();
    handleSidebarFilter();
    // customSelect();
    clickActive();
    formatCardNumber();
    changeBgImg();
    switchLayout();
    updatePriceMinicart();
    compareEmpy();
    wishlistTable();
    tableCompareRemove();
    parallaxie();
    heightModalMenu();
    swapImage();
    preloader();
  });
})(jQuery);
