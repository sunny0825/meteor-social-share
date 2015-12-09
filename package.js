Package.describe({
	name: 'ls3271:meteor-social-share',
	version: '0.0.1',
	summary: 'jQuery plugin that generates simple, light, flexible, and good-looking share button',
	git: 'https://github.com/sunny0825/meteor-social-share.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.addFiles('lib/share-button.min.js');
	api.addFiles('lib/share-button.min.css');
});
