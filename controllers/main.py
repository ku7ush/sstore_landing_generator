from odoo import http

class WebsiteMain(http.Controller):
    @http.route('/grazie', type='http', auth='public', website=True)
    def grazie(self):
        return http.request.render('sstore_landing_generator.website_grazie_template')