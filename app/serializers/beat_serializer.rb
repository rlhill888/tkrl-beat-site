class BeatSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  # attributes :id, :beat_name, :description, :mp3_price, :wav_price, :track_outs_price, :genre, :collaborators, :albumn_cover
  attributes :id, :beat_name, :description, :mp3_price, :wav_price, :track_outs_price, :genre, :collaborators, :albumn_cover, :current_deal_sale, :featured_beats, :sale_discount_percentage, :instruments, :sampled_beat, :sampled_beat_link, :mp3_file, :wav_file, :track_outs 


  


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

 def mp3_file
  if object.mp3_file.attached?
    {
      url: rails_blob_url(object.mp3_file, only_path: true)
    }
  else
    {
      url: 'no url'
    }
  end

  def wav_file
    if object.wav_file.attached?
      {
        url: rails_blob_url(object.wav_file, only_path: true)
      }
    else
      {
        url: 'no url'
      }
    end
   end

   def track_outs
    if object.track_outs.attached?
      {
        url: rails_blob_url(object.track_outs, only_path: true)
      }
    else
      {
        url: 'no url'
      }
    end
   end
 end




end
