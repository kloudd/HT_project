from django.conf.urls import patterns, include, url
from django.views.generic import RedirectView
# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'invent_manage.views.home', name='home'),
    # url(r'^invent_manage/', include('invent_manage.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^manager/', include('manager.urls')),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'^accounts/login/$', RedirectView.as_view(url='/admin/')),
)
