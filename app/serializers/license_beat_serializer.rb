class LicenseBeatSerializer < ActiveModel::Serializer
  attributes :id
  has_one :beat
  has_one :license
end
