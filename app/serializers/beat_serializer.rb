class BeatSerializer < ActiveModel::Serializer
  attributes :id, :beat_name, :description, :mp3_price, :wav_price, :track_outs_price, :genre, :collaborators
end
