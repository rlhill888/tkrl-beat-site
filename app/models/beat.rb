class Beat < ApplicationRecord
    has_one_attached :albumn_cover
    has_one_attached :mp3_file
    has_one_attached :wav_file
    has_one_attached :track_outs

    has_many :license_beats
    has_many :user_beats
    has_many :cart_beats



    has_many :licenses, through: :license_beats
    has_many :users, through: :user_beats
    has_many :carts, through: :cart_beats
end
