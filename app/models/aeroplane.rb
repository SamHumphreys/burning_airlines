# == Schema Information
#
# Table name: aeroplanes
#
#  id         :integer          not null, primary key
#  name       :string
#  rows       :string
#  columns    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Aeroplane < ActiveRecord::Base
  has_many :flights
end
