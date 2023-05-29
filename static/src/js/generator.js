console.log('generator running');

odoo.define('sstore_landing_generator.website_province_form', function(require) {
    'use strict';

    var FormController = require('web.FormController');
    var core = require('web.core');
    var _t = core._t;

    FormController.include({        
        fillUpFields: function() {
            var province = $('input[name="province"]').val();
            var uppercaseprov = province.charAt(0).toUpperCase() + province.slice(1);
            var spaceKeyEvent = $.Event("keydown", { keyCode: 32 });
            //var spaceKeyEvent = new KeyboardEvent("keydown", { key: " " });

            if (province) {
                $('input[name="domain"]').val(province + '.scavolinistore.net');                
                $('input[name="domain"]').attr('value', province + '.scavolinistore.net');                
                $('input[name="name"]').val('Scavolini Store - ' + uppercaseprov);
                console.log('mustbehere');
                $('input[name="name"]').attr('value','Scavolini Store - ' + province);
                $('input[name="province"]').removeClass('uncompiled');
                //$('button[name="create_and_redirect_to_theme"]').trigger('click');                
                
                $('input[name="name"]').focus();
                console.log('after 1st focus');
                $('input[name="name"]').trigger(spaceKeyEvent);
                console.log('should have space');
                $('input[name="domain"]').focus();
                console.log('after 2nd focus');
                $('input[name="domain"]').trigger(spaceKeyEvent);
                console.log('should have space');
            }
        },
        renderButtons: function($node) {
            console.log('renderbuttons');
            this._super.apply(this, arguments);
            if (this.$buttons) {
                this.$buttons.on('click', 'button[name="create_and_redirect_to_theme"]', this.onWebsiteCreate.bind(this));
                $('input[name="province"]').addClass('uncompiled');
                $('input[name="province"]').on('change', function(){
                    var province = $('input[name="province"]').val();
                    var uppercaseprov = province.charAt(0).toUpperCase() + province.slice(1);
                    var lowercaseprov = province.charAt(0).toLowerCase() + province.slice(1);
                    //var spaceKeyEvent = $.Event("keydown", { keyCode: 32 });
                    if (province) {
                        $('input[name="domain"]').val(province + '.s-store.net').change();
                        $('input[name="name"]').val('Scavolini Store ' + uppercaseprov).change();
                        $('input[name="province"]').removeClass('uncompiled');
                    }
                })
            }
        },
        onWebsiteCreate: function(event) {
        },
    });
});