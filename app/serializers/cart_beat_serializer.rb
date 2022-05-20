class CartBeatSerializer < ActiveModel::Serializer
  attributes :id, :music_file_type, :price, :license_id, :beat_id
  has_one :cart
  has_one :beat
end
