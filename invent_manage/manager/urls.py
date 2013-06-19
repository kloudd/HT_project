from django.conf.urls import patterns, url

from manager import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^view/$', views.view, name='view'),
    url(r'^add/$', views.add, name='add'),
    url(r'^contact_us/$', views.contact_us, name='contact_us'),
    url(r'^handle_add/$', views.handle_add, name='handle_add'),
    url(r'^view/edit/(?P<id>\d+)/$', views.edit, name='edit'),
    url(r'^view/delete/(?P<id>\d+)/$', views.delete, name='delete'),
    url(r'api/post_data', views.post_config),
    url(r'^exp/$', views.exp, name='exp'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^adminpage/$', views.adminpage, name='adminpage'),
    url(r'^handle_edit/$', views.handle_edit, name='handle_edit'),
)