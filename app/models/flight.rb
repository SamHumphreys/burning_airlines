class Flight < ActiveRecord::Base
  belongs_to :aeroplane
  has_many :reservations
end
