odoo.define('my_module.website_province_form', function(require) {
    'use strict';

    var core = require('web.core');
    var form_common = require('web.form_common');
    var _t = core._t;

    form_common.FormWidget.include({
        initialize_content: function() {
            this._super();
            if (this.view_type === 'form' && this.$buttons) {
                this.$buttons.on('click', '.o_website_create', this.on_website_create);
            }
        },

        on_website_create: function() {
            var province = $('select[name="province"]').val();
            if (province) {
                $('input[name="name"]').val(province + '.scavolinistore.net').prop('disabled', true);
            }
        },
    });
});