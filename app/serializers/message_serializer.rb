class MessageSerializer < ActiveModel::Serializer
  attributes :id, :subject, :body_message, :contact_phone_number, :contact_email
  has_one :user
end
