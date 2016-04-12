# == Schema Information
#
# Table name: flights
#
#  id           :integer          not null, primary key
#  aeroplane_id :integer
#  origin       :string
#  destination  :string
#  date         :date
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Flight < ActiveRecord::Base
  belongs_to :aeroplane
  has_many :reservations
end
