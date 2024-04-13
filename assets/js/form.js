/*! /*! www.hattiteknik.com - v1.0.0 - 2020
 * Copyright (c) 2020 - designerAgency: Diverseffect.com;
 */
$(function () {
    $.form = {
        formLoad: function () {
            $.form.phoneMask();

            var checkBox = $('input[type="checkbox"]');
            $(checkBox).on("click", function () {
                if ($(this).is(':checked')) {
                    $(this).prop('checked',true);
                    $(this).attr('checked',true);
                }else{
                    $(this).prop('checked',false);
                    $(this).attr('checked',false);
                }
            });
            var radio = $('input[type="radio"]');
            $(radio).on("click", function () {
                if ($(this).is(':checked')) {
                    $(this).prop('checked',true);
                    $(this).attr('checked',true);
                }else{
                    $(this).prop('checked',false);
                    $(this).attr('checked',false);
                }
            });

            $('form').parsley({
                trigger:      'change',
                successClass: "has-success",
                errorClass: "has-error",
                classHandler: function (el) {
                    return el.$element.closest('.form-group'); //working
                },
                errorsWrapper: '<div class="invalid-message"></div>',
                errorTemplate: '<span></span>',
            });
            Parsley.addMessages('tr', {
                defaultMessage: "Girdiğiniz değer geçerli değil.",
                type: {
                  email:        "Geçerli bir e-mail adresi yazmanız gerekiyor.",
                  url:          "Geçerli bir bağlantı adresi yazmanız gerekiyor.",
                  number:       "Geçerli bir sayı yazmanız gerekiyor.",
                  integer:      "Geçerli bir tamsayı yazmanız gerekiyor.",
                  digits:       "Geçerli bir rakam yazmanız gerekiyor.",
                  alphanum:     "Geçerli bir alfanümerik değer yazmanız gerekiyor."
                },
                notblank:       "Bu alan boş bırakılamaz.",
                required:       "Bu alan boş bırakılamaz.",
                pattern:        "Girdiğiniz değer geçerli değil.",
                min:            "Bu alan %s değerinden büyük ya da bu değere eşit olmalı.",
                max:            "Bu alan %s değerinden küçük ya da bu değere eşit olmalı.",
                range:          "Bu alan %s ve %s değerleri arasında olmalı.",
                minlength:      "Bu alanın uzunluğu %s karakter veya daha fazla olmalı.",
                maxlength:      "Bu alanın uzunluğu %s karakter veya daha az olmalı.",
                length:         "Bu alanın uzunluğu %s ve %s karakter arasında olmalı.",
                mincheck:       "En az %s adet seçim yapmalısınız.",
                maxcheck:       "En fazla %s seçim yapabilirsiniz.",
                check:          "Bu alan için en az %s, en fazla %s seçim yapmalısınız.",
                equalto:        "Bu alanın değeri aynı olmalı."
              });
              
              Parsley.setLocale('tr');
              

            $("#uploadBtn").change(function (e) {
                if (this.value != '') {
                    var names = [];
                    for (var i = 0; i < $(this).get(0).files.length; ++i) {
                        names.push($(this).get(0).files[i].name);
                    }
                    $("#uploadFile").attr("placeholder", names);
                }
            });
        },


        //mask
        phoneMask: function () {
            var phones = [{
                "mask": "+A# (A##) ###-####"
            }, {
                "mask": "+A# (A##) ###-####"
            }];
            $('input[name="phone"],input[name="Phone"], input[name="Telephone"],input[name="Telephone"]').inputmask({
                mask: phones,
                greedy: false,
                definitions: {
                    '#': {
                        validator: "[0-9]",
                        cardinality: 1
                    },
                    'A': {
                        validator: "[1-9]",
                        cardinality: 1
                    }
                }
            });
        }

    }
});
$(document).ready(function () {
    $.form.formLoad();
});