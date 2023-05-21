from odoo import models, fields, api

class Website(models.Model):
    _inherit = 'website'

    province = fields.Selection([
        ('jesi', 'Jesi'),
        ('taranto', 'Taranto'),
        ('pescara', 'Pescara'),
        ('pesaro', 'Pesaro'),
    ], string='Province')

    @api.model
    def create_website(self, values):
        if 'province' in values:
            subdomain = values['province'] + '.scavolinistore.net'
            values['name'] = subdomain
        return super(Website, self).create_website(values)