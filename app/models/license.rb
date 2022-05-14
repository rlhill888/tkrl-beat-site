class License < ApplicationRecord

    has_many :license_beats
    has_many :user_beats
    has_many :cart_beats

    has_many :beats, through: :license_beats
    has_many :carts, through: :cart_beats
    has_many :users, through: :user_beats

end
