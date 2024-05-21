from django.urls import path
from arsApp import views

urlpatterns = [
    path('', views.Home, name="Home"),
    path('todays-flights/', views.TodaysFlights, name="TodaysFlights"),
    path('flight-search/', views.FlightSearch, name="FlightSearch"),
    path('book-flight/', views.BookFlight, name="BookFlight"),
    path('my-bookings/', views.MyBookings, name="MyBookings"),
    path('flight-booking/', views.FlightBooking, name="FlightBooking"),
    path('login/', views.Login, name="Login"),
    path('signup/', views.Signup, name="Signup"),
    path('user-registration/', views.UserRegistration, name="UserRegistration"),
    path('member-login/', views.MemberLogin, name="MemberLogin"),
    path('user-logout/', views.UserLogout, name="UserLogout"),
    path('panel/<str:component>', views.Panel, name="Panel"),
    path('new-staff/', views.NewStaff, name="NewStaff"),
    path('manage-staff/', views.ManageStaff, name="ManageStaff"),
    path('update-staff/<int:id>', views.UpdateStaff, name="UpdateStaff"),
    path('new-flights/', views.NewFlights, name="NewFlights"),
    path('update-flights/', views.UpdateFlights, name="UpdateFlights"),
    path('update-flight/<int:id>', views.UpdateFlight, name="UpdateFlight"),
    path('book-flight-frec/<int:id>', views.UpdateFlight, name="BookFlightFRec"),
]