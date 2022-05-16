class BeatSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  # attributes :id, :beat_name, :description, :mp3_price, :wav_price, :track_outs_price, :genre, :collaborators, :albumn_cover
  attributes :id, :beat_name, :albumn_cover

 def albumn_cover
  if object.albumn_cover.attached?
    {
      url: rails_blob_url(object.albumn_cover, only_path: true)
    }
  else
    {
      url: 'tkrl-beat-website/client/src/photos/tkrl_logo_jpeg.png'
    }
  end
 end
end
