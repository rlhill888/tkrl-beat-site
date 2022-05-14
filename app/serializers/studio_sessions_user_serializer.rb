class StudioSessionsUserSerializer < ActiveModel::Serializer
  attributes :id, :session_details, :session_time_minutes, :session_additional_notes, :session_request_details, :hourly_price, :completed, :full_price, :session_minutes, :session_date
  has_one :user_id
  has_one :studio_session
end
