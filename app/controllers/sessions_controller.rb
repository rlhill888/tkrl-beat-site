class SessionsController < ApplicationController

    def login
        
        user = User.find_by(email: params[:email])
        
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: ['cart', 'cart.cart_beats', 'cart.cart_beats.beat',  'user_beats', 'user_beats.beat'], status: :ok
        else
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    def create_using_google_account
        acess_token = params[:accessToken]
        profile_obj= params[:profileObj]
        user = User.create_from_omniauth(profile_obj)

        # user.google_token = acess_token.credentials.token 


        # refresh_token = acess_token.credentials.refresh_token 
        # user.google_refresh_token = refresh_token if refresh_token.present?

        # user.save!

        session[:user_id] = user.id

        render json: user, include: ['cart', 'cart.cart_beats', 'cart.cart_beats.beat',  'user_beats', 'user_beats.beat'], status: :created
    end

    def logout
        session.delete :user_id
        head :no_content
    end
end
