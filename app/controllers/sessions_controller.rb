class SessionsController < ApplicationController

    def login
        
        user = User.find_by(email: params[:email])
        
        
        if user&.authenticate(params[:password])
        # if user
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end
end