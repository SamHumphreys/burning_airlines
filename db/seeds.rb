Aeroplane.destroy_all
a1 = Aeroplane.create :name => 'Boing070', :rows => '250', :columns => "12"
a2 = Aeroplane.create :name => 'A380', :rows => '20', :columns => '8'



Flight.destroy_all
f1 = Flight.create :origin => 'SSY', :destination => 'BNE', :date => '14 Apr 2016'

a2.flights << f1

Reservation.destroy_all




User.destroy_all
