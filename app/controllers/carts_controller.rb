class CartsController < ApplicationController

    def show 
        render json: find_cart
    end

    private
    def find_cart
        cart = cart.find(params[:id])
    end
end
