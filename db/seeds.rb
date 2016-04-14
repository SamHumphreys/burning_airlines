Aeroplane.destroy_all
a1 = Aeroplane.create :name => 'Boing070', :rows => '250', :columns => "12"
a2 = Aeroplane.create :name => 'A380', :rows => '20', :columns => '8'
a3 = Aeroplane.create :name => '717', :rows => '15', :columns => '4'



Flight.destroy_all
f1 = Flight.create :origin => 'SSY', :destination => 'BNE', :date => '14 Apr 2016'
f2 = Flight.create :origin => 'MLB', :destination => 'MCY', :date => '19 Apr 2016'
f3 = Flight.create :origin => 'DWN', :destination => 'PTH', :date => '19 Apr 2016'
f4 = Flight.create :origin => 'NCL', :destination => 'CBR', :date => '19 Apr 2016'

a1.flights << f1
a2.flights << f2
a3.flights << f3
a1.flights << f4


Reservation.destroy_all
r1 = Reservation.create :row => '2', :col =>'8'





User.destroy_all
u1 = User.create :name => "Jon", :email => "jonathan@zombie.com", :password => "chickenchicken", :admin => true
u2 = User.create :name => "okeh", :email => "okehguy@zombie.com", :password => "chickenchicken", :admin => false



u2.reservations << r1
f2.reservations << r1
