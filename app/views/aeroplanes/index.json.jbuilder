json.array!(@aeroplanes) do |aeroplane|
  json.extract! aeroplane, :id, :name, :rows, :columns
  json.url aeroplane_url(aeroplane, format: :json)
end
