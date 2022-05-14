class StudioSessionsUser < ApplicationRecord
  belongs_to :user_id
  belongs_to :studio_session
end
