class CartBeat < ApplicationRecord
  belongs_to :cart
  belongs_to :beat
  has_one :license
end
