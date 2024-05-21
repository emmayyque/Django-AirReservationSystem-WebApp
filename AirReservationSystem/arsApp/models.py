from django.db import models

# Create your models here.
class Flights(models.Model):
    FlightNo = models.TextField(max_length=100)
    From = models.TextField(max_length=100)
    To = models.TextField(max_length=100)
    Departure = models.TimeField(max_length=100)
    Arrival = models.TimeField(max_length=100)
    FlightDate = models.DateField()
    Fare_Economy = models.CharField(max_length=100)
    Fare_Business = models.CharField(max_length=100)
    FlightStatus = models.CharField(max_length=1, default="Y")
    
    def __str__(self):
        return self.FlightNo
    
class Cities(models.Model):
    City = models.TextField(max_length=100)
    
    def __str__(self):
        return self.City
    
class Users(models.Model):
    Name = models.CharField(max_length=100)
    Username = models.CharField(max_length=50)
    Email = models.EmailField(max_length=100)
    Password = models.CharField(max_length=100)
    CNIC = models.CharField(max_length=100)
    Passport_Number = models.CharField(max_length=100)
    Role = models.CharField(max_length=10)
    
    def __str__(self):
        return self.Name

class Members(models.Model):
    Name = models.CharField(max_length=100)
    Username = models.CharField(max_length=50)
    Email = models.EmailField(max_length=100)
    Password = models.CharField(max_length=100)
    DOB = models.DateField(max_length=50)
    Address = models.CharField(max_length=200)
    Shift = models.CharField(max_length=20)
    Role = models.CharField(max_length=10)
    Joining_Date = models.DateField(max_length=20)
    
    def __str__(self):
        return self.Name
    
class Bookings(models.Model):
    Passenger_Name = models.CharField(max_length=100)
    Passport_Number = models.CharField(max_length=15)
    CNIC = models.CharField(max_length=100)
    From = models.CharField(max_length=100)
    To = models.CharField(max_length=100)
    Departure = models.DateField()
    Booked_By = models.CharField(max_length=50)
    Booking_Time = models.TimeField()
    
    def __str__(self):
        return self.Passenger_Name