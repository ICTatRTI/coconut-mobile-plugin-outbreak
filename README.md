# coconut-mobile-plugin-zanzibar
Plugins added to Coconut Mobile for project specific features

Coconut Mobile provides the core features for a Coconut based project. Additional features required by a project are added by a plugin. Find the README file in the _attachments directory for deployment instructions.

What this plugin provides
-------------------------

TODO

Coconut Mobile Plugin Architecture Described
--------------------------------------------

Coconut plugins are couchdb design documents that get packaged into a single js file (perhaps a single css file as well) and then pushed into the couchdb database for that project. For instance the cloud instance for the project "atlantis-ebola" might be found at http://cococloud.co/atlantis-ebola. The plugin should then exist at http://cococloud.co/atlantis-ebola/_design/coconut-mobile-plugin-atlantis-ebola. Then during installation or updating of the project "atlantis-ebola" on http://mobile.cococloud.co, the plugin file(s) will be replicated and eval'd during application initiation.
