# Create your views here.
from django.template import Context, loader
from django.core.urlresolvers import reverse
from manager.models import Poll, PollForm
from django.contrib import messages
from django.shortcuts import redirect
from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.utils import simplejson
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.http import HttpResponseRedirect
from datetime import datetime, date
import time
import json
import xlwt


from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required

@staff_member_required
def index(request):
	return render(request, 'manager/index2.html', locals())

@staff_member_required
def view(request):
	orderby = Poll.objects.order_by('id')
	return render(request, 'manager/view2.html', locals())

@staff_member_required
def add(request):
	form = PollForm()
	return render(request, 'manager/add2.html', locals())
# 	p = Poll(
# 		uid = 0
# 	    asset_code = "abc"
# 	    asset_category = "abc"
# 	    state = "abc"
# 	    hub = "abc"
# 	    location = "abc"
# 	    floor = "abc"
# 	    server = "abc"
# 	    empcode = "abc"
# 	    designation = "abc"
# 	    department = "abc"
# 	    username = "abc"
# 	    role = "abc"
# 	    model_name = "abc"
# 	    s_no = "abc"
# 	    processor = "abc"
# 	    hdd = "abc"
# 	    ram = "abc"
# 	    os = "abc"
# 	    warr_amc = "abc"
# 	    warr_vend = "abc"
# 	    warr_start_date = "abc"
# 	    warr_exp_date = "abc"
# 	    company = "abc"
# 	    po_details = "abc"
# )
@staff_member_required
def edit(request,id):
	obj = Poll.objects.get(id=id)
	if obj is not None:
		print "found object", obj
		return render(request, 'manager/edit2.html',locals())
	# placeholder error message
	print "did not find the obj"
	return render(request, 'manager/index2.html', locals())

@staff_member_required
def delete(request,id):
	obj = Poll.objects.get(id=id)
	if obj is not None:
		obj.delete()
		return HttpResponseRedirect("/manager/view/")
	# placeholder error message
	print "did not find the obj"
	return render(request, 'manager/index2.html', locals())

@staff_member_required
def handle_add(request):
	if request.method == 'POST':
		print request.POST
		uid = request.POST.get('uid')
		asset_code = request.POST.get('asset_code')
		asset_category = request.POST.get('asset_category')
		state = request.POST.get('state')
		hub = request.POST.get('hub')
		location = request.POST.get('location')
		floor = request.POST.get('floor')
		server = request.POST.get('server')
		empcode = request.POST.get('empcode')
		designation = request.POST.get('designation')
		department = request.POST.get('department')
		username = request.POST.get('username')
		role = request.POST.get('role')
		model_name = request.POST.get('model_name')
		s_no = request.POST.get('s_no')
		processor = request.POST.get('processor')
		hdd = request.POST.get('hdd')
		ram = request.POST.get('ram')
		os = request.POST.get('os')
		warr_amc = request.POST.get('warr_amc')
		warr_vend = request.POST.get('warr_vend')
		warr_start_date = request.POST.get('warr_start_date')
		warr_exp_date = request.POST.get('warr_exp_date')
		company = request.POST.get('company')
		po_details = request.POST.get('po_details')
		# if uid & asset_code && asset_category && state && hub && location && floor && server && empcode &&designation && department && username && role && model_name && s_no && processor && hdd && ram && os && warr_amc && warr_vend && warr_start_date && warr_exp_date && company && po_details :
		print uid
		p = Poll(uid=uid,
			asset_code = asset_code,
			asset_category = asset_category,
			state = state,
			hub = hub,
			location = location,
			floor = floor,
			server = server,
			empcode = empcode,
			designation = designation,
			department = department,
			username = username,
			role = role,
			model_name = model_name,
			s_no = s_no,
			processor = processor,
			hdd = hdd,
			ram = ram,
			os = os,
			warr_amc = warr_amc,
			warr_vend = warr_vend,
			warr_start_date = warr_start_date,
			warr_exp_date = warr_exp_date,
			company = company,
			po_details = po_details)
		p.save()
		print 'saving form'
		return HttpResponseRedirect("/manager/view/")
	# else:
		# return render(request, 'manager/notadded.html', locals())

	else:
		form = PollForm()
		return render(request, 'manager/add2.html', locals())

@staff_member_required
def contact_us(request):
	return render(request, 'manager/contact_us2.html', locals())

@csrf_exempt
def post_config(request):
	if request.method == 'POST':
		json_data = simplejson.loads(request.raw_post_data)
		print json_data
		try:
			flag = 0
			client_data = dict(json_data['client_data'])
			username = client_data['username']
			s_no = client_data['s_no']
			processor = client_data['processor']
			ram = client_data['ram']
			hdd = client_data['hdd']
			os = client_data['os']
			orderby = Poll.objects.order_by('id')
			if orderby:
				for poll in orderby:
					if poll.s_no==s_no:
						flag=1
						break
			p = Poll(uid='',
			asset_code = '',
			asset_category = '',
			state = '',
			hub = '',
			location = '',
			floor = '',
			server = '',
			empcode = '',
			designation = '',
			department = '',
			username = '',
			role = '',
			model_name = '',
			s_no = s_no,
			processor = processor,
			hdd = hdd,
			ram = ram,
			os = os,
			warr_amc = '',
			warr_vend = '',
			warr_start_date = '',
			warr_exp_date = '',
			company = '',
			po_details = '')
			if flag==0:
				p.save() 
		except KeyError:
			return HttpResponseServerError("Malformed Data, missing key")
		return HttpResponse(client_data, content_type="application/json", status=200)

	else:
		return HttpResponse("Only JSON post accepted", status=404)


@staff_member_required
def exp(request):
	book = xlwt.Workbook(encoding='utf8')
	sheet = book.add_sheet('untitled')

	default_style = xlwt.Style.default_style
	datetime_style = xlwt.easyxf(num_format_str='dd/mm/yyyy hh:mm')
	date_style = xlwt.easyxf(num_format_str='dd/mm/yyyy')

	values_list = Poll.objects.all().values_list()
	sheet.write(1,0,"ID",style=default_style)
	sheet.write(1,1,"UID",style=default_style)
	sheet.write(1,2,"ASSET CODE",style=default_style)
	sheet.write(1,3,"ASSET CATEGORY",style=default_style)
	sheet.write(1,4,"STATE",style=default_style)
	sheet.write(1,5,"HUB",style=default_style)
	sheet.write(1,6,"LOCATION",style=default_style)
	sheet.write(1,7,"FLOOR",style=default_style)
	sheet.write(1,8,"SERVER",style=default_style)
	sheet.write(1,9,"EMPCODE",style=default_style)
	sheet.write(1,10,"DESIGNATION",style=default_style)
	sheet.write(1,11,"DEPARTMENT",style=default_style)
	sheet.write(1,12,"USERNAME",style=default_style)
	sheet.write(1,13,"ROLE",style=default_style)
	sheet.write(1,14,"MODEL NAME",style=default_style)
	sheet.write(1,15,"S NO",style=default_style)
	sheet.write(1,16,"PROCESSOR",style=default_style)
	sheet.write(1,17,"HDD",style=default_style)
	sheet.write(1,18,"RAM",style=default_style)
	sheet.write(1,19,"OS",style=default_style)
	sheet.write(1,20,"WARR AMC",style=default_style)
	sheet.write(1,21,"WARR VEND",style=default_style)
	sheet.write(1,22,"WARR START DATE",style=default_style)
	sheet.write(1,23,"WARR EXP DATE",style=default_style)
	sheet.write(1,24,"COMPANY",style=default_style)
	sheet.write(1,25,"PO DETAILS",style=default_style)


	for row, rowdata in enumerate(values_list):
	    for col, val in enumerate(rowdata):
	        if isinstance(val, datetime):
	            style = datetime_style
	        elif isinstance(val, date):
	            style = date_style
	        else:
	            style = default_style

	        sheet.write(row+2, col, val, style=style)

	response = HttpResponse(mimetype='application/vnd.ms-excel')
	response['Content-Disposition'] = 'attachment; filename=example.xls'
	book.save(response)
	return response

@staff_member_required
def logout(request):
	return HttpResponseRedirect("/admin/logout/")

@staff_member_required
def adminpage(request):
	return HttpResponseRedirect("/admin/")

staff_member_required
def handle_edit(request):
	if request.method == 'POST':
		print request.POST
		id = request.POST.get('id')
		uid = request.POST.get('uid')
		asset_code = request.POST.get('asset_code')
		asset_category = request.POST.get('asset_category')
		state = request.POST.get('state')
		hub = request.POST.get('hub')
		location = request.POST.get('location')
		floor = request.POST.get('floor')
		server = request.POST.get('server')
		empcode = request.POST.get('empcode')
		designation = request.POST.get('designation')
		department = request.POST.get('department')
		username = request.POST.get('username')
		role = request.POST.get('role')
		model_name = request.POST.get('model_name')
		s_no = request.POST.get('s_no')
		processor = request.POST.get('processor')
		hdd = request.POST.get('hdd')
		ram = request.POST.get('ram')
		os = request.POST.get('os')
		warr_amc = request.POST.get('warr_amc')
		warr_vend = request.POST.get('warr_vend')
		warr_start_date = request.POST.get('warr_start_date')
		warr_exp_date = request.POST.get('warr_exp_date')
		company = request.POST.get('company')
		po_details = request.POST.get('po_details')
		# if uid & asset_code && asset_category && state && hub && location && floor && server && empcode &&designation && department && username && role && model_name && s_no && processor && hdd && ram && os && warr_amc && warr_vend && warr_start_date && warr_exp_date && company && po_details :
		print uid
		obj = Poll.objects.get(id=id)
		if obj is not None:
			obj.uid=uid
			obj.asset_code = asset_code
			obj.asset_category = asset_category
			obj.state = state
			obj.hub = hub
			obj.location = location
			obj.floor = floor
			obj.server = server
			obj.empcode = empcode
			obj.designation = designation
			obj.department = department
			obj.username = username
			obj.role = role
			obj.model_name = model_name
			obj.s_no = s_no
			obj.processor = processor
			obj.hdd = hdd
			obj.ram = ram
			obj.os = os
			obj.warr_amc = warr_amc
			obj.warr_vend = warr_vend
			obj.warr_start_date = warr_start_date
			obj.warr_exp_date = warr_exp_date
			obj.company = company
			obj.po_details = po_details
			obj.save()
		return HttpResponseRedirect("/manager/view/")
	else:
		form = PollForm()
		return render(request, 'manager/add2.html', locals())