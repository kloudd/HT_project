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
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required



import re

from django.db.models import Q

def normalize_query(query_string,
                    findterms=re.compile(r'"([^"]+)"|(\S+)').findall,
                    normspace=re.compile(r'\s{2,}').sub):
    ''' Splits the query string in invidual keywords, getting rid of unecessary spaces
        and grouping quoted words together.
        Example:
        
        >>> normalize_query('  some random  words "with   quotes  " and   spaces')
        ['some', 'random', 'words', 'with quotes', 'and', 'spaces']
    
    '''
    return [normspace(' ', (t[0] or t[1]).strip()) for t in findterms(query_string)] 

def get_query(query_string, search_fields):
    ''' Returns a query, that is a combination of Q objects. That combination
        aims to search keywords within a model by testing the given search fields.
    
    '''
    query = None # Query to search for every search term        
    terms = normalize_query(query_string)
    for term in terms:
        or_query = None # Query to search for a given term in each field
        for field_name in search_fields:
            q = Q(**{"%s__icontains" % field_name:term})
            if or_query is None:
                or_query = q
            else:
                or_query = or_query | q
        if query is None:
            query = or_query
        else:
            query = query & or_query
    return query

def search(request):
    query_string = ''
    found_entries = None
    if ('q' in request.GET) and request.GET['q'].strip():
        query_string = request.GET['q']
        
        entry_query = get_query(query_string, ['asset_code', 'username','s_no',])

        found_entries = Poll.objects.filter(entry_query)
    else:
    	found_entries = Poll.objects.order_by('id')



    return render_to_response('manager/view2.html',
                          { 'query_string': query_string, 'found_entries': found_entries },
                          context_instance=RequestContext(request))

@staff_member_required
def index2(request):
	return render(request, 'manager/index2.html', locals())

@staff_member_required
def view(request):
	orderby = Poll.objects.order_by('id')
	return render(request, 'manager/view2.html', locals())

#online add


# @staff_member_required
# def add(request):
# 	form = PollForm()
# 	return render(request, 'manager/add2.html', locals())
#
#
# 	p = Poll(
# 		uid = 0
# 	    asset_code = "abc"
# 	    asset_category = "abc"
# 	    region = "abc"
# 	    unit = "abc"
# 	    location = "abc"
# 	    floor = "abc"
# 	    username = "abc"
# 	    empcode = "abc"
# 	    designation = "abc"
# 	    department = "abc"
# 	    machinename = "abc"
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

#handle add

# @staff_member_required
# def handle_add(request):
# 	if request.method == 'POST':
# 		print request.POST
# 		uid = request.POST.get('uid')
# 		asset_code = request.POST.get('asset_code')
# 		asset_category = request.POST.get('asset_category')
# 		region = request.POST.get('region')
# 		unit = request.POST.get('unit')
# 		location = request.POST.get('location')
# 		floor = request.POST.get('floor')
# 		username = request.POST.get('username')
# 		empcode = request.POST.get('empcode')
# 		designation = request.POST.get('designation')
# 		department = request.POST.get('department')
# 		machinename = request.POST.get('machinename')
# 		role = request.POST.get('role')
# 		model_name = request.POST.get('model_name')
# 		s_no = request.POST.get('s_no')
# 		processor = request.POST.get('processor')
# 		hdd = request.POST.get('hdd')
# 		ram = request.POST.get('ram')
# 		os = request.POST.get('os')
# 		warr_amc = request.POST.get('warr_amc')
# 		warr_vend = request.POST.get('warr_vend')
# 		warr_start_date = request.POST.get('warr_start_date')
# 		warr_exp_date = request.POST.get('warr_exp_date')
# 		company = request.POST.get('company')
# 		po_details = request.POST.get('po_details')
# 		ram_change_date = datetime.now()
# 		hdd_change_date = datetime.now()
# 		working = 1
# 		# if uid & asset_code && asset_category && region && unit && location && floor && username && empcode &&designation && department && machinename && role && model_name && s_no && processor && hdd && ram && os && warr_amc && warr_vend && warr_start_date && warr_exp_date && company && po_details :
# 		flag=0
# 		if department=="" or role=="" or model_name=="" or asset_category=="" :
# 			flag=1

# 		orderby = Poll.objects.order_by('id')
# 		if orderby:
# 			for poll in orderby:
# 				if s_no==poll.s_no and s_no:
# 					flag=1
# 					print "alreadyinuse"
# 					return render(request, 'manager/inuse.html', locals())

# 		print uid
# 		p = Poll(uid=uid,
# 			asset_code = asset_code,
# 			asset_category = asset_category,
# 			region = region,
# 			unit = unit,
# 			location = location,
# 			floor = floor,
# 			username = username,
# 			empcode = empcode,
# 			designation = designation,
# 			department = department,
# 			machinename = machinename,
# 			role = role,
# 			model_name = model_name,
# 			s_no = s_no,
# 			processor = processor,
# 			hdd = hdd,
# 			ram = ram,
# 			os = os,
# 			warr_amc = warr_amc,
# 			warr_vend = warr_vend,
# 			warr_start_date = warr_start_date,
# 			warr_exp_date = warr_exp_date,
# 			company = company,
# 			po_details = po_details,
# 			working = working,
# 			ram_change_date = ram_change_date,
# 			hdd_change_date = hdd_change_date)
# 		if flag==0:
# 			p.save()
		
# 		print 'saving form'
# 		return HttpResponseRedirect("/manager/view/")
# 	# else:
# 		# return render(request, 'manager/notadded.html', locals())

# 	else:
# 		form = PollForm()
# 		return render(request, 'manager/add2.html', locals())

@staff_member_required
def contact_us(request):
	orderby = Poll.objects.order_by('id')
	count_working = 0
	count_not_working = 0
	total = 0
	if orderby:
		for poll in orderby:
			if poll.working == 1:
				count_working=count_working+1
				total = total + 1
			if poll.working == 0:
				count_not_working=count_not_working+1
				total = total + 1
	return render(request, 'manager/contact_us2.html', locals())

@csrf_exempt
def post_config(request):
	if request.method == 'POST':
		json_data = simplejson.loads(request.raw_post_data)
		print json_data
		try:
			flag = 0
			client_data = dict(json_data['client_data'])
			machinename = client_data['machinename']
			s_no = client_data['s_no']
			processor = client_data['processor']
			ram = client_data['ram']
			hdd = client_data['hdd']
			os = client_data['os']
			ram_change_date = datetime.now()
			hdd_change_date = datetime.now()
			orderby = Poll.objects.order_by('id')
			if orderby:
				for poll in orderby:
					if poll.s_no==s_no:
						poll.working = 1
						poll.machinename = machinename
						poll.processor = processor
						if poll.ram != ram:
							poll.ram_change_date = ram_change_date
						if poll.hdd != hdd:
							poll.hdd_change_date = hdd_change_date
						poll.ram = ram
						poll.hdd = hdd
						poll.os = os
						poll.save()
						flag=1
						break
			working = 1
			p = Poll(uid='',
			asset_code = '',
			asset_category = '',
			region = '',
			unit = '',
			location = '',
			floor = '',
			username = '',
			empcode = '',
			designation = '',
			department = '',
			machinename = machinename,
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
			po_details = '',
			working = working,
			ram_change_date = ram_change_date,
			hdd_change_date = hdd_change_date,
			required_power = None,
			actual_power = None,
			user_critical = None,
			weight_user = None,
			faliure_rate = None,
			weight_faliure = None,
			agency = None,
			weight_age = None,
			power_gap_rating = None,
			weight_computer = None,
			risk_index = None,
			)
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

	orderby = Poll.objects.order_by('id')
	sheet.write(1,0,"ID",style=default_style)
	sheet.write(1,1,"UID",style=default_style)
	sheet.write(1,2,"ASSET CODE",style=default_style)
	sheet.write(1,3,"ASSET CATEGORY",style=default_style)
	sheet.write(1,4,"region",style=default_style)
	sheet.write(1,5,"unit",style=default_style)
	sheet.write(1,6,"LOCATION",style=default_style)
	sheet.write(1,7,"FLOOR",style=default_style)
	sheet.write(1,8,"username",style=default_style)
	sheet.write(1,9,"EMPCODE",style=default_style)
	sheet.write(1,10,"DESIGNATION",style=default_style)
	sheet.write(1,11,"DEPARTMENT",style=default_style)
	sheet.write(1,12,"MACHINE NAME",style=default_style)
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
	sheet.write(1,26,"REQUIRED POWER",style=default_style)
	sheet.write(1,27,"ACTUAL POWER",style=default_style)
	sheet.write(1,28,"USER CRITICAL",style=default_style)
	sheet.write(1,29,"WEIGHT USER",style=default_style)
	sheet.write(1,30,"FALIURE RATE",style=default_style)
	sheet.write(1,31,"WEIGHT FALIURE",style=default_style)
	sheet.write(1,32,"AGENCY",style=default_style)
	sheet.write(1,33,"WEIGHT AGE",style=default_style)
	sheet.write(1,34,"POWER GAP RATING",style=default_style)
	sheet.write(1,35,"WEIGHT  COMPUTER",style=default_style)
	sheet.write(1,36,"RISK INDEX",style=default_style)
	sheet.write(1,37,"WORKING",style=default_style)

	if orderby:
		row=0
		for poll in orderby:
			
			if poll.working == 1:
				style = default_style
				sheet.write(row+2, 0, poll.id, style=style)
				sheet.write(row+2, 1, poll.uid, style=style)
				sheet.write(row+2, 2, poll.asset_code, style=style)
				sheet.write(row+2, 3, poll.asset_category, style=style)
				sheet.write(row+2, 4, poll.region, style=style)
				sheet.write(row+2, 5, poll.unit, style=style)
				sheet.write(row+2, 6, poll.location, style=style)
				sheet.write(row+2, 7, poll.floor, style=style)
				sheet.write(row+2, 8, poll.username, style=style)
				sheet.write(row+2, 9, poll.empcode, style=style)
				sheet.write(row+2, 10, poll.designation, style=style)
				sheet.write(row+2, 11, poll.department, style=style)
				sheet.write(row+2, 12, poll.machinename, style=style)
				sheet.write(row+2, 13, poll.role, style=style)
				sheet.write(row+2, 14, poll.model_name, style=style)
				sheet.write(row+2, 15, poll.s_no, style=style)
				sheet.write(row+2, 16, poll.processor, style=style)
				sheet.write(row+2, 17, poll.hdd, style=style)
				sheet.write(row+2, 18, poll.ram, style=style)
				sheet.write(row+2, 19, poll.os, style=style)
				sheet.write(row+2, 20, poll.warr_amc, style=style)
				sheet.write(row+2, 21, poll.warr_vend, style=style)
				sheet.write(row+2, 22, poll.warr_start_date, style=style)
				sheet.write(row+2, 23, poll.warr_exp_date, style=style)
				sheet.write(row+2, 24, poll.company, style=style)
				sheet.write(row+2, 25, poll.po_details, style=style)
				sheet.write(row+2, 26, poll.required_power, style=style)
				sheet.write(row+2, 27, poll.actual_power, style=style)
				sheet.write(row+2, 28, poll.user_critical, style=style)
				sheet.write(row+2, 29, poll.weight_user, style=style)
				sheet.write(row+2, 30, poll.faliure_rate, style=style)
				sheet.write(row+2, 31, poll.weight_faliure, style=style)
				sheet.write(row+2, 32, poll.agency, style=style)
				sheet.write(row+2, 33, poll.weight_age, style=style)
				sheet.write(row+2, 34, poll.power_gap_rating, style=style)
				sheet.write(row+2, 35, poll.weight_computer, style=style)
				sheet.write(row+2, 36, poll.risk_index, style=style)
				sheet.write(row+2, 37, poll.working, style=style)
				row = row+1




				

	# for row, rowdata in enumerate(values_list):
	#     for col, val in enumerate(rowdata):
	#         if isinstance(val, datetime):
	#             style = datetime_style
	#         elif isinstance(val, date):
	#             style = date_style
	#         else:
	#             style = default_style

	#         sheet.write(row+2, col, val, style=style)

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
		region = request.POST.get('region')
		unit = request.POST.get('unit')
		location = request.POST.get('location')
		floor = request.POST.get('floor')
		username = request.POST.get('username')
		empcode = request.POST.get('empcode')
		designation = request.POST.get('designation')
		department = request.POST.get('department')
		machinename = request.POST.get('machinename')
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
		required_power = None
		actual_power = None
		user_critical = None
		weight_user = 2
		faliure_rate = None
		weight_faliure = 4
		agency = None
		weight_age = 3
		power_gap_rating = None
		weight_computer = 1
		risk_index = None
		if role == 'DESIGNER':
			required_power = 7
			user_critical = 3

		elif role == 'DESK':
			required_power = 5
			user_critical = 3

		elif role == 'REPORTING':
			required_power = 1
			user_critical = 2

		elif role == 'PHOTO SECTION':
			required_power = 3
			user_critical = 2

		elif role == 'CREATIVE':
			required_power = 5
			user_critical = 3

		elif role == 'MIS':
			required_power = 3
			user_critical = 2

		elif role == 'MARKETING':
			required_power = 3
			user_critical = 3

		elif role == 'FEILD':
			required_power = 3
			user_critical = 3

		elif role == 'AD OPS-MM':
			required_power = 3
			user_critical = 3

		elif role == 'COMMERCIAL':
			required_power = 2
			user_critical = 2

		elif role == 'CIRCULATION':
			required_power = 2
			user_critical = 2

		elif role == 'FINANCE':
			required_power = 2
			user_critical = 2

		elif role == 'HR':
			required_power = 2
			user_critical = 2

		elif role == 'IT':
			required_power = 2
			user_critical = 2

		elif role == 'LT':
			required_power = 3
			user_critical = 3

		elif role == 'MINT':
			required_power = 3
			user_critical = 3

		elif role == 'OTHERS':
			required_power = 1
			user_critical = 1

		elif role == 'SUPPLY CHAIN':
			required_power = 2
			user_critical = 1

		elif role == 'PREE PRES':
			required_power = 3
			user_critical = 3

		elif role == 'MARKETING':
			required_power = 3
			user_critical = 2

		elif role == 'ADMIN':
			required_power = 1
			user_critical = 1

		elif role == 'SALES':
			required_power = 1
			user_critical = 2

		elif role == 'SALE BACKEND':
			required_power = 3
			user_critical = 2

		elif role == 'AD OPS':
			required_power = 2
			user_critical = 2

		elif role == 'IT STOCK - WORKING':
			required_power = 0
			user_critical = 0

		elif role == 'IT STOCK - JUNK':
			required_power = 0
			user_critical = 0

		elif role == 'IT STOCK - REPAIR':
			required_power = 0
			user_critical = 0

		elif role == 'SYNDICATION':
			required_power = 2
			user_critical = 3

		elif role == 'CALL CENTER':
			required_power = 2
			user_critical = 2

		else:
			required_power = None
			user_critical = None

		if model_name == 'Dell OptiPlex 380DT':
			actual_power = 2
			faliure_rate = 1
			agency = 1

		elif model_name == 'Dell D630':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell E5420':
			actual_power = 3
			faliure_rate = 1
			agency = 1

		elif model_name == 'Dell Vostro 1014':
			actual_power = 2
			faliure_rate = 2
			agency = 1

		elif model_name == 'Dell OptiPlex GX520':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Dell D620':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Optiplex GX 260':
			actual_power = 0
			faliure_rate = 2
			agency = 3

		elif model_name == 'Dell Optiplex GX320':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Dell D520':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Optiplex GX330':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Dell  Vostro 1450':
			actual_power = 2
			faliure_rate = 1
			agency = 1

		elif model_name == 'Dell Precision 370':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell D610':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell E6220':
			actual_power = 3
			faliure_rate = 0
			agency = 1

		elif model_name == 'Dell Precision T3400':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'Dell Precision M90':
			actual_power = 1
			faliure_rate = 2
			agency = 2

		elif model_name == 'HCL Infinite Pro 2000':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Vestro 1200':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'DHS':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'HCL Infinity ':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Optiplex 390':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell D430':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Optiplex GX960':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Optiplex 790':
			actual_power = 0
			faliure_rate = 3
			agency = 1

		elif model_name == 'HCL Infiniti Pro':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell D600':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell E6320':
			actual_power = 0
			faliure_rate = 3
			agency = 1

		elif model_name == 'Dell Optiplex GX745':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'WIPRO SUPER GENIUS':
			actual_power = -1
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Optiplex GX 280':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Poweredge 2950':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Optiplex D560':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Poweredge 1900':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Optiplex GX 350':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Precision 5130':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Workstation XW 4300':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell D630':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Dell Precision 450':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM R 52':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM R 60':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8124':
			actual_power = 1
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM Think Center':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM Netvista':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8175':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8193':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8187':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM R 50':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8305':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8326':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8296':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Fujitsu DT5-D1844':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8297':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8303':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8309':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 6792':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8188':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 9637':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8985':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 1875':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8215':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8123':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 9143':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8305':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'NEC Powermate':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8171':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 6417':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8326':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 9389':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8702':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'IBM 8035':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8177':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 9481':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8191':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'IBM 8126':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8172':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8327':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8376':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8127':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8139':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8309':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8142':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'IBM 8307':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Lenovo M3156':
			actual_power = 3
			faliure_rate = 0
			agency = 1

		elif model_name == 'Lenovo 9481':
			actual_power = 1
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo M6417':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo Think Center':
			actual_power = 0
			faliure_rate = 2
			agency = 3

		elif model_name == 'Lenovo 2048':
			actual_power = 1
			faliure_rate = 3
			agency =2

		elif model_name == 'Lenovo M8985':
			actual_power = 0
			faliure_rate = 3
			agency = 2

		elif model_name == 'Lenovo 4089':
			actual_power = 0
			faliure_rate = 2
			agency = 1

		elif model_name == 'Lenovo Ideapad S100':
			actual_power = 1
			faliure_rate = 1
			agency = 1

		elif model_name == 'Lenovo M9143':
			actual_power = 3
			faliure_rate = 0
			agency = 2

		elif model_name == 'Lenovo 9637':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 9389':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'lenovo 20109':
			actual_power = 0
			faliure_rate = 2
			agency = 1

		elif model_name == 'Lenovo M3156':
			actual_power = 3
			faliure_rate = 0
			agency = 1

		elif model_name == 'Lenovo 2931':
			actual_power = 0
			faliure_rate = 2
			agency = 1

		elif model_name == 'Lenovo 8124':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Powermate':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'Lenovo 8389':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 8297':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 9491':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 6792':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 9384':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 9989':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'Lenovo 8171':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP Compaq DX 2280 MT':
			actual_power = 1
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP Compaq DX 2480 MT':
			actual_power = 1
			faliure_rate = 2
			agency = 2

		elif model_name == 'Compaq EVO':
			actual_power = -1
			faliure_rate = 3
			agency = 3

		elif model_name == 'HP - P 3090':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP Workstation Z400':
			actual_power = 1
			faliure_rate = 1
			agency = 1

		elif model_name == 'HP Workstation XW 4600':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP DC 7600':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP - D7900':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP ProLiant ML110 G6':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation XW 6200':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation XW 4300':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation Z600':
			actual_power = 1
			faliure_rate = 1
			agency = 1

		elif model_name == 'HP DC 7100':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation XW 4400':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation 7700':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation XW 6600':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP DC 7900':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP Workstation Z60':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'G 41':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP Compaq 2210b':
			actual_power = 1
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP Workstation XW 3000':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP 2305':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP Workstation XW 4200':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'HP 8200':
			actual_power = 0
			faliure_rate = 2
			agency = 2

		elif model_name == 'HP P1505N':
			actual_power = 5
			faliure_rate = 0
			agency = 2

		elif model_name == 'HP PRECISION 390':
			actual_power = 1
			faliure_rate = 1
			agency = 1

		elif model_name == 'Toshiba PS214L':
			actual_power = -2
			faliure_rate = 0
			agency = 3

		elif model_name == 'Fujitsu DT5-D1844':
			actual_power = -2
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell D400':
			actual_power = -1
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell D420':
			actual_power = -1
			faliure_rate = 3
			agency = 3

		elif model_name == 'Fujitsu Esprimo V6535':
			actual_power = 1
			faliure_rate = 3
			agency = 1

		elif model_name == 'Esprimo Mobile V6535':
			actual_power = 1
			faliure_rate = 3
			agency = 1

		elif model_name == 'Dell D410':
			actual_power = -1
			faliure_rate = 3
			agency = 3

		elif model_name == 'MAC BOOK':
			actual_power = 5
			faliure_rate = 0
			agency = 2

		elif model_name == 'IMAC':
			actual_power = 5
			faliure_rate = 0
			agency = 1

		elif model_name == 'APPLE':
			actual_power = 5
			faliure_rate = 0
			agency = 1

		elif model_name == 'Dell Studio XPS 1640':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'MAC Airbook':
			actual_power = 5
			faliure_rate = 0
			agency = 1

		elif model_name == 'Dell Optiplex 160L':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Dell Lattitude X1':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'ASSEMBLED':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'HP 520':
			actual_power = 0
			faliure_rate = 2
			agency = 3

		elif model_name == 'ASSEMBLED':
			actual_power = 0
			faliure_rate = 3
			agency = 3

		elif model_name == 'Sony Vaio':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'Sony VGN-TZ17GN':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'Sony S2VGN':
			actual_power = 3
			faliure_rate = 0
			agency = 2

		elif model_name == 'Power Mac G3 Series':
			actual_power = 0
			faliure_rate = 2
			agency = 3

		elif model_name == 'Asus R051px':
			actual_power = 2
			faliure_rate = 0
			agency = 3

		elif model_name == 'Bloomberg D530':
			actual_power = 1
			faliure_rate = 1
			agency = 2

		elif model_name == 'Lenovo L430':
			actual_power = 5
			faliure_rate = 0
			agency = 1

		elif model_name == 'Dell Optiplex 980':
			actual_power = 3
			faliure_rate = 0
			agency = 1

		elif model_name == 'IBM 2621':
			actual_power = 0
			faliure_rate = 5
			agency = 5

		elif model_name == 'Dell Optiplex 3010DT':
			actual_power = 5
			faliure_rate = 0
			agency = 1

		elif model_name == 'Lenovo IdeaPad S10-3C':
			actual_power = 1
			faliure_rate = 1
			agency = 1

		else:
			actual_power = None
			faliure_rate = None
			agency = None

		if required_power and actual_power:
			power_gap_rating = required_power - actual_power

		# if user_critical and weight_user and faliure_rate and weight_faliure and agency and weight_age and over
		
		# getpower(role, model_name, required_power, actual_power, user_critical, faliure_rate, agency, power_gap_rating, risk_index)

		working = request.POST.get('working')
		# if uid & asset_code && asset_category && region && unit && location && floor && username && empcode &&designation && department && machinename && role && model_name && s_no && processor && hdd && ram && os && warr_amc && warr_vend && warr_start_date && warr_exp_date && company && po_details :
		print uid

		obj = Poll.objects.get(id=id)
		if obj is not None:
			obj.uid=uid
			obj.asset_code = asset_code
			obj.asset_category = asset_category
			obj.region = region
			obj.unit = unit
			obj.location = location
			obj.floor = floor
			obj.username = username
			obj.empcode = empcode
			obj.designation = designation
			obj.department = department
			obj.machinename = machinename
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
			obj.required_power = required_power
			obj.actual_power = actual_power
			obj.user_critical = user_critical
			obj.weight_user = weight_user
			obj.faliure_rate = faliure_rate
			obj.weight_faliure = weight_faliure
			obj.agency = agency
			obj.weight_age = weight_age
			obj.power_gap_rating = power_gap_rating
			obj.weight_computer = weight_computer
			obj.risk_index = risk_index
			obj.working = working
			obj.save()
		return HttpResponseRedirect("/manager/view/")
	else:
		form = PollForm()
		return render(request, 'manager/add2.html', locals())

@staff_member_required
def add_offline_stock(request):
	form = PollForm()
	return render(request, 'manager/addofflinestock.html', locals())

@staff_member_required
def view_offline_stock(request):
	orderby = Poll.objects.order_by('id')
	return render(request, 'manager/viewofflinestock.html', locals())

@staff_member_required
def handle_offline_add(request):
	if request.method == 'POST':
		print request.POST
		model_name = request.POST.get('model_name')
		s_no = request.POST.get('s_no')
		processor = request.POST.get('processor')
		hdd = request.POST.get('hdd')
		ram = request.POST.get('ram')
		os = request.POST.get('os')
		asset_code = request.POST.get('asset_code')
		working = 0
		hdd_change_date = datetime.now()
		ram_change_date = datetime.now()
		flag = 0
		if model_name=="" or s_no=="" or processor=="" or hdd=="" or ram=="" or os=="":
			flag=1
		orderby = Poll.objects.order_by('id')
		if orderby:
			for poll in orderby:
				if s_no==poll.s_no and s_no:
					flag=1
					print "alreadyinuse"
					return render(request, 'manager/inuse.html', locals())
		p = Poll(uid='',
			asset_code = asset_code,
			asset_category = '',
			region = '',
			unit = '',
			location = '',
			floor = '',
			username = '',
			empcode = '',
			designation = '',
			department = '',
			machinename = '',
			role = '',
			model_name = model_name,
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
			po_details = '',
			working = working,
			ram_change_date = ram_change_date,
			hdd_change_date = hdd_change_date,
			required_power = None,
			actual_power = None,
			user_critical = None,
			weight_user = None,
			faliure_rate = None,
			weight_faliure = None,
			agency = None,
			weight_age = None,
			power_gap_rating = None,
			weight_computer = None,
			risk_index = None,)
		if flag == 0:
			p.save();
		print 'saving form'
		return HttpResponseRedirect("/manager/view_offline_stock/")
	# else:
		# return render(request, 'manager/notadded.html', locals())

	else:
		form = PollForm()
		return render(request, 'manager/addofflinestock.html', locals())


@staff_member_required
def handle_offline_edit(request):
	if request.method == 'POST':
		print request.POST
		id = request.POST.get('id')
		model_name = request.POST.get('model_name')
		s_no = request.POST.get('s_no')
		processor = request.POST.get('processor')
		hdd = request.POST.get('hdd')
		ram = request.POST.get('ram')
		os = request.POST.get('os')
		working = request.POST.get('working')
		obj = Poll.objects.get(id=id)
		if obj is not None:
			obj.uid=""
			obj.asset_code = ""
			obj.asset_category = ""
			obj.region = ""
			obj.unit = ""
			obj.location = ""
			obj.floor = ""
			obj.username = ""
			obj.empcode = ""
			obj.designation = ""
			obj.department = ""
			obj.machinename = ""
			obj.role = ""


			obj.model_name=model_name
			obj.s_no = s_no
			obj.processor = processor
			obj.hdd = hdd
			obj.ram = ram
			obj.os = os
			obj.working = working

			obj.warr_amc = ""
			obj.warr_vend = ""
			obj.warr_start_date = ""
			obj.warr_exp_date = ""
			obj.company = ""
			obj.po_details = ""

			obj.required_power = None
			obj.actual_power = None
			obj.user_critical = None
			obj.weight_user = None
			obj.faliure_rate = None
			obj.weight_faliure = None
			obj.agency = None
			obj.weight_age = None
			obj.power_gap_rating = None
			obj.weight_computer = None
			obj.risk_index = None


			obj.save()
			return HttpResponseRedirect("/manager/view_offline_stock/")
	else:
		form = PollForm()
		return render(request, 'manager/add2.html', locals())

@staff_member_required
def editoffline(request,id):
	obj = Poll.objects.get(id=id)
	if obj is not None:
		print "found object", obj
		return render(request, 'manager/editoffline.html',locals())
	# placeholder error message
	print "did not find the obj"
	return render(request, 'manager/index2.html', locals())


@staff_member_required
def deleteoffline(request,id):
	obj = Poll.objects.get(id=id)
	if obj is not None:
		obj.delete()
		return HttpResponseRedirect("/manager/view_offline_stock/")
	# placeholder error message
	print "did not find the obj"
	return render(request, 'manager/index2.html', locals())

@staff_member_required
def expoffline(request):
	book = xlwt.Workbook(encoding='utf8')
	sheet = book.add_sheet('untitled')

	default_style = xlwt.Style.default_style
	datetime_style = xlwt.easyxf(num_format_str='dd/mm/yyyy hh:mm')
	date_style = xlwt.easyxf(num_format_str='dd/mm/yyyy')

	orderby = Poll.objects.order_by('id')
	sheet.write(1,0,"ID",style=default_style)
	sheet.write(1,1,"UID",style=default_style)
	sheet.write(1,2,"ASSET CODE",style=default_style)
	sheet.write(1,3,"ASSET CATEGORY",style=default_style)
	sheet.write(1,4,"region",style=default_style)
	sheet.write(1,5,"unit",style=default_style)
	sheet.write(1,6,"LOCATION",style=default_style)
	sheet.write(1,7,"FLOOR",style=default_style)
	sheet.write(1,8,"username",style=default_style)
	sheet.write(1,9,"EMPCODE",style=default_style)
	sheet.write(1,10,"DESIGNATION",style=default_style)
	sheet.write(1,11,"DEPARTMENT",style=default_style)
	sheet.write(1,12,"MACHINE NAME",style=default_style)
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
	sheet.write(1,26,"WORKING",style=default_style)

	if orderby:
		row=0
		for poll in orderby:
			
			if poll.working == 0:
				style = default_style
				sheet.write(row+2, 0, poll.id, style=style)
				sheet.write(row+2, 1, poll.uid, style=style)
				sheet.write(row+2, 2, poll.asset_code, style=style)
				sheet.write(row+2, 3, poll.asset_category, style=style)
				sheet.write(row+2, 4, poll.region, style=style)
				sheet.write(row+2, 5, poll.unit, style=style)
				sheet.write(row+2, 6, poll.location, style=style)
				sheet.write(row+2, 7, poll.floor, style=style)
				sheet.write(row+2, 8, poll.username, style=style)
				sheet.write(row+2, 9, poll.empcode, style=style)
				sheet.write(row+2, 10, poll.designation, style=style)
				sheet.write(row+2, 11, poll.department, style=style)
				sheet.write(row+2, 12, poll.machinename, style=style)
				sheet.write(row+2, 13, poll.role, style=style)
				sheet.write(row+2, 14, poll.model_name, style=style)
				sheet.write(row+2, 15, poll.s_no, style=style)
				sheet.write(row+2, 16, poll.processor, style=style)
				sheet.write(row+2, 17, poll.hdd, style=style)
				sheet.write(row+2, 18, poll.ram, style=style)
				sheet.write(row+2, 19, poll.os, style=style)
				sheet.write(row+2, 20, poll.warr_amc, style=style)
				sheet.write(row+2, 21, poll.warr_vend, style=style)
				sheet.write(row+2, 22, poll.warr_start_date, style=style)
				sheet.write(row+2, 23, poll.warr_exp_date, style=style)
				sheet.write(row+2, 24, poll.company, style=style)
				sheet.write(row+2, 25, poll.po_details, style=style)
				sheet.write(row+2, 26, poll.working, style=style)
				row = row+1




				

	# for row, rowdata in enumerate(values_list):
	#     for col, val in enumerate(rowdata):
	#         if isinstance(val, datetime):
	#             style = datetime_style
	#         elif isinstance(val, date):
	#             style = date_style
	#         else:
	#             style = default_style

	#         sheet.write(row+2, col, val, style=style)

	response = HttpResponse(mimetype='application/vnd.ms-excel')
	response['Content-Disposition'] = 'attachment; filename=example.xls'
	book.save(response)
	return response

@staff_member_required
def expfull(request):
	book = xlwt.Workbook(encoding='utf8')
	sheet = book.add_sheet('untitled')

	default_style = xlwt.Style.default_style
	datetime_style = xlwt.easyxf(num_format_str='dd/mm/yyyy hh:mm')
	date_style = xlwt.easyxf(num_format_str='dd/mm/yyyy')

	orderby = Poll.objects.order_by('id')
	sheet.write(1,0,"ID",style=default_style)
	sheet.write(1,1,"UID",style=default_style)
	sheet.write(1,2,"ASSET CODE",style=default_style)
	sheet.write(1,3,"ASSET CATEGORY",style=default_style)
	sheet.write(1,4,"region",style=default_style)
	sheet.write(1,5,"unit",style=default_style)
	sheet.write(1,6,"LOCATION",style=default_style)
	sheet.write(1,7,"FLOOR",style=default_style)
	sheet.write(1,8,"username",style=default_style)
	sheet.write(1,9,"EMPCODE",style=default_style)
	sheet.write(1,10,"DESIGNATION",style=default_style)
	sheet.write(1,11,"DEPARTMENT",style=default_style)
	sheet.write(1,12,"MACHINE NAME",style=default_style)
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
	sheet.write(1,26,"REQUIRED POWER",style=default_style)
	sheet.write(1,27,"ACTUAL POWER",style=default_style)
	sheet.write(1,28,"USER CRITICAL",style=default_style)
	sheet.write(1,29,"WEIGHT USER",style=default_style)
	sheet.write(1,30,"FALIURE RATE",style=default_style)
	sheet.write(1,31,"WEIGHT FALIURE",style=default_style)
	sheet.write(1,32,"AGENCY",style=default_style)
	sheet.write(1,33,"WEIGHT AGE",style=default_style)
	sheet.write(1,34,"POWER GAP RATING",style=default_style)
	sheet.write(1,35,"WEIGHT  COMPUTER",style=default_style)
	sheet.write(1,36,"RISK INDEX",style=default_style)
	sheet.write(1,37,"WORKING",style=default_style)

	if orderby:
		row=0
		for poll in orderby:
			style = default_style
			sheet.write(row+2, 0, poll.id, style=style)
			sheet.write(row+2, 1, poll.uid, style=style)
			sheet.write(row+2, 2, poll.asset_code, style=style)
			sheet.write(row+2, 3, poll.asset_category, style=style)
			sheet.write(row+2, 4, poll.region, style=style)
			sheet.write(row+2, 5, poll.unit, style=style)
			sheet.write(row+2, 6, poll.location, style=style)
			sheet.write(row+2, 7, poll.floor, style=style)
			sheet.write(row+2, 8, poll.username, style=style)
			sheet.write(row+2, 9, poll.empcode, style=style)
			sheet.write(row+2, 10, poll.designation, style=style)
			sheet.write(row+2, 11, poll.department, style=style)
			sheet.write(row+2, 12, poll.machinename, style=style)
			sheet.write(row+2, 13, poll.role, style=style)
			sheet.write(row+2, 14, poll.model_name, style=style)
			sheet.write(row+2, 15, poll.s_no, style=style)
			sheet.write(row+2, 16, poll.processor, style=style)
			sheet.write(row+2, 17, poll.hdd, style=style)
			sheet.write(row+2, 18, poll.ram, style=style)
			sheet.write(row+2, 19, poll.os, style=style)
			sheet.write(row+2, 20, poll.warr_amc, style=style)
			sheet.write(row+2, 21, poll.warr_vend, style=style)
			sheet.write(row+2, 22, poll.warr_start_date, style=style)
			sheet.write(row+2, 23, poll.warr_exp_date, style=style)
			sheet.write(row+2, 24, poll.company, style=style)
			sheet.write(row+2, 25, poll.po_details, style=style)
			sheet.write(row+2, 26, poll.required_power, style=style)
			sheet.write(row+2, 27, poll.actual_power, style=style)
			sheet.write(row+2, 28, poll.user_critical, style=style)
			sheet.write(row+2, 29, poll.weight_user, style=style)
			sheet.write(row+2, 30, poll.faliure_rate, style=style)
			sheet.write(row+2, 31, poll.weight_faliure, style=style)
			sheet.write(row+2, 32, poll.agency, style=style)
			sheet.write(row+2, 33, poll.weight_age, style=style)
			sheet.write(row+2, 34, poll.power_gap_rating, style=style)
			sheet.write(row+2, 35, poll.weight_computer, style=style)
			sheet.write(row+2, 36, poll.risk_index, style=style)
			sheet.write(row+2, 37, poll.working, style=style)
			row = row+1




				

	# for row, rowdata in enumerate(values_list):
	#     for col, val in enumerate(rowdata):
	#         if isinstance(val, datetime):
	#             style = datetime_style
	#         elif isinstance(val, date):
	#             style = date_style
	#         else:
	#             style = default_style

	#         sheet.write(row+2, col, val, style=style)

	response = HttpResponse(mimetype='application/vnd.ms-excel')
	response['Content-Disposition'] = 'attachment; filename=example.xls'
	book.save(response)
	return response


def searchoffline(request):
    query_string = ''
    found_entries = None
    if ('q' in request.GET) and request.GET['q'].strip():
        query_string = request.GET['q']

        
        entry_query = get_query(query_string, ['asset_code',])

        found_entries = Poll.objects.filter(entry_query)
    else:
    	found_entries = Poll.objects.order_by('id')
    return render_to_response('manager/viewofflinestock.html',
                          { 'query_string': query_string, 'found_entries': found_entries },
                          context_instance=RequestContext(request))

# def getpower(role, model_name, required_power, actual_power, user_critical, faliure_rate, agency, power_gap_rating, risk_index):
# 	mod_name = model_name
# 	required_power = 0
# 	actual_power = 0
# 	user_critical = 0
# 	faliure_rate = 0
# 	agency = 0
# 	power_gap_rating = 0
# 	risk_index = 0
# 	if role == 'DESIGNER':
# 		required_power = 7
# 		user_critical = 3

# 	elif role == 'DESK':
# 		required_power = 5
# 		user_critical = 3

# 	elif role == 'REPORTING':
# 		required_power = 1
# 		user_critical = 2

# 	elif role == 'PHOTO SECTION':
# 		required_power = 3
# 		user_critical = 2

# 	elif role == 'CREATIVE':
# 		required_power = 5
# 		user_critical = 3

# 	elif role == 'MIS':
# 		required_power = 3
# 		user_critical = 2

# 	elif role == 'MARKETING':
# 		required_power = 3
# 		user_critical = 3

# 	elif role == 'FEILD':
# 		required_power = 3
# 		user_critical = 3

# 	elif role == 'AD OPS-MM':
# 		required_power = 3
# 		user_critical = 3

# 	elif role == 'COMMERCIAL':
# 		required_power = 2
# 		user_critical = 2

# 	elif role == 'CIRCULATION':
# 		required_power = 2
# 		user_critical = 2

# 	elif role == 'FINANCE':
# 		required_power = 2
# 		user_critical = 2

# 	elif role == 'HR':
# 		required_power = 2
# 		user_critical = 2

# 	elif role == 'IT':
# 		required_power = 2
# 		user_critical = 2

# 	elif role == 'LT':
# 		required_power = 3
# 		user_critical = 3

# 	elif role == 'MINT':
# 		required_power = 3
# 		user_critical = 3

# 	elif role == 'OTHERS':
# 		required_power = 1
# 		user_critical = 1

# 	elif role == 'SUPPLY CHAIN':
# 		required_power = 2
# 		user_critical = 1

# 	elif role == 'PREE PRES':
# 		required_power = 3
# 		user_critical = 3

# 	elif role == 'MARKETING':
# 		required_power = 3
# 		user_critical = 2

# 	elif role == 'ADMIN':
# 		required_power = 1
# 		user_critical = 1

# 	elif role == 'SALES':
# 		required_power = 1
# 		user_critical = 2

# 	elif role == 'SALE BACKEND':
# 		required_power = 3
# 		user_critical = 2

# 	elif role == 'AD OPS':
# 		required_power = 2
# 		user_critical = 2

# 	elif role == 'IT STOCK - WORKING':
# 		required_power = 0
# 		user_critical = 0

# 	elif role == 'IT STOCK - JUNK':
# 		required_power = 0
# 		user_critical = 0

# 	elif role == 'IT STOCK - REPAIR':
# 		required_power = 0
# 		user_critical = 0

# 	elif role == 'SYNDICATION':
# 		required_power = 2
# 		user_critical = 3

# 	elif role == 'CALL CENTER':
# 		required_power = 2
# 		user_critical = 2

# 	else:
# 		required_power = None
# 		user_critical = None