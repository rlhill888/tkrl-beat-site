class UsersController < ApplicationController
    before_action :authorize_user
    skip_before_action :authorize_user, only: [:create]

    def create 
        user = User.create!(user_create_params)
        cart= Cart.create!(user_id: user.id)
        render json: user, include: ['cart', 'cart.cart_beats', 'cart.cart_beats.beat', 'user.user_beats', 'user_beats.beats'], status: :created
    end

    def show
        render json: current_user, include: ['cart', 'cart.cart_beats', 'cart.cart_beats.beat',  'user_beats', 'user_beats.beat'], status: :ok
    end

    private 

    def user_create_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
