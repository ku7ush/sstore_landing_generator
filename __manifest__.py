{
    'name': 'SStore Landing Generator',
    'version': '1.0',
    'category': 'Website',
    'summary': 'Genera landings personalizzate in base alla provincia selezionata',
    'description': 'Aggiunge un selettore di provincia alla creazione website per generare landings personalizzate',
    'author': 'Apuliasoftware',
    'depends': ['base','website'],
    'data': [
        'views/website_templates.xml',
        'views/backend_templates.xml',
        'views/assets.xml'
    ],
    'js': [
        'static/src/js/generator.js'
    ],
    'application': False,
    'auto_install': False,
    'installable': True,
}