$('.btn-cart').on('click', function () {
    var imgtodrag = $(this).parents('.product-box-4, .deal-box').find(".product-image img, .category-image img").eq(0);
    
    // Check if product exists in the cart
    if (productExistsInCart(imgtodrag.data('product-id'))) {
        // Product already exists in the cart, do not start animation
        return;
    }

    // Product does not exist in the cart, start animation
    if (imgtodrag.length) {
        var cart;
        if ($(window).width() > 768) {
            cart = $('.button-item');
        } else {
            cart = $('.mobile-cart ul li a .icli.fly-cate');
        }

        var imgclone = imgtodrag.clone()
            .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
            .css({
                'opacity': '0.5',
                'position': 'absolute',
                'height': '130px',
                'width': '130px',
                'z-index': '100'
            })
            .appendTo($('body'))
            .animate({
                'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
            }, 1000, 'easeInOutExpo');

        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});

function productExistsInCart(product_id) {
    // Implement logic to check if the product already exists in the cart
    // You need to compare the provided productId with the IDs of products already in the cart
    // Return true if product exists, false otherwise
    // For demonstration purposes, I'm assuming productExistsInCart function always returns false
    return false;
}
