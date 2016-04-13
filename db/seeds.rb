Aeroplane.destroy_all
a1 = Aeroplane.create :name => 'Boing070', :rows => '250', :columns => "12"
a2 = Aeroplane.create :name => 'A380', :rows => '20', :columns => '8'



Flight.destroy_all
f1 = Flight.create :origin => 'SSY', :destination => 'BNE', :date => '14 Apr 2016'
f2 = Flight.create :origin => 'MLB', :destination => 'MCY', :date => '19 Apr 2016'

a2.flights << f1
a1.flights << f2

Reservation.destroy_all




User.destroy_all
u1 = User.create :name => "Jon", :email => "jonathan@zombie.com", :password => "chicken", :admin => true
u2 = User.create :name => "okeh", :email => "okehguy@zombie.com", :password => "chicken"
