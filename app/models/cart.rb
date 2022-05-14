class Cart < ApplicationRecord
  belongs_to :user

  has_many :cart_beats
  has_many :studio_session_carts

  has_many :beats, through: :cart_beats
  has_many :studio_sessions, through: :studio_session_carts
  has_many :licenses, through: :cart_beats
end
