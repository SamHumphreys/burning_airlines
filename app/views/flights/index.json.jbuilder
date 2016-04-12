json.array!(@flights) do |flight|
  json.extract! flight, :id, :aeroplane_id, :origin, :destination, :date
  json.url flight_url(flight, format: :json)
end
