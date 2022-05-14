class StudioSession < ApplicationRecord

    has_many :studio_session_carts
    has_many :studio_sessions_users

    has_many :carts, through: :studio_session_carts
    has_many :users, through: :studio_sessions_users
end
