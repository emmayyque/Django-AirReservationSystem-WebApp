from django.shortcuts import render
from django.http import HttpResponse
from .models import Flights, Cities, Users, Members, Bookings
from datetime import date, datetime

# Create your views here.
def Home(request):
    context = { 'name' : "Air Reservation System" }
    if request.session.get('username') != None:
        context['username'] = request.session.get('username')
        return render(request, 'index.html', context)
    
    return render(request, 'index.html', context)

def TodaysFlights(request):
    context = { 'name' : "Today's Flights" }
    todayDate = date.today()
    
    FlightsData = Flights.objects.filter(FlightDate=todayDate)
    for attr in FlightsData:
        tempTo = ""
        tempFrom = ""
        for i in attr.To:
            if (i == ","):
                break
            else:
                tempTo += i
        attr.To = tempTo    
        
        for i in attr.From:
            if (i == ","):
                break
            else:
                tempFrom += i
        attr.From = tempFrom   
        
        
        
    context['flights'] = FlightsData

    
    if request.session.get('username') != None:
        context['username'] = request.session.get('username')
        return render(request, "todays-flights.html", context)
    
    return render(request, "todays-flights.html", context)
    
def FlightSearch(request):
    context = { 'name' : "Flight Search" }

    CitiesData = Cities.objects.all()
    context['cities'] = CitiesData
    
    if request.session.get('username') != None:
        context['username'] = request.session.get('username')
    
    if request.method == "POST":
        # From Location
        fromLoc = request.POST.get('from')
        
        # To Location
        toLoc = request.POST.get('to')

        # Departure Date
        departure = request.POST.get('departure')
        dd = ""
        mm = ""
        yyyy = ""

        counter = 1
        for k in departure:
            if counter == 1:
                if k != "/":
                    mm += str(k)
                else:
                    counter += 1
            elif counter == 2:
                if k != "/":
                    dd += str(k)
                else:
                    counter += 1
            elif counter == 3:
                if k != "/":
                    yyyy += str(k)
                else:
                    counter += 1
                    
        formatted_date = yyyy + "-" + mm + "-" + dd 
        
        i = 1
        newDate = ""
        
        # for l in formatted_date:
        for l in range(0, len(str(formatted_date))-1):
            if l != 0:
                newDate +=  str(formatted_date[l])            
        
        FlightsData = Flights.objects.filter(From=fromLoc, To=toLoc, FlightDate=newDate)
        context['flights'] = FlightsData
        return render(request, "flight-search.html", context)
    
    return render(request, "flight-search.html", context)

# def FindFlight(request):
#     CitiesData = Cities.objects.all()
#     DataDict = { 'cities' : CitiesData,
#                 'name' : "Flight Search", 
#     }
#     if request.method == "POST":
#         fromLoc = request.POST.get('from')
#         toLoc = request.POST.get('to')
#         departure = request.POST.get('departure')
        
#         FlightsData = Flights.objects.filter(From=fromLoc, To=toLoc)
#         DataDict = { 'flights' : FlightsData,            
#                     'cities' : CitiesData,
#                     'name' : "Flight Search",
#         }
        
#     return render(request, "flight-search.html", DataDict)
    
def BookFlight(request):
    context = { 'name' : "Book Flight" }
    CitiesData = Cities.objects.all()
    context['cities'] = CitiesData
    
    if request.session.get("username") != None:
        context['username'] = request.session.get("username")
        return render(request, "book-flight.html", context)
        
    return render(request, "book-flight.html", context)

def MyBookings(request):
    context = { 'name' : "My Bookings" }
    username = request.session.get("username")
    bookings = Bookings.objects.filter(Booked_By = username)
    context['bookings'] = bookings
    context['username'] = username
    
    return render(request, "my-bookings.html", context)

def Login(request):
    context = { 'name' : "Login System" }
    return render(request, "login.html", context)

def Signup(request):
    context = { 'name' : "Signup System" }
    return render(request, "signup.html", context)

def MemberLogin(request):
    context = { 'name' : "Air Reservation System" }
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        
        user = Users.objects.filter(Username = username, Password = password)
        if user:
            for attr in user:
                request.session['username'] = attr.Username
            
            context['username'] = request.session.get('username')
            return render(request, "index.html", context)
        
        member = Members.objects.filter(Username = username, Password = password)
        if member:
            for attr in member:
                request.session['username'] = attr.Username
                request.session['role'] = attr.Role

            return HttpResponse(Panel(request, "dashboard"))
        
        context['message'] = 'Passport Number or Password is incorrect !!!'
        return render(request, "login.html", context)

def UserLogout(request):
    request.session.flush()
    
    return render(request, "index.html")
    
def UserRegistration(request):
    if request.method == "POST":
        FrmName = request.POST.get('name')
        FrmUsername = request.POST.get('username')
        FrmEmail = request.POST.get('email')
        FrmPassword = request.POST.get('password')
        FrmCNICNum = request.POST.get('cnicNum')
        FrmPassportNum = request.POST.get('passportNum')
        
        u = Users.objects.create(Name = FrmName, Username = FrmUsername, Email = FrmEmail, Password = FrmPassword, CNIC = FrmCNICNum, Passport_Number = FrmPassportNum, Role = "User")
        u.save()
        
        context = {
            'message' : 'User Registered Successfully !!!',
        }
        
        return render(request, "login.html", context)
    
def BookFlightFRec(request, id):
    context = { 'name' : "Book Flight" }
    
    fId = id
    strID = str(fId)
    flight = Flights.objects.filter(id = fId)
    context['flight'] = flight
    CitiesData = Cities.objects.all()
    context['cities'] = CitiesData
    
    
    
    return HttpResponse(Panel(request, "UpdateFlight"+strID))

def BookFlightFRec2(request, id):    
    if request.method == "POST":
        if request.session.get('username') == None:
            context = {
                'message' : 'Please Login in order to Book Flight !!!',
            }
            return render(request, "login.html", context)
        
        pname = request.POST.get('pname')
        passNum = request.POST.get('passNum')
        cnicNum = request.POST.get('cnicNum')
        fromLoc = request.POST.get('from')
        toLoc = request.POST.get('to')
        departure = request.POST.get('departure')
        bookedBy = request.session.get('username')
        bookingTime = datetime.now()

        # Departure Date
        dd = ""
        mm = ""
        yyyy = ""

        counter = 1
        for k in departure:
            if counter == 1:
                if k != "/":
                    mm += str(k)
                else:
                    counter += 1
            elif counter == 2:
                if k != "/":
                    dd += str(k)
                else:
                    counter += 1
            elif counter == 3:
                if k != "/":
                    yyyy += str(k)
                else:
                    counter += 1
                    
        formatted_date = yyyy + "-" + mm + "-" + dd 
        i = 1
        departure = ""
        # for l in formatted_date:
        for l in range(0, len(str(formatted_date))-1):
            if l != 0:
                departure +=  str(formatted_date[l])    
        
        b = Bookings.objects.create(Passenger_Name = pname, Passport_Number = passNum, CNIC = cnicNum, From = fromLoc, To = toLoc, Departure = departure, Booked_By = bookedBy, Booking_Time = bookingTime)
        b.save()
        
        context = {
            'message' : 'Your Flight is Booked !!!',
        }
        
        CitiesData = Cities.objects.all()
        context['cities'] = CitiesData
        
        return render(request, "book-flight.html", context)
    
def FlightBooking(request):    
    if request.method == "POST":
        if request.session.get('username') == None:
            context = {
                'message' : 'Please Login in order to Book Flight !!!',
            }
            return render(request, "login.html", context)
        
        pname = request.POST.get('pname')
        passNum = request.POST.get('passNum')
        cnicNum = request.POST.get('cnicNum')
        fromLoc = request.POST.get('from')
        toLoc = request.POST.get('to')
        departure = request.POST.get('departure')
        bookedBy = request.session.get('username')
        bookingTime = datetime.now()

        # Departure Date
        dd = ""
        mm = ""
        yyyy = ""

        counter = 1
        for k in departure:
            if counter == 1:
                if k != "/":
                    mm += str(k)
                else:
                    counter += 1
            elif counter == 2:
                if k != "/":
                    dd += str(k)
                else:
                    counter += 1
            elif counter == 3:
                if k != "/":
                    yyyy += str(k)
                else:
                    counter += 1
                    
        formatted_date = yyyy + "-" + mm + "-" + dd 
        i = 1
        departure = ""
        # for l in formatted_date:
        for l in range(0, len(str(formatted_date))-1):
            if l != 0:
                departure +=  str(formatted_date[l])    
        
        b = Bookings.objects.create(Passenger_Name = pname, Passport_Number = passNum, CNIC = cnicNum, From = fromLoc, To = toLoc, Departure = departure, Booked_By = bookedBy, Booking_Time = bookingTime)
        b.save()
        
        context = {
            'message' : 'Your Flight is Booked !!!',
        }
        
        CitiesData = Cities.objects.all()
        context['cities'] = CitiesData
        
        return render(request, "book-flight.html", context)
    
def Panel(request, component):
    context = { 'name' : 'Admin Panel' }
    context['time'] = datetime.now()
    context['username'] = request.session.get('username')
    context['role'] = request.session.get('role')
    context['component'] = component

    if component != "dashboard":
        if component == "NewStaff" or component == "ManageStaff" or component >= "Update Staff Details":
            context['header'] = "Member Area"
            if component == "ManageStaff":
                staff = Members.objects.filter(Role = "staff")
                context['staff'] = staff
            elif component >= "Update Staff Details":
                pId = ""
                for i, char in enumerate(component):
                    if i >= 20:
                        pId += str(char)
                context['component'] = "Update Staff Details"
                person = Members.objects.filter(id = int(pId))
                for attr in person:
                    attr.DOB = str(attr.DOB)
                context['person'] = person
        elif component == "NewFlights" or component == "UpdateFlights" or component >= "UpdateFlight":
            context['header'] = "Flight Area"
            if component == "NewFlights":
                cities = Cities.objects.all()
                context['cities'] = cities
            elif component == "UpdateFlights":
                curr_date  = date.today()
                flights = Flights.objects.filter(FlightDate__gt=curr_date)
                context['flights'] = flights
            elif component >= "UpdateFlight":
                fId = ""
                for i, char in enumerate(component):
                    if i >= 12:
                        fId += char
                context['component'] = "UpdateFlights"
                
                cities = Cities.objects.all()
                context['cities'] = cities
                
                curr_date  = date.today()
                flights = Flights.objects.filter(FlightDate__gt=curr_date)
                context['flights'] = flights
                
                upFlight = Flights.objects.filter(id = int(fId))
                
                for attr in upFlight:
                    attr.FlightDate = str(attr.FlightDate)
                    dTime = str(attr.Departure)
                    Departure = ""      
                    aTime = str(attr.Arrival)
                    Arrival = ""                        
                    for i, char in enumerate(dTime):
                        if i == 5:
                            break
                        else:
                            Departure += str(char)

                    for i, char in enumerate(aTime):
                        if i == 5:
                            break
                        else:
                            Arrival += str(char)     
                                               
                    attr.Departure = str(Departure)
                    attr.Arrival = str(Arrival)
                                
                context['upFlight'] = upFlight
        
    return render(request, "panel.html", context)

def NewStaff(request):    
    if request.method == "POST":
        fname = request.POST.get('fname')
        uname = request.POST.get('uname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        dob = request.POST.get('dob')
        address = request.POST.get('address')
        shift = request.POST.get('shift')
        
        u = Members.objects.create(Name = fname, Username = uname, Email = email, DOB = dob, Address = address, Shift = shift, Password = password, Role = "staff", Joining_Date = date.today())
        u.save()
        
        return HttpResponse(Panel(request, "ManageStaff"))
        
    return HttpResponse(Panel(request, "NewStaff"))

def ManageStaff(request):    
    return HttpResponse(Panel(request, "ManageStaff"))

def UpdateStaff(request, id):   
    if request.method == "POST":
        fname = request.POST.get('fname')
        uname = request.POST.get('uname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        dob = request.POST.get('dob')
        address = request.POST.get('address')
        shift = request.POST.get('shift')
        
        u = Members.objects.filter(id = id).update(Name = fname, Username = uname, Email = email, DOB = dob, Address = address, Shift = shift, Password = password)
        
        return HttpResponse(Panel(request, "ManageStaff"))
    strID = str(id) 
    return HttpResponse(Panel(request, "Update Staff Details"+strID))

def NewFlights(request):    
    return HttpResponse(Panel(request, "NewFlights"))

def UpdateFlights(request):       
    return HttpResponse(Panel(request, "UpdateFlights"))

def UpdateFlight(request, id):       
    if request.method == "POST":
        fNumber = request.POST.get('fNumber')
        fareEc = request.POST.get('fareEc')
        fareBc = request.POST.get('fareBc')
        fromLoc = request.POST.get('from')
        toLoc = request.POST.get('to')
        departure = request.POST.get('departure')
        dTime = request.POST.get('dTime')
        aTime = request.POST.get('aTime')
        status = request.POST.get('status')
        
        f = Flights.objects.filter(id = id).update(FlightNo = fNumber, To = toLoc, From = fromLoc, Departure = dTime, Arrival = aTime, FlightDate = departure, Fare_Business = fareBc, Fare_Economy = fareEc, Status = status)
        
        return HttpResponse(Panel(request, "UpdateFlights"))
        
    strID = str(id)
    return HttpResponse(Panel(request, "UpdateFlight"+strID))
