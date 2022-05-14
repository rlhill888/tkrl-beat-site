class UserBeat < ApplicationRecord
  belongs_to :beat
  belongs_to :user
  belongs_to :license
end
