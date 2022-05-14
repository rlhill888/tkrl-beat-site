class User < ApplicationRecord

    has_one_attached :avatar

    has_one :cart

    has_many :studio_sessions_users
    has_many :user_beats


    has_many :studio_sessions, through: :studio_sessions_users
    has_many :licenses, through: :user_beats
    has_many :beats, through: :user_beats

end
