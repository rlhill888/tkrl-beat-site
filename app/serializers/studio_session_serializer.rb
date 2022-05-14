class StudioSessionSerializer < ActiveModel::Serializer
  attributes :id, :hourly_price, :session_description, :session_request_description, :session_additional_notes, :session_time_minutes
end
