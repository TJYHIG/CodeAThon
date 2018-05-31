jQuery(document).ready(function () {

    jQuery(document).on("click", "a", function () {
        if (jQuery(this).attr("href") === "#") {
            return false;
        }
    });

    jQuery(document).on("blur", "input", function (e) {
        if (e.currentTarget.value !== "") {
            // console.log(e.currentTarget.value);
            // console.log(jQuery(this).data("info"));
            console.log(jQuery(jQuery(this).parent()[0]).offset());

            if (jQuery(this).data("info") !== "") {
                var fieldname = jQuery(this).attr("name");
                // console.log(jQuery("#" + fieldname + "-output").length);
                if (jQuery("#" + fieldname + "-output").length < 1) {

                    jQuery("#" + jQuery(this).data("info")).append(
                        "<div class='info-data-output' id='" + fieldname + "-output'>" + jQuery(
                            this).val() + "</div>");

                    setTimeout(function () {
                        //console.log("#" + fieldname+ "-output");
                        jQuery("#" + fieldname + "-output").css({
                            "display": "block"
                        });
                    }, 1000);

                    jQuery(jQuery(this).parent().parent(), "div").prepend(
                        "<div class='info-flying' id='" +
                        fieldname + "-fly'>" + jQuery(this).val() + "</div>");

                    jQuery("#" + fieldname + "-fly").animate({
                            'left': jQuery("#" + jQuery(this).data("info")).offset().left +
                                'px',
                            'top': jQuery("#" + jQuery(this).data("info")).offset().top - 245 +
                                'px'
                        }, 1000,
                        function () {
                            jQuery(".info-flying").remove();
                        });

                    jQuery(".progress-zone-2").append("<img class='colorstar' src='images/colorstar.png' height='25' width='25' />");

                } else {
                    if (jQuery("#" + jQuery(this).attr("name") + "-output").val() !== jQuery(this).val()) {
                        jQuery("#" + jQuery(this).attr("name") + "-output").html(jQuery(this).val());
                    }
                }
            }
        }
    });

    jQuery(document).on("change", "select", function (e) {
        // console.log(e.currentTarget.value);
        if (e.currentTarget.value !== "") {
            // console.log(e.currentTarget.value);
            // console.log(jQuery(this).data("info"));
            if (jQuery(this).data("info") !== "") {
                var fieldname = jQuery(this).attr("name");
                // console.log(jQuery("#" + fieldname + "-output").length);
                if (jQuery("#" + fieldname + "-output").length < 1) {
                    jQuery("#" + jQuery(this).data("info")).append(
                        "<div class='info-data-output' id='" + jQuery(this).attr(
                            "name") + "-output'>" + jQuery(this).val() + "</div>");

                    setTimeout(function () {
                        //console.log("#" + fieldname+ "-output");
                        jQuery("#" + fieldname + "-output").css({
                            "display": "block"
                        });
                    }, 1000);

                    jQuery(jQuery(this).parent().parent(), "div").prepend(
                        "<div class='info-flying' id='" +
                        fieldname + "-fly'>" + jQuery(this).val() + "</div>");

                    jQuery("#" + fieldname + "-fly").animate({
                            'left': jQuery("#" + jQuery(this).data("info")).offset().left +
                                'px',
                            'top': jQuery("#" + jQuery(this).data("info")).offset().top - 245 +
                                'px'
                        }, 1000,
                        function () {
                            jQuery(".info-flying").remove();
                        });

                    jQuery(".progress-zone-2").append("<img class='colorstar' src='images/colorstar.png' height='25' width='25' />");

                } else {
                    if (jQuery("#" + jQuery(this).attr("name") + "-output").val() !== jQuery(this).val()) {
                        jQuery("#" + jQuery(this).attr("name") + "-output").html(jQuery(this).val());
                    }
                }
            }
        }
    });

    $.getJSON("vehicle-list.json", function (result) {
        //console.log(result);
        $.each(sortJSON(result, "brand", "123"), function (i, field) {
            //console.log(field);
            jQuery(".vehiclemake").append("<option value='" + field["brand"] + "'>" + field[
                "brand"] + "</option>");
        });
    });

    jQuery(document).on("change", ".vehiclemake", function () {
        //console.log(this.value);
        jQuery(".vehiclemodel").html("<option value='#'>Please Select</option>");
        var chosenmake = this.value;
        $.getJSON("vehicle-list.json", function (result2) {
            //console.log(result2);
            $.each(result2, function (idx, obj) {
                //console.log(obj.brand);
                //console.log(chosenmake);
                if (obj.brand == chosenmake) {
                    //console.log(obj.models);
                    $.each(obj.models, function (idx2, obj2) {
                        //console.log(obj2);
                        jQuery(".vehiclemodel").append("<option value='" +
                            obj2 + "'>" + obj2 + "</option>");
                    });
                }
            });
        });
    });
    //     ___------__
    //  |\__-- /\       _-
    //  |/    __      -
    //  //\  /  \    /__
    //  |  o|  0|__     --_
    //  \\____-- __ \   ___-
    //  (@@    __/  / /_
    //     -_____---   --_
    //      //  \ \\   ___-
    //    //|\__/  \\  \
    //    \_-\_____/  \-\
    //         // \\--\|   -Han J. Lee-
    //    ____//  ||_
    //   /_____\ /___\
    // ______________________
    jQuery(document).on("click", ".next1", function () {
        jQuery(".step1").fadeOut(1);
        jQuery(".step2").fadeIn(500);
    });
    jQuery(document).on("click", ".back2", function () {
        jQuery(".step2").fadeOut(1);
        jQuery(".step1").fadeIn(500);
    });
    jQuery(document).on("click", ".next2", function () {
        jQuery(".step2").fadeOut(1);
        jQuery(".step3").fadeIn(500);
    });
    jQuery(document).on("click", ".back3", function () {
        jQuery(".step3").fadeOut(1);
        jQuery(".step2").fadeIn(500);
    });
    jQuery(document).on("click", ".next3", function () {
        jQuery(".step3").fadeOut(1);
        jQuery(".done").fadeIn(500);
    });
    jQuery(document).on("click", ".step1-shortcut", function () {
        jQuery(".step2").fadeOut(1);
        jQuery(".step3").fadeOut(1);
        jQuery(".done").fadeOut(1);
        jQuery(".step1").fadeIn(500);
    });
    jQuery(document).on("click", ".step2-shortcut", function () {
        jQuery(".step1").fadeOut(1);
        jQuery(".step3").fadeOut(1);
        jQuery(".done").fadeOut(1);
        jQuery(".step2").fadeIn(500);
    });
    jQuery(document).on("click", ".step3-shortcut", function () {
        jQuery(".step1").fadeOut(1);
        jQuery(".step2").fadeOut(1);
        jQuery(".done").fadeOut(1);
        jQuery(".step3").fadeIn(500);
    });
    jQuery(document).on("click", ".again", function () {
        jQuery(".done").fadeOut(1);
        jQuery(".step1").fadeIn(500);
    });
});

function sortJSON(data, key, way) {
    return data.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (way === '123') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }
        if (way === '321') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}