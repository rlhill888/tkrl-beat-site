class CartBeatSerializer < ActiveModel::Serializer
  attributes :id, :music_file_type, :price
  has_one :cart
  has_one :beat
end
