# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models, _

class Website(models.Model):
    _inherit = 'website'
    
    #province = fields.Many2one('res.country.state', string='Provincia', domain="[('country_id.code', '=', 'IT')]")
    province = fields.Char(string='Città')

    @api.model
    def create_website(self, values):
        if 'province' in values:
            subdomain = values['province'] + '.sstore.net'
            values['name'] = 'Scavolini Store - ' + values['province']
        return super(Website, self).create_website(values)