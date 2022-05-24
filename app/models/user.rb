class User < ApplicationRecord
    # devise :omniauthable, omniauth_providers: [:google_oauth2]

    has_secure_password
    # has_one_attached :avatar

    has_one :cart, dependent: :destroy

    has_many :studio_sessions_users
    has_many :user_beats, dependent: :destroy
    has_many :messages, dependent: :destroy


    has_many :studio_sessions, through: :studio_sessions_users
    has_many :licenses, through: :user_beats
    has_many :beats, through: :user_beats

    def self.create_from_omniauth(profile_obj)
        user = User.find_by(email: profile_obj[:email])
        random_number= rand.to_s
        if user
            return user
        else
            newUser= User.create(email: profile_obj[:email], first_name:  profile_obj[:givenName], last_name: profile_obj[:familyName], password: random_number) 
            cart= Cart.create!(user_id: newUser.id)
            return newUser
        end
    end

  

end
