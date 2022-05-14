class UserBeatSerializer < ActiveModel::Serializer
  attributes :id, :music_file_type
  has_one :beat
  has_one :user
  has_one :license
end
