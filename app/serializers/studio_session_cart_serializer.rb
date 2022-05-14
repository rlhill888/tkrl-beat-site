class StudioSessionCartSerializer < ActiveModel::Serializer
  attributes :id, :session_request_details, :session_time_requested_minutes, :price, :requested_date
  has_one :studio_session
  has_one :cart
end
