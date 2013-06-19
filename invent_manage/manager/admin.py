from django.contrib import admin
from manager.models import Poll

class PollAdmin(admin.ModelAdmin):
    fieldsets = [
    (None,	{'fields':['uid']}),
    (None,	{'fields':['asset_code']}),
    (None,	{'fields':['asset_category']}),
    (None,	{'fields':['state']}),
    (None,	{'fields':['hub']}),
    (None,	{'fields':['location']}),
    (None,	{'fields':['username']}),
    (None,	{'fields':['role']}),
    (None,	{'fields':['model_name']}),
    (None,	{'fields':['s_no']}),
    (None,	{'fields':['processor']}),
    (None,	{'fields':['hdd']}),
    (None,	{'fields':['ram']}),
    (None,	{'fields':['os']}),
    (None,	{'fields':['warr_amc']}),
    (None,	{'fields':['warr_vend']}),
    (None,	{'fields':['warr_start_date']}),
    (None,	{'fields':['warr_exp_date']}),
    (None,	{'fields':['company']}),
    (None,	{'fields':['po_details']}),
    ]
    list_display = ('uid', 'asset_code','asset_category','state','hub','location','username','role','model_name','s_no','processor','hdd','ram','os','warr_amc','warr_vend','warr_start_date','warr_exp_date','company','po_details')
    search_fields = ['username']

admin.site.register(Poll, PollAdmin)